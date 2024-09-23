import { ProductModel } from "../../models/ProductModel";
import SaleLeaderItem from "./SaleLeaderItem";
import leader1 from '../../assets/leader_1.png'
import leader2 from '../../assets/leader_2.png'
import leader3 from '../../assets/leader_3.png'
import "./SalesLeaders.css";

const saleProducts: ProductModel[] = [
  {
    _id: "7yv8yrvr",
    title: "set of three candles №1",
    description:
      "the gentle aroma of these candles will fill your home with comfort",
    price: 11.0,
    weight: "300g",
    img: leader1,
    alt: "set of three candles №1",
  },
  {
    _id: "eeggr3rg3g",
    title: "set of two candles №1",
    description:
      "the gentle scent around you gives you a feeling of confidence",
    price: 15.0,
    weight: "200g",
    img: leader2,
    alt: "set of two candles №1",
  },
  {
    _id: "vut67g8",
    title: "set of three candles №2",
    description: "breathe life into your home with notes of warmth",
    price: 13.5,
    weight: "270g",
    img: leader3,
    alt: "set of three candles №2",
  },
];

const SalesLeaders = () => {
  return (
    <div className="container sales_container">
      <div className="flex text-center mb-8">
        <h1 className="header">SALES LEADERS</h1>
      </div>
      <div className="sales_items">
        {saleProducts.map((item) => (
          <SaleLeaderItem key={item._id} product={item} />
        ))}
      </div>
      <div className="w-full border-b-2 border-gray-500 mt-7" />
    </div>
  );
};

export default SalesLeaders;
