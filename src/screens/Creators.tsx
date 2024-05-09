import Grid from "../components/Grid"
import Image from "../components/Image"
import CreatorImg from "../assets/creators.png";

const Creators = () => {
    return (
        <section className="overflow-hidden">
            <div className="grid md:grid-cols-2 grid-cols-1 justify-between py-[2%] gap-10">
                <Grid className="w-full h-full justify-between gap-4 order-last md:order-first">
                    <Grid />
                    <Grid className="lg:px-30 p-6 gap-4">
                        <h2 className="bg-clip-text text-transparent bg-gradient-to-r to-[#00C2B6] from-[#5865F2] lg:text-[48px] lg:leading-[60px] font-black font-inter text-2xl">EMPOWERING CREATORS</h2>
                        <h2 className="lg:text-[36px] lg:leading-[42px] text-white font-normal text-lg">LSW lets viewers directly support creators they enjoy
                            across different platforms, with lower fees compared
                            to traditional tipping methods. Creators can also use
                            LSW to offer exclusive content and generate a direct revenue stream.</h2>
                    </Grid>
                    <div className="w-[60%] bg-gradient-to-r to-[#00C2B6] from-[#5865F2] h-2" />

                </Grid>
                <Grid className="items-center justify-center max-h-[65vh] lg:px-30 p-6">
                    <Image
                        src={CreatorImg}
                        alt="bg-image"
                        classname="w-full h-full md:w-[648px] md:h-[580px]"
                    />
                </Grid>
            </div>
        </section >
    )
}

export default Creators;