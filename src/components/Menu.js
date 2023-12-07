import React from "react";
import { menu } from "../Data";

const Menu = () => {
  // Bagi array menu menjadi dua bagian
  const firstGroup = menu.slice(0, 3);
  const secondGroup = menu.slice(3, 6);

  return (
    <>
      <section className="menu" id="menu">
        <h1 className="heading">
          Grand opening at <span>Hypermart citra raya</span>
        </h1>

        {/* Bagian pertama dengan tiga gambar */}
        <div className="box-container">
          {firstGroup.map((item, index) => (
            <div className="box" key={index * Math.random()}>
              <img src={item.img} alt="" />
              <h3>tasty and healthy</h3>
            </div>
          ))}
        </div>

        {/* Headline kedua dengan tiga gambar */}
        <h1 className="heading">
        H U T  <span>korporat</span>
        </h1>
        <div className="box-container">
          {secondGroup.map((item, index) => (
            <div className="box" key={index * Math.random()}>
              <img src={item.img} alt="" />
              <h3>tasty and healthy</h3>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Menu;
