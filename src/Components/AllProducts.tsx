"use client"

import ProductType from "@/Types/ProductType";
import ItemCard from "./ItemCard";
import { useEffect, useState } from "react";


const AllProducts = () => {

    const [products, setProducts] = useState<ProductType[]>([]);
    const [sortOrder, setSortOrder] = useState<string>('Default');

    // const res = fetch('https://openapi.programming-hero.com/api/bazardor/products');

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('https://openapi.programming-hero.com/api/bazardor/products');
            const allProducts = await res.json();
            setProducts(allProducts);
        };
        fetchData();
    }, []);



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
        <div className="container mx-auto">
        <div className="flex justify-between items-center">
            <div className="flex justify-between items-center">
                <div className="py-4">
                    <h2 className="mt-10 text-2xl font-bold ">সব পণ্য</h2>
                    <p className="text-md text-gray-400">মোট {sortedItems.length.toLocaleString('bn-BD')}টি পণ্য দেখানো হচ্ছে</p>
                </div>
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

            <div className="grid grid-cols-3 gap-6">

                {
                    sortedItems.map((item: ProductType) => {
                        return <div key={item.id}>
                            <ItemCard item={item} />
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default AllProducts;