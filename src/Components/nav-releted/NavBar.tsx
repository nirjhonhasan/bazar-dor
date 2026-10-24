import Image from "next/image";
import DateHunter from '@/Components/DateHunter'
import SignIn from "../authentication/button/Sign-In";
import SignUp from "../authentication/button/Sign-up";
import Link from "next/link";

const NavBar = () => {



    return (
        <div className="container mx-auto py-5">

            <div className="flex justify-between items-center">

                <Link href='/' className="flex items-center gap-3">
                    <Image
                        height={40}
                        width={80}
                        src='/cartLogo.png'
                        alt="Bazar Dor"
                        className="bg-green-800 rounded w-12 h-12 p-2"
                    />
                    <div>
                        <h2 className="text-3xl font-bold">বাজার দর</h2>
                        <h2 className="text-gray-500 font-semibold"><DateHunter/></h2>
                    </div>
                </Link>

                <div className="flex items-center gap-3">
                    <SignIn/>
                    <SignUp/>
                </div>

            </div>


        

        </div>
    );
};

export default NavBar;