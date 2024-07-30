import Image from "next/image";
import React from "react";
import me from "@/public/me.png";

const Hero = () => {
  return (
    <div className="md:flex-row md:flex w-[80%] md:w-[56%] mx-auto justify-between pt-20 md:pt-0">
      <Image
        className="rounded-full"
        src={me}
        width={400}
        height={400}
      />

      <div className="text-center md:pt-16 pt-10  md:ml-24 ml-0">
        <h2 className="uppercase text-3xl mb-2 text-white">
          I'm{" "}
          <span className="text-black font-bold">
            Guy Asong
          </span>
        </h2>
        <h3 className="text-xl text-white">FRONTEND DEVELOPER</h3>
        <hr className="mb-3"/>
        <p className="text-lg">This portfolio is a representation of all what I've learned and accomplished as a frontend developer</p>
      </div>
    </div>
  );
};

export default Hero;