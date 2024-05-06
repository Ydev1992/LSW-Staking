import Block from "../components/Block";
import Grid from "../components/Grid";
import InputComponent from "../components/Input";
import Eth from "../assets/eth.png";
import Image from "../components/Image"

const Converter = () => {
    return (
        <section className="overflow-hidden mt-[25%] md:mt-[7%]">
            <Grid className="w-full lg:px-20 p-6 py-[5%] gap-10 justify-center items-center">
                <Grid className="items-center gap-4">
                    <h2 className="text-white font-bold text-4xl">BUY LSW TOKEN</h2>
                    <h2 className="text-white font-semibold text-xl">THIS ROUND ENDS IN</h2>
                    <h2 className="bg-clip-text text-transparent bg-gradient-to-r to-[#00C2B6] from-[#5865F2] via-[#20A0CC] font-semibold text-4xl">00 :  00  :  00  :  00</h2>

                </Grid>
                <Grid className="md:w-[70%] justify-center gap-4">
                    <Block className="justify-between items-center font-bold text-md">
                        <h2>Presale Stage 5</h2>
                        <h2 className="font-normal">RAISED</h2>
                        <h2 className="text-[#5865F2] text-xl">$0,000,000</h2>
                    </Block>
                    <div className="bg-gradient-to-r to-[#00C2B6] from-[#5865F2] via-[#20A0CC] h-1" />
                    <Grid className="justify-center items-center mt-[4%]">
                        <h2 className="font-bold text-md">1 LSW</h2>
                        <h2 className="text-white text-3xl font-bold">$0,000,000</h2>
                    </Grid>
                    <Block className="justify-between items-center gap-20 mt-[4%]">
                        <Block className="bg-[#001C29] rounded-md p-3 justify-center items-center gap-10 w-full">
                            <h2 className="font-bold text-md text-white">LASTING PRICE</h2>
                            <h2 className="font-bold text-md text-white">$0,00  <span className="text-[#00C2B6]">(00.00%)</span></h2>
                        </Block>

                        <Block className="bg-[#001C29] rounded-md p-3 justify-center items-center gap-10 w-full">
                            <h2 className="font-bold text-md text-white">NEXT PRICE</h2>
                            <h2 className="font-bold text-md text-white">$0,00  <span className="text-[#00C2B6]">(00.00%)</span></h2>
                        </Block>
                    </Block>

                    <Grid className="justify-center items-center mt-[4%] shadow-lg rounded-md">
                        <Block className="gap-10">
                            <Grid className="gap-2">
                                <h2 className="text-white text-xs font-bold">SELECT A PAYMENT METHOD</h2>
                                <InputComponent classname="!bg-[#001C29]" left={
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
                            <Grid className="gap-2">
                                <Block className="justify-between">
                                    <h2 className="text-white text-xs font-bold">USD COST</h2>
                                    <h2 className="text-white text-xs font-bold">$0,00</h2>
                                </Block>
                                <InputComponent classname="!bg-[#001C29]" left={
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
                        <Block className="gap-10 !items-start">
                            <Grid className="w-full">
                                <h2>BALANCE</h2>
                                <Grid className="">
                                    <h2>0 LSW</h2>
                                    <h2>LSW</h2>
                                </Grid>
                            </Grid>
                            <Grid>
                                <h2>USD COST</h2>
                                <Grid>
                                    <h2>$0,00</h2>
                                    <h2>0</h2>
                                </Grid>
                            </Grid>
                        </Block>
                    </Grid>
                    <Grid>
                        <button>
                            CONNECT WALLET
                        </button>
                        <Block>
                            <h2>How to buy?</h2>
                            <h2>LSW Wallet</h2>
                        </Block>
                    </Grid>
                </Grid>
            </Grid>
        </section >
    )
}

export default Converter