
import {Hero} from "@/sections/Hero";
import { Header } from "@/sections/Header"
import {LogoTicker} from "@/sections/LogoTicker";
import {Features} from "@/sections/Features";
import { Testimonials } from "@/sections/Testimonials";
import {CallAction} from "@/sections/CallAction";
import {Footer} from "@/sections/Footer";

export default function Home() {
  return (
    <>
  
      <Header/>
      <Hero/>
      <LogoTicker/>
      <Features/>
      <Testimonials/>
      <CallAction/>
      <Footer />
     
    
    </>
  );
}