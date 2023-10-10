import Banner from "../../components/Header/Banner";
import Brand from "../../components/Main/Brand";
import CoverArea from "../../components/Main/CoverArea";
import DelivaryCalculate from "../../components/Main/DelivaryCalculate/DelivaryCalculate";
import Faq from "../../components/Main/Faq";
import Feedback from "../../components/Main/Feedback";
import News from "../../components/Main/News/News";
import Partnar from "../../components/Main/Partnar";
import Services from "../../components/Main/Services/Services";
import WhyChooseRedx from "../../components/Main/WhyChooseRedx/WhyChooseRedx";

const Home = () => {
  return (
    <div>
      <Banner />
      <Brand />
      <Services />
      <WhyChooseRedx />
      <CoverArea />
      <DelivaryCalculate />
      <Feedback />

      <Faq />
      <Partnar />
      <News />
    </div>
  );
};

export default Home;
