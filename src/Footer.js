import logo from './Logo.svg'

function Footer(){
    return (
        <footer>

            <img src={logo} alt="logo" />
            
            <b>Doormat Navigation</b>
            <ul>
                <li>
                    <a href="home.html">Home</a>
                </li>
                <li>
                    <a href="about.html">About</a>
                </li>
                <li>
                    <a href="menu.html">Menu</a>
                </li>
                <li>
                    <a href="reservations.html">Reservations</a>
                </li>
                <li>
                    <a href="order.html">Order Online</a>
                </li>
                <li>
                    <a href="login.html">Login</a>
                </li>
            </ul>

            <b>Contact</b> <br />
            Main st. 4, Lisbon <br />
            +351 333 958 367 <br />
            <a href="mailto:littlelemon@littlelemon.com">littlelemon@littlelemon.com</a>
        </footer>
    )
}

export default Footer;