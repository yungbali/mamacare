import portfolio_img_1 from "@/assets/img/gallery/feature1.jpg";
import portfolio_img_2 from "@/assets/img/gallery/feature2.jpg";
import portfolio_img_3 from "@/assets/img/gallery/feature3.jpg";
import portfolio_img_4 from "@/assets/img/gallery/feature4.jpg";
import portfolio_img_5 from "@/assets/img/gallery/feature5.jpg";
import portfolio_img_6 from "@/assets/img/gallery/feature6.jpg";
import portfolio_img_7 from "@/assets/img/gallery/feature7.jpg";
import portfolio_img_8 from "@/assets/img/gallery/feature8.jpg";
import { StaticImageData } from "next/image";

interface PortfolioDataType {
  id: number;
  title: string;
  price: number;
  image: StaticImageData;
  category: string;
  description: string;
}

const portfolio_data: PortfolioDataType[] = [
  {
    id: 1,
    title: "Therapeutic Programs",
    price: 200,
    image: portfolio_img_1,
    category: "Mental Health",
    description: "Holistic approaches combining traditional therapy and mindfulness.",
  },
  {
    id: 2,
    title: "Recovery Facilities",
    price: 150,
    image: portfolio_img_2,
    category: "Facilities",
    description: "Equipped with everything a new mother needs for recovery.",
  },
  {
    id: 3,
    title: "Motherhood Tools",
    price: 100,
    image: portfolio_img_3,
    category: "Resources",
    description: "Resources and workshops for emotional and mental resilience.",
  },
  {
    id: 4,
    title: "Community Support",
    price: 50,
    image: portfolio_img_4,
    category: "Community",
    description: "Connect with other mothers and build lasting relationships.",
  },
  {
    id: 5,
    title: "Lactation Consulting",
    price: 80,
    image: portfolio_img_5,
    category: "Support",
    description: "Expert guidance to help you with breastfeeding and lactation.",
  },
  {
    id: 6,
    title: "Family Counseling",
    price: 120,
    image: portfolio_img_6,
    category: "Counseling",
    description: "Support for families to navigate the postpartum period together.",
  },
];

export default portfolio_data;