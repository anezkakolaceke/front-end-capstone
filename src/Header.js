import food from './restauranfood.jpg'

function Header(){
    return (
        <header>
            Little Lemon <br />
            Chicago <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
            <button>Reserve a Table</button>
            <img src={food} alt="food_image" width="100" />
        </header>
    )
}

export default Header;