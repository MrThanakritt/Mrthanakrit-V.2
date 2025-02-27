import Contact from "./Contact";
import Header from "./Header";
import Navbar from "./Navbar";


const LeftSection = () => {
    return (
        <div className="top-14 sticky grid grid-rows-[35%_40%_25%] h-[87vh]">
            <Header />
            <Navbar />
            <Contact />
        </div>
    )
}

export default LeftSection;