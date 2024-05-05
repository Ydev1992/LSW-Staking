import Grid from "../components/Grid"
import Image from "../components/Image";
import LiveStream from "../assets/liveStream.png";

const Page = () => {
    return (
        <section className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-between lg:px-10 bg-gradient-to-r from-[#000F16] to-[#213A4A] p-4">
                <Grid className="w-full h-full justify-center gap-1 order-last">
                    <h2 className="text-white lg:text-3xl font-bold">LIVE STREAMING WIRE</h2>
                    <h2 className="bg-clip-text text-transparent bg-gradient-to-r to-[#00C2B6] from-[#5865F2] lg:text-4xl font-bold">THE SOLUTION</h2>
                </Grid>
                <Grid className="items-center justify-center max-h-[65vh]">
                    <Image
                        src={LiveStream}
                        alt="bg-image"
                        classname="w-full h-full"
                    />
                </Grid>
            </div>
        </section >
    )
}

export default Page;