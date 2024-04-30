import { Routes, Route } from "react-router-dom"
import NavBar from "../components/NavBar"
import Home from "../pages/Home";
import Basket from "../pages/Basket";

const AppRouter = () => {
    return (
      <>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </>
    );
}

export default AppRouter