import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className=' '>
			<Navbar />
			<div className='  '>{children}</div>
			<Footer />
		</div>
	);
};

export default Layout;
