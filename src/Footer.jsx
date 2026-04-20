import { RetroGrid } from "./components/ui/retro-grid";
import logo from "./assets/arabic_logo.png";

function Footer() {
   return (
      <div>
         <hr />
         <footer className="footer">
            <img src={logo} alt="Mustapha" className="logo" />
            <p>&copy; {new Date().getFullYear()} Mustapha Achahrour ♥️</p>
         </footer>
         <div className="relative h-[150px] w-full overflow-hidden">
            <RetroGrid />
         </div>
      </div>
   );
}

export default Footer;
