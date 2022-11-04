import AllPortfolioItems from "./components/AllPortfolioItems";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import './main.style.css';
import CreateItem from "./components/CreateItem";
import UpdateItem from "./components/UpdateItem";

function App() {
  return (
    <>
      <BrowserRouter>
          <Navbar>
              <Routes>
                  <Route path="/" element={<AllPortfolioItems /> }></Route>
                  <Route path="/resume" element={<CreateItem /> }></Route>
                  <Route path="/update/:id" element={<UpdateItem /> }></Route>
              </Routes>
          </Navbar>
      </BrowserRouter>
    </>
  );
}

export default App;
