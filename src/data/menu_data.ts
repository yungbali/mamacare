import { StaticImageData } from "next/image";

import demo_img_1 from "@/assets/img/header/home-1.jpg";
import demo_img_2 from "@/assets/img/header/home-2.jpg";
import demo_img_3 from "@/assets/img/header/home-3.jpg";

interface DataType {
	id: number;
	title: string;
	link: string;
	img_dropdown?: boolean;
	has_dropdown?: boolean;
	sub_menus?: {
		link: string;
		title: string;
		demo_img?: StaticImageData;
	}[];
}

// menu data
const menu_data: DataType[] = [
	{
		id: 1,
		title: "Home",
		link: "/",
		has_dropdown: false
	},
	{
		id: 2,
		title: "Services",
		link: "#",
		has_dropdown: true,
		sub_menus: [
			{ link: "/mental-health", title: "Mental Health Support" },
			{ link: "/facilities", title: "Recovery Facilities" },
			{ link: "/community", title: "Mother's Community" }
		]
	},
	{
		id: 3,
		title: "Resources",
		link: "/resources",
		has_dropdown: false
	},
	{
		id: 4,
		title: "Contact",
		link: "/contact",
		has_dropdown: false
	}
];
export default menu_data;
