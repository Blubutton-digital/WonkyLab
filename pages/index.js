import Head from "next/head";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import InfoBar from "@/components/InfoBar";
import Info from "@/components/Info";
import Offer from "@/components/Offer";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import AgeVerification from "@/components/ageVerification/ageVerification";

export default function Home() {
  return (
    <AgeVerification>
      <Head>
        <title>Wonky Lab</title>
        <meta
          name="description"
          content="Discover The Wonky Labrador, a cozy bar in Sheffield offering a unique craft beer experience. Join us for a relaxing atmosphere, knowledgeable bartenders, and a variety of beers from the best UK breweries. Perfect for beer aficionados and casual drinkers alike."
        />
        <meta
          name="keywords"
          content="The Wonky Labrador, craft beer Sheffield, cozy bar, unique drinking experience, Sheffield bar, UK breweries, craft beer, local bar, beer tasting, Sheffield nightlife, bar with character, Sheffield pubs, beer lovers, artisan beer"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="relative">
        <NavBar />
        <Hero />
      </header>
      <main className="bg-wonky_green">
        {/* <AgeModal /> */}
        <InfoBar />
        <Info />
        <Offer />
        <Banner />
        <Contact />
      </main>
      <footer className="bg-wonky_green">
        <Footer />
      </footer>
    </AgeVerification>
  );
}
