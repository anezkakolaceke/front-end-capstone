import logo from './Logo.svg'

function Nav(){
    return (
        <nav>
            <div class="initial_logo">
                <img src={logo} alt="logo" />
            </div>
            
            <div class="menu_links">
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
            </div>
            
        </nav>
    )
}

export default Nav;