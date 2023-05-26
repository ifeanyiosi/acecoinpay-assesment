import NavigationBar from "@/components/Navbar";
import React from "react";

type Props = {};

const Login = (props: Props) => {
  return (
    <section>
      <NavigationBar />
      <div className="flex items-center justify-center mt-[100px] " >
        <h1 className="text-[40px] text-primary font-bold">Coming Soon</h1>
      </div>
    </section>
  );
};

export default Login;
