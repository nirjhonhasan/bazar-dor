import Link from 'next/link';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SignUpPage = () => {
    return (
        <div className='flex flex-col mx-auto text-center'>

            <h2 className='text-2xl font-bold mt-5'>অ্যাকাউন্ট তৈরি করুন</h2>
            <p className='pb-5 text-gray-500'>বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।</p>

            <div className='bg-white border-base-300 rounded-box border p-5'>
                <form className=" flex flex-col p-4">

                    <label className="label text-black">নাম</label>
                    <input type="text" className="input" placeholder="Name" />

                    <label className="label mt-5 text-black">ইমেইল</label>
                    <input type="email" className="input" placeholder="Email" />


                    <label className="label mt-5 text-black">পাসওয়ার্ড</label>
                    <input type="password" className="input" placeholder="Password" />

                    <label className="label mt-5 text-black">পাসওয়ার্ড নিশ্চিত করুন</label>
                    <input type="password" className="input" placeholder="Password" />

                    <button className="btn submit bg-green-800 text-white font-bold mt-4">অ্যাকাউন্ট তৈরি করুন</button>
                </form>

                <div className="divider">অথবা</div>

                <div className='flex items-center gap-3'>
                <Link  href='' className='flex gap-0.5 items-center border border-gray-300 rounded-full px-2 py-1 hover:bg-gray-50'>
                    <FcGoogle/>
                    <button> Google দিয়ে চালিয়ে যান</button>
                </Link>
                <Link href='' className='flex items-center gap-0.5 border border-gray-300 rounded-full px-2 py-1 hover:bg-gray-50'>
                    <FaGithub />
                    <button> GitHub দিয়ে চালিয়ে যান</button>
                </Link>
                </div>

            </div>

            <Link href='/' className='text-gray-500 pt-10'>← হোম পেজে ফিরে যান</Link>


            

        </div>
    );
};

export default SignUpPage;