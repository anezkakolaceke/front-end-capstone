import logo from '../assets/Logo.svg'
import { Link } from 'react-router-dom';

function Nav(){
    return (
        <nav>
            <figure class="initial_logo">
                <img src={logo} alt="logo" />
            </figure>
            
            <section class="menu_links">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/menu">Menu</Link>
                    </li>
                    <li>
                        <Link to="/booking">Reservations</Link>
                    </li>
                    <li>
                        <Link to="/order">Order Online</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </section>
            
        </nav>
    )
}

export default Nav;