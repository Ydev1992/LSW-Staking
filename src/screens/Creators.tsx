import Grid from "../components/Grid"
import Image from "../components/Image"
import CreatorImg from "../assets/creators.png";

const Creators = () => {
    return (
        <section className="overflow-hidden">
            <div className="grid md:grid-cols-2 grid-cols-1 justify-between lg:px-20 p-6 py-[5%] gap-10">
                <Grid className="w-full h-full justify-center gap-4 order-first">
                    <h2 className="bg-clip-text text-transparent bg-gradient-to-r to-[#00C2B6] from-[#5865F2] lg:text-4xl font-bold">EMPOWERING CREATORS</h2>
                    <h2 className="lg:text-lg text-white font-normal">LSW lets viewers directly support creators they enjoy
                        across different platforms, with lower fees compared
                        to traditional tipping methods. Creators can also use
                        LSW to offer exclusive content and generate a direct revenue stream.</h2>
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