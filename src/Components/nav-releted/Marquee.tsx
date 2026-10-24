import Link from 'next/link';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';
import MarqueeText from 'react-marquee-text';

interface marQueePropsTypes {
  image: string;
  nameBn: string;
  id: number;
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
          return <Link href={`/${item.id}`} key={i} className='hover:text-gray-500'>

            <div className='flex items-center gap-2 mx-5 border-r border-gray-200 '>


              <span>{item.image}</span>
              <h2>{item.nameBn}</h2>


              <div className='flex items-center text-2xl pr-5'>

                {
                  item.change.dir === "up" ? <FaCaretUp className='text-red-500 text-3xl' /> : <FaCaretDown className='text-green-800' />
                }

                {
                  item.change.dir === "up" ? (<span className='text-red-500'>{item.change.pct}</span>

                  ) : (
                    <span className='text-green-800'>{item.change.pct}</span>)
                }

              </div>


            </div>

          </Link>


        })
      }
    </MarqueeText>


  );
};

export default Marquee;