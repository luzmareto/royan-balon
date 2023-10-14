import React from "react";

const Contact = () => {
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
            <div class="inputBox">
              <span class="fas fa-user"></span>
              <input type="text" placeholder="name" />
            </div>
            <div class="inputBox">
              <span class="fas fa-envelope"></span>
              <input type="email" placeholder="email" />
            </div>
            <div class="inputBox">
              <span class="fas fa-phone"></span>
              <input type="number" placeholder="number" />
            </div>
            <input type="submit" value="contact now" class="btn" />
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
