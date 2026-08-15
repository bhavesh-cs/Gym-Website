import "../styles/contact.css";

function Contact() {
    return (
        <section className="contact">
            <div className="contact-header">
                <span>CONTACT US</span>
                <h2>Let's Start Your Fitness Journey</h2>
                <p>
                    Have questions? Get in touch with us today.
                    Our team is always ready to help you achieve your fitness goals.
                </p>
            </div>

            <div className="contact-container">
                {/* Left Side */}
                <div className="contact-info">
                    <div className="info-card">
                        <i className='bx bx-map'></i>
                        <div>
                            <h3>Our Location</h3>
                            <p>
                                Above Cooperative Bank,
                                Rau, Indore,
                                Madhya Pradesh
                            </p>
                        </div>
                    </div>

                    <div className="info-card">
                        <i className='bx bx-phone'></i>
                        <div>
                            <h3>Call Us</h3>
                            <p>+91 62643 52431</p>
                        </div>
                    </div>

                    <div className="info-card">
                        <i className='bx bx-envelope'></i>
                        <div>
                            <h3>Email</h3>
                            <p>musclemonkgym@gmail.com</p>
                        </div>
                    </div>

                    <div className="info-card">
                        <i className='bx bx-time-five'></i>
                        <div>
                            <h3>Working Hours</h3>
                            <p>Monday - Sunday</p>
                            <p>6:00 AM - 10:00 PM</p>
                        </div>
                    </div>

                </div>
                {/* Right Side */}
                <form className="contact-form">
                    <input
                        type="text"
                        placeholder="Your Name"
                    />
                    <input
                        type="email"
                        placeholder="Email Address"
                    />
                    <input
                        type="tel"
                        placeholder="Phone Number"
                    />
                    <textarea
                        rows="6"
                        placeholder="Write your message..."
                    ></textarea>

                    <button>
                        Send Message
                    </button>
                </form>
            </div>

            <div className="map-section">

               <h3>Find Us Here</h3>

               <p>
                  Visit Muscle Monk Gymnasium and experience
                  the best fitness environment in Rau, Indore.
               </p>

               <div className="map-container">

                  <iframe
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.51272197246!2d75.80667897489921!3d22.63466447944753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fb55e32b3b31%3A0x2995320aaded7029!2sMuscle%20Monk%20Gymnasium!5e0!3m2!1sen!2sin!4v1784354855286!5m2!1sen!2sin"
                     loading="lazy"
                    allowFullScreen
                    title="Muscle Monk Gymnasium Location"
                  ></iframe>

                </div>

            </div>

            
        </section>
    );
}

export default Contact;