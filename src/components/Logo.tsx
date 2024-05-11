import Image from "./Image";

const Logo = () => {
    return (
        <a href="/">
            <Image
                src="./images/LSW.png"
                alt="logo"
                width={187}
                height={50}
                className="w-full h-full md:w-[187px] md:h-[50px]"
            />
        </a>
    )
}

export default Logo;