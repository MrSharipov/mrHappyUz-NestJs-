import AllPortfolioItems from "./components/AllPortfolioItems";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import './main.style.css';
import CreateItem from "./components/CreateItem";

function App() {
  return (
    <>
      <BrowserRouter>
          <Navbar>
              <Routes>
                  <Route path="/" element={<AllPortfolioItems /> }></Route>
                  <Route path="/resume" element={<CreateItem /> }></Route>
              </Routes>
          </Navbar>
      </BrowserRouter>
    </>
  );
}

export default App;
