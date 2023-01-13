import dish1_small from "../assets/dish1_small.png"
import dish3_small from "../assets/dish3_small.png"
import dish4_small from "../assets/dish4_small.png"
function Specials() {
    return (
        <section id="specials">
            <h2>Specials</h2>
            <br></br>
            <button>Online Menu</button>
            
            <article>
                <img src={dish1_small} alt="Greak Salad" /><br></br>
                <span>Greak salad</span> <span id="price">$12.99</span>
                <p>Aliquam tellus tellus, fringilla non nulla quis, posuere rutrum lorem. Proin tempus, felis vel luctus vehicula, odio mi volutpat nisl, ut sagittis ante felis et tortor. Quisque et nisi in lectus dignissim fermentum. Nulla finibus a nibh ut ullamcorper. Donec quis pharetra turpis. Nunc consequat risus ut quam tincidunt vulputate.</p>
                <p><span><a href="/order">Order a delivery</a></span></p>
            </article>
            <article>
            <img src={dish3_small} alt="Greak Salad" /><br></br>
                <span>Bruchetta</span> <span id="price">$5.99</span>
                <p>Aliquam tellus tellus, fringilla non nulla quis, posuere rutrum lorem. Proin tempus, felis vel luctus vehicula, odio mi volutpat nisl, ut sagittis ante felis et tortor. Quisque et nisi in lectus dignissim fermentum. Nulla finibus a nibh ut ullamcorper. Donec quis pharetra turpis. Nunc consequat risus ut quam tincidunt vulputate.</p>
                <p><span><a href="/order">Order a delivery</a></span></p>
            </article>
            <article>
            <img src={dish4_small} alt="Greak Salad" /><br></br>
                <span>Lemon desert</span> <span id="price">$5.00</span>
                <p>Aliquam tellus tellus, fringilla non nulla quis, posuere rutrum lorem. Proin tempus, felis vel luctus vehicula, odio mi volutpat nisl, ut sagittis ante felis et tortor. Quisque et nisi in lectus dignissim fermentum. Nulla finibus a nibh ut ullamcorper. Donec quis pharetra turpis. Nunc consequat risus ut quam tincidunt vulputate.</p>
                <p><span><a href="/order">Order a delivery</a></span></p>
            </article>
            
        </section>
    )
}
export default Specials;