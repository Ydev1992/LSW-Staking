import Grid from "../components/Grid"
import Block from "../components/Block";

const Wire = () => {
    return (
        <section className="overflow-hidden">
            <Grid className="lg:px-20 p-6 py-[4%] gap-10 z-9999">
                <Block className="w-full md:gap-15 !items-start">
                    <div className="md:w-[105px] md:h-[222px] bg-gradient-to-t shadow-md opacity-70 to-[#00C2B6] from-[#5865F2]" />
                    <Grid>
                        <h2 className="drop-shadow-lg bg-clip-text text-transparent bg-gradient-to-r to-[#00C2B6] from-[#5865F2] text-[96px] leading-[120px] font-inter font-black">LIVE<h2>STREAMING WIRE</h2></h2>
                        <Block className="gap-20 md:gap-30 !items-start mt-[2%]">
                            <h2 className="md:min-w-[547px] font-extrabold text-[64px] leading-[80px] font-inter text-white">WHO ARE WE?</h2>
                            <h2 className="text-[40px] leading-[47px] font-regular md:max-w-[990px]">Traditionally, live streaming platforms limit creators monetization options and impose significant fees on in-app purchases. LSW presents a compelling alternative. Our ecosystem empowers all of its users.</h2>
                        </Block>
                    </Grid>

                </Block>

            </Grid>
        </section >
    )
}

export default Wire;