import Grid from "../components/Grid"
import Image from "../components/Image";
import Money from "../assets/money.png";
import Btc from "../assets/trading.png";
import Hand from "../assets/hand.png";
import Block from "../components/Block";


const Buy = () => {
    return (
        <section className="overflow-hidden mt-[4%]">
            <Grid className="py-[2%] gap-10">
                <Block className="w-full h-full gap-4 justify-between">
                    <Block className="gap-4 px-6 md:px-10">
                        <div className="md:w-[105px] md:h-[222px] h-[50px] w-[50px] bg-gradient-to-t shadow-md opacity-70 to-[#00C2B6] from-[#5865F2]" />
                        <Grid className="gap-2">
                            <h2 className="bg-clip-text text-transparent bg-gradient-to-r to-[#00C2B6] from-[#5865F2] lg:text-[96px] lg:leading-[120px] font-black font-inter text-2xl">HOW TO BUY</h2>
                            <h2 className="text-white lg:text-[40px] lg:leading-[50px] font-bold font-inter">How To Access lSW Ecosystem</h2>
                        </Grid>
                    </Block>

                    <div className="w-[30%] h-2 bg-gradient-to-r to-[#00C2B6] from-[#5865F2] self-center" />
                </Block>
                <div className="grid grid-cols-1 md:grid-cols-3 justify-between items-center gap-10 md:gap-60 md:px-30 px-6 text-center md:text-start">
                    <Grid className="gap-3 items-center md:items-start">
                        <Image
                            src={Money}
                            alt="bg-image"
                            classname="w-[147px] h-[83px]"
                        />
                        <h2 className="font-bold lg:text-[40px] lg:leading-[50px] text-white font-inter">BUY LSW</h2>
                        <h2 className="text-white lg:text-[32px] lg:leading-[38px] font-normal">Connect your wallet and use the presale widget at the top of the page to buy LSW tokens. You can use the ETH, BNB, or USDT. Make sure you have enough ETH or BNB to cover gas fees.  </h2>
                    </Grid>

                    <Grid className="gap-3 items-center md:items-start">
                        <Image
                            src={Btc}
                            alt="bg-image"
                            classname="w-[147px] h-[83px]"
                        />
                        <h2 className="font-bold lg:text-[40px] lg:leading-[50px] text-white font-inter">Earn BTC</h2>
                        <h2 className="text-white lg:text-[32px] lg:leading-[38px] font-normal">Airdrops, top contributors of the pre-sale will be given a spectator badge and will earn Voting rights, and an introductory free Hosting stream where he and the creator will engage in a challenge, and of course you can support either of them using our LSW tokens.</h2>
                    </Grid>

                    <Grid className="gap-3 items-center md:items-start">
                        <Image
                            src={Hand}
                            alt="bg-image"
                            classname="w-[147px] h-[83px]"
                        />
                        <h2 className="font-bold lg:text-[40px] lg:leading-[50px] text-white font-inter">Stake to Earn
                            Exclusive NFTS
                            With LSW</h2>
                        <h2 className="bg-clip-text text-transparent bg-gradient-to-l to-[#00C2B6] from-[#5865F2] lg:text-[40px] lg:leading-[50px] font-bold font-inter">COMING SOON</h2>
                    </Grid>
                </div>
            </Grid>
        </section >
    )
}

export default Buy;