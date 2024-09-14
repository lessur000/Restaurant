//import react router dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "../src/components/Home/Home";
import About from "./components/AboutUs/About";
import Chefdetails from "./components/AboutUs/Chefdetails";
import Gallery from "./components/Gallery/Gallery";
import Blog from "./components/Blog/Blog";
import Blogtips from "./components/Blog/Blogtips";
import Reservation from "./components/Reservation/Reservation";
import Menu from "./components/Menu/Menu";
import Sidebar from "./components/Menu/Sidebar";
import MenuDetails from "./components/Menu/MenuDetails";

function App() {
  return (
    <div className="overflow-hidden">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Chef/:id" element={<Chefdetails />}></Route>
          <Route path="/Gallery" element={<Gallery />}></Route>
          <Route path="/Blog" element={<Blog />}></Route>
          <Route path="/Blog/:name" element={<Blogtips />}></Route>
          <Route path="/Reserve" element={<Reservation />}></Route>
          <Route path="/Menu" element={<Menu />}></Route>
          <Route path="/Menu/:name" element={<MenuDetails />}></Route>
        </Routes>
        <Sidebar />
      </Router>
    </div>
  );
}

export default App;
