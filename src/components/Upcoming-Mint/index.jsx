import React, { useEffect } from "react";
import "../Upcoming-Mint/index.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderImage1 from "../../image/SliderImage1.png";
import SliderImage2 from "../../image/SliderImage2.png";
import SliderImage3 from "../../image/SliderImage3.png";
import SliderImage4 from "../../image/SliderImage4.png";
import SliderImage5 from "../../image/SliderImage5.png";
import NatureImage from "../../Asset/Images/nature.png";
import BunchOfNFTS from "../../Asset/Images/bunchofnfts.png";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpcomingMint = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  const StableData = [
    {
      id: 1,
      quantity: "1-1,000",
      price: "2.00",
    },
    {
      id: 2,
      quantity: "1,001-1,500",
      price: "2.25",
    },
    {
      id: 3,
      quantity: "1,501-2,000",
      price: "2.50",
    },
    {
      id: 4,
      quantity: "2,001-2,500",
      price: "2.75",
    },
    {
      id: 5,
      quantity: "2,501-3,000",
      price: "3.00",
    },
    {
      id: 6,
      quantity: "3,001-3,500",
      price: "3.25",
    },
    {
      id: 7,
      quantity: "3,501-4,000",
      price: "3.50",
    },
    {
      id: 8,
      quantity: "4,001-4,500",
      price: "3.75",
    },
    {
      id: 9,
      quantity: "4,501-5,000",
      price: "4.00",
    },
    {
      id: 10,
      quantity: "5,001-5,500",
      price: "4.25",
    },
    {
      id: 11,
      quantity: "5,501-6,000",
      price: "4.50",
    },
    {
      id: 12,
      quantity: "6,001-6,500",
      price: "4.75",
    },
    {
      id: 13,
      quantity: "6,501-7,000",
      price: "5.00",
    },
    {
      id: 14,
      quantity: "7,001-7,500",
      price: "5.25",
    },
    {
      id: 15,
      quantity: "7,501-8,000",
      price: "5.50",
    },
    {
      id: 16,
      quantity: "8,001-8,500",
      price: "5.75",
    },
    {
      id: 17,
      quantity: "8,501-9,000",
      price: "6.00",
    },
    {
      id: 18,
      quantity: "9,001-9,500",
      price: "6.25",
    },
    {
      id: 19,
      quantity: "9,501-10,000",
      price: "minted for team use",
    },
  ];

  let sliderImages = [
    {
      id: 1,
      image: SliderImage1,
    },
    {
      id: 2,
      image: SliderImage2,
    },

    {
      id: 3,
      image: SliderImage4,
    },

    {
      id: 4,
      image: SliderImage5,
    },
    {
      id: 5,
      image: SliderImage3,
    },
  ];

  var settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: true,
  };

  let EchoAppData = [
    {
      id: 1,
      years: "Years 1",
      token: "187.5 M",
      rate: "51.37 $EXP",
    },
    {
      id: 2,
      years: "Years 2",
      token: "187.5 M",
      rate: "51.37 $EXP",
    },
    {
      id: 3,
      years: "Years 3",
      token: "93.75 M",
      rate: "25.68 $EXP",
    },
    {
      id: 4,
      years: "Years 4",
      token: "93.75 M",
      rate: "25.68 $EXP",
    },
    {
      id: 5,
      years: "Years 5",
      token: "46.875 M",
      rate: "46.875 M",
    },
    {
      id: 6,
      years: "Years 6",
      token: "46.875 M",
      rate: "46.875 M",
    },
  ];

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
      <div className="pt-16 md:pt-32 mx-auto container">
        <div className="py-0 md:py-16 px-4 ">
          <h2 className="xl:text-6xl md:text-5xl text-4xl px-1 text-center md:py-10 py-2">
            How to mint our NFT
          </h2>
          <div className="flex flex-col items-center py-10 mb-10 md:px-0 px-2 bg-[#e7f5e4] rounded-xl shadow-xl">
            <h3 className="pb-4 text-xl md:text-center text-left">
              Follow below steps :
            </h3>
            <ol className=" text-lg pl-6 list-decimal">
              <li className="py-1">
                Acquire Solana $SOL - through coinbase.com or your exchange of
                choice.
              </li>
              <li className="py-1">
                Download the free Phantom Wallet client on your pc or computer.
              </li>
              <li className="py-1">
                YOU NEED TO MAKE SURE TO HAVE YOUR RECOVERY SEED WRITTEN DOWN
              </li>
              <li className="py-1">
                Connect your phantom wallet to the website on November 5th.
              </li>
              <li className="py-1">
                Swap $SOL for an Echo Forest NFT (price will begin at 2.0 $SOL)
              </li>
            </ol>
          </div>
        </div>

        <h3 className="font-bold xl:text-6xl md:text-5xl text-4xl text-center">
          Echo Forest NFT Mint
        </h3>

        <div className="px-4">
          <div className="3xl:px-20 2xl:px-16 xl:px-12 lg:px-8 md:px-6 px-1 mt-20 text-center total-mint">
            <div className="text-2xl text-center tracking-wide py-16 px-2">
              <p className="pb-5">
                <span className="font-bold">Total Mint :</span> 10,000 NFT
                collection (9,500 public sale, 500 for team use).
              </p>
              <p className="pb-5">
                <span className="font-bold">Mint Date and Time :</span> November
                5th, 2022 @ 5pm EST.
              </p>
              <p className="pb-5 px-5 3xl:px-56 2xl:px-50 xl:px-40 lg:px-24">
                <span className="font-bold">Price : </span>
                For the 9,500 NFTs being sold to the public, the first 1,000
                NFTs are sold for 2.0 $SOL each. The price will increase by 0.25
                $SOL after every 500 NFTs are sold, until the final lot of
                #9,001-9,500 are sold at a final price of 6.25 $SOL each.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-20">
          <table className="table-fixed text-2xl w-11/12 3xl:w-4/6 2xl:w-4/6 xl:w-4/6 md:w-4/6 sm:w-11/12">
            <thead>
              <tr>
                <th>NFT Number</th>
                <th>Price ($SOL)</th>
              </tr>
            </thead>
            <tbody>
              {StableData.map((element) => {
                return (
                  <tr key={element.key}>
                    <td>{element.quantity}</td>
                    <td>{element.price}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="text-2xl mt-20 text-center leading-10">
          <p>
            <span className="font-bold">Whitelisted spots :</span> 0
          </p>
          <p>
            <span className="font-bold">
              Mints per unique Solana wallet address :
            </span>
            unlimited
          </p>
          <p>
            <span className="font-bold">Mint Location :</span>
            <a href="" className="underline decoration-1 text-sky-900">
              https://echoforest.app/mint
            </a>
          </p>
        </div>
      </div>

      <div className="my-20">
        <Slider {...settings} className="mx-auto w-10/12">
          {sliderImages.map((element) => {
            return (
              <div key={element.key} className="px-4">
                <img src={element.image} alt="" />
              </div>
            );
          })}
        </Slider>
      </div>

      <div className="mx-auto container">
        <div className="px-4 3xl:px-20 2xl:px-16 xl:px-12 lg:px-8 sm:px-6 xs:px-5 mt-20 text-center">
          <div className="text-2xl text-center tracking-wide py-16 px-2">
            <h3 className="font-bold xl:text-6xl md:text-5xl  text-xl text-center tracking-normal pb-12">
              $EXP and the Echo App
            </h3>
            <p className="pb-5 px-5">
              The design for the Echo App is only possible because of the way
              the video game industry has evolved over the last ten years. A
              relatively new concept in the video game industry are ‘free to
              play’ games. Many video games published today are created to be
              ‘free to play’ meaning the games are designed to get players in
              the game for free, then upsell them with microtransactions.
            </p>
            <p className="pb-5 px-5">
              One of my all-time favorite games is a perfect example of this
              concept; Hearthstone. Hearthstone is a digital card game designed
              by Blizzard Entertainment and is free to play. Anyone can download
              the game for free and begin playing it. However, as a card game,
              when you download the game and play it for the first time you will
              have a very limited library of cards to choose from to use. As a
              result, players will often purchase digital packs of cards to
              increase the strength of their deck as well as the variety of
              decks which they can play. It’s not uncommon for players to spend
              hundreds of dollars each year on digital card packs - adding up to
              thousands of dollars spent on the game over a lifetime. Compare
              this to the previous business model of the 90’s and early 2000’s
              where video game companies would release a game for a one time
              fixed cost. This new business model of ‘free to play/upsell with
              microtransactions’ has returned healthy profits when compared to
              the former model.
            </p>
            <p className="pb-5 px-5">
              The Echo App is designed to connect gamers who are interested in
              playing a new video game with video game companies that are
              willing to incentivize users to download and play test their games
              for a small fee. Players on our platform are rewarded for their
              engagement: while video game companies are able to minimize their
              player acquisition costs and maximize player quality. The crypto
              that a player earns on our platform is derived from the
              advertising budget that video game companies are already willing
              to spend to acquire new users. If a video game company is willing
              to spend $50,000 to acquire new users through traditional methods,
              they can instead use this budget to incentivize users on our
              platform. For example, a $5 incentive can be rewarded to a player
              that reaches a certain checkpoint. This guarantees that exhausting
              the $50,000 will have resulted in 10,000 players downloading and
              playing the game to a specific point. Echo Forest will take a
              small percent of the transaction but the majority of the payment
              will go to players as their reward for their engagement.
            </p>

            <div className="flex justify-center ">
              <img
                src={BunchOfNFTS}
                alt="NFTS"
                className="w-2/3 rounded-lg md:rounded-2xl"
              />
            </div>
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
        </div>

        <div className="flex justify-center">
          <table className="echoapp table-fixed text-2xl w-11/12">
            <thead>
              <tr>
                <th>Years</th>
                <th>Token</th>
                <th>Current Rate</th>
              </tr>
            </thead>
            <tbody>
              {EchoAppData.map((element) => {
                return (
                  <tr key={element.key}>
                    <td>{element.years}</td>
                    <td>{element.token}</td>
                    <td>{element.rate}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="px-4 flex justify-center mt-10 3xl:px-20 2xl:px-16 xl:px-12 lg:px-8 sm:px-6 xs:px-5 text-center">
          <div className="text-center w-6/12 text-base tracking-wide">
            <p className="pb-5">
              This schedule continues at a rate of 50% reduction in $EXP
              distribution every 2 years until the maximum distribution of
              750,000,000 $EXP has been distributed to Echo Forest NFT holders.
            </p>
          </div>
        </div>

        <div className="px-4 3xl:px-20 2xl:px-16 xl:px-12 lg:px-8 sm:px-6 xs:px-5 mt-20 text-center">
          <div className="text-center text-2xl tracking-wide pt-16 pb-5 px-2">
            <h3 className="font-bold xl:text-6xl md:text-5xl text-4xl text-center tracking-normal pb-12">
              The Echo Forest DAO
            </h3>
            <div className="text-xl px-1">
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
              <p className="pb-5">
                Over time we plan to build a network of forests that can be
                utilized by members of the Echo Forest DAO in ways such as
                camping or recreational use of the land. Our goal is to obtain
                land in the 6 major continents (excluding Antarctica) and
                preserve forests in their natural state.
              </p>

              <img
                src={NatureImage}
                alt="nature-img"
                className="rounded-lg md:rounded-2xl"
              />

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
      </div>
    </>
  );
};

export default UpcomingMint;
