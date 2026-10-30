'use client'

import { useEffect, useState, use } from "react";
import ItemCard from "@/Components/ItemCard";
import ProductType from "@/Types/ProductType";

interface PageProps {
    params: Promise<{
        catSlug: string;
    }>;
}

const Page = ({ params }: PageProps) => {

    const { catSlug } = use(params);

    const [products, setProducts] = useState<ProductType[]>([]);
    const [sortOrder, setSortOrder] = useState<string>('Default');


    
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`https://openapi.programming-hero.com/api/bazardor/products?category=${catSlug}`);
            const data = await res.json();
            
            setProducts(data);
        };
        fetchData();
    }, [catSlug]);


    

    const sortedItems = [...products].sort((a: ProductType, b: ProductType) => {
        if (sortOrder === 'দাম কম থেকে বেশি') {
            return a.today - b.today; 
        } else if (sortOrder === 'দাম বেশি থেকে কম') {
            return b.today - a.today;
        } else {
            return 0; 
        }
    });


    
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
                <h1 className="text-2xl font-bold capitalize text-gray-800">
                    ক্যাটাগরি: {catSlug}
                </h1>




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

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {
                    sortedItems.map((item: ProductType) => (
                        <ItemCard key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    );
};

export default Page;