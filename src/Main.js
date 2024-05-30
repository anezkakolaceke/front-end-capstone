import photo1 from './Mario and Adrian A.jpg'
import photo2 from './Mario and Adrian b.jpg'

function Main(){
    return (
        <main>
            <div class="highlights">
                Specials
                <button>Online Menu</button>
            </div>

            <div class="testimonials">
                Testimonials
            </div>

            <div class="about">
                Little Lemon <br />
                Chicago <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
                <img src={photo1} alt="Mario and Adrian" width="100" />
                <img src={photo2} alt="Mario and Adrian" width="100" />
            </div>
        </main>
    )
}

export default Main;