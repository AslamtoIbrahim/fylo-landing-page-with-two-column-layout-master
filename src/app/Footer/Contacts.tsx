import React from "react";
import { locations } from "./data";
import ItemContact from "./ItemContact";
const Contacts = () => {
  return (
    <div>
      <section className="flex flex-col gap-4 lg:grid lg:grid-cols-1 xl:w-full xl:gap-x-16 lg:gap-8    ">
        <ItemContact links={locations[0]} />
        <ItemContact links={locations[1]} />
      </section>
    </div>
  );
};

export default Contacts;
