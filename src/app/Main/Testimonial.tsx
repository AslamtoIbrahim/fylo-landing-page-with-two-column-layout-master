import React from "react";
import Image from "next/image";
import person from '../../../public/source/images/avatar-testimonial.jpg'
import quote from '../../../public/source/images/icon-quotes.svg'

 
const Testimonial = () => {
  return (
    <div className="rounded-md py-4 px-6 xl:p-8 flex flex-col gap-2 my-8 md:mx-36 lg:mx-0 lg:w-96 lg:justify-self-start
    text-primary-dark-blue bg-white shad font-open-sans text-[12px]  md:text-[13px] lg:text-[14px] xl:text-base">
      <Image src={quote} alt="quote"/>
      <p>Fylo has improved our team productivity by an order of magnitude. Since 
      making the switch our team has become a well-oiled collaboration machine.</p>
      <div className="flex items-center gap-2">
        <Image
        className="h-auto w-8 lg:w-10 xl:w-12 rounded-full"
          src={person}
          alt='person image'
          width={128}
          height={128}
          objectFit="cover"
        />
        <div>
            <h3 className="font-semibold">Kyle Burton</h3>
            <p>Founder & CEO, Huddle</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
