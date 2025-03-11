import React from "react";
import Image from "next/image";
import img from "../../../public/source/images/illustration-1.svg";
import Button from "./Button";
import Input from "./Input";

const Intro = () => {
  return (
    <div className="px-4 md:px-28 lg:px-32 xl:px-48 bgd font-raleway
     text-center flex flex-col items-center gap-6 lg:gap-8 py-8 md:py-10 lg:py-12 ">
      <Image src={img} alt="intro image" width={720} height={534} />
      <h1 className="text-primary-dark-blue text-xl md:text-2xl lg:text-3xl xl:text-5xl font-bold xl:px-42">All your files in one secure location, accessible anywhere.</h1>
      <p className="text-primary-dark-blue md:text-lg lg:text-xl xl:px-42">
        Fylo stores all your most important files in one secure location. Access
        them wherever you need, share and collaborate with friends family, and
        co-workers.
      </p>
      <Input />
    </div>
  );
};

export default Intro;
