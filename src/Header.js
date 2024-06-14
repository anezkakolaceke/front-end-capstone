import food from './restauranfood.jpg'

function Header(){
    return (
        <header>
            <section class="intro_text">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
                <button aria-label="On Click">Reserve a Table</button>
            </section>
            <figure class="intro_image">
                <img src={food} alt="food_image" class="food_image" width="320"/>
            </figure>
        </header>
    )
}

export default Header;