import React from "react";

const Footer = () => {
  return (
    <footer className="footer-container py-32">
      {/* SiteIconFooter */}
      <div className="text-center">
        <a href="#home" className="text-2xl text-[#003EA4] font-semibold">
          Auction<span className="text-[#FFD337] font-bold">Gallery</span>
        </a>
      </div>
      <p className="flex items-center justify-center gap-5 pt-5">
        <span className="font-medium">Bid.</span>
        <span className="font-medium">Win.</span>
        <span className="font-medium">Own.</span>
      </p>
      {/* FooterNavMenu */}
      <div className="md:flex md:justify-center">
        <ul className="menu menu-horizontal px-1 gap-x-5 justify-center">
          <li>
            <a
              href="#home"
              className="text-base text-black font-medium hover:bg-transparent hover:shadow-none hover:text-[#FFD337] duration-300 ease-in-out"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#auctions"
              className="text-base text-black font-medium hover:bg-transparent hover:shadow-none hover:text-[#FFD337] duration-300 ease-in-out"
            >
              Auctions
            </a>
          </li>
          <li>
            <a
              href="#categories"
              className="text-base text-black font-medium hover:bg-transparent hover:shadow-none hover:text-[#FFD337] duration-300 ease-in-out"
            >
              Categories
            </a>
          </li>
          <li>
            <a
              href="#howToWorks"
              className="text-base text-black font-medium hover:bg-transparent hover:shadow-none hover:text-[#FFD337] duration-300 ease-in-out"
            >
              How To Works
            </a>
          </li>
        </ul>
      </div>
      {/* AllRightsReserved */}
      <p className="text-center pt-2">
        © 2026 AuctionHub. All rights reserved. Developed by{" "}
        <span className="text-[#FFD337]">Hi ASIF</span>
      </p>
    </footer>
  );
};

export default Footer;
