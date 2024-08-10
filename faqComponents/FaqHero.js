import React from "react";
import "./faqCssComponents/FaqHero.css";
import { NavLink } from "react-router-dom";
import FaqImage from './faqImages/FaqImage.webp'
const FaqHero = () => {
  const NavbaarContent = [
    {
      id: 1,
      text: "about medicine",
      link: "/"
    },
    {
      id: 2,
      text: "about services",
      link: "/services"
    },
    {
      id: 3,
      text: "about payment",
      link: "/payment"
    },
    {
      id: 4,
      text: "support us",
      link: "/payment"
    },
  ];

  return (
    <main>
      <section className="FaqImageSection">
        <section className="ImageSection">
          <img
            src={FaqImage}
            alt="chatImage"
          />
        </section>
        <section className="navbaarContainer">
          <nav className="navbaar">
            {NavbaarContent.map((item) => (
              <NavLink
                key={item.id}
                to={item.link}
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                <li>{item.text}</li>
              </NavLink>
            ))}
          </nav>
        </section>
      </section>
      <section className="faqMiddlesection">
        <div className="faqSquarebg"> </div>
        <div className="faqlinebg"> </div>
      </section>
    </main>
  );
};

export default FaqHero;
