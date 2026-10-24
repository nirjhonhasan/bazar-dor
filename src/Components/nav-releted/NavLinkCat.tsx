import navCatTypes from '@/Types/NavCatTypes';
import Link from 'next/link';

const NavLinkCat = async () => {

    const res = await fetch('https://openapi.programming-hero.com/api/bazardor/categories', { next: { revalidate: 3600 } })
    const navCatData = await res.json();

    return (
        <div className='bg-white border border-gray-100 '>
            
            <div className="flex justify-start gap-6 py-3 container mx-auto">
                {
                    navCatData.map((catItem:navCatTypes) => {
                        return <div key={`${catItem.slug}`}>
                            <Link href={`/category/${catItem.slug}`}>
                                <h2 className='hover:text-black/80 font-semibold'>
                                    <span className="mr-2">
                                        {catItem.icon}
                                    </span>
                                    {catItem.nameBn}
                                </h2>
                            </Link>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default NavLinkCat;