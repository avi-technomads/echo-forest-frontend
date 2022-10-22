import React, { useEffect } from "react";
import udti_titali from "../../image/udti-titali.svg";
import "../About/index.css";
import AOS from "aos";
import FoxImage from "../../Asset/Images/fox.png";
import CartoonfoxImage from "../../Asset/Images/cartoon-fox.png";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function About() {
  AOS.init();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const walletToast = () =>
    toast.success("Wallet Address copied successfully!");

  const copyToClipBoard = () => {
    navigator?.clipboard?.writeText(
      "G9x7XrTgJo51HCCThrVqgAiL4sasJZ9mUgj7n9L7yyWZ"
    );
    walletToast();
  };

  return (
    <>
      <ToastContainer />
      <div className="flex justify-center pt-20">
        <h5 className="font-bold xl:text-5xl md:text-4xl text-3xl">
          <span className="block text-center">About the Echo Forest NFTs</span>
          {/* <span className="block"></span> */}
        </h5>
      </div>

      <div
        className="container mx-auto grid lg:grid-cols-2 grid-cols-1 gap-20 pt-10 px-2"
        data-aos="fade-up"
        data-aos-duration="2000"
        id="about"
      >
        <div className="md:px-1 px-6 flex justify-center flex-col gap-3">
          <img src={FoxImage} alt="foximage" className="md:rounded-2xl rounded-md md:h-96" />
        </div>

        <div className="flex flex-col my-auto gap-4 items-center">
          <p className="text-justify">
            Echo Forest began when co-Founders Brooks Clifford and Matt Benesch
            realized they had a combination of shared passions that they wanted
            to turn into a business. As life-long video gamers, as well as
            passionate outdoor enthusiasts; Echo Forest unites those two worlds.
          </p>
          <p className="text-justify">
            The main driver of Echo Forest is the Echo App; an online play2earn
            gaming platform that rewards gamers for their engagement. Users are
            able to sign-up on the platform for free, and earn crypto for
            playing video games. Users can also earn additional rewards by
            writing online reviews and answering survey questionnaires. The Echo
            App is currently in development and is expected to launch in 2023.
          </p>
        </div>

        {/* <p className="mt-4 max-w-md ">
            We’ve created 10,000 unique NFTs, each representing a character in
            the fantasy world called the Echoverse. Every NFT in our collection
            is a combination of 1 of 10 different forest animals, plus an
            assigned class or profession and is equipped with anywhere from 2-4
            items that vary in rarity from common to unique.
          </p>
          <p className="mt-5 max-w-md text-justify">
            The utility of the Echo Forest NFT comes in two forms; earning $EXP
            tokens and voting in the Echo DAO.
          </p> */}

        {/* <p className="mt-4 max-w-lg text-justify">
            Echo Forest began when co-Founders Brooks Clifford and Matt Benesch
            realized they had a combination of shared passions that they wanted
            to turn into a business. As life-long video gamers, as well as
            passionate outdoor enthusiasts; Echo Forest unites those two worlds.
          </p> */}

        <div className="flex flex-col my-auto gap-4 px-2">
          <p className="mt-5 text-justify">
            Another core focus of Echo Forest is the Echo Forest DAO, the
            philanthropic arm of our community that is focused on forest
            conservation. Ten percent of all revenue generated through Echo
            Forest will be directly deposited via smart contract into the Echo
            Forest DAO wallet
            <span className="md:block hidden font-bold py-3">
              [G9x7XrTgJo51HCCThrVqgAiL4sasJZ9mUgj7n9L7yyWZ].
              <i
                className="fa-solid fa-copy ml-2 cursor-pointer"
                onClick={copyToClipBoard}
              ></i>
            </span>
            <span className="md:hidden block font-bold py-3">
              [G9x7...yyWZ].
              <i
                className="fa-solid fa-copy ml-2 cursor-pointer"
                onClick={copyToClipBoard}
              ></i>
            </span>
            These funds will be used to purchase land in order to protect and
            preserve forests in their natural state.
          </p>
        </div>

        <div>
          <img src={CartoonfoxImage} alt="cartoonFox" className="md:rounded-2xl rounded-md md:h-96 " />
        </div>
      </div>
    </>
  );
}

export default About;
