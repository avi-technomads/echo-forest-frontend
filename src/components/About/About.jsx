import React, { useEffect } from "react";
// import udti_titali from "../../image/udti-titali.svg";
import "../About/index.css";
import AOS from "aos";
import FoxImage from "../../Asset/Images/fox.png";
import CartoonfoxImage from "../../Asset/Images/cartoon-fox.png";
import BunchOfNFTS from "../../Asset/Images/bunchofnfts.png";
import NatureImage from "../../Asset/Images/nature.png";

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
      <div className="flex justify-center md:py-20 py-8">
        <h5 className="font-bold xl:text-5xl md:text-4xl text-2xl">
          <span className="block text-center">About Echo Forest </span>
          {/* <span className="block"></span> */}
        </h5>
      </div>

      {/* <div
        className="container mx-auto grid lg:grid-cols-2 grid-cols-1  pt-10 px-2"
        data-aos="fade-up"
        data-aos-duration="2000"
        id="about"
      >
        <div className="md:px-20 px-6 flex justify-center flex-col gap-3 ">
          <img
            src={FoxImage}
            alt="foximage"
            className="md:rounded-2xl rounded-md md:h-96 xl:w-[565px] w-auto"
          />
        </div>

        <div className="flex flex-col m-auto gap-4 items-center xl:pr-48 md:pr-28 md:pl-20 pl-10 pr-10 xl:pl-0 ">
          <p className="text-justify xl:mt-0 mt-20">
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

        <div className="flex flex-col my-auto gap-4 md:pl-20 md:pr-28 pr-10 pl-10">
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
          <img
            src={CartoonfoxImage}
            alt="cartoonFox"
            className="md:rounded-2xl rounded-md md:h-96 mt-10 xl:w-[565px] w-auto xl:mx-0 mx-auto"
          />
        </div>
      </div> */}

      <div
        className="mx-auto container flex flex-col justify-center items-center"
        data-aos="fade-up"
        data-aos-duration="2000"
        id="about"
      >
        {/* <div className="flex justify-center flex-wrap gap-10">
          <div className="">
            <img
              src={FoxImage}
              alt="foximage"
              className="md:rounded-2xl rounded-md md:h-96 xl:max-w-[565px] ml-auto w-auto px-2"
            />
          </div>
          <div className=" my-auto px-4 xl:max-w-[565px] mr-auto">
            <p className="text-justify">
              Echo Forest began when co-Founders Brooks Clifford and Matt
              Benesch realized they had a combination of shared passions that
              they wanted to turn into a business. As life-long video gamers, as
              well as passionate outdoor enthusiasts; Echo Forest unites those
              two worlds.
            </p>
            <p className="text-justify mt-4">
              The main driver of Echo Forest is the Echo App; an online
              play2earn gaming platform that rewards gamers for their
              engagement. Users are able to sign-up on the platform for free,
              and earn crypto for playing video games. Users can also earn
              additional rewards by writing online reviews and answering survey
              questionnaires. The Echo App is currently in development and is
              expected to launch in 2023.
            </p>
          </div>
        </div> */}

        <div className="grid md:grid-cols-2 place-items-center gap-4 md:mt-10">
          <div className="w-full">
            <img
              src={CartoonfoxImage}
              alt="foximage"
              className="md:rounded-2xl w-full rounded-md md:h-96 md:px-0 px-2"
            />
          </div>
          <div className="my-auto px-4">
            <p className="text-justify">
              Echo Forest began when co-Founders Brooks Clifford and Matt
              Benesch realized they had a combination of shared passions that
              they wanted to turn into a business. As life-long video gamers, as
              well as passionate outdoor enthusiasts; Echo Forest unites those
              two worlds.
            </p>
            <p className="text-justify mt-4">
              The main driver of Echo Forest is the Echo App; an online
              play2earn gaming platform that rewards gamers for their
              engagement. Users are able to sign-up on the platform for free,
              and earn crypto for playing video games. Users can also earn
              additional rewards by writing online reviews and answering survey
              questionnaires. The Echo App is currently in development and is
              expected to launch in 2023.
            </p>

            <p className="text-justify mt-4">
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
        </div>
      </div>

      <div className="mx-auto container">
        <div className="tracking-wide md:py-16 py-4 px-2">
          <h3 className="font-bold xl:text-5xl md:text-4xl text-2xl text-center tracking-normal md:pb-24 pb-10 pt-8">
            The Echo App
          </h3>

          <div className="grid md:grid-cols-2 place-items-center gap-4 text-justify ">
            {/* first div */}
            <div className="md:px-0 px-2">
              <p>
                The design for the Echo App is only possible because of the way
                the video game industry has evolved over the last ten years. A
                relatively new concept in the video game industry are ‘free to
                play’ games. Many video games published today are created to be
                ‘free to play’ meaning the games are designed to get players in
                the game for free, then upsell them with microtransactions.
              </p>
              <p className="pt-5">
                One of my all-time favorite games is a perfect example of this
                concept; Hearthstone. Hearthstone is a digital card game
                designed by Blizzard Entertainment and is free to play. Anyone
                can download the game for free and begin playing it. However, as
                a card game, when you download the game and play it for the
                first time you will have a very limited library of cards to
                choose from to use. As a result, players will often purchase
                digital packs of cards to increase the strength of their deck as
                well as the variety of decks which they can play. It’s not
                uncommon for players to spend hundreds of dollars each year on
                digital card packs - adding up to thousands of dollars spent on
                the game over a lifetime. Compare this to the previous business
                model of the 90’s and early 2000’s where video game companies
                would release a game for a one time fixed cost. This new
                business model of ‘free to play/upsell with microtransactions’
                has returned healthy profits when compared to the former model.
              </p>
            </div>

            <div className="md:w-full w-auto px-4">
              <img
                src={BunchOfNFTS}
                alt="NFTS"
                className="md:w-full w-auto rounded-lg md:rounded-2xl md:h-96"
              />
            </div>
          </div>

          <p className="pt-5 text-justify xl:pr-4 pr-2 xl:pl-0 pl-2 mx-auto">
            The Echo App is designed to connect gamers who are interested in
            playing a new video game with video game companies that are willing
            to incentivize users to download and play test their games for a
            small fee. Players on our platform are rewarded for their
            engagement: while video game companies are able to minimize their
            player acquisition costs and maximize player quality. The crypto
            that a player earns on our platform is derived from the advertising
            budget that video game companies are already willing to spend to
            acquire new users. If a video game company is willing to spend
            $50,000 to acquire new users through traditional methods, they can
            instead use this budget to incentivize users on our platform. For
            example, a $5 incentive can be rewarded to a player that reaches a
            certain checkpoint. This guarantees that exhausting the $50,000 will
            have resulted in 10,000 players downloading and playing the game to
            a specific point. Echo Forest will take a small percent of the
            transaction but the majority of the payment will go to players as
            their reward for their engagement
          </p>

          {/* <p className="pb-5 px-5">
              $EXP is the token that powers the Echoverse. The new Echo App is
              the only gaming platform that rewards
              <br /> gamers for their engagement. The Echo App is free to
              download and gamers earn $EXP by playing games
              <br />
              that are already available on Xbox, PS5, and PC.
            </p>
            <p className="pb-5 px-5">
              $EXP has a total supply of 1.5 billion tokens. 50% of the total
              suppl (or 750,000,000 $EXP) is distributed to <br />
              Echo Forest NFT holders over a 15-year period.
            </p> */}
        </div>

        <div className="text-justify tracking-wide md:py-16 py-8 px-2">
          <h3 className="font-bold xl:text-5xl md:text-4xl text-2xl text-center tracking-normal md:pb-28 pb-10">
            The Echo Forest DAO
          </h3>

          <div>
            <img
              src={NatureImage}
              alt="nature-img"
              className="rounded-lg md:rounded-2xl mb-10"
            />
          </div>

          <div className="text-center">
            <div>
              <p className="pb-5">
                Leveraging art and technology to drive forest conservation
                across the world.
              </p>
              <p className="pb-5">
                Ten percent of all revenue generated through Echo Forest will be
                directly deposited via smart contract into the Echo Forest DAO
                wallet
                <span className="md:block hidden font-bold text-xl py-3">
                  [G9x7XrTgJo51HCCThrVqgAiL4sasJZ9mUgj7n9L7yyWZ].
                  <i
                    className="fa-solid fa-copy ml-2 cursor-pointer"
                    onClick={copyToClipBoard}
                  ></i>
                </span>
                <span className="md:hidden block font-bold text-xl py-3">
                  [G9x7...yyWZ].
                  <i
                    className="fa-solid fa-copy ml-2 cursor-pointer"
                    onClick={copyToClipBoard}
                  ></i>
                </span>
                These funds will be used to purchase land in order to protect
                and preserve forests in their natural state. As Minnesota
                natives, the Echo Forest team plans to purchase our first lot of
                land adjacent to the Boundary Waters Canoe Area (BWCA), which is
                one of the largest contiguous areas of uncut forest remaining in
                the eastern United States.
              </p>
              <p>
                Over time we plan to build a network of forests that can be
                utilized by members of the Echo Forest DAO in ways such as
                camping or recreational use of the land. Our goal is to obtain
                land in the 6 major continents (excluding Antarctica) and
                preserve forests in their natural state.
              </p>
            </div>

            {/* <p className="pb-5">
                10% of all Echo Forest NFT sales will be directly deposited via
                a smart contract into the Echo Forest
                <br />
                DAO wallet [insert wallet address here] to be used to help drive
                forest conservation. Our goal
                <br />
                is to obtain land in the 6 major continents (excluding
                Antarctica) and preserve forests in their
                <br />
                natural state.
              </p> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
