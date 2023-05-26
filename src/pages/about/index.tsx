import Button from "@/components/Button";
import NavigationBar from "@/components/Navbar";
import React from "react";
import { useRouter } from "next/router";

type Props = {};

const About = (props: Props) => {
  const router = useRouter();
  return (
    <section>
      <NavigationBar />
      <div className="mt-[100px] flex-col flex items-center justify-center gap-8 px-6 ">
        <h1 className="text-[30px] text-blacked">
          {" "}
          Congratulations, you have made it this far{" "}
        </h1>

        <p className="text-[20px] text-blacked font-bold ">
          Please feel free to click all the links and buttons
        </p>
        <div className="max-w-[300px] w-full flex flex-col items-center gap-4">
          <Button
            className="w-full"
            onClick={() => router.push("https://ifeanyiosi.netlify.app")}
            variant="primary"
          >
            Click to learn more
          </Button>
          <Button
            className="w-full"
            onClick={() => router.push("https://www.ronaldo7.net")}
            variant="secondary"
          >
            Facts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
