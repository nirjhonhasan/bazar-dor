import { FaCaretDown} from "react-icons/fa";
import ItemCard from '@/Components/ItemCard'
import ProductType from "@/Types/ProductType";

const LowerPrice = async () => {

    const res = await fetch('https://openapi.programming-hero.com/api/bazardor/products');
    const higherPrice = await res.json();

    const filteredItems = higherPrice.filter((item:ProductType) => item?.change?.dir === "down");
    const sortedItems = filteredItems.sort((a:ProductType, b:ProductType) => a.change.pct - b.change.pct);

    return (
        <div className="container mx-auto">
            <div className="flex items-center py-2 text-green-700 font-bold mt-8">
                <FaCaretDown className="text-3xl"/>
                <h2 className="text-xl text-black">আজ দাম কমেছে</h2>
            </div>

            <div className="grid grid-cols-3 gap-4">
                {
                    sortedItems.slice(0, 6).map((shortedItem:ProductType) => {

                        return <div key={shortedItem.id}>
                            <ItemCard item={shortedItem} />

                        </div>
                    })
                }
            </div>

        </div>
    );
};

export default LowerPrice;