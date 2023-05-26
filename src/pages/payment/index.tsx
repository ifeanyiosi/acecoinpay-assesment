import Footer from "@/components/Footer";
import NavigationBar from "@/components/Navbar";
import Payments from "@/page-components/Payment";
import React from "react";

type Props = {};

const Payment = (props: Props) => {
  return (
    <div className="h-screen bg-[#dcdcfb] justify-center items-center ">
      <NavigationBar />
      <Payments />
      <div className="pt-[80px] bg-[#dcdcfb]"></div>
      <Footer />
    </div>
  );
};

export default Payment;
