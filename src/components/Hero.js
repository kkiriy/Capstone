import dish4_small from "../assets/dish4_small.png"

function Hero() {
    return (
        <section id="hero">
            <article>
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu feugiat, hendrerit metus tempus, efficitur urna. Donec accumsan quis risus at aliquet. Phasellus at odio malesuada, scelerisque metus non, egestas urna. Nullam vel bibendum massa, nec tincidunt eros.
                </p>
                <button>Reserve a table</button>
            </article>
            <div>
                <img src={dish4_small} alt="Pasta" />
            </div>
        </section>
    )
}
export default Hero;