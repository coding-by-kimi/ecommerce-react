import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from "./components/TopProducts/TopProducts";
import Banner from "./components/Banner/Banner";
import Navigation from "./components/Navigation/Navigation";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar handleOrderPopup={handleOrderPopup} />

      {/* HOME SECTION */}
      <section id="home">
        <Hero handleOrderPopup={handleOrderPopup} />
      </section>

      {/* KIDS WEAR (PRODUCTS) */}
      <section id="kids-wear">
        <Products />
      </section>

      {/* TOP RATED PRODUCTS */}
      <section id="top-rated">
        <TopProducts handleOrderPopup={handleOrderPopup} />
      </section>

      {/* MENS WEAR (BANNER) */}
      <section id="mens-wear">
        <Banner />
      </section>

      {/* ELECTRONICS (NAVIGATION) */}
      <section id="electronics">
        <Navigation />
      </section>

      {/* OTHER SECTIONS */}
      <Testimonials />
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  );
};

export default App;
