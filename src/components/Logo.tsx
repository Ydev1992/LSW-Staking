import Image from "./Image";

const Logo = () => {
    return (
        <a href="/">
            <Image
                src="./images/LSW.png"
                alt="logo"
                width={187}
                height={50}
                className="hidden w-full dark:block"
            />
        </a>
    )
}

export default Logo;