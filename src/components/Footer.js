import logo from "../assets/logo_ft.png"
import Nav from "./Nav";

function Footer() {
    return (
    <footer>
        
        <div id="logo_ft">
        <img src={logo} alt="Little Lemon" />
        </div>
        <div>
            <h3>Doormat Navigation</h3>
            <Nav />
        </div>
        <div>
            <h3>Contact</h3>
            Adress <br></br>
            phone number<br></br>
            email
        </div>
        <div>
            <h3>Social Media Links</h3>
            Adress <br></br>
            phone number<br></br>
            email
        </div>
        
    </footer>
    )
}
export default Footer;