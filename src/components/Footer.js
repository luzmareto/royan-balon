import React from "react";

const Footer = () => {
  const openTikTok = () => {
    // Buka tab baru di browser pengguna.
    const newTab = window.open("https://www.tiktok.com/@royan.balon", "_blank");

    newTab.onload = () => {
    };
  };

  const openFacebok = () => {
    const newTab = window.open("https://www.facebook.com/profile.php?id=100077961693686", "_blank");

    newTab.onload = () => {
    };
  };

  const openInstagram = () => {
    const newTab = window.open("https://www.instagram.com/royanballon/", "_blank");

    newTab.onload = () => {
    };
  };
  
  return (
    <>
      <section class="footer">
        <div class="share">
          <a href="#" onClick={openFacebok} className="fab fa-facebook-f"></a>
          <a href="#" class="fab fa-whatsapp"></a>
          <a href="#" onClick={openInstagram}className="fab fa-instagram"></a>
          <a href="#" onClick={openTikTok} className="fab fa-tiktok"></a>
          {/* <a href="#" class="fab fa-linkedin"></a> */}
          {/* <a href="#" class="fab fa-pinterest"></a> */}
        </div>
        <div class="links">
          {/* <a href="#">home</a>
          <a href="#">about</a>
          <a href="#">menu</a>
          <a href="#">products</a>
          <a href="#">review</a>
          <a href="#">contact</a>
          <a href="#">blogs</a> */}
        </div>
        <div class="credit">
          created by <span>Luzmareto</span> | all rights reserved
        </div>
      </section>
    </>
  );
};

export default Footer;
