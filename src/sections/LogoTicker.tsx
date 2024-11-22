import acmeLogo from "@/assets/logo-acme.png";
import apexLogo from "@/assets/logo-apex.png";
import celestialLogo from "@/assets/logo-celestial.png";
import quantumLogo from "@/assets/logo-quantum.png";
import pulseLogo from "@/assets/logo-pulse.png";
import echoLogo from "@/assets/logo-echo.png";

export const LogoTicker = () => {
  return (
   <section>
   <div className="container">
<div className="flex">
<div className="flex-1">
<h2>Trusted by top innovative teams</h2>
</div>
        <div>
        <div className="flex flex-none gap-14">
           {[
            acmeLogo,
            pulseLogo,
            echoLogo,
            celestialLogo,
            apexLogo,
            quantumLogo,
            
           ].map((logo) => (
            <img src={logo.src} key={logo.src} className= "h-6 w-auto" /> 
          ))}
        </div>
      </div>
      </div>
    </div>
  </section>
   );
};
