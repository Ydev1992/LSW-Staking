import React, { useState, useEffect } from "react";
import Web3 from "web3";
import MyTokenContract from "../MyToken.json";

const TOKEN_PRICE = 0.1;

import Image from "../components/Image";
import Grid from "../components/Grid";
import Block from "../components/Block";
import Eth from "../assets/eth.png";
import Chart from "../assets/charts.png";
import Usdt from "../assets/usdt.png";
import BgWeb from "../assets/bg-web.png";

const Hero = () => {
  const [web3, setWeb3] = useState<any>();
  const [contract, setContract] = useState<any>();
  const [account, setAccount] = useState<string>("");
  const [balance, setBalance] = useState<number>(0);
  const [buyAmount, setBuyAmount] = useState<number>(0);
  const [sellAmount, setSellAmount] = useState<string>("");
  const [ethRequired, setEthRequired] = useState<number>(0);
  const [tokensReceived, setTokenReceived] = useState<number>(0);
  const [isConnected, setIsConnected] = useState<boolean>(false);

  useEffect(() => {
    if (buyAmount) {
      const ethAmount = buyAmount * TOKEN_PRICE;
      setEthRequired(ethAmount);
    } else {
      setEthRequired(0);
    }
  }, [buyAmount, isConnected, account]);

  const handleBuy = async () => {
    try {
      const amountInWei = web3.utils.toWei(buyAmount, "ether");
      await contract.methods
        .buyTokens()
        .send({ from: account, value: amountInWei });
      setBuyAmount(0);
      alert("Tokens bought successfully!");
    } catch (error) {
      console.error("Error while buying tokens:", error);
    }
  };

  //   const handleSell = async () => {
  //     try {
  //       const amountInWei = web3.utils.toWei(sellAmount, "ether");
  //       await contract.methods.sellTokens(amountInWei).send({ from: account });
  //       setSellAmount("");
  //       alert("Tokens sold successfully!");
  //     } catch (error) {
  //       console.error("Error while selling tokens:", error);
  //     }
  //   };

  const handleSendChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputAmount = parseInt(e.target.value);
    setBuyAmount(inputAmount);

    if (contract) {
      try {
        // const tokenPrice = await contract.methods.calcPrice().call();
        // const tokensReceived = inputAmount / parseInt(tokenPrice);
        const tokensReceived = 333;
        setTokenReceived(tokensReceived);
      } catch (error) {
        console.error("Error fetching token price:", error);
      }
    }
  };

  const connectWallet = async () => {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      setWeb3(web3);
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const accounts = await web3.eth.getAccounts();

        setAccount(accounts[0].toString());
        const ethBalance = await web3.eth.getBalance(accounts[0]);
        setBalance(parseFloat(web3.utils.fromWei(ethBalance, "ether")));
        setIsConnected(true);
        const networkId = await web3.eth.net.getId();
        const deployedNetwork = MyTokenContract.networks[1 || networkId];
        const contractInstance = new web3.eth.Contract(
          MyTokenContract.abi,
          deployedNetwork && deployedNetwork.address
        );
        setContract(contractInstance);
      } catch (error) {
        console.error("Error while fetching accounts:", error);
      }
    } else {
      console.log("Metamask not detected.");
    }
  };

  return (
    <section className="overflow-hidden mt-[8%] md:mt-0">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-between lg:px-20 bg-hero lg:py-[10%] p-4 gap-20 md:gap-0 overflow-hidden max-w-full relative">
        <div className="absolute flex-col grow items-center max-h-[500px] overflow-hidden max-w-[50%] top-[60%] -left-[8%] -z-1">
          <Image src={Chart} alt="bg-image" classname="w-full h-[500px]" />
        </div>
        <div className="absolute flex-col grow items-center max-h-[500px] overflow-hidden max-w-[50%] top-[60%] -right-[8%] -z-1">
          <Image src={Chart} alt="bg-image" classname="w-full h-[500px]" />
        </div>
        <div className="-z-20 absolute flex-col grow items-center h-[80%] overflow-hidden w-[50%] -top-[8%] -right-[1%] mix-blend-color-burn z-999">
          <Image src={BgWeb} alt="bg-image" classname="w-full h-full" />
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
              <Block className="bg-[#001C29] w-[80%] md:w-[60%] justify-between px-[8%] p-2 rounded-md">
                <Block className="items-center">
                  <Image
                    src={Eth}
                    alt="bg-image"
                    classname="w-[45px] h-[45px]"
                  />
                  <h2 className="font-semibold lg:text-[20px]">ETH</h2>
                </Block>
                <Block className="items-center gap-2">
                  <Image
                    src={Usdt}
                    alt="bg-image"
                    classname="w-[40px] h-[40px]"
                  />
                  <h2 className="font-semibold lg:text-[20px]">USDT</h2>
                </Block>
              </Block>
              <h2 className="lg:text-[15px] text-gray-400 font-bold">
                BALANCE <span className="text-white">{balance}</span> {"\u2022"}{" "}
                GASFEE <span className="text-white">0.000LSW - 0$</span>
              </h2>
            </Grid>

            <Block className="items-center px-[10%] gap-6">
              <Grid className="bg-[#001C29] w-full rounded-md gap-4 p-4">
                <input
                  type="number"
                  placeholder="Amount"
                  value={buyAmount}
                  onChange={(e) => handleSendChange(e)}
                  className="w-[100%]"
                />
                <h2 className="lg:text-[16px] font-semibold">
                  YOU SEND{" "}
                  <button
                    className="ml-2 bg-[#123122] rounded-md"
                    onClick={() => setBuyAmount(balance)}
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
                <h1>{account}</h1>
              )}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default Hero;
