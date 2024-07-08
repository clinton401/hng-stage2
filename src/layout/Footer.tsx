import facebook from "../assets/instagram.png";
import whatsapp from "../assets/whatsapp.png";
import instagram from "../assets/instagram.png";
function Footer() {
  return (
    <footer className="min-h-[200px] bg-typo flex-col text-white gap-2 flex items-center justify-center ">
      <p className="font-[600] text-lg text-center ">Connect With Us On</p>
      <div className="w-full justify-center flex items-center gap-2">
        <img
          src={facebook}
          alt="facebook icon"
          className="h-[20px] aspect-square "
        />
        <img
          src={whatsapp}
          alt="whatsapp icon"
          className="h-[20px] aspect-square "
        />
        <img
          src={instagram}
          alt="instagram icon"
          className="h-[20px] aspect-square "
        />
      </div>
    </footer>
  );
}

export default Footer;
