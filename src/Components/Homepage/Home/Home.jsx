import Banner from "../Banner/Banner";
import FeaturedItems from "../FeaturedItems/FeaturedItems";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <FeaturedItems></FeaturedItems>
            <Footer></Footer>
        </div>
    );
};

export default Home;