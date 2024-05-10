import Grid from "../components/Grid"
import Image from "../components/Image"
import LswImg from "../assets/lsw.png";
import Block from "../components/Block";


const Lsw = () => {
    return (
        <section className="overflow-hidden rounded-e-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-15 justify-between lg:px-20 p-4 py-[5%]" data-aos='fade-right'>

                <Grid className="w-full h-full justify-center gap-4 md:px-[4%]">
                    <Block className="gap-4 justify-between w-full !items-start">
                        <Grid>
                            <div className="md:w-[105px] md:h-[152px] bg-gradient-to-t shadow-md opacity-70 to-[#00C2B6] from-[#5865F2]" />
                        </Grid>

                        <Grid className="gap-4">
                            <h2 className="bg-clip-text text-transparent bg-gradient-to-r to-[#00C2B6] from-[#5865F2] lg:text-[64px] font-inter font-black text-3xl lg:leading-[80px]">WHAT IS LSW</h2>
                            <p className="text-gray-400 lg:text-[32px] lg:leading-[38px] font-normal text-lg">LSW is a cryptocurrency designed to revolutionize the live streaming experience. It empowers viewers to directly support creators across different platforms with lower fees, while offering creators new monetization opportunities and fostering a more connected community.</p>
                        </Grid>
                    </Block>

                    <Grid className="px-[8%] mt-[4%]">

                        <ul className="space-y-8 text-gray-500 list-[square] text-[38px] dark:text-gray-400">
                            <li className="lg:text-[32px] font-bold text-white font-inter text-2xl">
                                How does LSW benefit viewers?
                            </li>
                            <li className="lg:text-[32px] font-bold text-white font-inter text-2xl">
                                How does LSW benefit creators?

                            </li>
                            <li className="lg:text-[32px] font-bold text-white font-inter text-2xl">
                                How are LSW tokens allocated?

                            </li>

                            <li className="lg:text-[32px] font-bold text-white font-inter text-2xl">
                                Where can I learn more about LSW?

                            </li>
                        </ul>

                    </Grid>
                </Grid>

                <Grid className="items-center justify-center max-h-[65vh]">
                    <Image
                        src={LswImg}
                        alt="bg-image"
                        classname="w-full h-full lg:w-[736px] lg:h-[743px]"
                    />
                </Grid>
            </div>
        </section >
    )
}

export default Lsw;