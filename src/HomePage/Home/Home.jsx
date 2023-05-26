
import { useContext } from "react";
import Banner from "../Banner/Banner";
import CategoryTabs from "../CategoryTabs/CategoryTabs";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Gallery from "../Gallery/Gallery";
import usePageViews from "../../main";
import { useLocation } from "react-router-dom";
import Services from "../Services/Services";
import Carousel from "../Carousel/Carousel";

const Home = () => {
    const location = useLocation()
    const { user } = useContext(AuthContext)
    // 
    // fetch all data
    usePageViews(location)



    return (
        <div>

            <Banner></Banner>
            <div className="mx-auto container">
                <Gallery></Gallery>
                <h2 className="normal-case font-bold text-3xl">Choose your Category</h2>
                <CategoryTabs user={user}></CategoryTabs>

                <h2 className="normal-case font-bold text-center mb-9 text-3xl">Our Products Categories <br /> And Services</h2>

                <Carousel></Carousel>
                <Services></Services>
            </div>





        </div>
    );
};

export default Home;