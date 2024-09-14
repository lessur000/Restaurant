import About from "../Home/About"
import Discover from "../Home/Discover"
import Header from '../Home/Header';

import Cta from "../Home/Cta"
import Testimonials from "../Home/Testimonials"
import Offers from "./Offers";
import Services from "./Services";
import Blog from "./Blog";
import Reservation from "./Reservation";
import Footer from "./Footer";


const Home = () => {
  return (
    <div>
        <Header />
        <Discover />
        <About />
        <Cta />
        <Testimonials />
        <Offers />
        <Services />
        <Blog />
        <Reservation />
        <Footer />
    </div>
  )
}

export default Home