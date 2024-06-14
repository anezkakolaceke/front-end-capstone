import greeksalad from './greek salad.jpg'
import bruschetta from './bruchetta.svg'
import lemon from './lemon dessert.jpg'

function Specials() {
    return (
        <section class="highlights">
            <article class="highlights_title">
                <div class="main_title">
                    This Weeks Specials!
                </div>
                <div>
                    <button>Online Menu</button>
                </div>
            </article>

            <section class="menu_items">
                <article class="item">
                    <img class="item_image" src={greeksalad} alt="Greek salad"/>
                    <h1 class="item_header">Greek Salad</h1>
                    <p class="item_text">The famous greek salad of crispy lettuce, peppers,
                        olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                    <p class="item_text"><a href="delivery.html">Order a delivery!</a></p>
                </article>

                <article class="item">
                    <img class="item_image" src={bruschetta} alt='bruschetta'/>
                    <h1 class="item_header">Bruschetta</h1>
                    <p class="item_text">Our Bruschetta is made from grilled bread that has been
                        smeared with garlic and seasoned with salt and olive oil. </p>
                    <p class="item_text"><a href="delivery.html">Order a delivery!</a></p>
                </article>

                <article class="item">
                    <img class="item_image" src={lemon} alt='lemon dessert'/>
                    <h1 class="item_header">Lemon Dessert</h1>
                    <p class="item_text">This comes straight from grandma’s recipe book, every last
                        ingredient has been sourced and is as authentic as can be imagined.</p>
                    <p class="item_text"><a href="delivery.html">Order a delivery!</a></p>
                </article>
            </section>

        </section>
    )
}

export default Specials;