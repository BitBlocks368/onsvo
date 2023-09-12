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
          <a href="https://discord.com/" target="_blank" rel="noreferrer">
            {" "}
            <img src="path-to-discord-icon.png" alt="Discord" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            <img src="path-to-twitter-icon.png" alt="Twitter" />
          </a>
        </div>
      </div>

      <div
        className={`section ${activeSection === "home" ? "active" : ""}`}
        id="home"
      >
        <section className="home-section">
          <h1 className="animated-headline">
            Re-Defining Digital Realms through Web3 Publishing
          </h1>
          <p className="animated-paragraph">
            Embark on a journey where decentralized web infrastructures meld
            with visionary storytelling. At ONSVO PTY LTD, we don't just follow
            the trends — we set them. Harnessing the profound capabilities of
            Web3, we're crafting a future where content isn't just consumed but
            truly lived.
          </p>
        </section>
      </div>
      <div
        className={`section ${activeSection === "about" ? "active" : ""}`}
        id="about"
      >
        <section className="home-section">
          <h1 className="animated-headline">
            Champions of a Decentralized Tomorrow
          </h1>
          <p className="animated-paragraph">
            We are more than a publishing entity; we're pioneers. With every
            project, we strive to push the boundaries, challenging traditional
            notions of interaction and ownership. Our mission is simple yet
            profound: to use decentralized infrastructures as the bedrock upon
            which we build transformative social experiences.
          </p>
        </section>
      </div>
      <div
        className={`section ${activeSection === "next" ? "active" : ""}`}
        id="next"
      >
        <section className="home-section">
          <h1 className="animated-headline">
            Introducing Our NFT Series: A Revolution in Digital Artistry
          </h1>
          <p className="animated-paragraph">
            Imagine owning a piece of the digital frontier, an artwork that's as
            unique as your fingerprint. Our upcoming NFT series isn't just a
            collection but a testament to the possibilities of Web3. Each token
            represents not only a visual masterpiece but also our commitment to
            creating value in this ever-evolving digital age.
          </p>
        </section>
      </div>
      <div
        className={`section ${activeSection === "contact" ? "active" : ""}`}
        id="contact"
      >
        <section className="home-section">
          <h1 className="animated-headline">
            Join Our Decentralized Renaissance
          </h1>
          <p className="animated-paragraph">
            Have queries or wish to collaborate? Reach out. Our digital channels
            on Discord and Twitter are always open, resonating with like-minded
            visionaries and enthusiasts. Together, let's co-author the next
            chapter of the Web3 narrative.
          </p>
        </section>
      </div>
    </div>
  );
}

export default App;
