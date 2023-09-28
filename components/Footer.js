import Image from "next/image";
import React from "react";
import WonkyLogo from "@/public/Images/Logos/WonkyLogo.png";
import Link from "next/link";

const Footer = () => {
	return (
		<div className="w-full bg-wonky_green h-full">
			<div className="container mx-auto flex flex-col items-center pb-2 px-4 md:pb-0 sm:hidden border-t-white/10 border-t-2 pt-4">
				<div className="flex flex-row justify-between items-center w-full">
					<div className="">
						<Image
							src={WonkyLogo}
							alt="Logo for Wonky Lab"
							height={189}
							width={160}
							className="rounded-md px-2 "
						/>
					</div>
					<div className="flex flex-row gap-10 flex-1 items-end justify-end sm:mt-10 mt-0 ">
						<Link href={"https://www.facebook.com"} target="_blank">
							<svg
								width="31"
								height="31"
								viewBox="0 0 31 31"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M0.988155 3.88409C0 5.61335 0 7.91966 0 12.5323V17.849C0 22.4616 0 24.7679 0.988155 26.4972C1.68653 27.7193 2.71615 28.7284 3.96318 29.4129C5.72766 30.3813 8.08094 30.3813 12.7875 30.3813H18.2125C18.3645 30.3813 18.514 30.3813 18.6611 30.3813H14.293V18.8754H10.7613V14.5313H14.3519V11.4788C14.3519 7.78046 16.6475 5.69649 19.9733 5.69649C21.592 5.69649 22.9753 5.84325 23.3873 5.90195V9.77637H21.0622C19.208 9.77637 18.8843 10.6569 18.8843 11.919V14.5313H23.2107L22.6221 18.8754H18.8843V30.3812C23.1471 30.379 25.3583 30.3341 27.0368 29.4129C28.2838 28.7284 29.3135 27.7193 30.0118 26.4972C31 24.7679 31 22.4616 31 17.849V12.5323C31 7.91966 31 5.61335 30.0118 3.88409C29.3135 2.66194 28.2838 1.65287 27.0368 0.968434C25.2723 0 22.919 0 18.2125 0H12.7875C8.08094 0 5.72766 0 3.96318 0.968434C2.71615 1.65287 1.68653 2.66194 0.988155 3.88409Z"
									fill="#fff"
								/>
							</svg>
						</Link>
						<Link href={"https://www.instagram.com"} target="_blank">
							<svg
								width="32"
								height="31"
								viewBox="0 0 32 31"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M0.949966 7.77616V22.6051C0.949966 27.09 4.3083 30.3813 8.88449 30.3813H24.0154C28.5916 30.3813 31.95 27.09 31.95 22.6051V7.77616C31.95 3.29131 28.5916 0 24.0154 0H8.88449C4.3083 0 0.949966 3.29131 0.949966 7.77616ZM23.6464 6.51028C23.6464 5.5699 24.3476 4.88271 25.3071 4.88271C26.2666 4.88271 26.9678 5.5699 26.9678 6.51028C26.9678 7.37831 26.2666 8.13785 25.3071 8.13785C24.3476 8.13785 23.6464 7.37831 23.6464 6.51028ZM9.80711 15.1906C9.80711 11.5738 12.7595 8.68037 16.4869 8.68037C20.1404 8.68037 23.0928 11.5738 23.0928 15.1906C23.0928 18.8075 20.1404 21.7009 16.4869 21.7009C12.7595 21.7009 9.80711 18.8075 9.80711 15.1906ZM12.0214 15.1906C12.0214 17.6139 13.9773 19.5308 16.4869 19.5308C18.9226 19.5308 20.8785 17.6139 20.8785 15.1906C20.8785 12.7674 18.9226 10.8505 16.4869 10.8505C13.9773 10.8505 12.0214 12.7674 12.0214 15.1906Z"
									fill="#fff"
								/>
							</svg>
						</Link>
					</div>
				</div>
				<div className="flex flex-col flex-1 sm:mt-10 w-full text-center">
					<p className="text-sm font-lato text-white">
						All rights reserved. The Wonky Labrador
					</p>
					<p className="text-sm font-lato text-white">
						Website by BluButton Digital
					</p>
				</div>
			</div>
			<div className="container mx-auto hidden sm:flex flex-row justify-between items-center pb-8 md:pb-0 border-t-2 border-white/10 pt-4 ">
				<div className="flex flex-col flex-1 mt-4 sm:mt-10 order-3 sm:order-1">
					<p className="text-sm font-lato text-white">
						All rights reserved. The Wonky Labrador
					</p>
					<p className="text-sm font-lato text-white">
						Website by BluButton Digital
					</p>
				</div>
				<div className="order-1 sm:order-2">
					<Image
						src={WonkyLogo}
						alt="Logo for Wonky Lab"
						height={189}
						width={160}
						className="rounded-md px-2 "
					/>
				</div>
				<div className="flex flex-row gap-10 flex-1 items-end justify-end sm:mt-10 mt-0 order-2 sm:order-3">
					<Link
						href={"https://www.facebook.com/thecraftyonesheffield"}
						target="_blank"
					>
						<svg
							width="31"
							height="31"
							viewBox="0 0 31 31"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M0.988155 3.88409C0 5.61335 0 7.91966 0 12.5323V17.849C0 22.4616 0 24.7679 0.988155 26.4972C1.68653 27.7193 2.71615 28.7284 3.96318 29.4129C5.72766 30.3813 8.08094 30.3813 12.7875 30.3813H18.2125C18.3645 30.3813 18.514 30.3813 18.6611 30.3813H14.293V18.8754H10.7613V14.5313H14.3519V11.4788C14.3519 7.78046 16.6475 5.69649 19.9733 5.69649C21.592 5.69649 22.9753 5.84325 23.3873 5.90195V9.77637H21.0622C19.208 9.77637 18.8843 10.6569 18.8843 11.919V14.5313H23.2107L22.6221 18.8754H18.8843V30.3812C23.1471 30.379 25.3583 30.3341 27.0368 29.4129C28.2838 28.7284 29.3135 27.7193 30.0118 26.4972C31 24.7679 31 22.4616 31 17.849V12.5323C31 7.91966 31 5.61335 30.0118 3.88409C29.3135 2.66194 28.2838 1.65287 27.0368 0.968434C25.2723 0 22.919 0 18.2125 0H12.7875C8.08094 0 5.72766 0 3.96318 0.968434C2.71615 1.65287 1.68653 2.66194 0.988155 3.88409Z"
								fill="#fff"
							/>
						</svg>
					</Link>
					<Link
						href={"https://www.instagram.com/thecraftyone_sheffield/"}
						target="_blank"
					>
						<svg
							width="32"
							height="31"
							viewBox="0 0 32 31"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M0.949966 7.77616V22.6051C0.949966 27.09 4.3083 30.3813 8.88449 30.3813H24.0154C28.5916 30.3813 31.95 27.09 31.95 22.6051V7.77616C31.95 3.29131 28.5916 0 24.0154 0H8.88449C4.3083 0 0.949966 3.29131 0.949966 7.77616ZM23.6464 6.51028C23.6464 5.5699 24.3476 4.88271 25.3071 4.88271C26.2666 4.88271 26.9678 5.5699 26.9678 6.51028C26.9678 7.37831 26.2666 8.13785 25.3071 8.13785C24.3476 8.13785 23.6464 7.37831 23.6464 6.51028ZM9.80711 15.1906C9.80711 11.5738 12.7595 8.68037 16.4869 8.68037C20.1404 8.68037 23.0928 11.5738 23.0928 15.1906C23.0928 18.8075 20.1404 21.7009 16.4869 21.7009C12.7595 21.7009 9.80711 18.8075 9.80711 15.1906ZM12.0214 15.1906C12.0214 17.6139 13.9773 19.5308 16.4869 19.5308C18.9226 19.5308 20.8785 17.6139 20.8785 15.1906C20.8785 12.7674 18.9226 10.8505 16.4869 10.8505C13.9773 10.8505 12.0214 12.7674 12.0214 15.1906Z"
								fill="#fff"
							/>
						</svg>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Footer;
