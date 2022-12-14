import React from "react";
import { useState } from "react";
import "../Layout/Header.css";
import { Link } from "react-router-dom";

function Header() {
  const [active, setactive] = useState(1);
  const [toggle, settoggle] = useState(false);

  var scrollTrigger = 60;

  window.onscroll = function () {
    if (
      window.scrollY >= scrollTrigger ||
      window.pageYOffset >= scrollTrigger
    ) {
      document.getElementsByTagName("header")[0].classList.add("inverted");
    } else {
      document.getElementsByTagName("header")[0].classList.remove("inverted");
    }
  };

  const [walletAddress, setWalletAddress] = useState(null);
  // console.log("🚀 ~ walletAddress", walletAddress);


  // detect wallet
  window.onload = async function () {
    try {
      if (window.solana) {
        const solana = window.solana;
        if (solana.isPhantom) {
          console.log(`Phantom wallet found`);

          const res = await solana.connect({ onlyIfTrusted: true });
          // console.log(`connected with public key,`, res.publicKey.toString());
          setWalletAddress(res.publicKey.toString());
        } else {
          window.open("https://phantom.app/download");
          // alert("Phantom Wallet not found");
        }
      }
    } catch (err) {
      console.log(err, "err");
    }
  };


  // Connect Wallet
  const connectWallet = async () => {
    if (window.solana) {
      const solana = window.solana;
      const res = await solana.connect();
      setWalletAddress(res.publicKey.toString());
    } else {
      // alert("Phantom Wallet not found");
      window.open("https://phantom.app/");
    }
  };

  return (
    <>
      <nav>
        {/* ===============Desktop size============== */}
        <header className="fixed left-0 right-0 z-50 md:flex md:p-5 md:justify-around justify-center items-center container mx-auto">
          <div className=" gap-10 cursor-pointer  justify-end md:flex hidden">
            <div
              className={`transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-800  ${
                active === 1 ? "border-b-2 border-black  " : "deActive"
              }`}
              onClick={() => {
                setactive(1);
              }}
            >
              <Link to="/">Home</Link>
            </div>
            <div
              className={`transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-700 ${
                active === 2 ? "border-b-2 border-black" : "deActive"
              }`}
              onClick={() => {
                setactive(2);
              }}
            >
              <Link to="/about">About</Link>
            </div>
            <div
              className={`transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-700 ${
                active === 4 ? "border-b-2 border-black" : "deActive"
              }`}
              onClick={() => {
                setactive(4);
              }}
            >
              <Link to="/roadmap">Roadmap</Link>
            </div>
            <div
              className={`transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-700 ${
                active === 5 ? "border-b-2 border-black" : "deActive"
              }`}
              onClick={() => {
                setactive(5);
              }}
            >
              <Link to="/ourteam">Our Team</Link>
            </div>
          </div>
          <div className="lg:absolute  lg:right-40 md:flex gap-5 hidden ">
            <p className="cursor-pointer rounded-lg py-2 px-4  bg-black text-white whitespace-nowrap  transition ease-in-out delay-150  hover:-translate-y-1 duration-1000 hover:shadow-lg shadow-lg hover:bg-white hover:text-black">
              <Link to="/mint">Upcoming Mint</Link>
            </p>
            {/* <p
              onClick={connectWallet}
              className="cursor-pointer rounded-lg py-2 px-4 bg-black text-white whitespace-nowrap  transition ease-in-out delay-150  hover:-translate-y-1 duration-1000 hover:shadow-lg shadow-lg hover:bg-white hover:text-black"
            >
              {!walletAddress ? (
                <Link>Connect Wallet</Link>
              ) : (
                <p>
                  {walletAddress.slice(0, 4)}...{walletAddress.slice(-4)}
                </p>
              )}
            </p> */}

            <Link to="mint-page"></Link>
          </div>
        </header>
        {/* ===============Mobile size============== */}

        <div className="fixed md:hidden p-5 z-50">
          <i
            className={`${
              toggle ? "hidden" : "block fa-solid fa-bars text-3xl"
            }`}
            onClick={() => settoggle(!toggle)}
          ></i>
          {toggle && (
            <i
              className="fa-solid fa-xmark text-3xl fixed top-0 z-50 mt-5"
              onClick={() => settoggle(!toggle)}
            ></i>
          )}
        </div>

        {toggle && (
          <>
            <div className="flex flex-col items-center justify-center md:hidden gap-5 bg-white z-10 h-[100vh] top-0">
              {" "}
              <div
                className={`transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-700  ${
                  active === 1 ? "border-b-2 border-black  " : "deActive"
                }`}
                onClick={() => {
                  setactive(1);
                  settoggle(false);
                }}
              >
                <Link to="/">Home</Link>
              </div>
              <div
                className={`transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-700 ${
                  active === 2 ? "border-b-2 border-black" : "deActive"
                }`}
                onClick={() => {
                  setactive(2);
                  settoggle(false);
                }}
              >
                <Link to="/about">About</Link>
              </div>
              <div
                className={`transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-700 ${
                  active === 4 ? "border-b-2 border-black" : "deActive"
                }`}
                onClick={() => {
                  setactive(4);
                  settoggle(false);
                }}
              >
                <Link to="/roadmap">Roadmap</Link>
              </div>
              <div
                className={`transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-700 ${
                  active === 5 ? "border-b-2 border-black" : "deActive"
                }`}
                onClick={() => {
                  setactive(5);
                  settoggle(false);
                }}
              >
                <Link to="/ourteam">Our Team</Link>
              </div>
              <p className=" rounded-lg py-2 px-4 bg-black text-white whitespace-nowrap transition ease-in-out delay-150 hover:-translate-y-1 duration-1000 hover:shadow-lg shadow-lg hover:bg-white hover:text-black">
                <Link>Connect Wallet</Link>
              </p>
            </div>
          </>
        )}
      </nav>
    </>
  );
}

export default Header;
