import React, { useState } from "react";
import Logo from "../icons/logo";
import useMediaQuery from "../utils/useMediaQuery";
import { motion } from "framer-motion";

const Navbar = () => {
  const [toggled, setToggled] = useState(false);
  const matches = useMediaQuery("(min-width: 1280px)");

  const linkStyle = "text-xl leading-6 font-jost text-white hover:underline";

  return (
    <div className=" lg:px-12 px-4  m-auto w-full  py-3 flex  justify-between items-center lg:sticky lg:top-0 lg:z-50 lg:backdrop-blur-lg lg:bg-[#640008] drop-shadow-xl">
      <a href="/">
        <img src="/logo.jpeg" alt="logo" className="w-1/3" />
      </a>

      {/* Nav List for Desktop */}
      {matches && (
        <nav className="flex flex-row gap-6">
          <a href="/" className={linkStyle}>
            Inicio
          </a>
          <a href="/nosotros" className={linkStyle}>
            Nosotros
          </a>
          <a href="/habitaciones" className={linkStyle}>
            Habitaciones
          </a>
          <a href="/contacto" className={linkStyle}>
            Contacto
          </a>
        </nav>
      )}

      {!matches && (
        <div
          onClick={() => setToggled(!toggled)}
          className="space-y-1 cursor-pointer"
        >
          <motion.span
            animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }}
            className="block h-0.5 w-8 bg-black"
          ></motion.span>
          <motion.span
            animate={{ width: toggled ? 0 : 24 }}
            className="block h-0.5 w-6 bg-black"
          ></motion.span>
          <motion.span
            animate={{
              rotateZ: toggled ? -45 : 0,
              y: toggled ? -8 : 0,
              width: toggled ? 32 : 16,
            }}
            className="block h-0.5 w-4 bg-black"
          ></motion.span>
        </div>
      )}

      {toggled && !matches && (
        <motion.nav
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col h-100dvh fixed z-50  bg-white w-full text-black bottom-0 left-0 top-32 gap-6 justify-center  items-center "
        >
          <a href="/" className={linkStyle}>
            Inicio
          </a>
          <a href="/nosotros" className={linkStyle}>
            Nosotros
          </a>
          <a href="/habitaciones" className={linkStyle}>
            Habitaciones
          </a>
          <a href="/contacto" className={linkStyle}>
            Reservar
          </a>
        </motion.nav>
      )}
    </div>
  );
};

export default Navbar;
