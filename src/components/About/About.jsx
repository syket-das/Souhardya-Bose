import "./About.css";
import { motion } from "framer-motion";
import aboutUs from "../../img/new/aboutUs.JPG";
import { YouTubeEmbed } from "react-social-media-embed";
import sukoon1 from "../../img/new/sukoon1.JPG";

export default function About() {
	return (
		<section
			id="About"
			className="mt-8 flex flex-col justify-between overflow-hidden"
		>
			<motion.h2
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
				className="text-2xl md:text-4xl font-bold text-center mb-4  mt-4 drop-shadow-lg uppercase text-black font-outline-2 font-mono"
			>
				A Journey Fueled by Community and Technology
				{/* About Me */}
			</motion.h2>
			<div className="grid grid-cols-12 my-4 px-5 items-center gap-5">
				<img src={sukoon1} className="w-full col-span-3" alt="" />
				<YouTubeEmbed
					url="https://youtu.be/Iqp9DeqrqYI"
					className="col-span-6"
				/>
				<img src={sukoon1} className="w-full col-span-3" alt="" />
			</div>
			<div className="About flex flex-col md:flex-row items-center mb-10 gap-5 px-4 md:px-0">
				<div
					className="blur"
					style={{ background: "rgb(238 210 255)" }}
				></div>
				<div className="left flex-1 p-4 md:p-0 md:ml-10 basis-1/3">
					<motion.img
						src={aboutUs}
						alt=""
						initial={{ scale: 0 }}
						whileInView={{ scale: 1 }}
						transition={{ delay: 0.3 }}
					/>
				</div>
				<div className="right flex-1 basis-2/3 text-white font-semibold text-xs md:text-2xl">
					<p className="tracking-wide">
						My story starts with a simple belief:{" "}
						<span className="font-bold italic">
							people are stronger together{" "}
						</span>
						. From a young age, I witnessed the power of communities
						to support, inspire, and empower individuals. This
						belief has shaped my life's journey, leading me down a
						path of community building, technology, and
						organizational development.
					</p>
					<br />
					<p>
						My early experiences in event management and technical
						product specialization instilled in me a deep
						understanding of how to bring people together and create
						engaging experiences. Witnessing the positive impact of
						these events further fueled my passion for fostering
						vibrant communities.
					</p>
					<br />
					<p>
						My journey has been one of continuous learning and
						growth. I am passionate about the power of communities
						to make a positive difference in the world. I am
						committed to using my skills and expertise to help
						individuals and organizations build stronger, more
						connected communities.
					</p>
				</div>
			</div>
		</section>
	);
}
