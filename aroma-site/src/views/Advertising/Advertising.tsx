import { AdvertisingModel } from "../../models/AdvertisingModel";
import "./Advertising.css";

interface AdvertisingProps {
  advertProduct: AdvertisingModel;
}

const Advertising = ({ advertProduct }: AdvertisingProps) => {
  return (
    <>
      <div className="container adv_content">
        <div className="adv_info">
          <h1 className="text-black text_header_adv">
            {advertProduct.title}
          </h1>
          <p className="text-black text_discr_adv">{advertProduct.description}</p>
          <button className="btn_adv text_discr_adv">shop now</button>
        </div>
        <div>
          <img src={advertProduct.img} alt={advertProduct.alt}></img>
        </div>
      </div>
      <div className="w-full border-b-2 border-gray-500 mt-7" />
    </>
  );
};

export default Advertising;
