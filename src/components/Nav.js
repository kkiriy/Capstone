
import HomePage from "./HomePage";
import About from "./About";
import Menu from "./Menu";
import BookingPage from "./BookingPage";
import OrderOnline from "./OrderOnline";
import Login from "./Login";

import { Routes, Route, Link } from "react-router-dom";

function Nav() {
  return (
    <> 
	  <nav>
      <Link to="/" className="nav-item">HOME</Link>
      <Link to="/about" className="nav-item">ABOUT</Link>
      <Link to="/menu" className="nav-item">MENU</Link>
      <Link to="/book" className="nav-item">RESERVATIONS</Link>
      <Link to="/order" className="nav-item">ORDER ONLINE</Link>
      <Link to="/login" className="nav-item">LOGIN</Link>
    </nav>
      <Routes> 
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/book" element={<BookingPage />}></Route>
        <Route path="/order" element={<OrderOnline />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  );
};

export default Nav;
