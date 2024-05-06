import Grid from "../components/Grid"

const Works = () => {
    return (
        <section className="overflow-hidden">
            <div className="grid grid-cols-1 justify-between lg:px-20 p-6 py-[5%] gap-10">
                <Grid className="w-full h-full justify-center gap-1">
                    <h2 className="bg-clip-text text-transparent bg-gradient-to-r to-[#00C2B6] from-[#5865F2] lg:text-6xl font-bold">HOW IT WORKS?</h2>
                    <h2 className="lg:text-lg text-white font-semibold">HERE IS THE MAGIC</h2>
                </Grid>
                <Grid className="justify-center md:max-w-[50%] md:place-self-end md:-top-[10px] relative">
                    <h2 className="text-lg text-gray-400 font-medium">LSW cuts out the middleman, so creators get more and viewers pay less. Plus, the ability to support your creators on any platform. Basically, LSW makes live streaming mor rewarding for everyone. </h2>
                </Grid>
                <div className="flex flex-col md:flex-row justify-between items-center mt-[10%] md:mt-0">
                    <Grid className="md:w-[30%] gap-4 px-[4%]">
                        <h2 className="bg-clip-text text-transparent bg-gradient-to-r to-[#00C2B6] from-[#5865F2] lg:text-3xl font-bold">WHY LSW</h2>

                        <ul className="space-y-4 list-disc list-inside text-sm text-gray-400 font-medium">
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
                    <Grid className="mt-10 justify-center gap-4 md:w-[40%] lg:px-[8%]">

                        <Grid className="gap-1">
                            <h2 className="bg-clip-text text-transparent bg-gradient-to-r to-[#00C2B6] from-[#5865F2] lg:text-3xl font-bold">THE CASE FOR MINING</h2>
                            <h2 className="text-sm text-gray-400 font-semibold">REASONS TO USE LSW IN ALL OF YOUR TRANSACTIONS</h2>
                        </Grid>

                        <Grid className="gap-1">
                            <h2 className="lg:text-2xl font-bold text-white">SUPERCHARGE YOU SUPPORT</h2>
                            <h2 className="text-sm text-gray-400 font-medium">Unlock exclusive content, participate in interactive challenges, and gain voting rights within LSW ecosystem - all by using LSW.</h2>
                        </Grid>

                        <Grid className="gap-1">
                            <h2 className="lg:text-2xl font-bold text-white">REACH A WIDER AUDIENCE</h2>
                            <h2 className="text-sm text-gray-400 font-medium">Attract viewers across different platforms with a single, universally accepted currency. LSW expands your potential fanbase and fosters a more connected community.</h2>
                        </Grid>


                        <Grid className="gap-1 mt-[15%] md:left-[2%] relative">
                            <h2 className="lg:text-2xl font-bold text-white">BOOST YOUR REVENUEE</h2>
                            <h2 className="text-sm text-gray-400 font-medium">Earn directly from viewer contributions with minimal fees. LSW empowers you to monetize your content effectively and generate a sustainable income stream.</h2>
                        </Grid>

                        <Grid className="gap-1 md:left-[2%] relative">
                            <h2 className="lg:text-2xl font-bold text-white">DEEPER FAN ENGAGEMENT</h2>
                            <h2 className="text-sm text-gray-400 font-medium">LSW fosters interactive experiences that build stronger relationships with your viewers. Create exclusive content purchasable with LSW and fuel a more loyal following.</h2>
                        </Grid>

                    </Grid>
                </div>
            </div>
        </section >
    )
}

export default Works;