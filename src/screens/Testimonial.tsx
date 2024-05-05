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
            <div className="grid grid-cols-7 justify-between md:gap-4 gap-2 items-center lg:px-10 bg-gray-300 to-[#213A4A] p-4">
                <Image
                    src={Bigo}
                    alt="bg-image"
                    classname="object-contain"
                />
                <Image
                    src={Caffine}
                    alt="bg-image"
                    classname="w-full h-full object-contain"
                />
                <Image
                    src={Nimo}
                    alt="bg-image"
                    classname="w-full h-full object-contain"
                />
                <Image
                    src={Spoon}
                    alt="bg-image"
                    classname="w-full h-full object-contain"
                />
                <Image
                    src={Tiktok}
                    alt="bg-image"
                    classname="w-full h-full object-contain"
                />
                <Image
                    src={Twitch}
                    alt="bg-image"
                    classname="w-full h-full object-contain"
                />

                <Image
                    src={Meta}
                    alt="bg-image"
                    classname="w-full h-full object-contain"
                />
            </div>
        </section >
    )
}

export default Testimonial;