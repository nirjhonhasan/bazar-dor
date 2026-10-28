import ChangeType from "./ChankgeType";
import MarketType from "./MarketType";

export default interface ProductType {
    id: number;
    slug: string;
    nameBn: string;
    category: string;
    categoryNameBn: string;
    categoryIcon: string;
    unit: string;
    image: string;
    today: number;
    yesterday: number;
    lastWeek: number;
    lastMonth: number;
    change: ChangeType;
    markets: MarketType[];
}