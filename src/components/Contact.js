import React from "react";

const Contact = () => {
  const sendWhatsApp = () => {
    // Buka tab baru di browser pengguna.
    const newTab = window.open("https://wa.me/62895616890077?text=halo%20royan%20balon.%20saya%20mau%20tahu%20info%20lebih%20lanjut", "_blank");

    // Tunggu hingga tab baru terbuka.
    newTab.onload = () => {
      // Menulis pesan di aplikasi WhatsApp.
      const input = newTab.querySelector("input[name=text]");
      input.value = "halo royan balon. saya mau tahu info lebih lanjut";
      input.focus();
      input.select();
    };
  };

  


  
  return (
    <>
      <section class="contact" id="contact">
        <h1 class="heading">
          <span>Temukan</span> kami
        </h1>
        <div class="row">
          <iframe
            class="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.384888725656!2d106.89149117418445!3d-6.3441754620682875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ecdbf5692ddd%3A0xa6a78ea6cadf97dd!2sWarung%20Bu%20De%20Sum!5e0!3m2!1sen!2sus!4v1697293569495!5m2!1sen!2sus"
            allowfullscreen=""
            loading="lazy"
          ></iframe>

          <form action="">
            <h3>Contact Us</h3>
         
            <div className="inputBox">
              <span class="fas fa-envelope"></span>
              <input type="text" value="email" />
              <span class="fab fa-whatsapp"></span>
              <input type="text" value="+62 895-6168-90077" />
            </div>
      
            <div className="inputBox">
              <span class="fab fa-tiktok"></span>
              <input type="text" value="@royan.balon" />
              <span class="fab fa-instagram"></span>
              <input type="text" value="@royan.balon" />
            </div>
     
            <input type="submit" value="contact now" class="btn" onClick={sendWhatsApp} />
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
