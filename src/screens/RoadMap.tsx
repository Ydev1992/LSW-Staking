import Grid from "../components/Grid";
import Vector from "../assets/vector.svg";
import Image from "../components/Image";


const RoadMap = () => {
    return (
        <section className="overflow-hidden">
            <Grid className="gap-4 justify-center items-center lg:px-20 p-6 py-[5%]">

                <Grid className="md:w-[50%] h-full justify-center gap-4 items-center">
                    <h2 className="bg-clip-text text-transparent bg-gradient-to-l to-[#00C2B6] from-[#5865F2] lg:text-5xl font-bold">ROAD MAP</h2>
                    <h2 className="text-gray-400 lg:text-md text-center font-normal">Our project roadmap is set out in four phases, starting with a fair presale to raise the necessary funds for marketing and solution development and ending with the fully developed Live Streaming Wire platform. </h2>
                </Grid>
                <Grid className="absolute -z-40">
                    <Image src={Vector} />
                </Grid>
                <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center md:gap-20 gap-10 z-10">
                    <Grid className="gap-3 items-center md:items-start shadow-xl  rounded-lg px-8 py-20 max-w-[350px] z-10">
                        <h2 className="font-bold text-lg text-white"><span className="text-[#5865F2]">PHASE 1: </span>PRESALE AND TOKEN DISTRIBUTION </h2>
                        <h2 className="bg-clip-text text-transparent bg-gradient-to-l to-[#00C2B6] from-[#5865F2] lg:text-4xl font-bold">PRESALE</h2>
                        <ul className="space-y-4 list-disc text-sm text-gray-400 font-medium px-4">
                            <li>
                                Industry research and
                                consultation.
                            </li>
                            <li>
                                Token, presale and staking
                                contract development.
                            </li>
                            <li>
                                LSW campaign - presale
                                launch, claim and exchange listings.
                            </li>
                            <li>Extensive multimedia marketing campaign launch.</li>
                        </ul>
                    </Grid>

                    <Grid className="gap-3 items-center md:items-start shadow-xl rounded-lg px-8 py-20 max-w-[350px] z-99999">
                        <h2 className="font-bold text-lg text-white"><span className="text-[#5865F2]">PHASE 2: </span>PLATFORM DEVELOPMENT AND FACILITY SETUP</h2>
                        <h2 className="bg-clip-text text-transparent bg-gradient-to-l to-[#00C2B6] from-[#5865F2] lg:text-4xl font-bold">DEVELOPMENT</h2>
                        <ul className="space-y-4 list-disc text-sm text-gray-400 font-medium px-4">
                            <li>
                                App and desktop software
                                development.
                            </li>
                            <li>
                                Team expansion.
                            </li>
                            <li>
                                Negotiations with
                                Live streaming Platforms.
                            </li>
                            <li>Stake to Earn.</li>
                            <li>Airdrops Distribution.</li>
                        </ul>
                    </Grid>

                    <Grid className="gap-3 items-center md:items-start shadow-lg rounded-lg px-8 py-20 max-w-[350px]">
                        <h2 className="font-bold text-lg text-white"><span className="text-[#5865F2]">PHASE 3: </span>Public Launch of Our Ecosystem</h2>
                        <h2 className="bg-clip-text text-transparent bg-gradient-to-l to-[#00C2B6] from-[#5865F2] lg:text-4xl font-bold">LAUNCH</h2>
                        <ul className="space-y-4 list-disc text-sm text-gray-400 font-medium px-4">
                            <li>
                                Launch Of Live Streaming
                                Wire Ecosystem.
                            </li>
                            <li>
                                Company growth.
                            </li>
                            <li>
                                Further negotiations with external
                                live streaming partners.
                            </li>
                            <li>Extended marketing including
                                affiliates and influencers. </li>
                        </ul>
                    </Grid>

                    <Grid className="gap-3 items-center md:items-start shadow-lg rounded-lg px-8 py-20 max-w-[350px] min-h-[450px]">
                        <h2 className="font-bold text-lg text-white"><span className="text-[#5865F2]">PHASE 4: </span>MASS ADOPTION OF THE LSW TOKEN</h2>
                        <h2 className="bg-clip-text text-transparent bg-gradient-to-l to-[#00C2B6] from-[#5865F2] lg:text-4xl font-bold">MASS ADOPTION</h2>
                        <ul className="space-y-4 list-disc text-sm text-gray-400 font-medium px-4">
                            <li>
                                Continued marketing to push
                                market cap growth.
                            </li>
                            <li>
                                Listing mainstream platforms.
                            </li>
                        </ul>
                    </Grid>
                </div>
            </Grid>
        </section >
    )
}

export default RoadMap;