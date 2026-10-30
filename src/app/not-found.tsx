import Link from "next/link";

export default function NotFound() {
    return (
        <main className="min-h-screen bg-[#f5f6f4] flex items-center justify-center px-4 py-12">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-sm p-8 text-center">
                
                {/* 404 Icon / Badge */}
                <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6">
                    404
                </div>

                {/* Heading */}
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                    পেজটি পাওয়া যায়নি!
                </h1>

                {/* Description */}
                <p className="text-gray-500 mb-8 leading-relaxed">
                    আপনি যে পেজটি খুঁজছেন তা হয়তো মুছে ফেলা হয়েছে অথবা ঠিকানাটি ভুল ছিল। বাজার দরের মূল পাতায় ফিরে যান।
                </p>

                {/* Action Button */}
                <Link
                    href="/"
                    className="btn bg-green-600 hover:bg-green-700 text-white border-none w-full rounded-xl h-12 text-base shadow-sm"
                >
                    হোম পেজে ফিরে যান
                </Link>
            </div>
        </main>
    );
}