import Link from 'next/link';
import React from 'react';

const SignUp = () => {
    return (
        <Link href='/sign-up'>
            <button className='bg-green-800 text-white font-bold px-4 py-1 rounded hover:bg-green-700 
            cursor-pointer transition:50 duration-100'>সাইন আপ</button>
        </Link>
    );
};

export default SignUp;