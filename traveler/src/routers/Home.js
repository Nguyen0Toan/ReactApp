import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import HomeImg from "../asserts/2.jpg"
import Footer from "../components/Footer";

function Home(){
    return(
        <>
            <Navbar />
            <Hero
                cName="hero"
                heroimg={HomeImg}
                title="Traveller Luôn Đồng Hành Cùng Bạn"
                text="niềm vui của bạn là món quà tốt nhất dành cho chúng tôi"
                buturl="/"
                buttext="Lên Kế Hoạch"
                butclass="show"
            />
            <Destination/>
            <Trip/>
            <Footer/>
        </>
    )
}

export default Home; 