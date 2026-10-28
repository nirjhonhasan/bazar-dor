import MarketType from '@/Types/MarketType';


interface PageProps {
    params: Promise<{
        productId: string;
    }>;
}

const ProductDetailsPage = async ({ params }: PageProps) => {
    const { productId } = await params;

    const res = await fetch(`https://openapi.programming-hero.com/api/bazardor/products/${productId}`);
    const itemDetails = await res.json();

    return (
        <div className="container mx-auto px-4 py-8 max-w-6xl">



            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col md:flex-row justify-between items-center mb-8">
                <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center text-3xl">
                        {itemDetails.image}
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">{itemDetails.nameBn}</h1>
                        <p className="text-sm text-gray-500 mt-0.5">প্রতি {itemDetails.unit} - {itemDetails.categoryNameBn}</p>
                        <p className="text-xs text-gray-500 mt-1">
                            গতকালের তুলনায় আজ দাম <span className={itemDetails.change?.dir === 'up' ? 'text-red-500 font-medium' : 'text-green-500 font-medium'}>
                                {itemDetails.change?.dir === 'up' ? 'বেড়েছে' : 'কমেছে'}
                            </span>
                        </p>
                    </div>
                </div>



                <div className="mt-4 md:mt-0 bg-gray-50 border border-gray-100 rounded-xl px-6 py-3 text-center">
                    <span className="text-xs text-gray-500 block">আজকের দাম</span>
                    <span className="text-2xl font-bold text-gray-800">{itemDetails.today}</span>
                    <span className="text-xs text-gray-500 block">টাকা / {itemDetails.unit}</span>
                    <span className={`text-xs font-semibold mt-1 inline-block ${itemDetails.change?.dir === 'up' ? 'text-red-500' : 'text-green-500'}`}>
                        {itemDetails.change?.dir === 'up' ? '▲' : '▼'} {itemDetails.change?.pct}%
                    </span>
                </div>
            </div>



            <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-800 mb-4">দামের সারসংক্ষেপ</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                        <span className="text-xs text-gray-500">সর্বনিম্ন দাম</span>
                        <div className="text-xl font-bold text-green-600 mt-1">
                            {Math.min(...itemDetails.markets.map((m: MarketType) => m.min))} টাকা
                        </div>
                        <span className="text-xs text-gray-400 mt-1 block">সবচেয়ে কম দামের বাজার</span>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                        <span className="text-xs text-gray-500">সর্বাধিক দাম</span>
                        <div className="text-xl font-bold text-red-500 mt-1">
                            {Math.max(...itemDetails.markets.map((m: MarketType) => m.max))} টাকা
                        </div>
                        <span className="text-xs text-gray-400 mt-1 block">সবচেয়ে বেশি দামের বাজার</span>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                        <span className="text-xs text-gray-500">গড় দাম</span>
                        <div className="text-xl font-bold text-gray-800 mt-1">
                            {itemDetails.today} টাকা
                        </div>
                        <span className="text-xs text-gray-400 mt-1 block">প্রতি কেজি-এর হিসাবে</span>
                    </div>
                </div>
            </div>




            <div>
                <h2 className="text-lg font-bold text-gray-800 mb-4">বাজারভিত্তিক আজকের দাম</h2>

                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-gray-200 text-gray-500 text-sm bg-gray-50/50">
                                <th className="py-3 px-4 font-semibold">বাজার</th>
                                <th className="py-3 px-4 font-semibold">বিভাগ</th>
                                <th className="py-3 px-4 font-semibold">সর্বনিম্ন</th>
                                <th className="py-3 px-4 font-semibold">সর্বাধিক</th>
                                <th className="py-3 px-4 font-semibold">গড়</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                itemDetails.markets.map((marketItem: MarketType, index: number) => {

                                    const avgPrice = ((marketItem.min + marketItem.max) / 2).toFixed(1);

                                    return (
                                        <tr
                                            key={index}
                                            className="border-b border-gray-100 odd:bg-white even:bg-gray-50 hover:bg-gray-100 transition-colors text-gray-800 text-sm"
                                        >
                                            <td className="py-3.5 px-4">{marketItem.market}</td>
                                            <td className="py-3.5 px-4">{marketItem.division}</td>
                                            <td className="py-3.5 px-4">{marketItem.min} টাকা</td>
                                            <td className="py-3.5 px-4">{marketItem.max} টাকা</td>
                                            <td className="py-3.5 px-4 font-medium">{avgPrice} টাকা</td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default ProductDetailsPage;