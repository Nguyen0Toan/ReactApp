import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import ContactImg from "../asserts/4.jpg"

function Contact(){
    return(
        <>
            <Navbar />
            <Hero
                cName="hero-mid"
                heroimg={ContactImg}
                title="Contact"
            />
            <ContactForm/>
            <Footer/>
        </>
    )
}

export default Contact;