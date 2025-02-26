import photo from '../assets/photo.png'
import star from '../assets/star.png'

function CustomersSay() {
    return (
        <section class="testimonials">
            <article class="main_title">
                Testimonials
            </article>

            <section class="testimonial_items">
                <article class="test">
                    <p class="test_rating">Rating: </p>
                    <img src={star} alt="rating" class="star_rating1" />
                    <img src={star} alt="rating" class="star_rating2" />
                    <img src={star} alt="rating" class="star_rating3" />
                    <img src={star} alt="rating" class="star_rating4" />
                    <img src={star} alt="rating" class="star_rating5" />
                    <img class="test_photo" src={photo} alt="user"/>
                    <p class="test_name">John Smith</p>
                    <p class="test_comment">The restaurant was beautiful, staff is friendly and food was delicious!</p>
                </article>
                <article class="test">
                    <p class="test_rating">Rating: </p>
                    <img src={star} alt="rating" class="star_rating1" />
                    <img src={star} alt="rating" class="star_rating2" />
                    <img src={star} alt="rating" class="star_rating3" />
                    <img src={star} alt="rating" class="star_rating4" />
                    <img class="test_photo" src={photo} alt="user"/>
                    <p class="test_name">John Smith</p>
                    <p class="test_comment">The restaurant was beautiful, staff is friendly and food was delicious!</p>
                </article>
                <article class="test">
                    <p class="test_rating">Rating: </p>
                    <img src={star} alt="rating" class="star_rating1" />
                    <img src={star} alt="rating" class="star_rating2" />
                    <img src={star} alt="rating" class="star_rating3" />
                    <img class="test_photo" src={photo} alt="user"/>
                    <p class="test_name">John Smith</p>
                    <p class="test_comment">The restaurant was beautiful, staff is friendly and food was delicious!</p>
                </article>
                <article class="test">
                    <p class="test_rating">Rating: </p>
                    <img src={star} alt="rating" class="star_rating1" />
                    <img src={star} alt="rating" class="star_rating2" />
                    <img src={star} alt="rating" class="star_rating3" />
                    <img src={star} alt="rating" class="star_rating4" />
                    <img class="test_photo" src={photo} alt="user"/>
                    <p class="test_name">John Smith</p>
                    <p class="test_comment">The restaurant was beautiful, staff is friendly and food was delicious!</p>
                </article>
            </section>
        </section>
    )
}

export default CustomersSay;