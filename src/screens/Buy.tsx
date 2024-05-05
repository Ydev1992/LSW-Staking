import Grid from "../components/Grid"
import Image from "../components/Image";
import Money from "../assets/money.png";
import Btc from "../assets/trading.png";
import Hand from "../assets/hand.png";


const Buy = () => {
    return (
        <section className="overflow-hidden">
            <Grid className="lg:px-10 bg-gradient-to-r from-[#000F16] to-[#213A4A] p-4 gap-10">
                <Grid className="w-full h-full justify-center gap-1">
                    <h2 className="bg-clip-text text-transparent bg-gradient-to-l to-[#00C2B6] from-[#5865F2] lg:text-4xl font-bold">HOW TO BUY</h2>
                    <h2 className="text-white lg:text-3xl font-bold">How To Access lSW Mining</h2>
                </Grid>
                <div className="grid grid-cols-1 md:grid-cols-3 justify-between items-center gap-8 md:gap-60">
                    <Grid className="gap-3 items-center md:items-start">
                        <Image
                            src={Money}
                            alt="bg-image"
                            classname="w-[147px] h-[83px]"
                        />
                        <h2 className="font-bold text-2xl text-white">BUY LSW</h2>
                        <h2 className="text-white text-sm font-medium">Connect your wallet and use the presale widget at the top of the page to buy LSW tokens. You can use the ETH, BNB, or USDT. Make sure you have enough ETH or BNB to cover gas fees.  </h2>
                    </Grid>

                    <Grid className="gap-3 items-center md:items-start">
                        <Image
                            src={Btc}
                            alt="bg-image"
                            classname="w-[147px] h-[83px]"
                        />
                        <h2 className="font-bold text-2xl text-white">Earn BTC</h2>
                        <h2 className="text-white text-sm font-medium">Airdrops, top contributors of the pre-sale will be given a spectator badge and will earn Voting rights, and an introductory free Hosting stream where he and the creator will engage in a challenge, and of course you can support either of them using our LSW tokens.</h2>
                    </Grid>

                    <Grid className="gap-3 items-center md:items-start">
                        <Image
                            src={Hand}
                            alt="bg-image"
                            classname="w-[147px] h-[83px]"
                        />
                        <h2 className="font-bold text-2xl text-white">Stake to Earn
                            Exclusive NFTS
                            With LSW</h2>
                        <h2 className="bg-clip-text text-transparent bg-gradient-to-l to-[#00C2B6] from-[#5865F2] text-4xl font-bold">COMING SOON</h2>
                    </Grid>
                </div>
            </Grid>
        </section >
    )
}

export default Buy;