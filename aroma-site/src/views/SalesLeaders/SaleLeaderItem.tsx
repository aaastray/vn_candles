import { ProductModel } from "../../models/ProductModel";
import './SaleLeaderItem.scss'
interface SaleLeaderProps {
  product: ProductModel;
}

const SaleLeaderItem = ({ product }: SaleLeaderProps) => {
  return (
    <div className="item">
      <img className="item__img" src={product.img} alt={product.alt} />
      <h1 className="item__title">{product.title}</h1>
      <p className="item__description">{product.description}</p>
    </div>
  );
};

export default SaleLeaderItem;
