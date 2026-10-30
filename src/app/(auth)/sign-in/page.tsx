"use client";

import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

const SignInPage = () => {


    const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target);


        const user = Object.fromEntries(formData.entries()) as {
            email: string;
            password: string;
        };


        const { data, error } = await authClient.signIn.email({
            ...user,
            callbackURL: '/'

        })
        toast.success('You are logged in successfully.')
    }


    return (
        <div className='flex flex-col text-center my-18 max-w-md mx-auto'>

            <h2 className='text-2xl font-bold'>সাইন ইন</h2>
            <p>বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।</p>
            <form onSubmit={onSubmit}
                className="bg-white flex flex-col border-base-300 rounded-box border p-6 my-8">

                <label className="label">Email</label>
                <input type="email" className="input w-full" placeholder="Email" name="email" />

                <label className="label mt-4">Password</label>
                <input type="password" className="input w-full" placeholder="Password" name="password" />

                <button type="submit" className="btn btn-neutral mt-6">Login</button>
            </form>
        </div>
    );
};

export default SignInPage;