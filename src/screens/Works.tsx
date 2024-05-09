import Grid from "../components/Grid"
import Block from "../components/Block";

const Works = () => {
    return (
        <section className="overflow-hidden">
            <div className="grid grid-cols-1 justify-between lg:px-20 p-6 py-[5%] gap-10">
                <Block className="gap-8">
                    <div className="md:w-[105px] md:h-[222px] bg-gradient-to-t shadow-md opacity-70 to-[#00C2B6] from-[#5865F2] self-start" />
                    <Grid className="gap-6">
                        <h2 className="bg-clip-text text-transparent bg-gradient-to-r to-[#00C2B6] from-[#5865F2] lg:text-[96px] lg:leading-[120px] font-inter font-black">HOW IT WORKS?</h2>
                        <Block className="justify-between !items-start pr-20">
                            <h2 className="lg:text-[64px] lg:leading-[80px] text-white font-semibold font-inter w-full">HERE IS THE MAGIC</h2>
                            <h2 className="lg:text-[40px] lg:leading-[47px] text-gray-400 font-medium w-full">LSW cuts out the middleman, so creators get more and viewers pay less. Plus, the ability to support your creators on any platform. Basically, LSW makes live streaming mor rewarding for everyone. </h2>
                        </Block>

                    </Grid>

                </Block>
                <div className="flex flex-col md:flex-row justify-between mt-[5%]">
                    <Grid className="md:w-[40%] gap-4 px-[4%]">
                        <h2 className="bg-clip-text text-transparent bg-gradient-to-r to-[#00C2B6] from-[#5865F2] lg:text-[36px] lg:leading-[45px] font-black font-inter">WHY LSW</h2>

                        <ul className="space-y-10 list-[square] lg:text-[32px] lg:leading-[38px] text-gray-400 font-medium">
                            <li>
                                Universally accepted across all
                                live streaming platforms
                            </li>
                            <li>
                                Flexible tipping options with
                                LSW tokens
                            </li>
                            <li>
                                Lower transaction fees,
                                maximizing the impact of viewer
                                support for creators
                            </li>
                            <li>Direct support from viewers,
                                potential for exclusive
                                content sales using LSW</li>
                            <li>
                                Fosters deeper engagement with
                                interactive features, challenges,
                                and voting rights (for LSW holders)
                            </li>
                            <li>
                                Secure blockchain technology
                                safeguards transactions
                            </li>
                        </ul>

                    </Grid>

                    <Grid className="gap-6 md:w-[40%]">
                        <Grid className="mb-[4%]">
                            <h2 className="lg:text-[24px] lg:leading-[30px] text-white font-inter font-extrabold">REASONS TO USE LSW IN ALL OF YOUR TRANSACTIONS</h2>
                        </Grid>
                        <Grid className="gap-3">
                            <h2 className="lg:text-[32px] lg:leading-[40px] font-extrabold text-white font-inter">SUPERCHARGE YOU SUPPORT</h2>
                            <h2 className="lg:text-[32px] lg:leading-[38px] text-gray-400 font-medium">Unlock exclusive content, participate in interactive challenges, and gain voting rights within LSW ecosystem - all by using LSW.</h2>
                        </Grid>

                        <Grid className="gap-3">
                            <h2 className="lg:text-[32px] lg:leading-[40px] font-extrabold text-white font-inter">REACH A WIDER AUDIENCE</h2>
                            <h2 className="lg:text-[32px] lg:leading-[38px] text-gray-400 font-medium">Attract viewers across different platforms with a single, universally accepted currency. LSW expands your potential fanbase and fosters a more connected community.</h2>
                        </Grid>


                        <Grid className="gap-3">
                            <h2 className="lg:text-[32px] lg:leading-[40px] font-extrabold text-white font-inter">BOOST YOUR REVENUEE</h2>
                            <h2 className="lg:text-[32px] lg:leading-[38px] text-gray-400 font-medium">Earn directly from viewer contributions with minimal fees. LSW empowers you to monetize your content effectively and generate a sustainable income stream.</h2>
                        </Grid>

                        <Grid className="gap-3">
                            <h2 className="lg:text-[32px] lg:leading-[40px] font-extrabold text-white font-inter">DEEPER FAN ENGAGEMENT</h2>
                            <h2 className="lg:text-[32px] lg:leading-[38px] text-gray-400 font-medium">LSW fosters interactive experiences that build stronger relationships with your viewers. Create exclusive content purchasable with LSW and fuel a more loyal following.</h2>
                        </Grid>

                    </Grid>
                </div>
            </div>
        </section >
    )
}

export default Works;