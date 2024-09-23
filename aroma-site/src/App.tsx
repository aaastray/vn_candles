// import { useState } from "react";
import Advertising from "./views/Advertising/Advertising";
import { AdvertisingModel } from "./models/AdvertisingModel";
import promophoto from './assets/promophoto.png'
import SalesLeaders from "./views/SalesLeaders/SalesLeaders";
import Catalog from "./views/Catalog/Catalog";

const adv: AdvertisingModel = {
  _id: "7fwyfhf8f",
  title: "VN CANDLES",
  description:
    "Scented candles for home handmade with a huge range of smells. Perfect for creating coziness and comfort around you.",
  img: promophoto,
  alt: 'Promophoto'
};

function App() {
  return (
    <>
      <Advertising advertProduct={adv} />
      <SalesLeaders />
      <Catalog />
    </>
  );
}

export default App;
