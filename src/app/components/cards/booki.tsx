"use client";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/app/components/ui/3d-card";
import Link from "next/link";
import booki from "@/app/images/booki.png";
import css from "@/app/images/css.svg";
import html from "@/app/images/html.svg";
import figma from "@/app/images/figma.svg";


export default function Booki() {
    return (
        <CardContainer className="inter-var">
          <CardBody className="relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black/40 border-white/[0.2]  w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem translateZ="50" className="text-xl font-bold text-white">
              Booki
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-sm max-w-sm mt-2 text-neutral-300"
            >
              Airbnb-like
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={booki}
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
                href="https://github.com/jeanmax1me/OC-Booki-"
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal text-white"
              >
                Github →
              </CardItem>
              <CardItem>
                <div className="flex gap-2 bg-white/80 border-fgreen border p-2 rounded-lg">
                <Image src={html} width={24} height={24} alt="html logo" />
                <Image src={css} width={24} height={24} alt="css logo" />
                <Image src={figma} width={24} height={24} alt="figma logo" />
                </div>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
    );
  }
  