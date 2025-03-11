import React from "react";
import Input from "./Input";

const SingUp = () => {
  return (
    <div className="bg-primary-desaturated-blue font-open-sans  p-8 padx text-center text-white 
    md:items-center flex flex-col lg:flex-row gap-4 lg:gap-32 xl:gap-56  text-[12px] lg:text-base py-12 lg:py-30 ">

      <section className="flex flex-col gap-4 lg:gap-8 lg:text-start lg:items-start">
        <h2 className="text-lg lg:text-2xl xl:text-4xl">Get early access today</h2>
        <p className="font-raleway xl:text-xl">
          It only takes a minute to sign up and our free starter tier is extremely
          generous. If you have any questions, our support team would be happy to
          help you.
        </p>
      </section>
      <Input singupStyles="lg:flex-col" styles="border-transparent" errorStyle="text-white" />
      
    </div>
  );
};

export default SingUp;
