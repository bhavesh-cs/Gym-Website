import "../styles/footer.css";

function Footer() {
    return (
        <footer className="footer">

            <div className="footer-container">

                {/* Brand */}

                <div className="footer-brand">

                    <h2>Muscle Monk</h2>

                    <p>
                        Train harder. Live stronger.
                        Premium fitness experiences designed
                        to help you achieve your goals.
                    </p>

                    <div className="footer-contact">

                        <p>
                            <i className='bx bx-phone'></i>
                            +91 62643 52431
                        </p>

                        <p>
                            <i className='bx bx-envelope'></i>
                            musclemonkgym@gmail.com
                        </p>

                        <p>
                            <i className='bx bx-map'></i>
                            Rau, Indore
                        </p>

                    </div>

                </div>

                {/* Quick Links */}

                <div className="footer-links">

                    <h3>Quick Links</h3>

                    <a href="#">Home</a>
                    <a href="#">Programs</a>
                    <a href="#">Membership</a>
                    <a href="#">Contact</a>

                </div>

                {/* Programs */}

                <div className="footer-links">

                    <h3>Programs</h3>

                    <a href="#">Strength</a>
                    <a href="#">Cardio</a>
                    <a href="#">CrossFit</a>
                    <a href="#">Personal Training</a>

                </div>

                {/* Social */}

                <div className="footer-social">

                    <h3>Follow Us</h3>

                    <div className="social-icons">

                        <a href="#"><i className='bx bxl-instagram'></i></a>

                        <a href="#"><i className='bx bxl-facebook'></i></a>

                        <a href="#"><i className='bx bxl-youtube'></i></a>

                        <a href="#"><i className='bx bxl-whatsapp'></i></a>

                    </div>

                </div>

            </div>

            <div className="footer-bottom">

                <p>
                    © 2026 Muscle Monk Gymnasium. All Rights Reserved.
                </p>

                <p>
                    Built with ❤️ using React
                </p>

            </div>

        </footer>
    );
}

export default Footer;