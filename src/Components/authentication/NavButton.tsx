"use client";

import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import DropDown from "@/Components/DropDown"



const NavButton = () => {

    const { data: session } = authClient.useSession();
    const user = session?.user;


    return (
        <div>

            {
                user ?
                   <DropDown/>
                    :

                    <div>
                        <Link href="/sign-in">
                            <button
                                className='font-bold px-4 py-1 rounded cursor-pointer hover:text-green-800
            transition:100 duration-100'>সাইন ইন</button>
                        </Link>

                        <Link href='/sign-up'>
                            <button className='bg-green-800 text-white font-bold px-4 py-1 rounded hover:bg-green-700 
            cursor-pointer transition:50 duration-100'>সাইন আপ</button>
                        </Link>
                    </div>
            }





        </div>
    );
};

export default NavButton;