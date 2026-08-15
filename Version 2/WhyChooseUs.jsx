import "../styles/whychooseus.css";

function WhyChooseUs() {
    return (
        <section className="why">

            <div className="why-image">
                <img
                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80"
                    alt="Gym"
                />
            </div>

            <div className="why-content">

                <span className="section-tag">
                    WHY CHOOSE US
                </span>

                <h2>
                    More Than A Gym.
                    <br />
                    A Complete Fitness Experience.
                </h2>

                <p>
                    At Muscle Monk, we combine premium equipment,
                    experienced trainers, personalized guidance,
                    and a motivating environment to help you
                    achieve your fitness goals faster.
                </p>

                <div className="why-features">

                    <div className="feature">
                        <span>💪</span>
                        <div>
                            <h4>Certified Trainers</h4>
                            <p>Professional coaching for every member.</p>
                        </div>
                    </div>

                    <div className="feature">
                        <span>🏋️</span>
                        <div>
                            <h4>Modern Equipment</h4>
                            <p>Latest machines for better workouts.</p>
                        </div>
                    </div>

                    <div className="feature">
                        <span>🥗</span>
                        <div>
                            <h4>Nutrition Support</h4>
                            <p>Diet guidance to maximize your results.</p>
                        </div>
                    </div>

                    <div className="feature">
                        <span>⏰</span>
                        <div>
                            <h4>Flexible Timings</h4>
                            <p>Open daily from 6 AM to 10 PM.</p>
                        </div>
                    </div>

                </div>

                <button className="why-btn">
                    Join Muscle Monk
                </button>

            </div>

        </section>
    );
}

export default WhyChooseUs;