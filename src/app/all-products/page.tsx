import ItemCard from "../../Components/ItemCard";

const AllProducts = async () => {

    const res = await fetch('https://openapi.programming-hero.com/api/bazardor/products');
    const allProducts = await res.json();

    return (
        <div className="container mx-auto">

            <div className="py-4">
                <h2 className="mt-10 text-2xl font-bold ">সব পণ্য</h2>
                <p className="text-md text-gray-400">মোট {allProducts.length.toLocaleString('bn-BD')}টি পণ্য দেখানো হচ্ছে</p>
            </div>

            <div className="grid grid-cols-3 gap-6">

                {
                    allProducts.map((item) => {
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