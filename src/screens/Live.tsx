import Grid from "../components/Grid"
import Image from "../components/Image"
import LiveImg from "../assets/live.png"

const Live = () => {
    return (
        <section className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 justify-between lg:px-20 p-6 py-[5%] gap-10">
                <Grid className="w-full h-full justify-center gap-4 order-last">
                    <h2 className="bg-clip-text text-transparent bg-gradient-to-r to-[#00C2B6] from-[#5865F2] text-4xl font-bold">ENHANCING VIEWER EXPERIENCE</h2>
                    <h2 className="lg:text-lg text-white font-normal">LSW offers a gamified ecosystem with interactive features, challenges, and rewards, making  live streaming more engaging and fostering a  sense of community. Viewers can also use LSW to unlock exclusive content or participate in streamer-created events, not to mention being eligble to airbods, staking rewards and much more.</h2>
                </Grid>
                <Grid className="items-center justify-center max-h-[65vh]">
                    <Image
                        src={LiveImg}
                        alt="bg-image"
                        classname="w-full h-full"
                    />
                </Grid>
            </div>
        </section >
    )
}

export default Live;