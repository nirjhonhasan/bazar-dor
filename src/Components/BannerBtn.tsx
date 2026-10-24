'use client';

import AllProducts from "./AllProducts";

const handleBannerBtn = ()=>{
    <AllProducts/>
}



const BannerBtn = () => {
    return (
        <div>
            <button onClick={()=>handleBannerBtn()}
                className='bg-[#008A45] hover:bg-[#007038] text-white font-medium px-6 py-2.5 rounded-lg shadow shadow-green-400 transition-0.5 duration-200'>
                সব পণ্য দেখুন
            </button>
        </div>
    );
};

export default BannerBtn;