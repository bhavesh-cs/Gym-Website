import "../styles/hero.css";

function Hero(){
    return(
        <section className="hero">
            <div className="overlay"></div>
            <div className="hero-content">
                <span className="hero-tag">
                    Muscle Monk Gymnasium
                </span>

                <h1>
                    Build Strength
                    <br />
                    Transform Your Life
                </h1>

                <p>
                    Professional trainers, premium equipment,
                    personalized workout plans and an environment
                    that pushes you beyond your limits.
                </p>

                <div className="hero-buttons">
                    <button className="primary-btn">
                        Join today
                    </button>

                    <button className="secondary-btn">

                        Explore Plans
                    </button>
                </div>
            </div>
        </section>
        
    );
}

export default Hero;