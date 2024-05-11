import Block from "../components/Block";
import Grid from "../components/Grid";
import InputComponent from "../components/Input";
import Eth from "../assets/eth.png";
import Image from "../components/Image"

const Converter = () => {
    return (
        <section className="overflow-hidden mt-[25%] md:mt-[1%]">
            <Grid className="w-full lg:px-20 p-6 py-[5%] gap-10 justify-center items-center">
                <Grid className="items-center gap-8">
                    <h2 className="text-white font-bold font-inter text-5xl">BUY LSW TOKEN</h2>
                    <h2 className="text-white font-semibold text-3xl font-inter">THIS ROUND ENDS IN</h2>
                    <h2 className="bg-clip-text text-transparent bg-gradient-to-r to-[#00C2B6] from-[#5865F2] via-[#20A0CC] font-semibold text-6xl font-inter">00 :  00  :  00  :  00</h2>

                </Grid>
                <Grid className="md:w-[55%] justify-center gap-4">
                    <Block className="justify-between items-center font-bold text-md">
                        <h2>Presale Stage 5</h2>
                        <h2 className="font-normal">RAISED</h2>
                        <h2 className="text-[#5865F2] text-xl">$0,000,000</h2>
                    </Block>
                    <div className="bg-gradient-to-r to-[#00C2B6] from-[#5865F2] via-[#20A0CC] h-1" />
                    <Grid className="justify-center items-center mt-[4%] gap-2">
                        <h2 className="font-bold text-md">1 LSW</h2>
                        <h2 className="text-white text-5xl font-bold">$0,000,000</h2>
                    </Grid>
                    <Block className="justify-between items-center gap-10 md:gap-20 mt-[4%] flex-col md:flex-row">
                        <Block className="bg-[#001C29] rounded-md p-4 justify-center items-center gap-10 w-full">
                            <h2 className="font-bold text-md text-white">LASTING PRICE</h2>
                            <h2 className="font-bold text-md text-white">$0,00  <span className="text-[#00C2B6]">(00.00%)</span></h2>
                        </Block>

                        <Block className="bg-[#001C29] rounded-md p-4 justify-center items-center gap-10 w-full">
                            <h2 className="font-bold text-md text-white">NEXT PRICE</h2>
                            <h2 className="font-bold text-md text-white">$0,00  <span className="text-[#00C2B6]">(00.00%)</span></h2>
                        </Block>
                    </Block>

                    <Grid className="justify-center items-center mt-[4%] md:mt-[5%] md:mx-[5%] shadow-lg rounded-md">
                        <Block className="gap-10 md:flex-row flex-col">
                            <Grid className="gap-6">
                                <h2 className="text-md font-medium text-gray-300 w-full">SELECT A PAYMENT METHOD</h2>
                                <InputComponent classname="!bg-[#001C29] text-white" left={
                                    <Block className="gap-1">
                                        <Image
                                            src={Eth}
                                            alt="bg-image"
                                            classname="w-[57px] h-[57px]"
                                        />
                                        <h2 className="text-white font-bold text-md">Eth</h2>
                                    </Block>
                                } />
                            </Grid>
                            <Grid className="gap-6">
                                <Block className="justify-between">
                                    <h2 className="text-md font-medium text-gray-300">USD COST</h2>
                                    <h2 className="text-md font-medium text-gray-300">$0,00</h2>
                                </Block>
                                <InputComponent classname="!bg-[#001C29] text-white" left={
                                    <Block className="gap-1">
                                        <Image
                                            src={Eth}
                                            alt="bg-image"
                                            classname="w-[57px] h-[57px]"
                                        />
                                        <h2 className="text-white font-bold text-md">Eth</h2>
                                    </Block>
                                } />
                            </Grid>

                        </Block>
                        <Block className="gap-10 mt-[6%] w-full md:w-[75%] flex-col md:flex-row">
                            <Grid className="w-full gap-6 text-gray-300">
                                <h2 className=" font-semibold text-md">BALANCE</h2>
                                <Grid className="!bg-[#001C29] rounded-md px-6 gap-15 py-4">
                                    <h2 className="text-xl font-semibold">0 LSW</h2>
                                    <h2 className="text-2xl font-semibold">LSW</h2>
                                </Grid>
                            </Grid>
                            <Grid className="w-full gap-6 text-gray-300">
                                <h2 className="font-semibold text-md">USD COST</h2>
                                <Grid className="!bg-[#001C29] rounded-md px-6 gap-15 py-4">
                                    <h2 className="text-xl font-semibold">$0,00</h2>
                                    <h2 className="text-2xl font-semibold">0</h2>
                                </Grid>
                            </Grid>
                        </Block>

                        <Grid className="mt-[10%] md:w-[70%] gap-4">
                            <button className="bg-gradient-to-r to-[#00C2B6] from-[#5865F2] rounded-md p-3 text-2xl text-white font-bold">
                                CONNECT WALLET
                            </button>
                            <Block className="items-center justify-center gap-10">
                                <h2 className="font-bold text-lg">How to buy?</h2>
                                <h2 className="font-bold text-lg">LSW Wallet</h2>
                            </Block>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
        </section >
    )
}

export default Converter