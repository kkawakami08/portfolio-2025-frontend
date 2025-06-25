import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import React from "react";

const ConnectPage = () => {
  return (
    <div className="px-5 py-30 flex-1 flex flex-col gap-15 sm:max-w-lg sm:mx-auto sm:text-center">
      <div className="space-y-5">
        <h1 className="text-5xl lg:text-7xl">Let&apos;s Get in Touch!</h1>
        <p className="text-lg lg:text-xl">
          Thanks for visiting my portfolio! I&apos;m eager to connect with
          fellow developers, discuss potential projects, or explore new
          challenges. If you&apos;re looking for a dedicated front-end developer
          for your team, or just want to chat about the latest web trends,
          don&apos;t hesitate to get in touch.
        </p>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <Button asChild variant={"ghost"} className="" size={"lg"}>
          <Link href={"mailto:k.kawakamai08@gmail.com"} className="space-x-2">
            <Mail className="size-7 stroke-2 text-main-brand " />
            <span className=" text-2xl tracking-wider font-medium">
              k.kawakami08@gmail.com
            </span>
          </Link>
        </Button>
        <Button asChild variant={"ghost"} className="" size={"lg"}>
          <Link
            href={"https://www.linkedin.com/in/k-kawakami/"}
            className="space-x-2"
            target="_blank"
          >
            <Linkedin className="size-7 stroke-2 text-main-brand " />
            <span className=" text-2xl tracking-wider font-medium">
              LinkedIn
            </span>
          </Link>
        </Button>
        <Button asChild variant={"ghost"} className="" size={"lg"}>
          <Link
            href={"https://github.com/kkawakami08"}
            className="space-x-2"
            target="_blank"
          >
            <Github className="size-7 stroke-2 text-main-brand " />
            <span className=" text-2xl tracking-wider font-medium">GitHub</span>
          </Link>
        </Button>
      </div>
      <p className="font-heading text-2xl lg:text-3xl tracking-wide text-center font-semibold ">
        I look forward to hearing from you!
      </p>
    </div>
  );
};

export default ConnectPage;
