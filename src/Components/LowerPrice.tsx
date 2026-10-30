'use client'

import { useEffect, useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import ItemCard from '@/Components/ItemCard';
import ProductType from "@/Types/ProductType";

const LowerPrice = () => {
    const [products, setProducts] = useState<ProductType[]>([]);
    const [sortOrder, setSortOrder] = useState<string>('Default'); 



    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('https://openapi.programming-hero.com/api/bazardor/products');
            const data = await res.json();
            const filteredItems = data.filter((item: ProductType) => item?.change?.dir === "down");
            setProducts(filteredItems);
        };
        fetchData();
    }, []);


    const slicedProducts = products.slice(0, 6);

    const sortedItems = [...slicedProducts].sort((a: ProductType, b: ProductType) => {
        if (sortOrder === 'দাম কম থেকে বেশি') {
            return a.today - b.today;
        } else if (sortOrder === 'দাম বেশি থেকে কম') {
            return b.today - a.today;
        } else {
            return 0; 
        }
    });

    return (
        <div className="container mx-auto">
            <div className="flex items-center justify-between py-2 text-green-700 font-bold mt-8">
                <div className="flex items-center">
                    <FaCaretDown className="text-3xl" />
                    <h2 className="text-xl text-black">আজ দাম কমেছে</h2>
                </div>




                <select 
                    value={sortOrder} 
                    onChange={(e) => setSortOrder(e.target.value)}
                    className="select select-success text-black text-sm"
                >
                    <option disabled={true}>Pick a Runtime</option>
                    <option>Default</option>
                    <option>দাম কম থেকে বেশি</option>
                    <option>দাম বেশি থেকে কম</option>
                </select>
            </div>




            <div className="grid grid-cols-3 gap-4 mt-4">
                {
                    sortedItems.slice(0, 6).map((shortedItem: ProductType) => (
                        <div key={shortedItem.id}>
                            <ItemCard item={shortedItem} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default LowerPrice;