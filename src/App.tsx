import React, { useState } from "react";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  // const navigateTo = (section: string) => {
  // setActiveSection(section);
  // };

  const handleKeyPress = (e: KeyboardEvent) => {
    const sectionHeight = window.innerHeight;
    let currentSection = 0;

    if (window.scrollY < sectionHeight) {
      currentSection = 1;
    } else if (window.scrollY < sectionHeight * 2) {
      currentSection = 2;
    } else if (window.scrollY < sectionHeight * 3) {
      currentSection = 3;
    } else {
      currentSection = 4;
    }

    switch (e.key) {
      case "ArrowDown":
        if (currentSection < 4) {
          window.scrollTo({
            top: sectionHeight * currentSection,
            behavior: "smooth",
          });
        }
        break;
      case "ArrowUp":
        if (currentSection > 1) {
          window.scrollTo({
            top: sectionHeight * (currentSection - 2),
            behavior: "smooth",
          });
        }
        break;
      default:
        break;
    }
  };

  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

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
        <div className="logo">ONSVO</div>
        <div className="button-group">
          <button onClick={() => navigateTo("home")}>Home</button>
          <button onClick={() => navigateTo("about")}>About</button>
          <button onClick={() => navigateTo("next")}>Next</button>
          <button onClick={() => navigateTo("contact")}>Contact</button>
        </div>
        <div className="social-icons">
          <a
            href="https://twitter.com/oldtalesnft"
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
          <div className="row align-items-center">
            <div className="col-md-6 image-container mb-3 mb-md-0">
              <img
                src="/home.png"
                alt="About"
                className="image-effect img-fluid"
              />
            </div>
            <div className="col-md-6 text-md-left text-center">
              <h1 className="animated-headline mt-3 mt-md-0">
                Re-Defining Digital Realms
              </h1>

              <p className="animated-paragraph mt-2">
                We are embarking on a journey to Web3 Publishing. A place where
                decentralized infrastructures meld with visionary storytelling.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div
        className={`section ${activeSection === "about" ? "active" : ""}`}
        id="about"
      >
        <section className="content-section">
          <div className="row align-items-center">
            <div className="col-md-6 image-container mb-3 mb-md-0">
              <img
                src="/about.png"
                alt="About"
                className="image-effect img-fluid"
              />
            </div>
            <div className="col-md-6 text-md-left text-center">
              <h1 className="animated-headline mt-3 mt-md-0">
                Decentralize Tomorrow
              </h1>
              <p className="animated-paragraph mt-2">
                Web3 internet is challenging traditional notions of business,
                interaction and ownership.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div
        className={`section ${activeSection === "next" ? "active" : ""}`}
        id="next"
      >
        <section className="content-section">
          <div className="row align-items-center">
            <div className="col-md-6 image-container mb-3 mb-md-0">
              <img
                src="/next.png"
                alt="Next"
                className="image-effect img-fluid"
              />
            </div>
            <div className="col-md-6 text-md-left text-center">
              <h1 className="animated-headline mt-3 mt-md-0">
                Digital Artistry
              </h1>
              <p className="animated-paragraph mt-2">
                Own a piece of this new frontier, with digital artwork that is
                uniquely yours.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div
        className={`section ${activeSection === "contact" ? "active" : ""}`}
        id="contact"
      >
        <section className="content-section">
          <div className="row align-items-center">
            <div className="col-md-6 image-container mb-3 mb-md-0">
              <img
                src="/contact.png"
                alt="Contact"
                className="image-effect img-fluid"
              />
            </div>
            <div className="col-md-6 text-md-left text-center">
              <h1 className="animated-headline mt-3 mt-md-0">
                Join the Renaissance
              </h1>
              <p className="animated-paragraph mt-2">
                Our channels on Discord and Twitter are always open, resonating
                with like-minded visionaries and enthusiasts.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
