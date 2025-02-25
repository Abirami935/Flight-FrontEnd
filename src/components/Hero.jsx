import React from 'react'
import './Hero.css';
import { Link, useNavigate } from "react-router-dom";

const Hero = () => {
    return (
      <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-32">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl font-extrabold mb-6 animate-fade-in">
              Welcome to SkyVista Airways
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Your gateway to extraordinary travel experiences
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition duration-300 transform hover:scale-105">
              <Link to="/flights"> Book Your Flight</Link>
             </button>
          </div>
        </div>
  
        {/* About Us Section */}
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">About SkyVista Airways</h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                At SkyVista Airways, we redefine the art of air travel. With over 25 years of excellence, 
                we've mastered the perfect blend of luxury, comfort, and reliability.
              </p>
              <p>
                Our commitment to innovation and passenger satisfaction has made us the preferred choice for 
                discerning travelers worldwide.
              </p>
            </div>
          </div>
        </div>
  
        {/* Travel Experience Section */}
        <div className="bg-white py-24">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Experience Premium Travel</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="transform hover:scale-105 transition duration-300">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-xl">
                  <div className="text-blue-600 mb-6">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">First Class Comfort</h3>
                  <p className="text-gray-600">
                    Luxurious seating with premium materials and exceptional legroom for ultimate comfort.
                  </p>
                </div>
              </div>
              <div className="transform hover:scale-105 transition duration-300">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-xl">
                  <div className="text-blue-600 mb-6">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Premium Entertainment</h3>
                  <p className="text-gray-600">
                    State-of-the-art entertainment system with countless hours of content.
                  </p>
                </div>
              </div>
              <div className="transform hover:scale-105 transition duration-300">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-xl">
                  <div className="text-blue-600 mb-6">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Gourmet Dining</h3>
                  <p className="text-gray-600">
                    Exquisite culinary experiences crafted by world-class chefs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Stats Section */}
        <div className="bg-blue-600 text-white py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-lg opacity-80">Daily Flights</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">150+</div>
                <div className="text-lg opacity-80">Destinations</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">5M+</div>
                <div className="text-lg opacity-80">Happy Passengers</div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">SkyVista Airways</h3>
              <p className="opacity-70 mb-8">Elevating Your Journey Above the Clouds</p>
              <div className="flex justify-center space-x-6">
                <a href="#" className="hover:text-blue-400 transition duration-300">Twitter</a>
                <a href="#" className="hover:text-blue-400 transition duration-300">Facebook</a>
                <a href="#" className="hover:text-blue-400 transition duration-300">Instagram</a>
              </div>
              <div className="mt-8 text-sm opacity-60">
                © 2025 SkyVista Airways. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
  
export default Hero