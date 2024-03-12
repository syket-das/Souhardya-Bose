import React from "react";
import { useMenuContext } from "../../context/contextAPI";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";

function Sidebar() {
	const { isOpen, setIsOpen } = useMenuContext();
	return (
		// isOpen && (
		<div
			className={`absolute top-0 left-0 fixed min-h-screen overflow-hidden bg-slate-800 w-full z-10 py-[0.5rem] pt-10 px-[1.5rem] text-stone-100 flex flex-col justify-center items-center gap-2 transition-all ${
				isOpen ? "left-0" : "left-[150vw]"
			}`}
		>
			<IoCloseSharp
				size={40}
				className="absolute top-6 right-5 cursor-pointer"
				onClick={() => setIsOpen(!isOpen)}
			/>
			<Link
				to="Navbar"
				spy={true}
				smooth={true}
				className="text-2xl cursor-pointer hover:scale-110 transition-all hover:shadow-md"
				onClick={() => setIsOpen(!isOpen)}
			>
				Home
			</Link>
			<Link
				to="About"
				spy={true}
				smooth={true}
				className="text-2xl cursor-pointer hover:scale-110 transition-all hover:shadow-md"
				onClick={() => setIsOpen(!isOpen)}
			>
				About
			</Link>
			<Link
				to="services"
				spy={true}
				smooth={true}
				className="text-2xl cursor-pointer hover:scale-110 transition-all hover:shadow-md"
				onClick={() => setIsOpen(!isOpen)}
			>
				Serivces
			</Link>
			<Link
				to="gallery"
				spy={true}
				smooth={true}
				className="text-2xl cursor-pointer hover:scale-110 transition-all hover:shadow-md"
				onClick={() => setIsOpen(!isOpen)}
			>
				Gallery
			</Link>
			<Link
				to="testimonial"
				spy={true}
				smooth={true}
				className="text-2xl cursor-pointer hover:scale-110 transition-all hover:shadow-md"
				onClick={() => setIsOpen(!isOpen)}
			>
				Testimonial
			</Link>
			<Link
				to="contact"
				spy={true}
				smooth={true}
				className="text-2xl cursor-pointer hover:scale-110 transition-all hover:shadow-md"
				onClick={() => setIsOpen(!isOpen)}
			>
				<button className="button n-button">Contact</button>
			</Link>
		</div>
		// )
	);
}

export default Sidebar;
