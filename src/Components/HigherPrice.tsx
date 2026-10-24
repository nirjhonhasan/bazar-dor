import { FaCaretUp } from "react-icons/fa";
import ItemCard from '@/Components/ItemCard'

const HigherPrice = async () => {

    const res = await fetch('https://openapi.programming-hero.com/api/bazardor/products');
    const higherPrice = await res.json();

    const filteredItems = higherPrice.filter((item) => item?.change?.dir === "up");
    const sortedItems = filteredItems.sort((a, b) => b.change.pct - a.change.pct);

    return (
        <div className="container mx-auto">
            <div className="flex items-center py-2 text-red-500 font-bold">
                <FaCaretUp className="text-3xl"/>
                <h2 className="text-xl text-black">আজ দাম বেড়েছে</h2>
            </div>

            <div className="grid grid-cols-3 gap-4">
                {
                    sortedItems.slice(0, 6).map((shortedItem) => {

                        return <div key={shortedItem.id}>
                            <ItemCard item={shortedItem} />

                        </div>
                    })
                }
            </div>

        </div>
    );
};

export default HigherPrice;