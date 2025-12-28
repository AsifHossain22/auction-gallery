import React from "react";
import { IoClose } from "react-icons/io5";

const SelectedBid = ({ auction, removeFromFavorites }) => {
  return (
    <div className="border-b-2 border-gray-300 pb-3 mb-5">
      <div className="flex items-center justify-between gap-3">
        {/* Image */}
        <img
          className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-lg cursor-pointer"
          src={auction.image}
          alt={auction.description}
          title={auction.description}
        />
        {/* Info */}
        <div className="flex-1">
          <h4 className="text-sm sm:text-base font-medium truncate cursor-pointer hover:text-[#0e2954] duration-300 ease-in-out">
            {auction.title}
          </h4>
          <p className="text-xs sm:text-sm font-medium flex gap-3 pt-2">
            <span>${auction.currentBidPrice}</span>
            <span>Bids: {auction.bidsCount}</span>
          </p>
        </div>
        {/* RemoveIcon */}
        <button
          onClick={() => removeFromFavorites(auction.id)}
          className="cursor-pointer text-base sm:text-lg font-medium text-end"
        >
          <IoClose size={22} />
        </button>
      </div>
    </div>
  );
};

export default SelectedBid;