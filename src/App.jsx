import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import ActiveAuctions from "./components/ActiveAuctions/ActiveAuctions";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import { toast } from "react-toastify";

function App() {
  const [auctions, setAuctions] = useState([]);
  const [bidCount, setBidCount] = useState(0);

  // HandleBidNow
  const handleBidNow = (bid) => {
    // PreventDuplicateFavoriteItems
    const existFavoriteItem = auctions.find((auction) => auction.id === bid.id);
    if (existFavoriteItem) {
      return;
    }

    setAuctions([...auctions, bid]);

    // AddBidCount
    const newBidCount = bidCount + bid.currentBidPrice;
    setBidCount(newBidCount);

    // ShowAddedToastNotification
    toast.info("You have added to favorite list");
  };

  // RemoveFromFavorites
  const removeFromFavorites = (id) => {
    const remainingFavoriteItems = auctions.filter(
      (auction) => auction.id !== id
    );
    setAuctions(remainingFavoriteItems);

    // RemoveBidCount
    const removedBidPrice = auctions.find((auction) => auction.id === id);
    if (removedBidPrice) {
      const newBidCount = bidCount - removedBidPrice.currentBidPrice;
      setBidCount(newBidCount);
    }

    // ShowRemovedToastNotification
    toast.error("You have removed from favorite list");
  };

  return (
    <>
      <div>
        {/* NavbarComponent */}
        <Navbar></Navbar>

        {/* BannerComponent */}
        <Banner></Banner>

        {/* ActiveAuctionsComponent */}
        <ActiveAuctions
          key={auctions.id}
          auctions={auctions}
          handleBidNow={handleBidNow}
          bidCount={bidCount}
          removeFromFavorites={removeFromFavorites}
        ></ActiveAuctions>

        {/* FooterComponent */}
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
