import React, { useMemo, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet";
import { useAuth } from "../context/Authcontext";
import { Button } from "./ui/button";

const Navbar = ({userId, setUserId}) => {
  const navigate = useNavigate();
  

  const { logout, user } = useAuth();

  return (
    <nav className="text-black shadow-md p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center">
        <Link to="/">
            <h1 className="text-2xl font-bold text-black flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
              </svg>
              Sky Vista
            </h1>        </Link>
      </div>

      {/* Navigation Links for Desktop */}
      <div className="hidden md:flex items-center space-x-8 font-medium">
        <Link
          to="/home"
          className=" transition duration-200"
        >
          Home
        </Link>
        <Link
          to={`/MyBookings/${userId}`}
          className="  transition duration-200"
        >
          My Bookings
        </Link>
        <Link
          to="/flights"
          className="transition duration-200"
        >
          Book a Flight
        </Link>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center space-x-6">
        {user ? (
          <Button
            className="px-4 py-2 text-purple-500 bg-white hover:bg-gray-100 rounded-lg"
            onClick={() => {
              logout();
              navigate("/");
              setUserId(null);
            }}
          >
            Logout
          </Button>
        ) : (
          <Button className="px-4 py-2 text-purple-500 bg-white hover:bg-gray-100 rounded-lg">
            <Link to="/login">Login</Link>
          </Button>
        )}
        <Link
          to="/admin/login"
          className=" transition duration-200"
        >
          Admin
        </Link>

        {/* Mobile Menu */}
        <nav className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <img
                src="/assets/icons/menu.svg"
                alt="Menu"
                className="w-8 h-8 cursor-pointer invert"
              />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>
                  <div className="flex justify-center mb-4">
                    <Link to="/">
                      <img
                        src="/assets/images/icon.png"
                        alt="Logo"
                        className="w-28"
                      />
                    </Link>
                  </div>
                </SheetTitle>
                <SheetDescription>
                  <div className="flex flex-col space-y-4 text-gray-800 font-semibold">
                    <Link
                      to="/"
                      className="hover:text-blue-500 transition duration-200"
                    >
                      Home
                    </Link>
                    <Link
                      to={`/MyBookings/${userId}`}
                      className="hover:text-blue-500 transition duration-200"
                    >
                      My Bookings
                    </Link>
                    <Link
                      to="/flights"
                      className="hover:text-blue-500 transition duration-200"
                    >
                      Book a Flight
                    </Link>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;