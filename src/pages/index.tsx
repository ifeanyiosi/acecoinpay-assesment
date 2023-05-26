import NavigationBar from "@/components/Navbar";
import Image from "next/image";
import { useRouter } from "next/router";
import mobile from "../assets/images/Lovepik_com-450040363- Mobile bank vector.png";
import Button from "@/components/Button";
import Footer from "@/components/Footer";

export default function Home() {
  const router = useRouter();
  return (
    <main className="w-full flex  relative flex-col items-center justify-center ">
      <NavigationBar />
      <div className=" mt-[100px] w-full flex flex-col-reverse lg:flex-row items-center justify-center lg:px-[80px] px-6">
        <div>
          <Image height={500} width={500} src={mobile} alt="mobile" />
        </div>
        <div className="flex flex-col items-start gap-6">
          <h1 className="text-[16px]">THE AceCoinPay MOBILE APP</h1>
          <h1 className="text-[32px]">Pay from home or anywhere else.</h1>
          <p className="text-[14px]">
            It’s easy, convenient and secure with the AceCoinPay App.
          </p>
          <div className="w-full lg:max-w-[300px]">
            <Button
              className="w-full"
              onClick={() => router.push("/payment")}
              variant="primary"
            >
              Make Payment
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
