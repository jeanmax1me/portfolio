"use client";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/app/components/ui/3d-card";
import Link from "next/link";
import javascript from "@/app/images/javascript.svg";
import nextjs from "@/app/images/nextjs.svg";
import bobo from "@/app/images/brown-bear-cub.jpg";

export default function ThreeDCardDemo() {
  return (
    <div className="bg-slate-950 pt-32 text-white relative">
      <h1 className="text-6xl font-bold tracking-tight text-slate-200 sm:text-6xl py-2 text-center pb-48 underline-offset-8 underline decoration-sky-500">
        Drafts
      </h1>
      <CardContainer className="inter-var">
        <CardBody className="relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black/20 border-white/[0.2]  w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          <CardItem translateZ="50" className="text-xl font-bold text-white">
            Make things float in air
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-sm max-w-sm mt-2 text-neutral-300"
          >
            Hover over this card to unleash the power of CSS perspective
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src={bobo}
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={20}
              as={Link}
              href="https://github.com/jeanmax1me"
              target="__blank"
              className="px-4 py-2 rounded-xl text-xs font-normal text-white"
            >
              Github →
            </CardItem>
            <CardItem>
              <div className="flex gap-2 bg-white/80 border-fgreen border p-2 rounded-lg">
              <Image src={javascript} width={24} height={24} alt="Javascript" />
              <Image src={nextjs} width={24} height={24} alt="Next.js" />
              </div>
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
}
