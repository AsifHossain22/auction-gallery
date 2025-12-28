import React from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const Auctions = ({ auction, handleBidNow, auctions }) => {
  // CheckIfAlreadyInFavorites
  const isFavorite = auctions.some((item) => item.id === auction.id);

  return (
    <div className="border-b-2 border-gray-300 pb-3 mb-5">
      {/* TableForDesktopDevice */}
      <table className="hidden md:table table-fixed w-full">
        <tbody>
          <tr className="flex justify-between items-center">
            <td className="w-6/12 flex items-center gap-3 sm:gap-5">
              {/* Image */}
              <img
                className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg cursor-pointer"
                src={auction.image}
                alt={auction.description}
                title={auction.description}
              />
              {/* Title */}
              <h4 className="text-base sm:text-lg font-medium cursor-pointer hover:text-[#0e2954] duration-300 ease-in-out truncate">
                {auction.title}
              </h4>
            </td>
            <td>
              <span className="text-base sm:text-lg font-medium">
                ${auction.currentBidPrice}
              </span>
            </td>
            <td>
              <span className="text-base sm:text-lg font-medium">
                {auction.timeLeft}
              </span>
            </td>
            <td>
              {/* AddToFavoritesButton */}
              <button
                onClick={() => handleBidNow(auction, auction.currentBidPrice)}
                disabled={auction.isAddedToFavorite}
                className={`relative cursor-pointer text-lg font-medium transition-opacity duration-300 ${
                  isFavorite ? "opacity-50 group hover:cursor-not-allowed" : ""
                }`}
              >
                {isFavorite ? (
                  <FaHeart size={22} color="red" />
                ) : (
                  <FaRegHeart size={22} />
                )}
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      {/* MobileCardView */}
      <div className="flex md:hidden flex-col gap-3 border p-3 rounded-lg shadow-sm">
        <div className="flex gap-3 items-center">
          <img
            className="w-16 h-16 object-cover rounded-lg"
            src={auction.image}
            alt={auction.description}
            title={auction.description}
          />
          <h4 className="text-base font-medium">{auction.title}</h4>
        </div>
        <div className="flex justify-between text-sm">
          <span>Bid: ${auction.currentBidPrice}</span>
          <span>{auction.timeLeft}</span>
          <button
            onClick={() => handleBidNow(auction, auction.currentBidPrice)}
            disabled={auction.isAddedToFavorite}
            className="text-red-500"
          >
            {isFavorite ? <FaHeart size={18} /> : <FaRegHeart size={18} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auctions;
