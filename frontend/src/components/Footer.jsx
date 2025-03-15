import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="border py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className=" text-center md:text-start">
            <h2 className="text-lg font-semibold mb-4">Products</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white hover:text-black">
                  Flutter
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-black">
                  React
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-black">
                  Android
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-black">
                  iOS
                </a>
              </li>
            </ul>
          </div>
          <div className=" text-center md:text-start">
            <h2 className="text-lg font-semibold mb-4">Design to code</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white hover:text-black">
                Responsive & Interactive UI Components
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-black">
                  Templates
                </a>
              </li>
            </ul>
          </div>

          <div className=" text-center md:text-start">
            <h2 className="text-lg font-semibold mb-4">Features</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white hover:text-black">
                Thoughtful Insights
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-black">
                Engaging Narrative
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-black">
                Diverse Perspectives
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-black">
                Active Engagement
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-black">
                Unique Expression
                </a>
              </li>

              
            </ul>
          </div>
          <div className=" text-center md:text-start">
            <h2 className="text-lg font-semibold mb-4">Company</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white hover:text-black">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-black">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-black">
                  Career
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-black">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-black">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className=" container mx-auto  flex flex-col md:flex-row justify-between items-center">
        <div className="text-xl font-semibold hidden md:flex">
          Mind Mosaic  <span className="text-white font-bold">Blog</span>
        </div>
        <div className="text-white text-sm hidden md:flex">
          <p>&copy; 2025 All rights reserved</p>
        </div>
        <div className="mt-4 md:mt-0 flex space-x-4">
          <a href="#">
            <FaGithub className="h-6" />
          </a>
          <a href="#">
            <BsYoutube className="h-6" />
          </a>

          <a href="#">
            <FaLinkedin className="h-6" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
//Explore a world of insights, stories, and inspiration across all categories – from travel and books to mindfulness and motivation