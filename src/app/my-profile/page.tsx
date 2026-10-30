"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

interface UserType {
    id?: string;
    name?: string;
    email?: string;
    image?: string | null;
    [key: string]: unknown;
}

export default function MyProfile() {
    const router = useRouter();

    const { data: session, isPending } = authClient.useSession();

    if (isPending) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <span className="loading loading-spinner loading-lg text-success"></span>
            </div>
        );
    }

    if (!session?.user) {
        return null;
    }

    return (
        <ProfileForm
            key={session.user.id}
            user={session.user}
            router={router}
        />
    );
}

function ProfileForm({ 
    user, 
    router 
}: { 
    user: UserType; 
    router: ReturnType<typeof useRouter> 
}) {
    const [name, setName] = useState(user.name || "");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleUpdateName = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!name.trim()) {
            setMessage("নাম লিখুন");
            return;
        }

        setLoading(true);
        setMessage("");

        try {
            const { error } = await authClient.updateUser({
                name: name.trim(),
            });

            if (error) {
                setMessage(error.message || "নাম আপডেট করা যায়নি");
            } else {
                toast.success("Name has been changed successfully!");
                setMessage("আপনার নাম সফলভাবে আপডেট হয়েছে!");
            }
        } catch {
            setMessage("কিছু একটা সমস্যা হয়েছে");
        } finally {
            setLoading(false);
        }
    };

    const handleSignOut = async () => {
        await authClient.signOut();
        router.push("/sign-in");
        router.refresh();
    };

    return (
        <main className="min-h-screen bg-[#f5f6f4] py-12 px-4">
            <div className="max-w-4xl mx-auto">

                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">
                        আমার প্রোফাইল
                    </h1>
                    <p className="text-gray-500 mt-2">
                        আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
                    </p>
                </div>


                <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 mb-7">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">

                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-full bg-green-600 flex items-center justify-center text-white text-2xl font-bold">
                                {typeof user.name === 'string' ? user.name.charAt(0).toUpperCase() : "U"}
                            </div>

                            <div>
                                <h2 className="text-xl font-bold text-gray-800">
                                    {String(user.name || "")}
                                </h2>
                                <p className="text-gray-500 mt-1">
                                    {String(user.email || "")}
                                </p>
                            </div>
                        </div>

                        <button
                            onClick={handleSignOut}
                            className="btn btn-outline btn-error rounded-lg"
                        >
                            Sign Out
                        </button>
                    </div>
                </div>


                <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
                    <h2 className="text-xl font-bold text-gray-800 mb-6">
                        নাম হালনাগাদ করুন
                    </h2>

                    <form onSubmit={handleUpdateName}>
                        <label className="block text-gray-700 font-medium mb-3">
                            নাম
                        </label>

                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="আপনার নাম লিখুন"
                            className="input input-bordered w-full h-14 rounded-xl"
                        />

                        {message && (
                            <p className="mt-3 text-sm text-green-700">
                                {message}
                            </p>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="btn bg-green-600 hover:bg-green-700 text-white border-none rounded-lg mt-5"
                        >
                            {loading ? (
                                <span className="loading loading-spinner loading-sm"></span>
                            ) : (
                                "নাম হালনাগাদ করুন"
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
}