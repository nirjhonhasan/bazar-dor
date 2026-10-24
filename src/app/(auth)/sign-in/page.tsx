import React from 'react';

const SignInPage = () => {
    return (
        <div className='flex flex-col mx-auto text-center'>

            <h2 className='text-2xl font-bold'>সাইন ইন</h2>
            <p>বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।</p>
            <form className="bg-white flex flex-col border-base-300 rounded-box border p-4">

                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" />

                <label className="label">Password</label>
                <input type="password" className="input" placeholder="Password" />

                <button className="btn btn-neutral mt-4">Login</button>
            </form>
        </div>
    );
};

export default SignInPage;