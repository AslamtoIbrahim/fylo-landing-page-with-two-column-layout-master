import React from "react";

const Links = () => {
  return (
    <div className="text-white/80 font-open-sans py-12 flex flex-col gap-8
     lg:grid lg:grid-cols-2 xl:py-0 xl:w-full xl:whitespace-nowrap xl:gap-0 ">
      <section className="flex flex-col gap-4">
        <a className="lin" href="#">About Us</a>
        <a className="lin" href="#">Jobs</a>
        <a className="lin" href="#">Press</a>
        <a className="lin" href="#">Blog</a>
      </section>
      <section className="flex flex-col gap-4">
        <a className="lin" href="#">Contact Us</a>
        <a className="lin" href="#">Terms</a>
        <a className="lin" href="#">Privacy</a>
      </section>
    </div>
  );
};

export default Links;
