import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./MintPage.css";

const MintPage = () => {
  const [value, setValue] = useState(1);

  const min = 0;
  const max = 100;

  const addNumber = () => {
    setValue(function (prevCount) {
      if (prevCount < 100) {
        return (prevCount += 1);
      }
    });
  };

  const subNumber = () => {
    setValue(function (prevCount) {
      if (prevCount > 1) {
        return (prevCount -= 1);
      } else {
        return (prevCount = 1);
      }
    });
  };

  const maxVal = () => {
    setValue(100);
  };

  const inputChange = (e) => {
    const value = Math.max(min, Math.min(max, Number(e.target.value)));
    setValue(value);
  };

  return (
    <>
      <div className="bg-home">
        <div>
          <div
            className="relative z-50"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            <div className="fixed inset-0" />
            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 ">
                <div className="relative transform overflow-hidden text-center rounded-lg bg-white shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl px-4">
                  <h2 className="font-bold text-4xl py-6 TerminaW05-Bold">
                    Mint Echo Forest NFT
                  </h2>
                  <div className="text-lg leading-5 ">
                    <p className="nftArt">Collect unique NFT art pieces,</p>
                    <p className="mt-1 nftArt">become part of our community!</p>
                  </div>

                  <div className="grid grid-cols-6 mt-10 gap-6">
                    <div className="col-start-2 col-span-1 text-right flex flex-col justify-between min-h-[120px]">
                      <p className="headingOfNft">Max :</p>
                      <p className="headingOfNft">Amount :</p>
                      <div className="flex justify-end text-right">
                        <p className="headingOfNft">Total :</p>
                      </div>
                    </div>

                    <div className="text-left flex flex-col justify-between col-start-3 col-span-3 min-h-[120px]">
                      <p className="nftArt">10 per transaction</p>
                      <p className="flex gap-2 items-center">
                        <div className="py-1 bg-[#E7F5E4]">
                          <div className="flex gap-2 ">
                            <button className="px-2" onClick={subNumber}>
                              -
                            </button>
                            <input
                              className="px-2 headingOfNft w-14 bg-[#E7F5E4] text-center"
                              type="number"
                              value={value}
                              InputProps={{ inputProps: { min: 0, max: 100 } }}
                              onChange={inputChange}
                            />
                            <button className="px-2" onClick={addNumber}>
                              +
                            </button>
                          </div>
                        </div>
                        <button
                          className="nftArt cursor-pointer"
                          onClick={maxVal}
                        >
                          max
                        </button>
                      </p>
                      <p className="text-4xl">2-2.65 SOL</p>
                    </div>
                  </div>

                  {/* <div className="flex justify-center">
                    <p className="headingOfNft max-w-[40%]">Max :</p>
                    <p className="max-w-[60%]">10 per transaction</p>
                  </div>

                  <div className="flex justify-center">
                    <p className="max-w-[40%]">Amount :</p>
                    <p className="flex gap-1 items-center max-w-[60%]">
                      <div className="py-1 bg-[#E7F5E4]">
                        <div className="flex gap-2">
                          <p className="px-2">-</p>
                          <p className="px-2">1</p>
                          <p className="px-2">+</p>
                        </div>
                      </div>
                      <p>max</p>
                    </p>
                  </div> */}

                  <div className="flex justify-center py-8  ">
                    <p className=" rounded-md py-2 px-4 bg-black cursor-pointer text-white">
                      <Link className="headingOfNft">Upcoming Mint</Link>
                    </p>
                  </div>

                  <div className="text-[#699E5D] text-xs py-6">
                    <p className="nftArt">
                      *Echo Forest wallets are eligible to mint one NFT at the
                      discounted 1.5
                    </p>
                    <p className="nftArt">
                      SOL price. Additional mints will be at the 2.5 SOL public
                      price.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MintPage;
