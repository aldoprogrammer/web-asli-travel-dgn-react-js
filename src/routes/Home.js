import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";

function Home () {
    return (
        <>
        <Navbar />
        <Hero
            cName="hero"
            heroImg="https://cdn.pixabay.com/photo/2020/08/30/10/46/woman-5529171_640.jpg"
            title="I am a college student."
            text="Addicted to programming, and having fun!"
            buttonText="Software Course"
            url="/"
            btnClass="show"
         />  
         <Destination />
         <Trip />
         <Footer />
        </>
    );

}

export default Home;