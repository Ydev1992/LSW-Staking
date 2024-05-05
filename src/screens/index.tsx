import Grid from "../components/Grid";
import Header from "../components/Header";
import Hero from "./Hero";

const Home = ()=>{
    return(
        <Grid className="w-full h-full">
            <Header />
            <Hero />
        </Grid>
    )
}

export default Home;