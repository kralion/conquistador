import Facebook from "../icons/facebook.tsx";
import Instagram from "../icons/instagram.tsx";
import Logo from "../icons/logo.tsx";

const Footer = () => {
  return (
    <footer className="mt-[135px] w-full bg-primary-300 p-8">
      <div className="w-full max-w-[1200px]  xl:px-0 mx-auto pb-[135px] grid grid-cols-1 lg:grid-cols-5 md:grid-cols-2 gap-6">
        {/* start */}
        <div className="col-span-1 md:col-span-2">
          <a href="/" className="">
            <img src="/logo.svg" alt="logo" className="lg:w-1/3 " />
          </a>
          <p className="tracking-tight text-lg lg:pr-14  font-jost text-text-gray pt-[18px] pb-[33px]">
            Disfruta de nuestro hotel con las comodidades que buscas, tu hogar
            lejos de casa.
          </p>
          <div className="flex gap-5 ">
            <p className=" font-jost text-text-gray ">
              Síguenos en nuestras redes{" "}
            </p>

            <a href="/">
              <Facebook />
            </a>
            <a href="/">
              <Instagram />
            </a>
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-4">
          <h5 className="text-primary-200 font-dm text-[22px] lg:text-[25px] leading-loose">
            Páginas
          </h5>
          <div className="flex flex-col gap-6">
            <a
              href="/nosotros"
              className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray"
            >
              Nosotros
            </a>
            <a
              href="/habitaciones"
              className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray"
            >
              Habitaciones
            </a>
            <a
              href="/contacto"
              className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray"
            >
              Contacto
            </a>
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-4">
          <h5 className="text-primary-200 font-dm text-[22px] lg:text-[25px] leading-loose">
            Habitaciones
          </h5>
          <div className="flex flex-col gap-6">
            <a
              href="/simple"
              className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray"
            >
              Simple
            </a>
            <a
              href="/doble"
              className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray"
            >
              Doble
            </a>
            <a
              href="/matrimonial"
              className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray"
            >
              Matrimonial
            </a>
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-4">
          <h5 className="text-primary-200 font-dm text-[22px] lg:text-[25px] leading-loose">
            Contacto
          </h5>
          <div className="flex flex-col gap-6">
            <p className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray">
              Jr. Oswaldo N. Regal 506 - Huanta
            </p>
            <p className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray">
              hotelconquistadorhuanta@gmail.com
            </p>
            <p className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray">
              +51 999-999-999
            </p>
          </div>
        </div>

        {/* End */}
      </div>
    </footer>
  );
};

export default Footer;
