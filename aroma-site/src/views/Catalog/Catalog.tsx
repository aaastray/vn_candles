import { ProductModel } from "../../models/ProductModel";
import ProductItem from "./ProductItem";
import "./Catalog.scss";

const products: ProductModel[] = [
  {
    _id: "hugrhu438",
    title: "LAVENDER",
    description: "",
    price: 15.0,
    weight: "100g",
    img: "src/assets/catalog/product1.png",
    alt: "",
  },
  {
    _id: "t54vc54twcrw",
    title: "MONDAY MORNING",
    description: "",
    price: 15.0,
    weight: "120g",
    img: "src/assets/catalog/product2.png",
    alt: "",
  },
  {
    _id: "v5t4bvc",
    title: "FIG TREE",
    description: "",
    price: 18.5,
    weight: "100g",
    img: "src/assets/catalog/product3.png",
    alt: "",
  },
  {
    _id: "n76ub5vt4cr",
    title: "COCONUT & OTHER",
    description: "",
    price: 20.0,
    weight: "100g",
    img: "src/assets/catalog/product4.png",
    alt: "",
  },
  {
    _id: "b67r54c",
    title: "HEIRLOOM PUMPKIN",
    description: "",
    price: 20.0,
    weight: "100g",
    img: "src/assets/catalog/product5.png",
    alt: "",
  },
  {
    _id: "n7u6byv",
    title: "SUMMER NIGHTS",
    description: "",
    price: 23.0,
    weight: "100g",
    img: "src/assets/catalog/product6.png",
    alt: "",
  },
  {
    _id: "b76t5v4wc",
    title: "CLEAN LINEN",
    description: "",
    price: 25.0,
    weight: "100g",
    img: "src/assets/catalog/product7.png",
    alt: "",
  },
  {
    _id: "bjyhjhtvgd",
    title: "WOODSMOKE BOURBON",
    description: "",
    price: 26.0,
    weight: "100g",
    img: "src/assets/catalog/product8.png",
    alt: "",
  },
];

const Catalog = () => {
  return (
    <div className="container catalog">
      <div className="mb-8">
        <h1 className="catalog__header">Catalog</h1>
      </div>
      <div className="catalog__items">
        {products.map((item) => (
          <ProductItem key={item._id} product={item} />
        ))}
      </div>
      <div className="flex items-center justify-center">
        <button className="btn-more mt-7">view more</button>
      </div>
      <div className="w-full border-b-2 border-gray-500 mt-7" />
    </div>
  );
};

export default Catalog;
