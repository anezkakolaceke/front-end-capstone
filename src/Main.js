import photo1 from './Mario and Adrian A.jpg'
import photo2 from './Mario and Adrian b.jpg'
import greeksalad from './greek salad.jpg'
import bruschetta from './bruchetta.svg'
import lemon from './lemon dessert.jpg'
import dish from './Dish icon.svg'
import photo from './photo.png'
import star from './star.png'

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
                        <img class="item_image" src={bruschetta} />
                        <h1 class="item_header">Bruschetta</h1>
                        <p class="item_text">Our Bruschetta is made from grilled bread that has been 
                        smeared with garlic and seasoned with salt and olive oil. </p>
                        <p class="item_text"><a href="delivery.html">Order a delivery!</a></p>
                    </article>

                    <article class="item">
                        <img class="item_image" src={lemon} />
                        <h1 class="item_header">Lemon Dessert</h1>
                        <p class="item_text">This comes straight from grandma’s recipe book, every last 
                        ingredient has been sourced and is as authentic as can be imagined.</p>
                        <p class="item_text"><a href="delivery.html">Order a delivery!</a></p>
                    </article>
                </div>

            </section>

            <div class="testimonials">
                <div class="main_title">
                    Testimonials
                </div>

                <div class="testimonial_items">
                    <article class="test">
                        <p class="test_rating">Rating: </p>
                        <img src={star} alt="rating" class="star_rating1"/>
                        <img src={star} alt="rating" class="star_rating2"/>
                        <img src={star} alt="rating" class="star_rating3"/>
                        <img src={star} alt="rating" class="star_rating4"/>
                        <img src={star} alt="rating" class="star_rating5"/>
                        <img class="test_photo" src={photo} />
                        <p class="test_name">John Smith</p>
                        <p class="test_comment">The restaurant was beautiful, staff is friendly and food was delicious!</p>
                    </article>
                    <article class="test">
                        <p class="test_rating">Rating: </p>
                        <img src={star} alt="rating" class="star_rating1"/>
                        <img src={star} alt="rating" class="star_rating2"/>
                        <img src={star} alt="rating" class="star_rating3"/>
                        <img src={star} alt="rating" class="star_rating4"/>
                        <img class="test_photo" src={photo} />
                        <p class="test_name">John Smith</p>
                        <p class="test_comment">The restaurant was beautiful, staff is friendly and food was delicious!</p>
                    </article>
                    <article class="test">
                        <p class="test_rating">Rating: </p>
                        <img src={star} alt="rating" class="star_rating1"/>
                        <img src={star} alt="rating" class="star_rating2"/>
                        <img src={star} alt="rating" class="star_rating3"/>
                        <img class="test_photo" src={photo} />
                        <p class="test_name">John Smith</p>
                        <p class="test_comment">The restaurant was beautiful, staff is friendly and food was delicious!</p>
                    </article>
                    <article class="test">
                        <p class="test_rating">Rating: </p>
                        <img src={star} alt="rating" class="star_rating1"/>
                        <img src={star} alt="rating" class="star_rating2"/>
                        <img src={star} alt="rating" class="star_rating3"/>
                        <img src={star} alt="rating" class="star_rating4"/>
                        <img class="test_photo" src={photo} />
                        <p class="test_name">John Smith</p>
                        <p class="test_comment">The restaurant was beautiful, staff is friendly and food was delicious!</p>
                    </article>  
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