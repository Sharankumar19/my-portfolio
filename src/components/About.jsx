import '../components/About.css'
import about_theme from '../assets/about.jpg'
function About(){
    return(
        <div id='about' className='about'>
            <div className="about-title">
                <h2>About Me</h2>
                </div>       
                <div className="about-section">
                    <div className="about-left">
                <img src={about_theme} alt="" className='about-img' />   
                </div>
                <div className="about-para">
                 <p>I am writing to apply for the Front End Developer position at your company. I have recently graduated with a degree in Master of Computer Application. I have learned a lot about coding and programming during my time at university. I have worked on some projects and I think I did a good job.</p>
                </div>
                    </div> 
        </div>
    )
}
export default About;