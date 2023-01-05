import logo from "../assets/logo.png"
import Nav from "./Nav";

function Header() {
    return(
    <div id="header">
    <img id="logo" src={logo} alt="Little Lemon" />
    <Nav />
    </div>
    )
}
export default Header;