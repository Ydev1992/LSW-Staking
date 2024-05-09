import Image from "../components/Image";
import Grid from "../components/Grid";
import Block from "../components/Block";
import Eth from "../assets/eth.png";
import Chart from "../assets/charts.png";
import Usdt from "../assets/usdt.png";

const Hero = () => {
    return (
        <section className="overflow-hidden mt-[8%] md:mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 justify-between lg:px-10 bg-hero lg:py-[10%] p-4 gap-20 md:gap-0 overflow-hidden max-w-full relative">
                <div className="absolute flex-col grow items-center max-h-[500px] overflow-hidden max-w-[50%] top-[60%] -left-[8%] -z-1">
                    <Image
                        src={Chart}
                        alt="bg-image"
                        classname="w-full h-[500px]"
                    />

                </div>
                <div className="absolute flex-col grow items-center max-h-[500px] overflow-hidden max-w-[50%] top-[60%] -right-[8%] -z-1">
                    <Image
                        src={Chart}
                        alt="bg-image"
                        classname="w-full h-[500px]"
                    />

                </div>
                <Grid className="w-full h-full justify-center gap-4 mt-[10%]">
                    <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-[#00C2B6] to-[#5865F2] lg:text-[48px] lg:leading-[60px] font-extrabold font-inter text-xl">LIVE STREAMING POWER</h2>
                    <h3 className="font-bold text-white lg:text-[48px] lg:leading-[60px] font-inter text-lg">Power your Stream</h3>
                    <Grid className="mt-2 md:mt-10 gap-4 md:gap-8">
                        <h1 className="lg:text-[40px] lg:leading-[47px] font-semibold text-white">Tired of in-app purchases & limited tipping?
                            unleash the LSW revolution</h1>
                        <h2 className="lg:text-[32px] lg:leading-[38px] font-normal text-gray-400">LSW aims to disrupt the traditional live streaming tipping model,
                            empowering creators, and fostering a more vibrant community
                            within the live streaming landscape.</h2>
                    </Grid>

                    <Block className="gap-8 mt-[2%]">
                        <button className="bg-[#001C29] px-8 py-2 rounded-md shadow-md font-bold text-white">BUY LSW</button>
                        <button className="bg-[#5865F2] px-4 py-2 rounded-md shadow-md text-white font-bold">WHITE PAPER</button>
                    </Block>

                </Grid>
                <Grid className="w-full h-full justify-center items-center">
                    <Grid className="bg-primary shadow-md rounded-md gap-6 w-full md:w-[70%] py-8">
                        <Grid className="items-center gap-4 px-4">
                            <h2 className="lg:text-[48px] font-inter font-bold text-white">BUY LSW TOKEN</h2>
                            <h2 className="lg:text-[15px] text-white font-bold uppercase text-center md:text-start">Presale <span className="text-[#00C2B6]">live</span> {"\u2022"} ends by <span className="text-[#00C2B6]">1st jun 25 or hardcap </span></h2>
                        </Grid>
                        <Block className="justify-between">
                            <div className="w-[35%] bg-gradient-to-r to-[#00C2B6] from-[#5865F2] h-[0.15rem]" />
                            <h2 className="lg:text-[24px] text-white font-bold">BUY WITH</h2>
                            <div className="w-[35%] bg-gradient-to-r to-[#00C2B6] from-[#5865F2] h-[0.15rem]" />
                        </Block>

                        <Grid className="items-center gap-4">
                            <Block className="bg-[#001C29] w-[80%] md:w-[60%] justify-between px-[8%] p-2 rounded-md">
                                <Block className="items-center">
                                    <Image
                                        src={Eth}
                                        alt="bg-image"
                                        classname="w-[45px] h-[45px]"
                                    />
                                    <h2 className="font-semibold lg:text-[20px]">ETH</h2>
                                </Block>
                                <Block className="items-center gap-2">
                                    <Image
                                        src={Usdt}
                                        alt="bg-image"
                                        classname="w-[40px] h-[40px]"
                                    />
                                    <h2 className="font-semibold lg:text-[20px]">USDT</h2>
                                </Block>
                            </Block>
                            <h2 className="lg:text-[15px] text-gray-400 font-bold">BALANCE <span className="text-white">0LSW</span> {"\u2022"} GASFEE <span className="text-white">0.000LSW - 0$</span></h2>
                        </Grid>

                        <Block className="items-center px-[10%] gap-6">
                            <Grid className="bg-[#001C29] w-full rounded-md gap-4 p-4">
                                <h2 className="lg:text-[16px] font-semibold text-white">0.00</h2>
                                <h2 className="lg:text-[16px] font-semibold">YOU SEND</h2>
                            </Grid>

                            <Grid className="bg-[#001C29] w-full rounded-md gap-4 p-4">
                                <h2 className="lg:text-[16px] font-semibold text-white">0.00</h2>
                                <h2 className="lg:text-[16px] font-semibold">YOU SEND</h2>
                            </Grid>

                        </Block>

                        <Grid className="px-[10%] pb-[4%]">
                            <button className="bg-gradient-to-r via-[#00C2B6] from-[#5865F2] to-[#5865F2] rounded-md p-1 lg:text-[24px] text-white font-bold">
                                CONNECT WALLET
                            </button>
                        </Grid>
                    </Grid>

                </Grid>
            </div>
        </section >
    )
}

export default Hero;