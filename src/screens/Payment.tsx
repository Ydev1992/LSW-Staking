import Grid from "../components/Grid"
import Image from "../components/Image"
import PaymentImg from "../assets/payments.png";


const Payment = () => {
    return (
        <section className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 justify-between lg:px-20 p-6 py-[5%] gap-10">
                <Grid className="w-full h-full justify-center gap-4 order-first">
                    <h2 className="bg-clip-text text-transparent bg-gradient-to-r to-[#00C2B6] from-[#5865F2] text-4xl font-bold">REVOLUTIONIZING PAYMENTS</h2>
                    <h2 className="lg:text-lg text-white font-normal">LSW bypasses traditional payment processing fees, benefiting both creators and viewers. It promotes a more transparent system for supporting creators and simplifies in-app purchases within the live streaming ecosystem.</h2>
                </Grid>
                <Grid className="items-center justify-center max-h-[65vh]">
                    <Image
                        src={PaymentImg}
                        alt="bg-image"
                        classname="w-full h-full"
                    />
                </Grid>
            </div>
        </section >
    )
}

export default Payment;