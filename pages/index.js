import Head from "next/head";
import { Content, Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import InfoBar from "@/components/InfoBar";
import Info from "@/components/Info";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="relative">
        <NavBar />
        <Hero />
      </header>
      <main className="bg-bg">
        <InfoBar />
        <Info />
      </main>
    </>
  );
}
