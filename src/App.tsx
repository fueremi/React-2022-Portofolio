import { useEffect, useState } from "react";
import foto from "./assets/images/foto.png";
import spotaindonesia from "./assets/images/sportaindonesia.png";
import simantul from "./assets/images/simantul.png";
import amartek from "./assets/images/amartek.png";
import ati from "./assets/images/ati.png";
import jm from "./assets/images/jm.png";
import javis from "./assets/images/javis.png";

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
      {/* ? header */}
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

      {/* ? home section */}
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

      {/* ? about section */}
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

      {/* ? portofolio section */}
      <section id="portofolio" className="pt-36 pb-16 bg-slate-100">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h4 className="font-semibold text-lg text-primary mb-2">
                Portofolio
              </h4>
              <h2 className="font-bold text-dark text-3xl mb-4 md:text-4xl lg:text-5xl">
                Project Terbaru
              </h2>
              <p className="font-medium text-base text-secondary md:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam,
                incidunt veniam. Quod recusandae fuga at suscipit delectus ab
                assumenda eos.
              </p>
            </div>
          </div>
          <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
            <div className="mb-12 p-4 md:w-1/2">
              <div className="rounded-md shadow-md overflow-hidden">
                <img
                  src={spotaindonesia}
                  alt="sporta indonesia project"
                  width="w-full"
                />
              </div>
              <h3 className="font-semibold text-xl text-dark mt-5 mb-3">
                Sporta Indonesia
              </h3>
              <p className="font-medium text-base text-secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                quia rem dolorum.
              </p>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
              <div className="rounded-md shadow-md overflow-hidden">
                <img src={simantul} alt="si mantul project" width="w-full" />
              </div>
              <h3 className="font-semibold text-xl text-dark mt-5 mb-3">
                Si Mantul
              </h3>
              <p className="font-medium text-base text-secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                quia rem dolorum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ? Klien */}
      <section id="klien" className="pt-36 pb-32 bg-slate-800">
        <div className="container">
          <div className="w-full px-4">
            <div className="text-center mb-16">
              <h4 className="font-semibold text-lg text-primary mb-2">Klien</h4>
              <h2 className="font-bold text-white text-3xl mb-4 md:text-4xl lg:text-5xl ">
                Yang pernah bekerjasama
              </h2>
              <p className="font-medium text-base text-secondary md:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident illum rem tempore?
              </p>
            </div>
          </div>
          <div className="w-full px-4">
            <div className="flex flex-wrap justify-center items-center">
              <a
                href="#"
                className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-300 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
              >
                <img src={ati} alt="ATI Logo" className="w-full" />
              </a>
              <a
                href="#"
                className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-300 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
              >
                <img src={amartek} alt="Amartek Logo" className="w-full" />
              </a>
              <a
                href="#"
                className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-300 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
              >
                <img
                  src={jm}
                  alt="Jawara Cipta Multimedia logo"
                  className="w-full"
                />
              </a>
              <a
                href="#"
                className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-300 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
              >
                <img src={javis} alt="Javis Logo" className="w-full" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
