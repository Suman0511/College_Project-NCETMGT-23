import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Global from "../components/Global";
import Navpic from "../components/Navpic";
import Comit from "../components/Comit";
import Query from "../components/Query";
import Organ from "../components/Organisation ";

function Committees(){
    return(
        <>
        <Navpic/>
        <Navbar />
        <Hero />
        <Organ/>
        <Comit/>
        <Global/>
        <Query/>
        <Footer/>
        </>
    );
}

export default Committees;