import Grid from "../components/Grid";
import Header from "../components/Header";
import Buy from "./Buy";
import Creators from "./Creators";
import Hero from "./Hero";
import Live from "./Live";
import Page from "./Page";
import Payment from "./Payment";
import Testimonial from "./Testimonial";
import Works from "./Works";

const Home = () => {
    return (
        <Grid className="w-full h-full">
            <Header />
            <Hero />
            <Testimonial />
            <Page />
            <Payment />
            <Live />
            <Creators />
            <Works />
            <Buy />
        </Grid>
    )
}

export default Home;