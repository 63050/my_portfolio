import { useState } from "react";
import profile from "../assets/profile.jpg";
import KnowMore from "./KnowMore"; // ✅ MISSING IMPORT (FIX)

const Hero = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="hero">
        <img src={profile} alt="Profile" className="hero-img" />

        <div>
          <h2>K SYAMAL VIVEK</h2>
          <p>
            MERN Stack Developer & Java Programmer interested in scalable web
            systems and problem solving.
          </p>

          <button
            className="know-more"
            onClick={() => setOpen((prev) => !prev)}
          >
            Know more →
          </button>
        </div>
      </section>

      {open && <KnowMore />}
    </>
  );
};

export default Hero;
