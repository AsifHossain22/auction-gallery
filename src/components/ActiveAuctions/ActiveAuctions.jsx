import React, { useEffect, useState } from "react";
import Auctions from "../Auction/Auctions";
import { FaRegHeart } from "react-icons/fa";
import SelectedBid from "../SelectedBid/SelectedBid";

const ActiveAuctions = ({
  handleBidNow,
  auctions,
  bidCount,
  removeFromFavorites,
}) => {
  // useState for Data Store
  const [auctionsData, setAuctionsData] = useState([]);

  // API Fetching useEffect
  useEffect(() => {
    fetch("customApi.json")
      .then((res) => res.json())
      .then((data) => setAuctionsData(data));
  }, []);

  return (
    <section id="auctions" className="bg-[#ebf0f5]">
      <div className="px-5 lg:px-10 lg:py-32 py-16">
        {/* TitleContainer */}
        <div>
          <h2 className="text-[#0e2954] text-3xl font-medium">
            Active Auctions Section
          </h2>
          <p className="text-xl pt-5 pb-8">
            Discover and bid on extraordinary items
          </p>
        </div>

        {/* BodyContainer */}
        <div className="flex flex-col lg:flex-row gap-5">
          {/* MainContent */}
          <div className="w-full lg:w-9/12 p-4 lg:p-8 bg-white rounded-3xl shadow-lg overflow-x-auto">
            {/* HeaderContent */}
            <div className="hidden md:block">
              <table className="table-fixed w-full">
                <thead>
                  <tr className="flex justify-between">
                    <th className="w-6/12 text-left">Items</th>
                    <th>Current Bid</th>
                    <th>Time Left</th>
                    <th>Bid Now</th>
                  </tr>
                </thead>
              </table>
            </div>
            {/* BodyContent */}
            <div className="auctions-container">
              {auctionsData.map((auction) => (
                <Auctions
                  key={auction.id}
                  auction={auction}
                  handleBidNow={handleBidNow}
                  auctions={auctions}
                />
              ))}
            </div>
          </div>

          {/* SideBar */}
          <div className="w-full lg:w-3/12 p-4 lg:p-8 bg-white rounded-3xl shadow-lg">
            <div className="text-[#0e2954]  border-b-2 border-gray-300 pb-3 mb-5 flex items-center justify-center gap-3">
              <span>
                <FaRegHeart size={22} />
              </span>
              <h3 className="text-xl font-medium text-center">
                Favorite Items
              </h3>
            </div>
            <div className="text-center">
              {/* AfterBidItems */}
              <div id="after-bid-items">
                {auctions.length > 0 && (
                  <div>
                    {auctions.map((selectedBid) => (
                      <SelectedBid
                        key={selectedBid.id}
                        auction={selectedBid}
                        removeFromFavorites={removeFromFavorites}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* BeforeBidItems */}
              {auctions.length === 0 && (
                <div
                  id="before-bid-items"
                  className="border-b-2 border-gray-300 pb-5 mb-5 pt-5"
                >
                  <h5 className="text-2xl font-medium">No favorites yet</h5>
                  <p className="text-lg pt-6 pb-6">
                    Click the heart icon on any item to add it to your favorites
                  </p>
                </div>
              )}
            </div>
            <div className="flex justify-between items-center">
              <span>Total Bids Amount :</span>
              <span>${bidCount}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActiveAuctions;