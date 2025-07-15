import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calculator from "./components/Calculator";
import Home from "./pages/Home";
import ShoppingCart from "./components/ShoppingCart";
import Cart from "./components/Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Calculator" element={<Calculator />} />
        <Route path="/ShoppingCart" element={<ShoppingCart />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
