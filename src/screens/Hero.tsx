import Image from "../components/Image";
import Chart from "../assets/charts.png";
import Grid from "../components/Grid";
import Block from "../components/Block";

const Hero = () => {
    return (
        <section className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 justify-between lg:px-10 bg-gradient-to-r from-[#000F16] to-[#213A4A] p-4">
                <Grid className="w-full h-full justify-center gap-4">
                    <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-[#00C2B6] to-[#5865F2] lg:text-5xl font-extrabold font-inter">LIVE STREAMING POWER</h2>
                    <h3 className="font-bold text-white text-5xl max-md:text-4xl font-inter">Power your Stream</h3>
                    <Grid className="mt-10 gap-8">
                        <h1 className="text-4xl font-semibold text-white">Tired of in-app purchases & limited tipping?
                            unleash the LSW revolution</h1>
                        <h2 className="text-3xl font-normal text-gray-400">LSW aims to disrupt the traditional live streaming tipping model,
                            empowering creators, and fostering a more vibrant community
                            within the live streaming landscape.</h2>
                    </Grid>

                    <Block className="gap-8">
                        <button className="bg-[#001C29] px-4 py-2 rounded-md shadow-md font-bold text-white">BUY LSW</button>
                        <button className="bg-[#5865F2] px-4 py-2 rounded-md shadow-md text-white font-bold">WHITE PAPER</button>
                    </Block>

                </Grid>
                <Grid className="max-md:w-full">
                    <div className="flex overflow-hidden relative flex-col grow items-center min-h-[734px] max-md:max-w-full top-[25%]">
                        <Image
                            src={Chart}
                            alt="bg-image"
                            classname="absolute inset-0 size-full"
                        />

                    </div>

                </Grid>
            </div>
        </section >
    )
}

export default Hero;