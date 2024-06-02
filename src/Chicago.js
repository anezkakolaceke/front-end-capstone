import photo1 from './Mario and Adrian A.jpg'

function Chicago(){
    return(
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
    )
}

export default Chicago;