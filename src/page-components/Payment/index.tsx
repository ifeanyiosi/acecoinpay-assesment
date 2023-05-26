import { useState } from "react";
import { useRouter } from "next/router";
import { AiFillEdit } from "react-icons/ai";
import { Formik } from "formik";
import { Form } from "formik-antd";
import { BsSim } from "react-icons/bs";
import { AiOutlineWifi } from "react-icons/ai";
import { SiMastercard } from "react-icons/si";
import { GoVerified } from "react-icons/go";
import { IoKeypad } from "react-icons/io5";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import Image from "next/image";
import Clock from "@/components/Clock";
import React from "react";
import formInitialValues from "./formSettings/formInitialValues";
import validationSchema from "./formSettings/validationSchema";
import InputField from "@/components/InputField";
import Button from "@/components/Button";
import mastercard from "../../assets/icons/mastercard.svg";
import formData from "./formSettings/formData";
import CardExpInput from "@/components/CardExpInput";

type Props = {};

const Payments = (props: Props) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  return (
    <section className="bg-[#dcdcfb] h-full lg:px-[80px] px-6 rounded-[6px] mt-[100px] w-full flex items-center justify-center ">
      <div className="bg-[#fff] w-full rounded-[6px] flex justify-between gap-8 items-center lg:px-[120px] px-6 py-8 pt-8 mt-[200px] ">
        <div className="flex flex-col lg:max-w-[600px] w-full gap-8 ">
          <div className="flex items-center justify-between w-full">
            <h1 className="font-Inter text-[24px] font-bold ">
              AceCoin
              <span className="font-Inter text-[24px] font-[300] ">Pay</span>
            </h1>{" "}
            <div>
              <Clock />
            </div>
          </div>

          <div>
            <Formik
              onSubmit={(values) => {
                setLoading(true);
                console.log(values);
                setTimeout(() => {
                  setLoading(false);
                  router.push("/about");
                }, 1500);
              }}
              initialValues={formInitialValues}
              validationSchema={validationSchema.cardSetup}
            >
              {() => (
                <Form className="flex flex-col gap-8">
                  <div className="flex flex-col w-full gap-4 items-center justify-between ">
                    <div className="flex justify-between items-center w-full ">
                      <div>
                        <h1 className="text-[16px] font-bold text-blacked ">
                          Card Number
                        </h1>
                        <p className="text-[14px] text-mint ">
                          Enter the 16 digit card number on the card
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <AiFillEdit className="text-primary text-[20px] " />
                        <p className="text-primary text-[16px]">Edit</p>
                      </div>
                    </div>

                    <div className="w-full">
                      <InputField
                        prefix={
                          <SiMastercard className="text-primary text-[20px] " />
                        }
                        placeholder="1234 * 2345 * 3455 *3 467"
                        type="number"
                        name={formData.fields.cardNumber.name}
                        className="h-full"
                        suffix={
                          <GoVerified className="text-blue-500 text-[20px] " />
                        }
                        disabled={loading}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col lg:flex-row items-start gap-4 w-full justify-between ">
                    <div className="flex flex-col items-start">
                      <p className="text-[16px] font-bold text-blacked">
                        CVV number
                      </p>
                      <p className="text-[14px] text-mint whitespace-nowrap ">
                        Enter the 3 digit number behind the card
                      </p>
                    </div>
                    <div className=" w-full ">
                      <InputField
                        placeholder="CVV number"
                        type="number"
                        name={formData.fields.cvv.name}
                        className="w-full"
                        suffix={<IoKeypad className="text-mint text-[20px] " />}
                        disabled={loading}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col lg:flex-row justify-between  items-start gap-4">
                    <div className="flex flex-col items-start">
                      <p className="text-[16px] font-bold text-blacked">
                        Expiry Date
                      </p>
                      <p className="text-[14px] text-mint whitespace-nowrap ">
                        Enter the expiry date of the card
                      </p>
                    </div>
                    <div className="flex gap-2 lg:w-[30%] w-full items-center">
                      <CardExpInput
                        disabled={loading}
                        name={formData.fields.expiry.name}
                        placeholder="09/22"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col lg:flex-row  gap-4 w-full">
                    <div className="flex flex-col items-start">
                      <p className="text-[16px] font-bold text-blacked">
                        Password
                      </p>
                      <p className="text-[14px] text-mint whitespace-nowrap ">
                        Enter your dynamic password
                      </p>
                    </div>
                    <div className=" w-full ">
                      <InputField
                        placeholder="****"
                        type="password"
                        name={formData.fields.cardPin.name}
                        disabled={loading}
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <Button
                      isLoading={loading}
                      className="w-full py-6 "
                      variant="primary"
                      disabled={loading}
                    >
                      Pay Now
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
        <div className="hidden lg:flex mt-[50px] flex-col max-w-[400px]  w-full items-center justify-center ">
          <div className="bg-gray-100  flex flex-col items-center w-full rounded-md h-full p-6">
            <div className="bg-gray-50 translate-y-[-70px] rounded-[16px] max-w-[220px] w-full flex py-6 flex-col gap-[40px] ">
              <div className="flex items-center justify-between px-6">
                <BsSim className="text-mint text-[35px] " />
                <AiOutlineWifi className="text-blacked text-[30px]" />
              </div>
              <div className="flex flex-col gap-4 mt-[30px] px-6 ">
                <h1 className="text-[16px] text-blacked ">Cristiano Ronaldo</h1>
                <p className="text-[20px] font-bold text-blacked ">**** 3456</p>
              </div>
              <div className="flex items-center justify-between px-6">
                <p className="text-[14px] text-blacked">09/22</p>
                <Image
                  height={50}
                  width={50}
                  src={mastercard}
                  alt="mastercard"
                />
              </div>
            </div>
            <div className="flex flex-col gap-8 w-full">
              <div className="flex items-center justify-between">
                <p className="text-[14px] text-mint ">Company</p>
                <p className="text-[14px] text-blacked font-bold ">Apple</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-[14px] text-mint ">Order Number</p>
                <p className="text-[14px] text-blacked font-bold ">1234567</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-[14px] text-mint ">Product</p>
                <p className="text-[14px] text-blacked font-bold ">
                  MacBook Air
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-[14px] text-mint ">VAT(20%)</p>
                <p className="text-[14px] text-blacked font-bold "> $100 </p>
              </div>
            </div>
            <span className="py-4 text-mint ">
              ----------------------------------------------
            </span>
            <div className="flex items-center mt-4 justify-between w-full px-8">
              <div className="flex flex-col items-center">
                <p className="text-[14px] text-mint ">You have to pay</p>
                <p className="text-[18px] text-blacked font-bold ">
                  567.99{" "}
                  <span className="text-[18px] text-mint font-[300] ">USD</span>
                </p>
              </div>
              <MdOutlineShoppingCartCheckout className="text-[30px] text-primary " />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payments;
