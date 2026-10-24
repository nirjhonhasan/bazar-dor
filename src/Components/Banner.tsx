import DateHunter from '@/Components/DateHunter';
import Image from 'next/image';
import BannerBtn from './BannerBtn';
import Link from 'next/link';

const Banner = () => {
  return (
    <div className='container mx-auto my-10 p-8 bg-white rounded-3xl flex justify-between items-center shadow-sm'>
      <div className='max-w-2xl space-y-4'>

        <div className='inline-block bg-[#E3F5E1] text-[#2E7D32] px-4 py-1 rounded-full text-sm font-medium'>
          <DateHunter />
        </div>


        <h1 className='text-3xl md:text-4xl font-extrabold text-gray-900 '>
          আজকের বাজারের দাম এক নজরে
        </h1>


        <p className='text-gray-600 text-sm md:text-base'>
          চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, <br /> সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
        </p>


        <div>
          <Link href='/all-products'
                className='bg-[#008A45] hover:bg-[#007038] text-white font-medium px-6 py-2.5 rounded-lg shadow shadow-green-400 transition-all duration-200'>
                সব পণ্য দেখুন
            </Link>
        </div>
      </div>


      <div className='hidden md:block'>
        <Image
          src='/bazar-hero.png'
          height={300}
          width={350}
          alt='Bazar Dor'
        />
      </div>
    </div>
  );
};

export default Banner;