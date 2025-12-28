import React from "react";

const Banner = () => {
  return (
    <section id="home" className="banner-container">
      <div className="banner-inner flex flex-col lg:flex-row items-center justify-center lg:justify-between px-5 lg:px-10">
        <div className="banner-content lg:w-1/2 h-full">
          <h1 className="text-2xl text-center md:text-3xl lg:text-5xl lg:text-left font-semibold">
            Bid on Unique Items from Around the World
          </h1>
          <p className="text-base md:text-2xl font-light lg:w-10/12 mt-5 mb-8 text-center lg:text-left">
            Discover rare collectibles, luxury goods, and vintage treasures in
            our curated auctions
          </p>
          <div className="text-center lg:text-left">
            <a
              href="#auctions"
              className="px-6 py-4 text-sm md:px-8 md:py-4 md:text-base font-medium rounded-4xl bg-white text-black cursor-pointer hover:bg-[#FFD337] duration-300 ease-in-out"
            >
              Explore Auctions
            </a>
          </div>
        </div>
        <div className="w-1/2"></div>
      </div>
    </section>
  );
};

export default Banner;
