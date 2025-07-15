import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calculator from "./components/Calculator";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Calculator" element={<Calculator />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
