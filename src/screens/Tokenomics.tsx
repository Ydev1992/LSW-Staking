import Grid from "../components/Grid"
import Image from "../components/Image"
import Token from "../assets/tokenomics.png";

const Tokenomics = () => {
    return (
        <section className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-15 justify-between lg:px-20 p-6 py-[5%]">
                <Grid className="w-full max-h-[65vh]">
                    <Image
                        src={Token}
                        alt="bg-image"
                        classname="w-full h-full"
                    />
                </Grid>
                <Grid className="w-full h-full justify-center gap-6">
                    <h2 className="bg-clip-text text-transparent bg-gradient-to-r to-[#00C2B6] from-[#5865F2] lg:text-4xl font-bold">Tokenomics</h2>
                    <Grid className="gap-6 text-white text-sm font-normal">
                        <h2>LSW (Live Streaming Wire) understands the importance of a thriving ecosystem. Our token allocation reflects this, with resources strategically distributed to empower creators, fuel platform growth, and reward our incredible community.</h2>
                        <h2>42.5 Of LSW Supply will be used to Develop the business solution and fund the Operations of Live streaming Wire.</h2>
                        <h2>35% of LSW Tokens will be used for Platform growth and marketing will be fueled by strategic campaigns, ongoing platform development, and key partnerships. A Significant portion will be is dedicated to creators, including direct support pools, exclusive content creation grants, and community engagement programs.</h2>
                        <h2>We value our community, so 10% of tokens are allocated for rewarding early adopters, active participation, and potential future governance rights.</h2>
                        <h2>Finally, After the launch a 12.5% will allocated for attractive Staking rewards</h2>
                        <h2>This strategic plan prioritizes creator success, platform growth, and a thriving community – the key ingredients for revolutionizing the live streaming experience.</h2>
                    </Grid>
                </Grid>
            </div>
        </section >
    )
}

export default Tokenomics;