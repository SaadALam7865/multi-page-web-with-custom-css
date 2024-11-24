import { url } from "inspector";
import React from "react";

const about = () => {
  return (
    <div>
      <section
        className="about"
        style={{ backgroundImage: "url(/about-pic2.jpg)" }}
      >
        <div className="about-container">
          <h2 className="fade-in">About Us</h2>
          <p>
            Welcome to WatchWorld, where style meets timeless precision. Our
            curated collection features high-quality watches crafted for every
            occasion. Each piece combines innovative design with lasting
            elegance to complement your unique journey. Discover the perfect
            watch to elevate your moments with WatchWorld
          </p>
        </div>
      </section>
    </div>
  );
};

export default about;
