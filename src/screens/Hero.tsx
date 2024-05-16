import React, { useState, useEffect } from "react";
import Web3 from "web3";
import MyTokenContractABI from "../MyToken.json";

import Image from "../components/Image";
import Grid from "../components/Grid";
import Block from "../components/Block";
import Eth from "../assets/eth.png";
import Chart from "../assets/charts.png";
import BgWeb from "../assets/bg-web.png";

import { toast } from "react-toastify";
import Notification from "../components/Notification";

import { ToastContainer } from "react-toastify";

const contractAddress = "0xb91fFF5ec726f719dbD68d2EDf588958dfbA81De";
const abi = MyTokenContractABI;

const Hero = () => {
  const [web3, setWeb3] = useState<any>(null);
  const [account, setAccount] = useState<string>("");
  const [balance, setBalance] = useState<number>(0);
  const [buyAmount, setBuyAmount] = useState<string>("");
  const [gasFee, setGasFee] = useState<string>("21000");
  // const [sellAmount, setSellAmount] = useState<string>("");
  // const [ethRequired, setEthRequired] = useState<number>(0);
  const [tokensReceived, setTokenReceived] = useState<number>(0);
  const [isConnected, setIsConnected] = useState<boolean>(false);

  const calcBalance = async () => {
    const tempContract = new web3.eth.Contract(abi, contractAddress);
    const tempBalance = await tempContract.methods.balance().call();
    setBalance(parseFloat(tempBalance));
  };

  const calcReceiveAmount = async () => {
    if (parseFloat(buyAmount) < 0) return;
    try {
      if (!web3) return;

      const contract = new web3.eth.Contract(abi, contractAddress);
      const tokenPrice = await contract.methods
        .calcPrice(web3.utils.toWei(buyAmount.toString(), "ether"))
        .call();
      setTokenReceived(parseFloat(web3.utils.fromWei(tokenPrice, "ether")));
    } catch (error) {}
  };

  // const handleRebalance = async () => {
  //   try {
  //     if (!web3) return;

  //     const contract = new web3.eth.Contract(abi, contractAddress);
  //     await contract.methods.buyTokens().call();
  //   } catch (error) {}
  // };

  const handleBuy = async () => {
    const amount = parseFloat(buyAmount);
    const fee = parseFloat(gasFee);
    try {
      if (!web3 || isNaN(amount) || amount <= 0 || isNaN(fee) || fee <= 0) {
        toast(
          <Notification
            type={"warn"}
            msg={"Please enter exact amount and gas fee."}
          />
        );
        return;
      }

      if (amount * 10 ** 18 + fee > balance) {
        toast(
          <Notification
            type={"warn"}
            msg={"Not enough balance to buy token."}
          />
        );
        return;
      }
      const contract = new web3.eth.Contract(abi, contractAddress);
      await contract.methods
        .buyTokens()
        .send({ from: account, gas: fee, value: amount * 10 ** 18 })
        .then(() => {
          toast(
            <Notification type={"success"} msg={"You bought successfully."} />
          );
        })
        .catch(() => {
          toast(<Notification type={"fail"} msg={"Errors occured."} />);
        });
    } catch (error) {}
  };

  const handleSendChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setBuyAmount(e.target.value);
  };

  const connectWallet = async () => {
    try {
      // Check if MetaMask is installed
      if (!(window as any).ethereum) {
        return;
      }

      // Request account access
      await (window as any).ethereum.request({ method: "eth_requestAccounts" });

      // Create Web3 instance
      const web3Instance = new Web3((window as any).ethereum);

      // Get Ethereum selected account
      const accounts = await web3Instance.eth.getAccounts();
      setAccount(accounts[0]);

      toast(
        <Notification
          type={"success"}
          msg={`Connected successfully. \n ${accounts[0]}`}
        />
      );

      setIsConnected(true);
      setWeb3(web3Instance);
    } catch (error) {}
  };

  useEffect(() => {
    isConnected && calcBalance(), calcReceiveAmount();
  }, [isConnected, buyAmount]);

  return (
    <section className="overflow-hidden mt-[8%] md:mt-0">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-between lg:px-20 bg-hero lg:py-[10%] p-4 gap-20 md:gap-0 overflow-hidden max-w-full relative">
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
              <h2 className="lg:text-[15px] text-gray-400 font-bold">
                BALANCE : <span className="text-white">{balance}</span>{" "}
                <span className="mr-2 ml-2">{"\u2022"}</span> GASFEE{" "}
                <input
                  type="text"
                  placeholder=""
                  value={gasFee}
                  onChange={(e) => setGasFee(e.target.value)}
                  className="w-[50px] rounded-md bg-transparent outline-none text-right text-white"
                />
              </h2>
            </Grid>

            <Block className="items-center px-[10%] gap-6">
              <Grid className="bg-[#001C29] relative w-full rounded-md gap-4 p-4">
                <input
                  type="text"
                  placeholder="Amount"
                  value={buyAmount}
                  onChange={(e) => handleSendChange(e)}
                  className="text-white w-[100%] rounded bg-transparent outline-none"
                />
                <h2 className="lg:text-[16px] font-semibold">
                  YOU SEND{" "}
                  <button
                    className="ml-2 pl-1 pr-1 text-white bg-[#498aa0] rounded-md absolute right-3"
                    onClick={() =>
                      setBuyAmount((balance - parseFloat(gasFee)).toString())
                    }
                  >
                    max
                  </button>
                </h2>
              </Grid>

              <Grid className="bg-[#001C29] w-full rounded-md gap-4 p-4">
                <h2 className="lg:text-[16px] font-semibold text-white">
                  {tokensReceived}
                </h2>
                <h2 className="lg:text-[16px] font-semibold">YOU RECEIVE</h2>
              </Grid>
            </Block>

            <Grid className="px-[10%] pb-[4%]">
              {!isConnected ? (
                <button
                  onClick={connectWallet}
                  className="bg-gradient-to-r via-[#00C2B6] from-[#5865F2] to-[#5865F2] rounded-md p-1 lg:text-[24px] text-white font-bold"
                >
                  CONNECT WALLET
                </button>
              ) : (
                <button
                  onClick={handleBuy}
                  className="bg-gradient-to-r via-[#00C2B6] from-[#5865F2] to-[#5865F2] rounded-md p-1 lg:text-[24px] text-white font-bold"
                >
                  Buy Now
                </button>
              )}
            </Grid>
          </Grid>
        </Grid>
      </div>

      <ToastContainer autoClose={3000} style={{ paddingTop: "90px" }} />
    </section>
  );
};

export default Hero;
