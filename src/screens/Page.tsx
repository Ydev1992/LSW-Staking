import Grid from "../components/Grid"
import Image from "../components/Image";
import LiveStream from "../assets/liveStream.png";

const Page = () => {
    return (
        <section className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 justify-between py-[2%] gap-10">
                <Grid className="w-full h-full justify-between gap-4 order-last">
                    <div className="w-[60%] bg-gradient-to-r to-[#00C2B6] from-[#5865F2] h-2 justify-self-end self-end" />
                    <Grid>
                        <h2 className="text-white text-6xl font-bold font-inter tracking-[0.8rem]">LIVE <h2 className="mt-[2%]">STREAMING WIRE</h2></h2>
                        <h2 className="bg-clip-text text-transparent bg-gradient-to-r to-[#00C2B6] from-[#5865F2] text-[5.5rem] font-black font-inter">THE SOLUTION</h2>
                    </Grid>

                    <Grid />
                </Grid>
                <Grid className="items-center justify-center max-h-[65vh]">
                    <Image
                        src={LiveStream}
                        alt="bg-image"
                        classname="md:w-[682px] md:h-[693px]"
                    />
                </Grid>
            </div>
        </section >
    )
}

export default Page;