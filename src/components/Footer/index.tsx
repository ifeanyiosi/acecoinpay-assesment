import Link from "next/link";
import React from "react";
import { BsTwitter, BsYoutube, BsTiktok, BsFacebook } from "react-icons/bs";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="w-full bg-primary flex flex-col  justify-end items-center [@media_(min-width:_658px)]:pt-[100px] pt-[108px]">
      <div className="max-w-[1366px] flex flex-col gap-[32px]  mb-[82px] items-center justify-between w-full px-8">
        <div className="flex w-full gap-[67px] [@media_(min-width:_658px)]:flex-row flex-col justify-between">
          <div className="flex flex-col items-start gap-[8px] max-w-[300px]">
            <div className="flex items-center gap-[20px] w-full">
              <a href="#">
                <BsYoutube className="text-white" />
              </a>
              <a href="#">
                <BsFacebook className="text-white" />
              </a>
              <a href="#">
                <BsTwitter className="text-white" />
              </a>
              <a href="#">
                {" "}
                <BsTiktok className="text-white" />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start gap-[12px]">
            <h3 className="font-normal text-[18px] text-white max-w-[466px] text-center leading-[21.6px]">
              Features
            </h3>
            <button
              type="button"
              className=" whitespace-nowrap font-[400] text-[14px] text-white"
              onClick={scrollToTop}
            >
              {" "}
              Back To Top{" "}
            </button>

            <Link className="text-white text-[14px]" href="/Financial-Target">
              Security
            </Link>
            <Link href="/" className="text-white text-[14px]">
              Savings plan
            </Link>
            <Link href="/" className="text-white text-[14px]">
              E-commerce
            </Link>
          </div>
          <div className="flex flex-col items-start gap-[12px]">
            <h3 className="font-normal text-[18px] text-white  max-w-[466px] text-center leading-[21.6px]">
              Legal
            </h3>
            <Link href="/" className="text-white text-[14px]">
              Terms and Conditions
            </Link>
            <Link href="/" className="text-white text-[14px]">
              Privacy Policy
            </Link>
          </div>
          <div className="flex flex-col items-start gap-[12px]">
            <h3 className="font-normal text-[18px] text-white max-w-[466px] text-center  leading-[21.6px]">
              Company
            </h3>
            <Link href="/about" className="text-white text-[14px]">
              About Us
            </Link>
            <Link href="/" className="text-white text-[14px]">
              FAQ
            </Link>
            <Link href="/" className="text-white text-[14px]">
              Blog
            </Link>
          </div>
          <div className="flex flex-col items-start gap-[12px]">
            <h3 className="font-normal text-[18px] text-white max-w-[466px] text-center  leading-[21.6px]">
              Contact Us
            </h3>

            <Link href="/" className="text-white text-[14px]">
              Support
            </Link>
            <a className="text-white text-[14px]" href="#">
              Whatsapp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
