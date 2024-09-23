import { ProductModel } from "../../models/ProductModel";
import "./ProductItem.scss";

interface ProductItemProps {
  product: ProductModel;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="proditem">
      <img src={product.img} alt={product.alt} />
      <h1 className="proditem__title">{product.title}</h1>
      <p className="proditem__price">$ {product.price}</p>
      <div>
        <button className="btn">QUICK VIEW</button>
      </div>
    </div>
  );
};

export default ProductItem;
