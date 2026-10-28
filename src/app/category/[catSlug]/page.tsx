import ItemCard from "@/Components/ItemCard";
import ProductType from "@/Types/ProductType";


interface PageProps {
    params: Promise<{
        catSlug: string;
    }>;
}

const page = async ({ params }: PageProps) => {

    const { catSlug } = await params;

    const res = await fetch(`https://openapi.programming-hero.com/api/bazardor/products?category=${catSlug}`);
    const catData = await res.json();

    console.log(catData);



    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6 capitalize text-gray-800">
                ক্যাটাগরি: {catSlug}
            </h1>


            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {catData.map((item:ProductType) => (
                    <ItemCard key={item.id} item={item} />
                ))}
            </div>
            
        </div>
    );
};

export default page;