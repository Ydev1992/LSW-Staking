import Image from "../components/Image";
import Bigo from "../assets/tetimonial/bigo.png";
import Caffine from "../assets/tetimonial/caffiene.png";
import Meta from "../assets/tetimonial/meta.png";
import Nimo from "../assets/tetimonial/nimo.png";
import Spoon from "../assets/tetimonial/spoon.png";
import Tiktok from "../assets/tetimonial/tiktok.png";
import Twitch from "../assets/tetimonial/twitch.png";

const Testimonial = () => {
  return (
    <section className="overflow-hidden">
      <div className="bg-gray-300 w-full">
        <div className="grid grid-cols-7 justify-between md:gap-4 gap-2 items-center lg:px-10 p-4 animate-infinite-scroll">
          <Image src={Bigo} alt="bg-image" className="object-contain" />
          <Image
            src={Caffine}
            alt="bg-image"
            className="w-full h-full object-contain"
          />
          <Image
            src={Nimo}
            alt="bg-image"
            className="w-full h-full object-contain"
          />
          <Image
            src={Spoon}
            alt="bg-image"
            className="w-full h-full object-contain"
          />
          <Image
            src={Tiktok}
            alt="bg-image"
            className="w-full h-full object-contain"
          />
          <Image
            src={Twitch}
            alt="bg-image"
            className="w-full h-full object-contain"
          />

          <Image
            src={Meta}
            alt="bg-image"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
