import Grid from "../components/Grid"
import Image from "../components/Image"
import LswImg from "../assets/lsw.png";


const Lsw = () => {
    return (
        <section className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-15 justify-between lg:px-20 p-4 py-[5%]">

                <Grid className="w-full h-full justify-center gap-4 md:px-[4%]">
                    <h2 className="bg-clip-text text-transparent bg-gradient-to-r to-[#00C2B6] from-[#5865F2] lg:text-4xl font-bold">WHAT IS LSW</h2>
                    <h2 className="text-gray-400 text-sm font-normal">LSW is a cryptocurrency designed to revolutionize the live streaming experience. It empowers viewers to directly support creators across different platforms with lower fees, while offering creators new monetization opportunities and fostering a more connected community.</h2>
                    <Grid className="px-[8%] mt-[4%]">

                        <ul className="space-y-8 text-gray-500 list-disc dark:text-gray-400">
                            <li className="text-xl font-bold text-white">
                                How does LSW benefit viewers?
                                <h2 className="ps-5 mt-2 space-y-1 text-sm text-gray-400 font-normal">LSW allows viewers to:</h2>
                                <ol className="ps-5 mt-2 space-y-3 list-disc text-sm text-gray-400 font-normal">
                                    <li>Support creators anywhere with a single currency,
                                        breaking free from platform limitations.</li>
                                    <li>Cut out the middleman and send more of their
                                        contribution directly to creators with lower transaction fees.</li>
                                    <li>Unlock exclusive content and participate in interactive features within the LSW ecosystem.
                                    </li>
                                </ol>
                            </li>
                            <li className="text-xl font-bold text-white">
                                How does LSW benefit creators?
                                <h2 className="ps-5 mt-2 space-y-1 text-sm text-gray-400 font-normal">LSW empowers creators to:</h2>
                                <ul className="ps-5 mt-2 space-y-3 list-disc text-sm text-gray-400 font-normal">
                                    <li>Receive direct support from viewers across platforms,
                                        maximizing their earnings potential.</li>
                                    <li>Offer exclusive content purchasable with LSW,
                                        generating a new revenue stream.
                                    </li>
                                    <li>	Build a stronger connection with their audience through
                                        interactive features and community engagement tools.
                                    </li>
                                </ul>
                            </li>
                            <li className="text-xl font-bold text-white">
                                How are LSW tokens allocated?
                                <h2 className="ps-5 mt-2 space-y-1 text-sm text-gray-400 font-normal">LSW prioritizes creator success, platform growth, and community engagement through its token allocation:</h2>
                                <ul className="ps-5 mt-2 space-y-3 list-disc text-sm text-gray-400 font-normal">
                                    <li>42.5%: Creator empowerment initiatives
                                        (direct support pools, content grants, engagement programs)</li>
                                    <li>35%: Platform growth and marketing
                                        (campaigns, development, partnerships)
                                    </li>
                                    <li>10%: Community rewards for early adopters and airdrops participants</li>
                                    <li>12.5%: Initial staking rewards (until full platform launch)</li>
                                </ul>
                            </li>

                            <li className="text-xl font-bold text-white">
                                Where can I learn more about LSW?
                                <h2 className="ps-5 mt-2 space-y-1 list-disc list-inside text-sm text-gray-400 font-normal">We encourage you to explore the official LSW website (link to be provided)</h2>
                                <h2 className="ps-5 mt-2 space-y-1 list-disc list-inside text-sm text-gray-400 font-normal">and follow our social media channels for the latest updates</h2>
                                <h2 className="ps-5 mt-2 space-y-1 list-disc list-inside text-sm text-gray-400 font-normal">Stay tuned for exciting developments in the live streaming revolution powered by LSW!</h2>
                            </li>
                        </ul>

                    </Grid>
                </Grid>

                <Grid className="items-center justify-center max-h-[65vh]">
                    <Image
                        src={LswImg}
                        alt="bg-image"
                        classname="w-full h-full"
                    />
                </Grid>
            </div>
        </section >
    )
}

export default Lsw;