import React from "react";
import { IoNotificationsSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <header className="bg-base-100 shadow-sm sticky top-0 px-5 lg:px-10 z-50">
      <div className="navbar justify-between">
        {/* SiteNavMenuMobile */}
        <div className="dropdown lg:hidden">
          <div tabIndex="0" role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="0"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a href="#home" className="text-base text-black font-medium">
                Home
              </a>
            </li>
            <li>
              <a href="#auctions" className="text-base text-black font-medium">
                Auctions
              </a>
            </li>
            <li>
              <a
                href="#categories"
                className="text-base text-black font-medium"
              >
                Categories
              </a>
            </li>
            <li>
              <a
                href="#howToWorks"
                className="text-base text-black font-medium"
              >
                How To Works
              </a>
            </li>
          </ul>
        </div>

        {/* SiteLogo */}
        <div className="">
          <a href="#home" className="text-2xl text-[#003EA4] font-semibold">
            Auction<span className="text-[#FFD337] font-bold">Gallery</span>
          </a>
        </div>

        {/* SiteNavMenuDesktop */}
        <div className="hidden lg:flex justify-center">
          <ul className="menu menu-horizontal px-1 gap-x-5">
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

        {/* SiteProfileAndCartIcon */}
        <div>
          <div className="dropdown dropdown-end pr-3 md:pr-5">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <IoNotificationsSharp size={25} />
                <span className="badge badge-sm indicator-item">9</span>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img src="https://i.ibb.co/rRtcz9Y8/user.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
