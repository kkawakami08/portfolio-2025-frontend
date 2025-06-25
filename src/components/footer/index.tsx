import { links, paths } from "@/constants";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <div className="bg-main-brand text-white flex flex-col  gap-5 pt-10 pb-5 px-5">
      <div className="space-y-5  lg:max-w-6xl lg:mx-auto w-full">
        <Button
          variant={"ghost"}
          asChild
          className="text-3xl  w-fit"
          size={"lg"}
        >
          <Link
            href={paths.home()}
            className="font-heading  tracking-wider font-semibold "
          >
            Kaori Kawakami
          </Link>
        </Button>
        <ul className="flex items-center gap-5 font-light mx-6">
          {links.map((link) => (
            <li key={link.name}>
              <Link href={link.href} className="hover:underline">
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <Link href={paths.connect()} className="hover:underline">
              Connect
            </Link>
          </li>
        </ul>
      </div>
      <p className="text-sm text-center text-white/50 tracking-wider font-light ">
        &copy; Copyright Kaori Kawakami
      </p>
    </div>
  );
};

export default Footer;
