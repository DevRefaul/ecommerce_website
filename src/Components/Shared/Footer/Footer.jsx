import React from "react";
import logo from "../../../Assets/shopaholic.png";

const Footer = () => {
  return (
    <>
      <footer className="py-6 bg-[#90ee908c] dark:bg-gray-800 dark:text-gray-50">
        <div className="container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
          <div className="grid grid-cols-12">
            {/* logo and title */}
            <div className="pb-6 col-span-full md:pb-0 md:col-span-6">
              <a
                rel="noopener noreferrer"
                href="/"
                className="flex justify-center space-x-3 md:justify-start"
              >
                <img src={logo} alt="" className="h-6 mr-3 sm:h-9" />
                <span className="self-center text-2xl font-semibold font-['Roboto_Slab']">
                  MYSHOP
                </span>
              </a>
            </div>

            {/* links section */}
            <div className="col-span-6 text-center md:text-left md:col-span-3">
              <p className="pb-1 text-lg font-medium">Shortlinks</p>
              <ul>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="/"
                    className="hover:dark:text-violet-400"
                  >
                    Link
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-6 text-center md:text-left md:col-span-3">
              <p className="pb-1 text-lg font-medium">Category</p>
              <ul>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="/"
                    className="hover:dark:text-violet-400"
                  >
                    Link
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* bottom footer */}
          <div className="grid justify-center pt-6 lg:justify-between">
            <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
              <span>©2023 All rights reserved by MD.Refaul Islam</span>
            </div>
            <div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
              <a
                rel="noopener noreferrer"
                href="https://md-refaul-islam.web.app"
                target="_blank"
                title="Email"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-violet-400 dark:text-gray-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
              </a>
              <a
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/refaul-islam/"
                target="_blank"
                title="Linkedin"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-violet-400 dark:text-gray-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 30 30"
                  className="w-5 h-5"
                >
                  <path d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z"></path>
                </svg>
              </a>
              <a
                rel="noopener noreferrer"
                href="https://github.com/DevRefaul"
                target="_blank"
                title="GitHub"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-violet-400 dark:text-gray-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
