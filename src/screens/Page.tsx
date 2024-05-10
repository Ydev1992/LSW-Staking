import Grid from "../components/Grid"
import Image from "../components/Image";
import LiveStream from "../assets/liveStream.png";

const Page = () => {
    return (
        <section className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 justify-between py-[2%] gap-10" data-aos='fade-right'>
                <Grid className="w-full h-full justify-between gap-4 order-first md:order-last">
                    <div className="w-[60%] bg-gradient-to-r to-[#00C2B6] from-[#5865F2] h-2 justify-self-end self-end" />
                    <Grid className="p-6 md:p-0 gap-4">
                        <h2 className="text-white lg:text-[64px] font-bold font-inter lg:leading-[80px] text-3xl">LIVE <h2 className="mt-[1%]">STREAMING WIRE</h2></h2>
                        <h2 className="bg-clip-text text-transparent bg-gradient-to-r to-[#00C2B6] from-[#5865F2] lg:text-[96px] lg:leading-[120px] font-black font-inter text-2xl">THE SOLUTION</h2>
                    </Grid>

                    <Grid />
                </Grid>
                <Grid className="items-center justify-center max-h-[65vh] md:p-0 p-6">
                    <Image
                        src={LiveStream}
                        alt="bg-image"
                        classname="md:w-[682px] md:h-[693px] w-full h-full"
                    />
                </Grid>
            </div>
        </section >
    )
}

export default Page;