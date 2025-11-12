import React from "react";
import { VisionSvg } from "../../helpers/icons";
import TitleCard from "./TitleCard";
import Button from "./Button";

export default function About() {
  const divisionsOverview = [
    {
      title: "5 Sector Presence",
      description:
        "Holdings across digital, automotive, software, service, and real estate.",
    },
    {
      title: "$100M+ Portfolio",
      description:
        "Build a diversified portfolio exceeding $100M in total value.",
    },
    {
      title: "Automated Systems",
      description:
        "Fully automated community-driven capital flow infrastructure.",
    },
    {
      title: "New Private Equity",
      description:
        "Become the 'New Age Berkshire Hathaway' for modern entrepreneurs.",
    },
  ];
  return (
    <section className="bg-white py-16 rounded-t-3xl">
      <TitleCard
        title={"Foresight"}
        description={
          "Building the foundation today for tomorrow's leading holding company."
        }
        descriptionClassName="text-c-black/60"
        tagline={"2030 VISION"}
      />
      <div className="grid-system ">
        <div className="grid  md:col-start-2 md:col-end-6 gap-8 xl:grid-cols-2">
          {divisionsOverview.map(({ title, description }, i) => {
            return (
              <div key={i} className="">
                <div className="flex gap-2 xl:gap-4 items-center">
                  <VisionSvg className="size-5 xl:size-8" />
                  <h3 className=" text-2xl xl:text-[32px]">{title}</h3>
                </div>
                <p className=" max-w-[55ch] mt-2 text-c-black/60 ">
                  {description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="grid-system mt-12 md:mt-24">
        <div className="flex flex-col items-center col-span-full md:col-start-2 md:col-end-6 py-6 px-8 bg-[#f8f8f8] rounded-2xl">
          <h1 className="2xl:text-[64px] text-4xl">2026</h1>
          <h1 className="2xl:text-5xl text-2xl text-center">
            The Future of Private Holdings
          </h1>
          <h3 className="2xl:text-2xl  text-lg text-center text-black/60 py-6 max-w-[60ch]">
            A fully integrated ecosystem where community, capital, and
            innovation converge to create unprecedented value across multiple
            sectors.
          </h3>
          <Button className="mt-12">Join Our Community</Button>
        </div>
      </div>
    </section>
  );
}
