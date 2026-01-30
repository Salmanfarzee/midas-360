import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#D2D2D24D] overflow-auto md:block hidden">
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
            <p className="footer-quicklinks mt-[10.4vh] ml-[9vw]">
              Quick links
            </p>
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
            <p className="footer-quicklinks mt-[10.4vh] ml-[3vw]">
              Get in touch
            </p>
            <div className="flex flex-row ml-[3vw] mt-[2.6vh]">
              <img
                src="/assets/location.png"
                alt="Midas360 Footer location icon"
                className="w-[24px] h-[24px] mr-[12px]"
              />
              <p className="footer-quicklinks-content w-[213px]">
                148, Rajiv Gandhi Salai(OMR), Okkiyam Thoraipakkam, Chennai -
                600 097
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
      {/* mobile footer */}
      <footer className="bg-[#D2D2D24D] overflow-auto block md:hidden">
        <div className="w-full mx-auto grid-cols-1 flex md:grid-cols-3 gap-2 mb-[30px]">
          {/* Logo */}
          <div className="flex flex-col items-start w-[20%]">
            <div className="relative w-[47px] h-[23px] ml-[6.9vw] mt-[3.5vh] mb-[3.3vh]">
              <a href="/" className="relative w-[47px] h-[23px] block">
                <img
                  src="/assets/midas-footer-mobile.svg"
                  alt="Midas360 Footer logo"
                  className="absolute w-[47px] h-[23px]"
                />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex items-center flex-col w-[35%]">
            <p className="footer-quicklinks mt-[4vh] ml-[2vw]">Quick links</p>
            <div className="grid grid-cols-1 gap-1 ml-[2vw] mt-[.5vh]">
              <div className="h-[12px]">
                <a href="/contactus" className="footer-quicklinks-content">
                  Resources
                </a>
              </div>
              <div className="h-[12px]">
                <a href="/newsandevents" className="footer-quicklinks-content">
                  News and Events
                </a>
              </div>
              <div className="h-[12px]">
                <a href="/aboutus" className="footer-quicklinks-content">
                  About us
                </a>
              </div>
              <div className="h-[12px]">
                <a href="/contactus" className="footer-quicklinks-content">
                  Contact us
                </a>
              </div>
            </div>
          </div>

          {/* Get in Touch */}
          <div className="flex flex-col w-[45%]">
            <p className="footer-quicklinks mt-[4vh] ml-[3vw]">Get in touch</p>

            <div className="flex flex-row ml-[3vw] mt-[2vh]">
              <img
                src="/assets/location.png"
                alt="Midas360 Footer location icon"
                className="w-[9.5px] h-[9.5px] mr-[3px]"
              />
              <p className="footer-quicklinks-content ">
                148, Rajiv Gandhi Salai (OMR),<br/> Okkiyam Thoraipakkam, <br/>Chennai -
                600 097
              </p>
            </div>

            <div className="flex flex-row ml-[3vw] mt-[16px]">
              <img
                src="/assets/phone.png"
                alt="Midas360 Footer phone icon"
                className="w-[9.5px] h-[9.5px] mr-[3px]"
              />
              <p className="footer-quicklinks-content w-[256px]">
                +91 44 43449000 | +91 44 61739000
              </p>
            </div>

            <div className="flex flex-row ml-[3vw] mt-[16px]">
              <img
                src="/assets/email.png"
                alt="Midas360 Footer email icon"
                className="w-[9.5px] h-[9.5px] mr-[3px]"
              />
              <p className="footer-quicklinks-content w-[256px]">
                marketing@bahwancybertek.com
              </p>
            </div>
          </div>
        </div>

        <p className=" ml-[6.9vw] footer-content">
          midas360 is an AI-powered analytics platform that transforms metro
          rail <br/>operations through predictive maintenance and data-driven
          decision-making.
        </p>
        <p className="ml-[6.9vw] mt-[1.4vh] footer-copyrights">
          © {new Date().getFullYear()} midas360. All rights reserved.
        </p>
        <hr className="h-[1px] w-[calc(100%-50px)] mt-[11px] mb-[17px] bg-[#A2A2A2] justify-self-center" />
        <div className="w-full mx-auto flex justify-center mb-[15px]">
          <div className="footer-disclaimers  flex items-center justify-between">
          
            <a href="#" className="hover:underline">
              Terms & Conditions
            </a>
            <span className="mx-[8px]">|</span>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
