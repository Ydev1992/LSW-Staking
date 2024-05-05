import Image from "../components/Image";
import Chart from "../assets/charts.png";
import Grid from "../components/Grid";

const Hero = () => {
    return (
        <section className="overflow-hidden mt-[7%]">
            <div className="grid grid-cols-2 justify-between lg:px-10 bg-gradient-to-r from-[#000F16] to-[#213A4A] p-4">
                <Grid className="w-full h-full justify-center gap-1">
                    <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-[#00C2B6] to-[#5865F2] lg:text-3xl font-bold">LIVE STREAMING POWER</h2>
                    <h3 className="lg:text-xl font-bold text-white">Power your Stream</h3>
                    <Grid className="mt-10 gap-2">
                        <h1 className="lg:text-lg font-bold text-white">Tired of in-app purchases & limited tipping?
                            unleash the LSW revolution</h1>
                        <h2 className="lg:text-base font-[500] text-gray-400">LSW aims to disrupt the traditional live streaming tipping model,
                            empowering creators, and fostering a more vibrant community
                            within the live streaming landscape.</h2>
                    </Grid>

                </Grid>
                <Grid className="items-center justify-center max-h-[50vh]">
                    <Image
                        src={Chart}
                        alt="bg-image"
                        classname="w-full h-full object-fill"
                    />
                </Grid>
            </div>
        </section >
    )
}

export default Hero;