import { Route, Routes } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Products from "./pages/Products";

function App() {
  return (
    <Routes>
      <Route path="welcome" element={<Welcome />}></Route>
      <Route path="products" element={<Products />}></Route>
    </Routes>
  );
}

export default App;
