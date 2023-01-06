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
                Greak salad - $12.99
                Aliquam tellus tellus, fringilla non nulla quis, posuere rutrum lorem. Proin tempus, felis vel luctus vehicula, odio mi volutpat nisl, ut sagittis ante felis et tortor. Quisque et nisi in lectus dignissim fermentum. Nulla finibus a nibh ut ullamcorper. Donec quis pharetra turpis. Nunc consequat risus ut quam tincidunt vulputate.
            </article>
            <article>
            <img src={dish3_small} alt="Greak Salad" /><br></br>
                Bruchella - $5.99
                Aliquam tellus tellus, fringilla non nulla quis, posuere rutrum lorem. Proin tempus, felis vel luctus vehicula, odio mi volutpat nisl, ut sagittis ante felis et tortor. Quisque et nisi in lectus dignissim fermentum. Nulla finibus a nibh ut ullamcorper. Donec quis pharetra turpis. Nunc consequat risus ut quam tincidunt vulputate.
            </article>
            <article>
            <img src={dish4_small} alt="Greak Salad" /><br></br>
                Lemon desert - $5.00
                Aliquam tellus tellus, fringilla non nulla quis, posuere rutrum lorem. Proin tempus, felis vel luctus vehicula, odio mi volutpat nisl, ut sagittis ante felis et tortor. Quisque et nisi in lectus dignissim fermentum. Nulla finibus a nibh ut ullamcorper. Donec quis pharetra turpis. Nunc consequat risus ut quam tincidunt vulputate.
            </article>
            
        </section>
    )
}
export default Specials;