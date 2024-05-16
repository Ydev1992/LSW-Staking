import Grid from "../components/Grid";
import Header from "../components/Header";
import Buy from "./Buy";
import Creators from "./Creators";
import Footer from "./Footer";
import Hero from "./Hero";
import Live from "./Live";
import Lsw from "./Lsw";
import Page from "./Page";
import Payment from "./Payment";
import RoadMap from "./RoadMap";
import Testimonial from "./Testimonial";
import Tokenomics from "./Tokenomics";
import Wire from "./Wire";
import Works from "./Works";

const Home = () => {
  return (
    <Grid className="w-full h-full">
      <Header />
      <Hero />
      <Testimonial />
      <Wire />
      <Page />
      <Payment />
      <Live />
      <Creators />
      <Works />
      <Buy />
      <RoadMap />
      <Tokenomics />
      <Lsw />
      <Footer />
    </Grid>
  );
};

export default Home;
