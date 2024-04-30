import { useState } from "react";
import CategoryBar from "../components/CategoryBar"
import ProductCard from "../components/ProductCard"


const Home = () => {
    const [radioBtn, setRadioBtn] = useState('all')
    return (
      <div>
        <CategoryBar setRadioBtn={setRadioBtn} />
        <ProductCard radioBtn={radioBtn} />
      </div>
    );
}

export default Home