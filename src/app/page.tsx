import AllProducts from "@/Components/AllProducts";
import Banner from "@/Components/Banner";
import HigherPrice from "@/Components/HigherPrice";
import LowerPrice from "@/Components/LowerPrice";

const page = () => {
  return (
    <div>
      <Banner/>
      <HigherPrice/>
      <LowerPrice/>
      <AllProducts/>
    </div>
  );
};

export default page;