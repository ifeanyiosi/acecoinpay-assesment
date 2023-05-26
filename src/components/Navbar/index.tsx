import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import Button from "../Button";

type Props = {};

const NavigationBar = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const router = useRouter();

  return (
    <nav className="fixed shadow-md left-[50%] bg-white w-full  lg:px-20 mx-auto -translate-x-[50%] top-0 z-50 flex justify-center items-center">
      <div className="max-w-[1366px] w-full h-[80px]  justify-between items-center hidden lg:flex">
        <div className="flex items-center gap-[40px]">
          <Link className="text-[14px] font-[500] font-Inter" href="/faq">
            FAQ
          </Link>
          <Link className="text-[14px] font-[500] font-Inter" href="/about">
            About Us
          </Link>
        </div>
        <Link className="flex items-center justify-center" href="/">
          <h1 className="font-Inter text-[32px] font-bold ">
            AceCoin
            <span className="font-Inter text-[32px] font-[300] ">Pay</span>
          </h1>
        </Link>
        <div className="flex items-center gap-[20px] font-Inter">
          <Button
            onClick={() => router.push("/auth/login")}
            variant="secondary"
          >
            Log In
          </Button>

          <Button onClick={() => router.push("/auth/signup")} variant="primary">
            Sign up
          </Button>
        </div>
      </div>
      <div className="flex py-4 px-5 items-center relative lg:hidden justify-between w-full">
        <Link href="/">
          {" "}
          <h1 className="font-Inter text-[32px] font-bold ">
            AceCoin
            <span className="font-Inter text-[32px] font-[300] ">Pay</span>
          </h1>
        </Link>
        <button type="button" onClick={toggleDropdown}>
          {isOpen ? (
            <AiOutlineClose className="text-[32px]" />
          ) : (
            <RxHamburgerMenu className="text-[32px]" />
          )}
        </button>
        {isOpen && (
          <div className="max-h-[500px] w-full   mt-[140px] h-full absolute right-0">
            <div className="flex flex-col items-start px-0 w-full mt-2 bg-white font-Inter text-gray-800 border border-gray-200 shadow-md rounded-lg">
              <Link
                href="/faq"
                className="py-4 px-4 hover:bg-gray-100 text-[18px]"
              >
                FAQ
              </Link>
              <Link
                href="/about"
                className="py-4 px-4 hover:bg-gray-100 text-[18px]"
              >
                About us
              </Link>

              <div className="flex flex-col gap-8 px-4 py-4">
                <Button
                  onClick={() => router.push("/auth/login")}
                  variant="secondary"
                >
                  Log In
                </Button>

                <Button
                  onClick={() => router.push("/auth/signup")}
                  variant="primary"
                >
                  Sign up
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavigationBar;
