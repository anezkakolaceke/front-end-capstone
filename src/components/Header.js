import food from '../assets/restauranfood.jpg'
import { useNavigate } from 'react-router-dom';
import React from 'react';

function Header(){

    const navigate = useNavigate();

    function handleClick(){
        navigate("/booking")
    }

    return (
        <header>
            <section class="intro_text">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
                <button aria-label="On Click" onClick={handleClick}>Reserve a Table</button>
            </section>
            <figure class="intro_image">
                <img src={food} alt="food_image" class="food_image" width="320"/>
            </figure>
        </header>
    )
}

export default Header;