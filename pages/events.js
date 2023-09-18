import Event from "@/components/Event";
import Footer from "@/components/Footer";
import H3 from "@/components/H3";
import NavBar from "@/components/NavBar";
import React from "react";

const events = () => {
	return (
		<div>
			<header className="pb-20">
				<NavBar />
			</header>
			<main className="bg-wonky_green lg:pt-40 pt-14">
				<section className="container mx-auto">
					<div className="text-center px-4">
						<H3>Upcoming Events</H3>
						<p className="text-white text-xl max-w-4xl mx-auto md:mt-20 mt-14 font-light tracking-wide leading-relaxed md:text-center text-left">
							Here at The Wonkey Labrador, we hold a range of regular and
							featured events. Check out what is available below, you’re sure to
							find something you will enjoy!
						</p>
					</div>

					<div className="md:mt-24 mt-14 px-4">
						<H3>March</H3>
						<Event />
						<Event />
					</div>
					<div className="md:mt-24 mt-14 px-4">
						<H3>April</H3>
						<Event />
						<Event />
					</div>

					<div className="text-center md:py-28 py-14 px-4">
						<H3>Whats on each week</H3>
						<div className="flex flex-col lg:flex-row text-white font-light text-left justify-around text-lg mt-20 lg:gap-y-0 gap-y-12 ">
							<div className="flex flex-col gap-y-3 lg:max-w-md w-full">
								<div className="inline-flex justify-between">
									<p>Sundays</p>
									<p>19:00</p>
								</div>
								<p className="font-playfair text-2xl">Quiz Night</p>
								<p>
									Every Sunday is quiz Sunday here at The Wonkey Labrador. So
									come down for a drink and put your thinking caps on ready to
									test your trivia knowledge!
								</p>
							</div>

							<div className="flex flex-col gap-y-3 lg:max-w-md w-full">
								<div className="inline-flex justify-between">
									<p>Coming soon!</p>
								</div>
								<p className="font-playfair text-2xl">Board Game Night</p>
								<p>
									We host regular game nights with your favourite board games.
									We have plenty to go around, or feel free to bring a favourite
									with you!
								</p>
							</div>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
};

export default events;
