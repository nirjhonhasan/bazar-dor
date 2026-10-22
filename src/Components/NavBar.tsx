import Image from "next/image";

const NavBar = () => {
    return (
        <div className="container mx-auto py-5">

            <div className="flex justify-between items-center">

                <div className="flex items-center gap-3">
                    <Image
                        height={40}
                        width={80}
                        src='/cartLogo.png'
                        alt="Bazar Dor"
                        className="bg-green-800 rounded w-12 h-12 p-2"
                    />
                    <div>
                        <h2 className="text-3xl font-bold">বাজার দর</h2>
                        <p className="text-gray-500 font-semibold">এখানে তারিখ হবে</p>
                    </div>
                </div>

                <div>
                    Profile
                </div>

            </div>


            {/* এখান থেকে ক্যাটাগরি এর সেকশন শুরু হবে  */}
            {/* এখান থেকে ক্যাটাগরি এর সেকশন শুরু হবে  */}
            {/* এখান থেকে ক্যাটাগরি এর সেকশন শুরু হবে  */}
            

        </div>
    );
};

export default NavBar;