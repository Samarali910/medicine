import React, { useState, useEffect } from "react";
import oip from "./Images/OIP.png";
import tablete2 from "./Images/tablete2.png";
import bgImage2 from "./Images/bgImage2.webp";
import bgImage4 from "./Images/bgImage4.png";
import bgImage6 from './Images/tablete6.png'
import "./Hero.css";
import { motion } from "framer-motion";

const images = [oip, tablete2, bgImage6];
const bgImages = [bgImage2, bgImage4];

const Myhero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [bgImageChange, setBgImageChange] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const changeBackgroundImages = setInterval(() => {
      setBgImageChange((prevImage) => (prevImage + 1) % bgImages.length);
    }, 2000);

    return () => clearInterval(changeBackgroundImages);
  }, []);

  return (
    <motion.div
      className="hero-container"
      style={{
        backgroundImage: `url(${bgImages[bgImageChange]})`,
      }}
    >
      <div className="hero-text">
        <h1>Reliable Medicine Delivery at Your Doorstep</h1>
        <p>
          Get your prescribed medicines delivered within hours. Trusted by
          thousands.
        </p>
        <div className="searchBar">
      
        <input type="text" placeholder="Search any medicines" />
        <button>Search</button>
         
          
        </div>
        <div className="trustBadges">
          <span>Trusted by 10,000+ Customers</span>
          <span>Verified by [Authority Name]</span>
        </div>
      </div>

      <motion.img
        key={currentImage}
        src={images[currentImage]}
        alt="Medicine delivery"
        className="heroImage"
        initial={{ opacity: 0, z: 100 }}
        animate={{ opacity: 1, z: 0 }}
        exit={{ opacity: 0, z: -100 }}
        transition={{
          duration: 0.7,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
};

export default Myhero;
