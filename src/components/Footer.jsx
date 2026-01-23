import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#D2D2D24D] overflow-auto">
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex flex-col">
          <div
            className={
              "relative w-[200px] h-[100px] ml-[6.9vw] mt-[5.6vh] mb-[3.3vh]"
            }
          >
            <a href="/" className="relative w-[200px] h-[100px] block">
              <img
                src="/assets/footer-logo.png"
                alt="Midas360 Footer logo"
                className="absolute w-[158px] h-[77.9px] md:w-[150px] md:h-[75px]"
              />
            </a>
          </div>
          <p className="w-[367px] ml-[6.9vw] footer-content">
            midas360 is an AI-powered analytics platform that transforms metro
            rail operations through predictive maintenance and data-driven
            decision-making.
          </p>
          <p className="ml-[6.9vw] mt-[5.4vh] footer-copyrights">
            © {new Date().getFullYear()} midas360. All rights reserved.
          </p>
        </div>
        <div className="flex flex-col">
          <p className="footer-quicklinks mt-[10.4vh] ml-[9vw]">Quick links</p>
          <div className="grid grid-cols-2 gap-1 ml-[9vw] mt-[2.6vh]">
            <div className="mb-[1.6vh]">
              <p className="footer-quicklinks-content">Resources</p>
            </div>
            <div>
              <p className="footer-quicklinks-content">News and Events</p>
            </div>
            <div>
              <p className="footer-quicklinks-content">About us</p>
            </div>
            <div>
              <p className="footer-quicklinks-content">Contact us</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="footer-quicklinks mt-[10.4vh] ml-[3vw]">Get in touch</p>
          <div className="flex flex-row ml-[3vw] mt-[2.6vh]">
            <img
              src="/assets/location.png"
              alt="Midas360 Footer location icon"
              className="w-[24px] h-[24px] mr-[12px]"
            />
            <p className="footer-quicklinks-content w-[213px]">
              148, Rajiv Gandhi Salai(OMR), Okkiyam Thoraipakkam, Chennai - 600
              097
            </p>
          </div>
          <div className="flex flex-row ml-[3vw] mt-[16px]">
            <img
              src="/assets/phone.png"
              alt="Midas360 Footer phone icon"
              className="w-[24px] h-[24px] mr-[12px]"
            />
            <p className="footer-quicklinks-content w-[256px]">
              +91 44 43449000 | +91 44 61739000
            </p>
          </div>
          <div className="flex flex-row ml-[3vw] mt-[16px]">
            <img
              src="/assets/email.png"
              alt="Midas360 Footer email icon"
              className="w-[24px] h-[24px] mr-[12px]"
            />
            <p className="footer-quicklinks-content w-[256px]">
              marketing@bahwancybertek.com
            </p>
          </div>
        </div>
      </div>
      <hr className="h-[2px] w-[calc(100%-100px)] mt-[11px] mb-[30px] bg-[#A2A2A2] justify-self-center" />
      <div className="w-full mx-auto flex justify-center mb-[34px]">
        <div className="footer-disclaimers w-[422px] flex items-center justify-between">
          <a href="#" className="hover:underline">
            Disclaimer
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            Terms & Conditions
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
