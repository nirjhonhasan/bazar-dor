import Link from 'next/link';
import React from 'react';

// টাইপস্ক্রিপ্ট ইন্টারফেস
interface ItemCardProps {
  item: {
    id: number;
    nameBn: string;
    image: string;
    unit: string;
    today: number;
    change: {
      dir: string;
      pct: number;
    };
  };
}

const ItemCard = ({ item }: ItemCardProps) => {


  const isUp = item?.change?.dir === "up";

  return (

    <Link href={`/${item.id}`}>
      <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
        {/* ওপরের অংশ: আইকন এবং নাম */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-2xl">
            {item?.image}
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800">{item?.nameBn}</h3>
            <p className="text-xs text-gray-500">
              প্রতি {item?.unit === 'kg' ? 'কেজি' : item?.unit}
            </p>
          </div>
        </div>

        {/* নিচের অংশ: আজকের দাম এবং পরিবর্তন */}
        <div className="flex justify-between items-end">
          <div>
            <span className="text-xs text-gray-500 block mb-0.5">আজকের দাম</span>
            <div className="text-2xl font-extrabold text-gray-900">
              {item?.today} <span className="text-base font-normal text-gray-600">টাকা</span>
            </div>
          </div>

          {/* পার্সেন্টেজ ব্যাজ */}
          <div className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${isUp ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'
            }`}>
            <span>{isUp ? '▲' : '▼'}</span>
            <span>{item?.change?.pct}%</span>
          </div>
        </div>
      </div>
    </Link>

  );
};

export default ItemCard;