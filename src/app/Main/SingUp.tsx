import React from "react";
import Input from "./Input";

const SingUp = () => {
  return (
    <div className="bg-primary-desaturated-blue font-open-sans  p-8 lg:px-20 lg:mx-32 xl:mx-96  text-center text-white 
    flex flex-col gap-4 lg:gap-8  text-[12px] lg:text-base py-12 lg:py-10 -mb-16 lg:-mb-20 xl:-mb-24 relative z-10 ">

      <h2 className="text-lg lg:text-2xl xl:text-4xl">Get early access today</h2>
      <p className="font-raleway xl:text-xl">
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </p>
      <Input styles="border-transparent" errorStyle="text-white" />
      
    </div>
  );
};

export default SingUp;
