import Facebook from "../icons/facebook.tsx";
import Instagram from "../icons/instagram.tsx";
import Logo from "../icons/logo.tsx";

const Footer = () => {
  return (
    <footer className="mt-[135px] w-full bg-[#640008] p-8 text-white ">
      <div className="w-full max-w-[1200px]  xl:px-0 mx-auto pb-[135px] grid grid-cols-1 lg:grid-cols-5 md:grid-cols-2 gap-6">
        {/* start */}
        <div className="col-span-1 md:col-span-2">
          <a href="/" className="">
            <img src="/logo.jpeg" alt="logo" className="lg:w-1/2" />
          </a>
          <p className="tracking-tight text-lg lg:pr-14  font-jost  pt-[18px] pb-[33px]">
            Disfruta de nuestro hotel con las comodidades que buscas, tu hogar
            lejos de casa.
          </p>
          <div className="flex gap-5 ">
            <a
              href="https://www.facebook.com/profile.php?id=100080841819480&mibextid=ZbWKwL"
              target="_blank"
              className="hover:underline flex gap-3"
            >
              <p className=" font-jost text-gray-300 ">Síguenos en Facebook </p>
              <Facebook />
            </a>
            {/* <a href="/">
              <Instagram />
            </a> */}
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-4">
          <h5 className="text-gray-300 font-dm text-[22px] lg:text-[25px] leading-loose">
            Páginas
          </h5>
          <div className="flex flex-col gap-6">
            <a
              href="/nosotros"
              className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-white"
            >
              Nosotros
            </a>
            <a
              href="/habitaciones"
              className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-white"
            >
              Habitaciones
            </a>
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-4">
          <h5 className="text-gray-300 font-dm text-[22px] lg:text-[25px] leading-loose">
            Habitaciones
          </h5>
          <div className="flex flex-col gap-6">
            <a
              href="/simple"
              className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-white"
            >
              Simple
            </a>
            <a
              href="/doble"
              className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-white"
            >
              Doble
            </a>
            <a
              href="/matrimonial"
              className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-white"
            >
              Matrimonial
            </a>
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-4">
          <h5 className="text-gray-300 font-dm text-[22px] lg:text-[25px] leading-loose">
            Contacto
          </h5>
          <div className="flex flex-col gap-6">
            <p className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-white">
              Jr. Oswaldo N. Regal 506 - Huanta
            </p>
            <p className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-white">
              hotelconquistadorhuanta@gmail.com
            </p>
            <p className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-white">
              +51 967 702 720
            </p>
          </div>
        </div>

        {/* End */}
      </div>
    </footer>
  );
};

export default Footer;
