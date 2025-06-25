"use client";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { paths } from "@/constants";

const Header = () => {
  const pathname = usePathname();

  return (
    <nav className="z-10 sticky top-0 bg-light-shade/60 backdrop-blur-lg py-3 px-3 border-b border-dark-accent/50">
      <ul className=" flex items-center justify-between xl:max-w-7xl xl:mx-auto">
        <li>
          <Button
            asChild
            variant={"ghost"}
            className={cn(
              "font-extrabold  text-dark-shade tracking-wider font-heading text-lg"
            )}
          >
            <Link href={paths.home()} className="">
              K K
            </Link>
          </Button>
        </li>
        <div className="md:hidden flex items-center">
          <li>
            <Button
              asChild
              variant={"link"}
              className={cn("text-dark-shade  tracking-wider ")}
            >
              <Link href={paths.resume()} target="_blank">
                My Resume
              </Link>
            </Button>
          </li>
          <li>
            <Button
              asChild
              variant={"link"}
              className={cn(
                "text-dark-shade  tracking-wider ",
                pathname === paths.projects() && "  font-extrabold "
              )}
            >
              <Link href={paths.projects()}>Projects</Link>
            </Button>
          </li>
        </div>

        <div className="flex items-center gap-3">
          <li className="hidden md:block">
            <Button
              asChild
              variant={"link"}
              className={cn("text-dark-shade  tracking-wider ")}
            >
              <Link href={paths.resume()} target="_blank">
                My Resume
              </Link>
            </Button>
            <Button
              asChild
              variant={"link"}
              className={cn(
                "text-dark-shade  tracking-wider ",
                pathname === paths.projects() && "  font-extrabold "
              )}
            >
              <Link href={paths.projects()}>Projects</Link>
            </Button>
          </li>
          <li>
            <Button
              asChild
              variant={"accent"}
              className={cn("font-extrabold tracking-wider font-sans")}
            >
              <Link href={paths.connect()}>Connect</Link>
            </Button>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Header;
