import man from "../assets/man.png"
import woman from "../assets/woman.png"

function About() {
    return (
        <section id="about">
            <article>
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu feugiat, hendrerit metus tempus, efficitur urna. Donec accumsan quis risus at aliquet. Phasellus at odio malesuada, scelerisque metus non, egestas urna. Nullam vel bibendum massa, nec tincidunt eros.
                </p>   
            </article>
            <div class="picture">
                <img src={man} alt="" />
                <img class="overlay" src={woman} alt="" />
            </div>
        </section>
    )
}
export default About;