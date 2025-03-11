import React from "react";
import Image from "next/image";
import logo from "../../../public/source/images/logo.svg";

type prop = {
  styles?: string;
};
const Logo = ({ styles }: prop) => {
  return (
    <div>
      <Image
        className={`h-auto w-18 lg:w-20 xl:w-24  ${styles}`}
        src={logo}
        alt="logo"
        width={176}
        height={52}
      />
    </div>
  );
};

export default Logo;
