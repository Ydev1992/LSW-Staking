import Image from "./Image";
import LogoIcon from "../assets/react.svg"

const Logo = () => {
    return (
        <a href="/">
            <Image
                src={LogoIcon}
                alt="logo"
                width={50}
                height={30}
                className="hidden w-full dark:block"
            />
        </a>
    )
}

export default Logo;