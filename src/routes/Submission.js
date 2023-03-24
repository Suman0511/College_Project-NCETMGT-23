import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Navpic from "../components/Navpic";
import Submit from "../components/Submit";
import Query from "../components/Query";
import Organ from "../components/Organisation ";



function Submission(){
    return(
        <>
        <Navpic/>
        <Navbar />
        <Hero/>
        <Organ/>
        <Submit/>
        <Query/>
        <Footer/>
        </>
    ); 
}

export default Submission;