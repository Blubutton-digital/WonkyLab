import Footer from "@/components/Footer";
import H3 from "@/components/H3";
import Info from "@/components/Info";
import NavBar from "@/components/NavBar";
import React from "react";
import Image from "next/image";

import Macca from "../public/Images/Macca-shopfront.png";
import Shop from "../public/Images/IMAGE- OPEN.png";
import Link from "next/link";
import LogoList from "@/components/LogoList";

const _about = () => {
  return (
    <div className="bg-[#EBEBEB]">
      <header className="pb-20">
        <NavBar />
      </header>
      <main className="lg:pt-40 sm:pt-12 pt-4">
        <section className="container mx-auto flex flex-col lg:flex-row justify-between sm:mt-2 mt-10 px-4 pb-24 gap-x-20">
          <div className="lg:w-6/12 xl:w-4/12 w-full sm:h-[594px] h-[400px] relative mt-14 lg:mt-0 order-2 lg:order-1">
            <Image
              src={Macca}
              alt="Photo of shop front"
              className="h-full w-full object-cover object-top rounded-md"
              fill
              placeholder="blur"
            />
          </div>
          <div className="lg:w-6/12 w-full h-full relative flex flex-col  my-auto order-1 lg:order-2">
            <H3 black>Our Story</H3>
            <p className="text-dark lg:text-xl text-lg mt-14 font-lato font-light tracking-wide lg:leading-relaxed leading-loose">
              The new face of The Wonky Labrador is James “Mac” McGrath.
              Village-boy from South Lincolnshire, Mac has fallen in love with
              Sheffield & the Peak District. As a craft beer fanatic, and with
              20 years experience in hospitality, opening a bar here was pretty
              much inevitable.
            </p>
            <p className="text-dark lg:text-xl text-lg mt-14 font-lato font-light tracking-wide lg:leading-relaxed leading-loose">
              We welcome boardgamers, beer aficionados, weekend
              cocktail-drinkers, and pre-dinner wine-lovers, as well as hosting
              private events and mental health safe-space evenings
            </p>
            <p className="text-dark lg:text-xl text-lg mt-14 font-lato font-light tracking-wide lg:leading-relaxed leading-loose">
              To see our current offerings{" "}
              <Link href={"/#offers"} className="text-wonky">
                click here.
              </Link>
            </p>
          </div>
        </section>

        <section className="bg-darkbg">
          <div className="container mx-auto flex flex-col lg:flex-row justify-between sm:mt-2 mt-10 px-4 py-24 gap-x-20">
            <div className="lg:w-6/12 w-full h-full relative flex flex-col  my-auto ">
              <p className="text-white lg:text-xl text-lg mt-14 font-lato font-light tracking-wide lg:leading-relaxed leading-loose">
                The opportunity to take over The Wonky Labrador has also tapped
                into Mac’s love of community, and you’ll find this a welcoming
                place for all walks of life, including our four legged friends!
                We’re accessible and LGBTQ+ friendly, breast-feeding supporters
                - and we’ll always listen to your ideas for being a welcoming
                space.
              </p>
              <p className="text-white lg:text-xl text-lg mt-14 font-lato font-light tracking-wide lg:leading-relaxed leading-loose">
                Interested in being part of The Crafty One crew?
              </p>
              <p className="text-white lg:text-xl text-lg mt-14 font-lato font-light tracking-wide lg:leading-relaxed leading-loose">
                Email wonkylabrador@gmail.com
              </p>
            </div>
            <div className="lg:w-6/12 xl:w-4/12 w-full sm:h-[594px] h-[400px] relative mt-14 lg:mt-0">
              {/* <Image
                alt="Photo of the shop front"
                src={Shop}
                fill
                className="rounded-lg object-cover"
              /> */}
              <Image
                src={Shop}
                alt="Photo of shop front"
                className="h-full w-full object-cover object-top rounded-md"
                fill
                priority
                placeholder="blur"
              />
            </div>
          </div>
        </section>
        <LogoList />
      </main>

      <Footer />
    </div>
  );
};

export default _about;
