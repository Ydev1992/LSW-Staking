import React, { useState, useEffect } from "react";
import MyTokenContractABI from "../MyToken.json";

//images
import Image from "../components/Image";
import Grid from "../components/Grid";
import Block from "../components/Block";
import Eth from "../assets/eth.png";
import Chart from "../assets/charts.png";
import BgWeb from "../assets/bg-web.png";

//notification dependency
import { toast } from "react-toastify";
import Notification from "../components/Notification";
import { ToastContainer } from "react-toastify";

//wagmi dependecy
import { config } from "../config";
import { getGasPrice, estimateGas } from "@wagmi/core";
import { mainnet } from "@wagmi/core/chains";
import {
  useAccount,
  useBalance,
  useReadContracts,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";
import { useWeb3Modal } from "@web3modal/wagmi/react";

const contractAddress = "0xb91fFF5ec726f719dbD68d2EDf588958dfbA81De";
const abi = MyTokenContractABI;

const myRound = (valueToBeRounded: any): any => {
  let tmpVal = Math.round(parseFloat(valueToBeRounded) * 10 ** 4);
  return tmpVal / 10 ** 4;
};

const Hero = () => {
  const { open } = useWeb3Modal();

  const [buyAmount, setBuyAmount] = useState<string>("");
  const [gasFee, setGasFee] = useState<BigInt>(BigInt(0)); // in Gwei

  const { data, refetch } = useReadContracts({
    contracts: [
      {
        abi: abi,
        address: contractAddress,
        chainId: mainnet.id,
        functionName: "calcPrice",
        args: [parseFloat(buyAmount) * 10 ** 18],
      },
    ],
  });

  let { data: hash, error, isPending, writeContract } = useWriteContract();

  const { address } = useAccount();
  const balance = useBalance({ address: address });

  useEffect(() => {
    calcReceiveAmount();
  }, [buyAmount]);

  let receiveAmount = data?.[0];

  const calcReceiveAmount = async () => {
    try {
      if (isNaN(parseFloat(buyAmount)) || parseFloat(buyAmount) <= 0) {
        return;
      }
      await refetch();

      const tmpCurGasPrice = await getGasPrice(config, { chainId: mainnet.id });
      const tmpEstimaedGasAmount = await estimateGas(config, {
        chainId: mainnet.id,
      });
      const tmpGasFeeInWei = tmpEstimaedGasAmount * tmpCurGasPrice;
      setGasFee(myRound(tmpGasFeeInWei / BigInt(10 ** 9)));
    } catch (error) {}
  };

  let { isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  });

  const handleBuy = async () => {
    if (isNaN(parseFloat(buyAmount)) || parseFloat(buyAmount) <= 0) {
      setBuyAmount("0");
      toast(
        <Notification
          type={"warn"}
          msg={"Please enter exact amount and gas fee."}
        />
      );
      return;
    }
    if (!address) return;
    const buyAmountInWei = parseFloat(buyAmount) * 10 ** 18;
    const gasFeeInWei = parseFloat(gasFee.toString()) * 10 ** 9;
    const tmpCurGasPrice = await getGasPrice(config, { chainId: mainnet.id });
    writeContract({
      address: contractAddress,
      abi,
      functionName: "buyTokens",
      args: [],
      account: address,
      gas: BigInt(gasFeeInWei) / tmpCurGasPrice,
      value: BigInt(buyAmountInWei),
    });

    if (hash) {
      toast(
        <Notification
          type={"success"}
          msg={`Tokens have been purchased successfully.${hash}`}
        />
      );
    }

    if (error !== null) {
      toast(<Notification type={"fails"} msg={`${error}`} />);
      error = null;
    }
    if (isConfirmed) {
      toast(<Notification type={"success"} msg={`Transaction confirmed.`} />);
      isConfirmed = false;
    }
  };

  const handleSendChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setBuyAmount(e.target.value);
    calcReceiveAmount();
    refetch();
  };

  const dispBalance = () => {
    if (balance && balance.data) {
      return (Number(balance.data.value) / 10 ** 18).toString();
    }
  };

  const dispReceiveAmount = () => {
    if (receiveAmount?.result) {
      return (
        BigInt(receiveAmount.result.toString()) / BigInt(10 ** 18)
      ).toString();
    }
  };

  const dispMaxButton = () => {
    return (
      <button
        className="ml-2 pl-1 pr-1 text-white bg-[#498aa0] rounded-md absolute bottom-3 right-3"
        onClick={() => {
          if (balance && balance.data)
            setBuyAmount(
              myRound(
                Math.max(
                  Number(balance.data.value) / 10 ** 18 -
                    Number(gasFee) / 10 ** 9 -
                    0.0001,
                  0
                )
              ).toString()
            );
        }}
      >
        max
      </button>
    );
  };

  const dispBuyButton = () => {
    if (address === undefined || address === null) {
      return (
        <button
          onClick={() => open()}
          className="bg-gradient-to-r via-[#00C2B6] from-[#5865F2] to-[#5865F2] rounded-md p-1 lg:text-[24px] text-white font-bold"
        >
          CONNECT WALLET
        </button>
      );
    }
    return balance &&
      balance.data &&
      Number(buyAmount) + Number(gasFee) / 10 ** 9 <
        Number(balance.data.value) ? (
      <button
        onClick={handleBuy}
        disabled={isPending}
        className="bg-gradient-to-r via-[#00C2B6] from-[#5865F2] to-[#5865F2] rounded-md p-1 lg:text-[24px] text-white font-bold"
      >
        {isPending ? `Just a minute...` : `Buy Now`}
      </button>
    ) : (
      <button
        disabled
        className="bg-gray-700 rounded-md p-1 lg:text-[24px] text-white font-bold"
      >
        Insufficient amount
      </button>
    );
  };

  return (
    <section className="overflow-hidden mt-21.5">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-between  bg-hero p-4 gap-20 md:gap-0 overflow-hidden max-w-full relative">
        <div className="absolute flex-col grow items-center max-h-[500px] overflow-hidden max-w-[50%] top-[60%] -left-[8%] -z-1">
          <Image src={Chart} alt="bg-image" className="w-full h-[500px]" />
        </div>
        <div className="absolute flex-col grow items-center max-h-[500px] overflow-hidden max-w-[50%] top-[60%] -right-[8%] -z-1">
          <Image src={Chart} alt="bg-image" className="w-full h-[500px]" />
        </div>
        <div className="-z-20 absolute flex-col grow items-center h-[80%] overflow-hidden w-[50%] -top-[8%] -right-[1%] mix-blend-color-burn">
          <Image src={BgWeb} alt="bg-image" className="w-full h-full" />
        </div>
        <Grid
          className="w-full h-full justify-center gap-4 mt-[10%] md:mt-0"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
          <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-[#00C2B6] to-[#5865F2] lg:text-[48px] lg:leading-[60px] font-extrabold font-inter text-xl">
            LIVE STREAMING POWER
          </h2>
          <h3 className="font-bold text-white lg:text-[48px] lg:leading-[60px] font-inter text-lg">
            Power your Stream
          </h3>
          <Grid className="mt-2 md:mt-10 gap-4 md:gap-8">
            <h1 className="lg:text-[40px] lg:leading-[47px] font-semibold text-white font-roboto">
              Tired of in-app purchases & limited tipping? unleash the{" "}
              <span className="font-inter">LSW</span> revolution
            </h1>
            <h2 className="lg:text-[32px] lg:leading-[38px] font-roboto text-gray-400">
              LSW aims to disrupt the traditional live streaming tipping model,
              empowering creators, and fostering a more vibrant community within
              the live streaming landscape.
            </h2>
          </Grid>

          <Block className="gap-8 mt-[2%]">
            <button className="bg-[#001C29] px-10 py-2 rounded-md shadow-md font-bold text-white">
              BUY LSW
            </button>
            <a
              href="https://www.google.com"
              className="bg-[#5865F2] px-8 py-2 rounded-md shadow-md text-white font-bold"
            >
              WHITE PAPER
            </a>
          </Block>
        </Grid>
        <Grid
          className="w-full h-full justify-center items-center"
          data-aos="fade-down"
          data-aos-easing="ease-in"
        >
          <Grid className="bg-primary shadow-md rounded-md gap-6 w-full md:w-[75%] py-8">
            <Grid className="items-center gap-4 px-4">
              <h2 className="lg:text-[48px] font-roboto font-bold text-white lg:leading-[60px]">
                BUY <span className="font-inter">LSW</span> TOKEN
              </h2>
              <h2 className="lg:text-[15px] text-white font-bold uppercase text-center md:text-start">
                Presale <span className="text-[#00C2B6]">live</span> {"\u2022"}{" "}
                ends by{" "}
                <span className="text-[#00C2B6]">1st jun 25 or hardcap </span>
              </h2>
            </Grid>
            <Block className="justify-between">
              <div className="w-[35%] bg-gradient-to-r to-[#00C2B6] from-[#5865F2] h-[0.15rem]" />
              <h2 className="lg:text-[24px] text-white font-bold">BUY WITH</h2>
              <div className="w-[35%] bg-gradient-to-r to-[#00C2B6] from-[#5865F2] h-[0.15rem]" />
            </Block>

            <Grid className="items-center gap-4">
              <Block className="bg-[#001C29] w-[80%] md:w-[60%] justify-center px-[8%] p-2 rounded-md">
                <Block className="items-center">
                  <Image
                    src={Eth}
                    alt="bg-image"
                    className="w-[45px] h-[45px]"
                  />
                  <h2 className="font-semibold lg:text-[20px]">ETH</h2>
                </Block>
              </Block>
              <div className="flex justify-between lg:text-[15px] text-gray-400 font-bold">
                <div className="text-center">
                  BALANCE : &nbsp;&nbsp;
                  <span className="text-white">{dispBalance()}</span>
                  &nbsp;
                  <span className="text-gray-400 font-semibold text-[13px]">
                    ETH &nbsp;
                  </span>
                </div>
                <span className="mr-2 ml-2">{"\u2022"}</span>
                <div className="text-center">
                  GASFEE : &nbsp;&nbsp;
                  <span className="w-[90px] rounded-md bg-transparent outline-none text-right text-white">
                    {gasFee.toString()}
                  </span>
                  &nbsp;
                  <span className="text-gray-400 font-semibold text-[13px]">
                    GWEI
                  </span>
                </div>
              </div>
            </Grid>

            <Block className="items-center px-[10%] gap-6">
              <Grid className="bg-[#001C29] h-full relative w-full rounded-md gap-4 p-4">
                <input
                  type="text"
                  placeholder="Amount"
                  value={buyAmount}
                  onChange={(e) => handleSendChange(e)}
                  className="text-white w-[100%] rounded bg-transparent outline-none"
                />
                <h2 className="lg:text-[16px] font-semibold">
                  YOU SEND
                  {dispMaxButton()}
                </h2>
              </Grid>

              <Grid className="bg-[#001C29] w-full rounded-md gap-4 p-4">
                <input
                  type="text"
                  value={dispReceiveAmount()}
                  readOnly
                  className="text-white w-[100%] rounded bg-transparent outline-none"
                />

                <h2 className="lg:text-[16px] font-semibold">YOU RECEIVE</h2>
              </Grid>
            </Block>

            <Grid className="px-[10%] pb-[4%] justify-between">
              {dispBuyButton()}
            </Grid>
          </Grid>
        </Grid>
      </div>

      <ToastContainer autoClose={3000} style={{ paddingTop: "90px" }} />
    </section>
  );
};

export default Hero;
