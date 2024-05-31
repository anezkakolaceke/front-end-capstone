import photo1 from './Mario and Adrian A.jpg'
import photo2 from './Mario and Adrian b.jpg'
import greeksalad from './greek salad.jpg'

function Main(){
    return (
        <main>
            <section class="highlights">
                <div class="highlights_title">
                    <div class="main_title">
                        This Weeks Specials!
                    </div>
                     <div>
                        <button>Online Menu</button>
                    </div>
                </div>

                <div class="menu_items">
                    <article class="item">
                        <img class="item_image" src={greeksalad} />
                        <h1 class="item_header">Greek Salad</h1>
                        <p class="item_text">The famous greek salad of crispy lettuce, peppers, 
                        olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                        <p class="item_text"><a href="delivery.html">Order a delivery!</a></p>
                    </article>

                    <article class="item">
                        <img class="item_image" src={greeksalad} />
                        <h1 class="item_header">Greek Salad</h1>
                        <p class="item_text">The famous greek salad of crispy lettuce, peppers, 
                        olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                        <p class="item_text"><a href="delivery.html">Order a delivery!</a></p>
                    </article>

                    <article class="item">
                        <img class="item_image" src={greeksalad} />
                        <h1 class="item_header">Greek Salad</h1>
                        <p class="item_text">The famous greek salad of crispy lettuce, peppers, 
                        olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                        <p class="item_text"><a href="delivery.html">Order a delivery!</a></p>
                    </article>
                </div>

            </section>

            <div class="testimonials">
                <div class="main_title">
                    Testimonials
                </div>
            </div>

            <div class="about">
                <div class="about_text">
                    <h1>Little Lemon</h1> 
                    <h2>Chicago</h2>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
                </div>
                <div class="about_images">
                    <img src={photo1} alt="Mario and Adrian" class="m_a_1" />
                </div>
            </div>
        </main>
    )
}

export default Main;