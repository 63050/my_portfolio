import { useState, useEffect } from "react";

const Header = () => {
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    if (lightMode) {
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
    }
  }, [lightMode]);

  return (
    <header className="header">
      <h1 className="logo">K Syamal Vivek</h1>

      <nav className="nav-links">
        <a href="mailto:komaragiri.vivek2005@gmail.com">Email</a>
        
        <a href="https://github.com/63050/" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/syamalvivek" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href="https://leetcode.com/u/VIVEK_KOMARAGIRI/" target="_blank" rel="noreferrer">
          LeetCode
        </a>

        {/* THEME TOGGLE */}
        <button
          className="theme-toggle"
          onClick={() => setLightMode((prev) => !prev)}
          style={{
            border: `1px solid ${lightMode ? "#000000" : "#ffffff"}`,
            color: lightMode ? "#000000" : "#ffffff",
          }}
        >
          {lightMode ? "Dark" : "Light"}
        </button>
      </nav>
    </header>
  );
};

export default Header;
