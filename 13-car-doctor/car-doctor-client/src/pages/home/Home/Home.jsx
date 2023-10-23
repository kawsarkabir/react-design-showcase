import Footer from "../../../components/shared/footer/Footer";
import AboutUs from "../AboutUs/AboutUs";
import Services from "../Services/Services";
import Banner from "../header/banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <Services></Services>
      <Footer></Footer>
    </div>
  );
};

export default Home;
