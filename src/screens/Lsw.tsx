import Grid from "../components/Grid";
import Image from "../components/Image";
import LswImg from "../assets/lsw.png";
import Block from "../components/Block";
import { DropDown } from "../components/Dropdown";

const Lsw = () => {
  return (
    <section className="overflow-hidden rounded-e-md">
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-15 justify-between lg:px-20 p-4 py-[5%] transition-opacity"
        data-aos="flip-up"
      >
        <Grid className="w-full h-full justify-center gap-4 md:px-[4%]">
          <Block className="gap-4 justify-between w-full !items-start">
            <Grid>
              <div className="md:w-[105px] md:h-[152px] bg-gradient-to-t shadow-md opacity-70 to-[#00C2B6] from-[#5865F2]" />
            </Grid>

            <Grid className="gap-4">
              <h2 className="bg-clip-text text-transparent bg-gradient-to-r to-[#00C2B6] from-[#5865F2] lg:text-[64px] font-inter font-black text-3xl lg:leading-[80px]">
                WHAT IS LSW
              </h2>
              <p className="text-gray-400 lg:text-[32px] lg:leading-[38px] font-normal text-lg">
                LSW is a cryptocurrency designed to revolutionize the live
                streaming experience. It empowers viewers to directly support
                creators across different platforms with lower fees, while
                offering creators new monetization opportunities and fostering a
                more connected community.
              </p>
            </Grid>
          </Block>

          <Grid className="px-[6%]">
            <DropDown title="How does LSW benefit viewers?">
              <h2 className="lg:text-[32px] lg:leading-[38px] font-medium ps-5 !font-roboto text-lg">
                LSW allows viewers to:
              </h2>
              <ul className="lg:text-[32px] lg:leading-[38px] font-medium ps-5 space-y-6 !list-disc !list-image-none !font-roboto text-lg">
                <li>
                  Support creators anywhere with a single currency, breaking
                  free from platform limitations.
                </li>
                <li>
                  Cut out the middleman and send more of their contribution
                  directly to creators with lower transaction fees.
                </li>
                <li>
                  Unlock exclusive content and participate in interactive
                  features within the LSW ecosystem.
                </li>
              </ul>
            </DropDown>

            <DropDown title="How does LSW benefit creators?">
              <h2 className="lg:text-[32px] lg:leading-[38px] font-medium ps-5 !font-roboto text-lg">
                LSW empowers creators to:
              </h2>
              <ul className="lg:text-[32px] lg:leading-[38px] font-medium ps-5 space-y-6 !list-disc !list-image-none !font-roboto text-lg">
                <li>
                  Receive direct support from viewers across platforms,
                  maximizing their earnings potential.
                </li>
                <li>
                  Offer exclusive content purchasable with LSW, generating a new
                  revenue stream.
                </li>
                <li>
                  Build a stronger connection with their audience through
                  interactive features and community engagement tools.
                </li>
              </ul>
            </DropDown>

            <DropDown title="How are LSW tokens allocated?">
              <h2 className="lg:text-[32px] lg:leading-[38px] font-medium ps-5 !font-roboto text-lg">
                LSW prioritizes creator success, platform growth, and community
                engagement through its token allocation:
              </h2>
              <ul className="lg:text-[32px] lg:leading-[38px] font-medium ps-5 space-y-6 !list-disc !list-image-none !font-roboto text-lg">
                <li>
                  42.5%: Creator empowerment initiatives (direct support pools,
                  content grants, engagement programs)
                </li>
                <li>
                  35%: Platform growth and marketing (campaigns, development,
                  partnerships)
                </li>
                <li>
                  10%: Community rewards for early adopters and airdrops
                  participants
                </li>
                <li>
                  12.5%: Initial staking rewards (until full platform launch)
                </li>
              </ul>
            </DropDown>

            <DropDown title="Where can I learn more about LSW?">
              <p className="lg:text-[32px] lg:leading-[38px] font-medium font-roboto text-lg">
                We encourage you to explore the official LSW website (link to be
                provided) and follow our social media channels for the latest
                updates. Stay tuned for exciting developments in the live
                streaming revolution powered by LSW!
              </p>
            </DropDown>

            {/*<ul className="space-y-8 text-gray-500 list-[square] text-[38px] dark:text-gray-400">
                            <li className="lg:text-[32px] font-bold text-white font-inter text-2xl">
                                How does LSW benefit viewers?
                            </li>
                            <li className="lg:text-[32px] font-bold text-white font-inter text-2xl">
                                How does LSW benefit creators?

                            </li>
                            <li className="lg:text-[32px] font-bold text-white font-inter text-2xl">
                                How are LSW tokens allocated?

                            </li>

                            <li className="lg:text-[32px] font-bold text-white font-inter text-2xl">
                                Where can I learn more about LSW?

                            </li>
    </ul>*/}
          </Grid>
        </Grid>

        <Grid className="items-center justify-center max-h-[65vh]">
          <Image
            src={LswImg}
            alt="bg-image"
            className="w-full h-full lg:w-[736px] lg:h-[743px]"
          />
        </Grid>
      </div>
    </section>
  );
};

export default Lsw;
