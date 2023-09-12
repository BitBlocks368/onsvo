import React, { useState } from "react";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  // const navigateTo = (section: string) => {
  // setActiveSection(section);
  // };

  // ... inside App function before the return
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sectionHeight = window.innerHeight;

      if (scrollY < sectionHeight) {
        setActiveSection("home");
      } else if (scrollY < sectionHeight * 2) {
        setActiveSection("about");
      } else if (scrollY < sectionHeight * 3) {
        setActiveSection("next");
      } else {
        setActiveSection("contact");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navigateTo = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app">
      <div className="menu">
        <div className="logo">ONSVO PTY LTD</div>
        <div className="button-group">
          <button onClick={() => navigateTo("home")}>Home</button>
          <button onClick={() => navigateTo("about")}>About</button>
          <button onClick={() => navigateTo("next")}>Next</button>
          <button onClick={() => navigateTo("contact")}>Contact</button>
        </div>
        <div className="social-icons">
          <a
            href="https://twitter.com/BitBlocks368"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/x.png" alt="X (Twitter)" />
          </a>
        </div>
      </div>

      <div
        className={`section ${activeSection === "home" ? "active" : ""}`}
        id="home"
      >
        <section className="content-section">
          <div className="image-container">
            <img src="/home.png" alt="About" className="image-effect" />
          </div>
          <h1 className="animated-headline">Re-Defining Digital Realms</h1>
          <p className="animated-paragraph">
            We are embarking on a journey to Web3 Publishing. A place where
            decentralized infrastructures meld with visionary storytelling.
          </p>
        </section>
      </div>
      <div
        className={`section ${activeSection === "about" ? "active" : ""}`}
        id="about"
      >
        <section className="content-section">
          <div className="image-container">
            <img src="/about.png" alt="About" className="image-effect" />
          </div>
          <h1 className="animated-headline">Decentralize Tomorrow</h1>
          <p className="animated-paragraph">
            Web3 internet is challenging traditional notions of business,
            interaction and ownership.
          </p>
        </section>
      </div>
      <div
        className={`section ${activeSection === "next" ? "active" : ""}`}
        id="next"
      >
        <section className="content-section">
          <div className="image-container">
            <img src="/next.png" alt="Next" className="image-effect" />
          </div>
          <h1 className="animated-headline">Digital Artistry</h1>
          <p className="animated-paragraph">
            Own a piece of this new frontier, with digital artwork that is
            uniquely yours.
          </p>
        </section>
      </div>
      <div
        className={`section ${activeSection === "contact" ? "active" : ""}`}
        id="contact"
      >
        <section className="content-section">
          <div className="image-container">
            <img src="/contact.png" alt="Contact" className="image-effect" />
          </div>
          <h1 className="animated-headline">Join the Renaissance</h1>
          <p className="animated-paragraph">
            Our channels on Discord and Twitter are always open, resonating with
            like-minded visionaries and enthusiasts.
          </p>
        </section>
      </div>
    </div>
  );
}

export default App;
