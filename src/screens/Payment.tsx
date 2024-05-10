import Grid from "../components/Grid"
import Image from "../components/Image"
import PaymentImg from "../assets/payments.png";

const Payment = () => {
    return (
        <section className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 justify-between lg:px-30 p-6 py-[2%] gap-10 transition-opacity" data-aos='fade-left'>
                <Grid className="w-full h-full justify-center gap-4 order-first">
                    <h2 className="bg-clip-text text-transparent bg-gradient-to-r to-[#00C2B6] from-[#5865F2] lg:text-[48px] lg:leading-[60px] font-bold font-inter text-2xl">REVOLUTIONIZING PAYMENTS</h2>
                    <h2 className="lg:text-[36px] lg:leading-[42px] text-white text-lg">LSW bypasses traditional payment processing fees, benefiting both creators and viewers. It promotes a more transparent system for supporting creators and simplifies in-app purchases within the live streaming ecosystem.</h2>
                </Grid>
                <Grid className="items-center justify-center max-h-[65vh]">
                    <Image
                        src={PaymentImg}
                        alt="bg-image"
                        classname="md:w-[588px] md:h-[431px] w-full h-full"
                    />
                </Grid>
            </div>
        </section >
    )
}

export default Payment;