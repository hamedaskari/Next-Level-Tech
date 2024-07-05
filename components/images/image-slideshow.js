"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import pic1 from "@/assets/Pic1.jpg";
import pic8 from "@/assets/Pic8.png";
import pic3 from "@/assets/Pic3.png";
import pic4 from "@/assets/Pic4.jpg";
import pic6 from "@/assets/Pic6.jpg";
import pic9 from "@/assets/Pic10.jpeg";
import pic11 from "@/assets/Pic11.jpg";
import classes from "./image-slideshow.module.css";

const images = [
  { image: pic1, alt: "CPU image" },
  { image: pic8, alt: "Earth Image" },
  { image: pic3, alt: "Signal image" },
  { image: pic4, alt: "Network image" },
  { image: pic6, alt: "Computer Network" },
  { image: pic9, alt: "Build animate" },
  { image: pic11, alt: "Laptop" },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={index === currentImageIndex ? classes.active : ""}
          alt={image.alt}
        />
      ))}
    </div>
  );
}
