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
    </>
  );
};

export default App;
