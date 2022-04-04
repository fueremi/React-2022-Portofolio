import { useEffect, useState } from "react";
import foto from "./assets/images/foto.png";

const App = () => {
  const [toggleNavbar, setToggleNavbar] = useState(false);
  const header = document.querySelector("header");
  const [fixedNav, setFixedNav] = useState(false);

  const listenScrollEvent = () => {
    if (window.scrollY > 50) {
      setFixedNav(true);
    } else {
      setFixedNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <>
      <header
        className={`bg-transparent fixed top-0 left-0 w-full flex items-center z-10 ${
          fixedNav ? "navbar-fixed" : ""
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between relative">
            <div className="px-4">
              <a
                href="#home"
                className="font-bold text-lg text-primary block py-6"
              >
                fueremi
              </a>
            </div>
            <div className="flex items-center px-4">
              <button
                id="hamburger"
                name="hamburger"
                type="button"
                className={`block absolute right-4 ${
                  toggleNavbar ? "active" : ""
                } lg:hidden`}
                onClick={() => setToggleNavbar(!toggleNavbar)}
              >
                <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
                <span className="hamburger-line transition duration-300 ease-in-out"></span>
                <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
              </button>
              <nav
                className={`absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full ${
                  toggleNavbar ? "" : "hidden"
                } lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none`}
              >
                <ul className="block lg:flex">
                  <li className="group">
                    <a
                      href="#home"
                      className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                    >
                      Beranda
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#about"
                      className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                    >
                      Tentang Saya
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#portofolio"
                      className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                    >
                      Portofolio
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#client"
                      className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                    >
                      Klien
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <section id="home" className="pt-36">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-1/2">
              <h1 className="text-base font-semibold text-primary md:text-xl">
                Halo Semua 👋🏻, saya{" "}
                <span className="block font-bold text-dark text-4xl mt-1 lg:text-4xl">
                  Rian Oktio Mersa Putra
                </span>
              </h1>
              <h2 className="font-medium text-secondary text-lg mb-5 lg:text-2xl">
                Software Engineer
              </h2>
              <p className="font-medium text-secondary mb-10 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, minima!
              </p>

              <a
                href="#"
                className="text-base font-semibold bg-primary py-3 px-8 rounded-full text-white hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
              >
                Hubungi Saya
              </a>
            </div>
            <div className="w-full self-end px-4 lg:w-1/2">
              <div className="mt-10 relative lg:mt-0 lg:right-0">
                <img
                  src={foto}
                  alt="rian oktio mp foto"
                  className="max-w-xs mx-auto "
                />
                <span className="absolute -top-4 -z-10 left-1/2 -translate-x-1/2 ">
                  <svg
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                    width={300}
                    height={300}
                  >
                    <path
                      fill="#B76401"
                      d="M36.6,-48.1C51.8,-39.3,71.6,-34.5,82.1,-22C92.6,-9.5,93.8,10.7,87.3,27.6C80.8,44.6,66.6,58.3,50.8,64.1C34.9,69.9,17.5,67.7,0.4,67.2C-16.7,66.8,-33.5,68,-48.5,61.9C-63.5,55.9,-76.8,42.6,-80.7,27.1C-84.6,11.6,-79,-6.2,-70.7,-20.2C-62.4,-34.3,-51.2,-44.7,-39,-54.5C-26.7,-64.3,-13.4,-73.4,-1.3,-71.5C10.7,-69.7,21.3,-56.9,36.6,-48.1Z"
                      transform="translate(100 100)"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="pt-36 pb-32">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4 mb-10 lg:w-1/2">
              <h4 className="font-bold uppercase text-primary text-lg mb-3">
                Tentang Saya
              </h4>
              <h2 className="font-bold text-dark text-3xl mb-5 max-w-md lg:text-4xl">
                Yuk, belajar web programming di Fueremi
              </h2>
              <p
                className="font-medium text-base text-secondary max-w-xl lg:text-lg
              "
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus porro cum dolore quae adipisci officiis consequatur.
              </p>
            </div>
            <div
              className="w-full px-4 lg:w-1/2
            "
            >
              <h3 className="font-semibold text-dark text-2xl mb-4 lg:text-3xl lg:pt-10">
                Mari Berteman
              </h3>
              <p className="font-medium text-base text-secondary mb-6 lg:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                rem cumque hic, reprehenderit earum culpa voluptas quas
                reiciendis!
              </p>
              <div className="flex items-center">
                {/* Instagram */}
                <a
                  href="https://instagram.com/fueremi"
                  target="_blank"
                  className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border text-slate-300 border-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                >
                  <svg
                    role="img"
                    className="fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                  >
                    <title>Instagram</title>
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                  </svg>
                </a>

                {/* GitHub */}
                <a
                  href="https://instagram.com/fueremi"
                  target="_blank"
                  className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border text-slate-300 border-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                >
                  <svg
                    role="img"
                    className="fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                  >
                    <title>GitHub</title>
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </a>

                {/* GitLab */}
                <a
                  href="https://instagram.com/fueremi"
                  target="_blank"
                  className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border text-slate-300 border-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                >
                  <svg
                    role="img"
                    className="fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                  >
                    <title>GitLab</title>
                    <path d="M4.845.904c-.435 0-.82.28-.955.692C2.639 5.449 1.246 9.728.07 13.335a1.437 1.437 0 00.522 1.607l11.071 8.045c.2.145.472.144.67-.004l11.073-8.04a1.436 1.436 0 00.522-1.61c-1.285-3.942-2.683-8.256-3.817-11.746a1.004 1.004 0 00-.957-.684.987.987 0 00-.949.69l-2.405 7.408H8.203l-2.41-7.408a.987.987 0 00-.942-.69h-.006zm-.006 1.42l2.173 6.678H2.675zm14.326 0l2.168 6.678h-4.341zm-10.593 7.81h6.862c-1.142 3.52-2.288 7.04-3.434 10.559L8.572 10.135zm-5.514.005h4.321l3.086 9.5zm13.567 0h4.325c-2.467 3.17-4.95 6.328-7.411 9.502 1.028-3.167 2.059-6.334 3.086-9.502zM2.1 10.762l6.977 8.947-7.817-5.682a.305.305 0 01-.112-.341zm19.798 0l.952 2.922a.305.305 0 01-.11.341v.002l-7.82 5.68.026-.035z" />
                  </svg>
                </a>
                {/* Linkedin */}
                <a
                  href="https://instagram.com/fueremi"
                  target="_blank"
                  className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border text-slate-300 border-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                >
                  <svg
                    role="img"
                    className="fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                  >
                    <title>LinkedIn</title>
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                {/* Whatsapp */}
                <a
                  href="https://instagram.com/fueremi"
                  target="_blank"
                  className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border text-slate-300 border-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                >
                  <svg
                    role="img"
                    className="fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                  >
                    <title>WhatsApp</title>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
