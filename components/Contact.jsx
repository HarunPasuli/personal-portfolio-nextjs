"use client";

import {
	AiFillTwitterSquare,
	AiFillLinkedin,
	AiFillInstagram,
	AiFillGithub,
} from "react-icons/ai";
import { FaDev } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import dotenv from "dotenv";
dotenv.config();

const Contact = () => {
	const ref = useRef(null);
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_s7luyci",
				"template_hyh8wpq",
				e.target,
				"LFI7_PUvhGitg8sBH"
			)
			.then((result) => {
				form.current.reset();
			})
			.catch((error) => {
				console.log(error.text);
			});
	};

	return (
		<section
			className="flex flex-col justify-center align-middle text-left bg-midnightBlue text-cloudGray p-16"
			id="contact"
		>
			<div className="flex justify-center flex-col w-fit">
				<h2 className="uppercase font-bold text-4xl py-4">Contact Me</h2>
			</div>
			<div className="max-w-[1250px] mx-auto">
				<div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
					<div>
						<p>
							Feel free to contact me for any inquiries or if you want to
							collaborate on a project together.
						</p>
						<p className="mt-12">Email me at</p>
						<h4>
							<a href="#" className="text-lg font-semibold text-smoothRed">
								harunpasuli24@gmail.com
							</a>
						</h4>
						<div className="mt-12">
							<div className="flex flex-col gap-2">
								<h5>Socials</h5>
								<div className="flex gap-5">
									<a
										href="https://www.github.com/HarunPasuli"
										className="text-3xl"
									>
										<AiFillGithub />
									</a>
									<a
										href="https://www.linkedin.com/in/harun-pasuli-b58254256/"
										className="text-3xl"
									>
										<AiFillLinkedin />
									</a>
									<a
										href="https://www.instagram.com/harunpasuli24/"
										className="text-3xl"
									>
										<AiFillInstagram />
									</a>
								</div>
							</div>
						</div>
					</div>

					<div>
						<form onSubmit={sendEmail} ref={form} className="w-full">
							<div>
								<input
									type="text"
									id="name"
									name="name"
									placeholder="Your name"
									className="w-full text-gray-700 border border-slate-200 rounded py-3 px-4 mb-4 leading-tight focus:outline-dark-red"
								/>
								<input
									type="email"
									id="email"
									name="email"
									placeholder="Your email"
									autoComplete="email"
									className="w-full text-gray-700 border border-slate-200 rounded py-3 px-4 mb-4 leading-tight focus:outline-dark-red"
								/>
								<input
									type="text"
									id="subject"
									name="subject"
									placeholder="Subject"
									className="w-full text-gray-700 border border-slate-200 rounded py-3 px-4 mb-4 leading-tight focus:outline-dark-red"
								/>
								<textarea
									className="w-full text-gray-700 border border-slate-200 rounded py-3 px-4 mb-4 leading-tight focus:outline-dark-red"
									id="message"
									name="message"
									rows="7"
									style={{ resize: "none" }}
									placeholder="Message"
								/>
							</div>
							<div className="flex justify-end">
								<button
									type="submit"
									className="py-3 px-6 font-semibold text-white bg-smoothRed hover:shadow-lg hover:bg-smoothRed/75 transition-all duration-500 rounded"
								>
									Submit
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
