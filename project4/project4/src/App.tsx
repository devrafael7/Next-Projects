import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calculator from "./components/Calculator";
import Home from "./pages/Home"
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Calculator" element={<Calculator />} />
        <Route path="/ShoppingCart" element={<ShoppingCart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
