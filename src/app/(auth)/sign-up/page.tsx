"use client";

import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
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
            alert("পাসওয়ার্ড দুটি মিলছে না!");
            return;
        }

        const { data, error } = await authClient.signUp.email({
            ...user,
            callbackURL: '/'

        })

        if (data) {
            router.push("/")
        }

        console.log(data, error);
    }




    return (
        <div className='flex flex-col mx-auto text-center'>

            <h2 className='text-2xl font-bold mt-5'>অ্যাকাউন্ট তৈরি করুন</h2>
            <p className='pb-5 text-gray-500'>বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।</p>

            <div className='bg-white border-base-300 rounded-box border p-5'>
                <form onSubmit={onSubmit}
                    className=" flex flex-col p-4">

                    <label className="label text-black">নাম</label>
                    <input type="text" className="input" placeholder="Name" name="name" />

                    <label className="label mt-5 text-black">ইমেইল</label>
                    <input type="email" className="input" placeholder="Email" name="email" />


                    <label className="label mt-5 text-black">পাসওয়ার্ড</label>
                    <input type="password" className="input" placeholder="Password" name="password" />

                    <label className="label mt-5 text-black">পাসওয়ার্ড নিশ্চিত করুন</label>
                    <input type="password" className="input" placeholder="Confirm Password" name="confirmPassword" />

                    <button className="btn submit bg-green-800 text-white font-bold mt-4">অ্যাকাউন্ট তৈরি করুন</button>
                </form>

                <div className="divider">অথবা</div>

                <div className='flex items-center gap-3'>
                    <Link href='' className='flex gap-0.5 items-center border border-gray-300 rounded-full px-2 py-1 hover:bg-gray-50'>
                        <FcGoogle />
                        <button> Google দিয়ে চালিয়ে যান</button>
                    </Link>
                    <Link href='' className='flex items-center gap-0.5 border border-gray-300 rounded-full px-2 py-1 hover:bg-gray-50'>
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