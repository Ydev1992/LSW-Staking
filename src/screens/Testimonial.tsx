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
    // <section className="overflow-hidden">
    //   <div className="bg-gray-300 w-full">
    //     <div className="grid grid-cols-7 justify-between md:gap-4 gap-2 items-center lg:px-10 p-4 animate-infinite-scroll">
    //       <Image src={Bigo} alt="bg-image" className="object-contain" />
    //       <Image
    //         src={Caffine}
    //         alt="bg-image"
    //         className="w-full h-full object-contain"
    //       />
    //       <Image
    //         src={Nimo}
    //         alt="bg-image"
    //         className="w-full h-full object-contain"
    //       />
    //       <Image
    //         src={Spoon}
    //         alt="bg-image"
    //         className="w-full h-full object-contain"
    //       />
    //       <Image
    //         src={Tiktok}
    //         alt="bg-image"
    //         className="w-full h-full object-contain"
    //       />
    //       <Image
    //         src={Twitch}
    //         alt="bg-image"
    //         className="w-full h-full object-contain"
    //       />

    //       <Image
    //         src={Meta}
    //         alt="bg-image"
    //         className="w-full h-full object-contain"
    //       />
    //     </div>
    //   </div>
    // </section>

    <div className="w-full inline-flex bg-gray-300 flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        <li>
          <img src={Bigo} className="w-[200px]" alt="Facebook" />
        </li>
        <li>
          <img src={Caffine} className="w-[200px]" alt="Airbnb" />
        </li>
        <li>
          <img src={Nimo} className="w-[200px]" alt="Apple" />
        </li>
        <li>
          <img src={Spoon} className="w-[200px]" alt="Spark" />
        </li>
        <li>
          <img src={Tiktok} className="w-[200px]" alt="Samsung" />
        </li>
        <li>
          <img src={Twitch} className="w-[200px]" alt="Quora" />
        </li>
        <li>
          <img src={Meta} className="w-[200px]" alt="Sass" />
        </li>
      </ul>
      <ul
        aria-hidden="true"
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
      >
        <li>
          <img src={Bigo} className="w-[200px]" alt="Facebook" />
        </li>
        <li>
          <img src={Caffine} className="w-[200px]" alt="Airbnb" />
        </li>
        <li>
          <img src={Nimo} className="w-[200px]" alt="Apple" />
        </li>
        <li>
          <img src={Spoon} className="w-[200px]" alt="Spark" />
        </li>
        <li>
          <img src={Tiktok} className="w-[200px]" alt="Samsung" />
        </li>
        <li>
          <img src={Twitch} className="w-[200px]" alt="Quora" />
        </li>
        <li>
          <img src={Meta} className="w-[200px]" alt="Sass" />
        </li>
      </ul>
    </div>
  );
};

export default Testimonial;
