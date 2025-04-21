import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
import AboutImg from "../asserts/3.jpg"

function About(){
    return(
        <>
            <Navbar />
            <Hero
                cName="hero-mid"
                heroimg={AboutImg}
                title="About"
            />
            <AboutUs/>
            <Footer/>
        </>
    )
}

export default About;