import Head from "next/head";
import { Content, Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import InfoBar from "@/components/InfoBar";
import Info from "@/components/Info";
import Offer from "@/components/Offer";
import LogoList from "@/components/LogoList";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<Head>
				<title>Wonky Lab</title>
				<meta name="description" content="Discover our welcomeing atosphere. Looking for a place to relax and enjoy a cold craft beer? Our bar is
          the perfect spot for you! We offer a cosy atmosphere and a unique drinking experience that will leave you coming back for more." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<header className="relative">
				<NavBar />
				<Hero />
			</header>
			<main className="bg-wonky_green">
				<InfoBar />
				<Info />
				<Offer />
				<LogoList />
				<Banner />
				<Contact />
			</main>
			<footer className="bg-wonky_green">
				<Footer />
			</footer>
		</>
	);
}
