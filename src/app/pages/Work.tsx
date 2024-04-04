"use client";
import Booki from "../components/cards/booki";
import Fisheye from "../components/cards/fisheye";
import Kasa from "../components/cards/kasa";
import Zephyra from "../components/cards/zephyra";
import Canneshotel from "../components/cards/canneshotel";
import Dashboard from "../components/cards/dashboard";
import Ecommerce from "../components/cards/ecommerce";
import Ohmyfood from "../components/cards/ohmyfood";
import Lespetitsplats from "../components/cards/lespetitsplats";
import Tase from "../components/cards/tase";

export default function ThreeDCardDemo() {
  return (
    <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-32 text-white relative">
      <h1 className="text-6xl font-bold tracking-tight text-slate-200 sm:text-6xl py-2 text-center pb-48 underline-offset-8 underline decoration-sky-500">
        Drafts
      </h1>
      <div className="flex flex-wrap gap-14 px-8 justify-center">
        <Zephyra />
        <Booki />
        <Fisheye />
        <Dashboard />
        <Kasa />
        <Canneshotel />
        <Ohmyfood />
        <Ecommerce />
        <Tase />
        <Lespetitsplats />
      </div>
    </div>
  );
}
