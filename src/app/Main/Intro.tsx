import React from "react";
import Image from "next/image";
import img from "../../../public/source/images/illustration-1.svg";
import Input from "./Input";

const Intro = () => {
  return (
    <div className="padx bgd font-raleway
     text-center flex flex-col items-center gap-6 lg:flex-row-reverse lg:gap-12 xl:gap-16
      py-8 md:py-10 lg:py-12 ">
      <Image src={img} alt="intro image" width={720} height={534} />
      <section className="flex flex-col items-center gap-6 lg:items-start lg:text-start lg:gap-8 ">
        <h1 className="text-primary-dark-blue text-xl md:text-2xl lg:text-3xl xl:text-5xl font-bold  ">All your files in one secure location, accessible anywhere.</h1>
        <p className="text-primary-dark-blue md:text-lg lg:text-xl  ">
          Fylo stores all your most important files in one secure location. Access
          them wherever you need, share and collaborate with friends family, and
          co-workers.
        </p>
        <Input singupStyles="lg:mr-16" />
      </section>
    </div>
  );
};

export default Intro;
