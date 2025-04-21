import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Trip from "../components/Trip";
import ServiceImg from "../asserts/1.jpg"

function Service(){
    return(
        <>
            <Navbar />
            <Hero
                cName="hero-mid"
                heroimg={ServiceImg}
                title="Service"
            />
            <Trip/>
            <Footer/>
        </>
    )
}

export default Service