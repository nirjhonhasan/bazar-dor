import React from 'react';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';
import MarqueeText from 'react-marquee-text';

interface marQueePropsTypes {
  image: string;
  nameBn: string;
  change: {
    dir: string;
    pct: number;
  };
}

const Marquee = async () => {

  const res = await fetch('https://openapi.programming-hero.com/api/bazardor/products')
  const marqueeData = await res.json();

  return (
    
    <MarqueeText direction='right' pauseOnHover={true} duration={20} className='text-xl py-1 bg-white cursor-pointer'>
      {
        marqueeData.map((item: marQueePropsTypes, i: number) => {
          return <div key={i} className='flex items-center gap-2 mx-5 border-r border-gray-200 '>


            <span>{item.image}</span>
            <h2>{item.nameBn}</h2>
            <p className='flex items-center text-2xl pr-5'>
              {
                item.change.dir === "up" ? <FaCaretUp className='text-red-500 text-3xl' /> : <FaCaretDown className='text-green-800' />
              }

              {
                item.change.dir === "up" ? <h2 className='text-red-500'>{item.change.pct}</h2> : <h2 className='text-green-800'>{item.change.pct}</h2>
              }
            </p>


          </div>

        })
      }
    </MarqueeText>


  );
};

export default Marquee;