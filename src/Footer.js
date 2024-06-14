import logo from './Logo.svg'

function Footer(){
    return (
        <footer>
            <figure class="logo_footer">
                <img src={logo} alt="logo" />
            </figure>

            <article class="doormat">
                <h1>Doormat Navigation</h1>
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
            </article>

            <article class="contact">
                <h1>Contact</h1>
                Main st. 4, Lisbon <br />
                +351 333 958 367 <br />
                <a href="mailto:littlelemon@littlelemon.com">littlelemon@littlelemon.com</a>
            </article>
        </footer>
    )
}

export default Footer;