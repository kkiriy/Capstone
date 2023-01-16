import feature1 from "../assets/feature1.png";
import feature2 from "../assets/feature2.png";
import feature3 from "../assets/feature3.png";
import feature4 from "../assets/feature4.png";
import ratings from "../assets/ratings.png";

function Testimonials() {
    return (
       
        
    <section id="testimonials">
    <h2>Testimonials</h2><div></div><div></div><div></div>
        <div className="card">
            <img src={ratings} alt="ratings" /><br></br>
            <img src={feature1} alt="" />
            <span>Name</span>
            <p>"My mom loves it when I bring over their bruschetta."</p>
        </div>
        <div className="card">
            <img src={ratings} alt="ratings" /><br></br>
            <img src={feature2} alt="" />
            <span>Name</span>
            <p>"The lemon cake is to die for!"</p>
        </div>
        <div className="card">
            <img src={ratings} alt="ratings" /><br></br>
            <img src={feature3} alt="" />
            <span>Name</span>
            <p>"The staff is very attentive."</p>
        </div>
        <div className="card">
            <img src={ratings} alt="ratings" /><br></br>
            <img src={feature4} alt="" />
            <span>Name</span>
            <p>"I make it a priority to stop in every time I'm in town!"</p>
        </div>
    </section>
    
    )
}
export default Testimonials;