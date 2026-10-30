"use client";

import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { redirect, useRouter } from 'next/navigation';
import toast, { ToastBar } from 'react-hot-toast';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';


const SignUpPage = () => {
    const router = useRouter();

    const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target);


        const user = Object.fromEntries(formData.entries()) as {
            name: string;
            email: string;
            password: string;
            confirmPassword: string;
        };


        if (user.password !== user.confirmPassword) {
            toast.error("পাসওয়ার্ড দুটি মিলছে না!");
            return;
        }

        const { data, error } = await authClient.signUp.email({
            ...user,
            callbackURL: '/'

        })

        if (data) {
            router.push("/")
        }

        toast.success('Sign up successfull !');
    }



    const signUpWithGoogle = async () => {
        const {data, error} = await authClient.signIn.social({
            provider: "google",
        });

        if (data) toast.success("Login with Goggle is successfull");
        if (error) {
            toast.error(error?.message || "Google sign-in failed!");
            return;
        }
    };


    const signUpWithGitHub = async () => {
        const { data, error } = await authClient.signIn.social({
            provider: "github",
            callbackURL: "/",
        });

        if(data) toast.success("Login with Github is Successfull");

        if (error) {
            toast.error(error.message || "GitHub sign-in failed!");
            return;
        }
    };





    return (
        <div className='flex flex-col max-w-md mx-auto py-8 text-center'>

            <h2 className='text-2xl font-bold mt-5'>অ্যাকাউন্ট তৈরি করুন</h2>
            <p className='pb-5 text-gray-500'>বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।</p>

            <div className='bg-white border-base-300 rounded-box border p-5'>
                <form onSubmit={onSubmit}
                    className=" flex flex-col p-4">

                    <label className="label text-black">নাম</label>
                    <input type="text" className="input w-full" placeholder="Name" name="name"/>

                    <label className="label mt-5 text-black">ইমেইল</label>
                    <input type="email" className="input w-full" placeholder="Email" name="email" />


                    <label className="label mt-5 text-black">পাসওয়ার্ড</label>
                    <input type="password" className="input w-full" placeholder="Password" name="password" />

                    <label className="label mt-5 text-black">পাসওয়ার্ড নিশ্চিত করুন</label>
                    <input type="password" className="input w-full" placeholder="Confirm Password" name="confirmPassword" />

                    <button className="btn submit bg-green-800 text-white font-bold mt-4">অ্যাকাউন্ট তৈরি করুন</button>
                </form>

                <div className="divider">অথবা</div>


                <div className='flex items-center gap-3'>
                    <Link onClick={signUpWithGoogle}
                        href='' className='flex gap-0.5 items-center border border-gray-300 rounded-full px-2 py-1 hover:bg-gray-50'>
                        <FcGoogle />
                        <button> Google দিয়ে চালিয়ে যান</button>
                    </Link>
                    <Link onClick={signUpWithGitHub}
                        href='' className='flex items-center gap-0.5 border border-gray-300 rounded-full px-2 py-1 hover:bg-gray-50'>
                        <FaGithub />
                        <button type='submit'> GitHub দিয়ে চালিয়ে যান</button>
                    </Link>
                </div>

            </div>

            <Link href='/' className='text-gray-500 pt-10'>← হোম পেজে ফিরে যান</Link>




        </div>
    );
};

export default SignUpPage;