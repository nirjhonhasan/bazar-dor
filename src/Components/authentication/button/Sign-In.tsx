import Link from 'next/link';


const SignIn = () => {
    return (
        <Link href="/sign-in">
            <button
            className='font-bold px-4 py-1 rounded cursor-pointer hover:text-green-800
            transition:100 duration-100'>সাইন ইন</button>
        </Link>
    );
};

export default SignIn;