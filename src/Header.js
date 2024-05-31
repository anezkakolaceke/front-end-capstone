import food from './restauranfood.jpg'

function Header(){
    return (
        <header>
            <div class="intro_text">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
                <button>Reserve a Table</button>
            </div>
            <div class="intro_image">
                <img src={food} alt="food_image" class="food_image" width="320"/>
            </div>
        </header>
    )
}

export default Header;