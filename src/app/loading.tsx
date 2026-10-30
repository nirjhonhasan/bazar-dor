import React from 'react';

const loading = () => {

    return (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-green-50">

            {/* Green Spinner */}
            <span className="loading loading-spinner loading-lg text-green-700 scale-150"></span>

            <h2 className="mt-8 text-2xl font-bold text-green-800">
                বাজার দর
            </h2>

            <p className="mt-2 text-sm text-gray-500">
                একটু অপেক্ষা করুন...
            </p>

        </div>
    );
}

export default loading;