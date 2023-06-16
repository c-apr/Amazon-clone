
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout"


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/Checkout" element={<Checkout />}> </Route>
          <Route path="/" element={<Home />}> 
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;
