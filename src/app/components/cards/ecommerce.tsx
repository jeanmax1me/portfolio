"use client";
import ecommerce from "@/app/images/ecommerce.png";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/app/components/ui/3d-card";
import Link from "next/link";
import css from "@/app/images/css.svg";
import html from "@/app/images/html.svg";
import nextjs from "@/app/images/nextjs.svg";
import javascript from "@/app/images/javascript.svg";
import nodejs from "@/app/images/nodejs.svg";
import react from "@/app/images/react.svg";
import typescript from "@/app/images/typescript.svg"


export default function Ecommerce() {
    return (
        <CardContainer className="inter-var">
          <CardBody className="relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black/40 border-white/[0.2]  w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem translateZ="50" className="text-xl font-bold text-white">
              Yuni Ecommerce
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-sm max-w-sm mt-2 text-neutral-300"
            >
              Ecommerce store selling phone products 
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={ecommerce}
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
                href="https://github.com/jeanmax1me/zephyrastudio"
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal text-white"
              >
                Github →
              </CardItem>
              <CardItem>
                <div className="flex gap-2 bg-white/80 border-fgreen border p-2 rounded-lg">
                <Image src={html} width={24} height={24} alt="html logo" />
                <Image src={css} width={24} height={24} alt="css logo" />
                <Image src={nextjs} width={24} height={24} alt="nextjs logo" />
                <Image src={javascript} width={24} height={24} alt="javascript logo" />
                <Image src={nodejs} width={24} height={24} alt="nodejs logo" />
                <Image src={react} width={24} height={24} alt="reactjs logo" />
                <Image src={typescript} width={24} height={24} alt="typescript logo" />
                </div>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
    );
  }
  
