import Grid from "../components/Grid";
import Header from "../components/Header";
import Hero from "./Hero";
import Page from "./Page";
import Testimonial from "./Testimonial";

const Home = () => {
    return (
        <Grid className="w-full h-full">
            <Header />
            <Hero />
            <Testimonial />
            <Page />
        </Grid>
    )
}

export default Home;