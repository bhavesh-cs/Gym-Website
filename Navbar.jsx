import "../styles/navbar.css";

function Navbar(){
    return(
        <nav className="navbar">

            <div className="logo">
                Muscle Monk
            </div>

            <ul className="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">Classes</a></li>
                <li><a href="#">Membership</a></li>
                <li><a href="#">Trainers</a></li>
                <li><a href="#">Contact</a></li>
            </ul>

            <button className="join-btn">
                Join Now
            </button>
        </nav>
    );
}

export default Navbar;