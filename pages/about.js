import Footer from "@/components/Footer";
import H3 from "@/components/H3";
import Info from "@/components/Info";
import NavBar from "@/components/NavBar";
import React from "react";
import Image from "next/image";

import Macca from "../public/Images/Macca-shopfront.png";
import Macca1 from "../public/Images/Home/macca1.jpg";
import Macca2 from "../public/Images/Home/macca2.jpg";
import Shop1 from "../public/Images/Home/shopOpen.jpg";
import Shop from "../public/Images/open-sign.png";
import Link from "next/link";
import LogoList from "@/components/LogoList";
import Banner from "@/components/Banner";
import Head from "next/head";

const _about = () => {
  return (
    <div className="bg-[#EBEBEB]">
      <Head>
        <title>Our Story - Wonky Lab</title>
        <meta
          name="description"
          content="We welcome boardgamers, beer aficionados, weekend cocktail-drinkers, and pre-dinner wine-lovers, as well as hosting private events and mental health safe-space evenings"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="pb-20">
        <NavBar />
      </header>
      <main className="lg:pt-40 sm:pt-12 pt-4">
        <section className="container mx-auto flex flex-col lg:flex-row justify-between sm:mt-2 mt-10 px-4 md:pb-24 pb-14 gap-x-20">
          <div className="lg:w-6/12 xl:w-4/12 w-full sm:h-[594px] h-[400px] relative mt-14 lg:mt-0 order-2 lg:order-1">
            <Image
              src={Macca2}
              alt="Photo of shop front"
              className="h-full w-full object-cover lg:object-top rounded-md object-center"
              fill
              placeholder="blur"
            />
          </div>
          <div className="lg:w-6/12 w-full h-full relative flex flex-col  my-auto order-1 lg:order-2">
            <H3 black>Our Story</H3>
            <p className="text-dark lg:text-xl text-lg mt-14 font-lato font-light tracking-wide lg:leading-relaxed leading-loose">
              The familiar face of The Wonky Labrador is James “Mac” McGrath.
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

        <section className="bg-wonky_green">
          <div className="container mx-auto flex flex-col lg:flex-row justify-between sm:mt-2 mt-10 px-4 md:py-24 py-14 gap-x-20">
            <div className="lg:w-6/12 w-full h-full relative flex flex-col  my-auto ">
              <p className="text-white lg:text-xl text-lg  font-lato font-light tracking-wide lg:leading-relaxed leading-loose">
                The opportunity to take over The Wonky Labrador has also tapped
                into Mac’s love of community, and you’ll find this a welcoming
                place for all walks of life, including our four legged friends!
                We’re accessible and LGBTQ+ friendly, breast-feeding supporters
                - and we’ll always listen to your ideas for being a welcoming
                space.
              </p>
              <>
                <p className="text-white lg:text-xl text-lg mt-14 font-lato font-light tracking-wide lg:leading-relaxed leading-loose">
                  If you want to find out more about us, check out{" "}
                  <Link
                    className="text-wonky hover: underline underline-offset-4 "
                    target="_blank"
                    href="https://www.exposedmagazine.co.uk/news/refurbed-sheffield-micro-bar-hopes-to-lead-the-way-for-mental-health"
                  >
                    this article from Exposed Magazine!
                  </Link>
                </p>
              </>
              <p className="text-white lg:text-xl text-lg mt-14 font-lato font-light tracking-wide lg:leading-relaxed leading-loose">
                Interested in being part of The Wonky Labrador crew?
              </p>
              <p className="text-white lg:text-xl text-lg mt-14 font-lato font-light tracking-wide lg:leading-relaxed leading-loose">
                Email:{" "}
                <Link
                  className="text-wonky"
                  href="mailto:wonkylabrador@gmail.com"
                >
                  {" "}
                  wonkylabrador@gmail.com
                </Link>
              </p>
            </div>
            <div className="lg:w-6/12 xl:w-4/12 w-full sm:h-[594px] h-[400px] relative mt-14 lg:mt-0">
              <Image
                src={Shop1}
                alt="Photo of shop front"
                className="h-full w-full object-cover object-top rounded-md"
                placeholder="blur"
              />
            </div>
          </div>
        </section>
        <LogoList />
        <Banner />
      </main>

      <Footer />
    </div>
  );
};

export default _about;
