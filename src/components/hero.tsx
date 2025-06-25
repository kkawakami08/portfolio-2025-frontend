import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { paths } from "@/constants";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="gap-8 md:gap-14 grid grid-cols-1 md:grid-cols-2  items-center md:max-w-4xl md:mx-auto">
      <div className="border border-main-brand rounded-full p-3 flex items-center justify-center w-fit ">
        <Image
          src={"/kaori-profile.JPG"}
          alt="ragnar"
          width={720}
          height={960}
          className="rounded-full lg:max-h-md lg:w-auto"
        />
      </div>
      <div className="space-y-8 flex flex-col items-start">
        <h1 className="text-6xl lg:text-7xl text-dark-shade">Kaori Kawakami</h1>
        <p className="lg:text-lg">
          Blending technical expertise with an artist&apos;s eye, I&apos;m a
          driven developer specializing in high-performance React and Next.js
          applications. My focus is on delivering elegant solutions that are as
          user-friendly as they are robust.
        </p>

        <div className="border border-main-brand w-fit px-4 pt-1 pb-2 rounded-lg">
          <h2 className="text-3xl lg:text-4xl ">Frontend Developer</h2>
        </div>

        <Button
          asChild
          variant={"accent"}
          className="font-bold tracking-wide font-sans text-xl py-5 lg:text-2xl lg:py-6 "
        >
          <Link href={paths.connect()}>Let&apos;s Connect!</Link>
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
