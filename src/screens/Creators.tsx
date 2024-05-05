import Grid from "../components/Grid"
import Image from "../components/Image"
import CreatorImg from "../assets/creators.png";

const Creators = () => {
    return (
        <section className="overflow-hidden">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-8 justify-between lg:px-10 bg-gradient-to-r from-[#000F16] to-[#213A4A] p-4">
                <Grid className="w-full h-full justify-center gap-1 order-first">
                    <h2 className="bg-clip-text text-transparent bg-gradient-to-r to-[#00C2B6] from-[#5865F2] lg:text-4xl font-bold">ENHANCING VIEWER EXPERIENCE</h2>
                    <h2 className="lg:text-lg text-white font-semibold">LSW offers a gamified ecosystem with interactive features, challenges, and rewards, making  live streaming more engaging and fostering a  sense of community. Viewers can also use LSW to unlock exclusive content or participate in streamer-created events, not to mention being eligble to airbods, staking rewards and much more.</h2>
                </Grid>
                <Grid className="items-center justify-center max-h-[65vh]">
                    <Image
                        src={CreatorImg}
                        alt="bg-image"
                        classname="w-full h-full"
                    />
                </Grid>
            </div>
        </section >
    )
}

export default Creators;