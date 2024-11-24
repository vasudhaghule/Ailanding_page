"use client";
import { DotLottiePlayer} from "@dotlottie/react-player";
import Image from "next/image";
import productImage from '@/assets/product-image.png';
const tabs=[
{
icon: "/assets/lottie/vroom.lottie",
title: "User-friendly dashboard",
isNew: false,
backgroundPositionX: 0,
backgroundPositiony: 6,
backgroundSizeX: 150,
},
{
icon: "/assets/lottie/click.lottie",
title: "One-click optimization",
isNew: false,
backgroundPositionX: 98,
backgroundPositionY: 100,
backgroundSizeX: 135,
},
{
icon: "/assets/lottie/stars.lottie",
title: "Smart keyword generator",
IsNew: true,
backgroundPosition: 100,
backgroundPositionY: 27,
backgroundSizeX: 177
}
];

export const Features = () => {
  return <section className="py-20 md:py-24">
    <div className="container">
   <h2 className="text-5xl md:text-6xl font-medium text-center tracking-tighter">Elevate your SEO efforts.</h2>
   <p className="text-white/70 md:text-xl max-w-2xl mx-auto text-lg tracking-tight text-center mt-5">From small startups to large enterprises, our AI-driven tool has 
   revolutionized the way businesses approach SEO.</p>
   <div className="mt-10 flex flex-col lg:flex-row gap-3">
   {tabs.map((tab)=>(
    <div key={tab.title} className="border border-white/15 flex p-2.5 rounded-xl gap-2.5 item-center lg flex-1">
    <div className="border border-white/15 flex items-center justify-center h-16 w-16 rounded-xl">
                <DotLottiePlayer src={tab.icon} className="h-8 w-8" autoplay />
              </div>
    <div className="font-medium">{tab.title}</div>
    {tab.isNew && (<div className="text-xs rounded full px-2 py-0.5 bg-[#8c44ff] text-black font-semibold">new</div>)}
    </div>
   ))}
   </div>
   <div className="border border-white/20 p-2.5 rounded-xl  mt-3">
    <div className="aspect-video bg-cover border border-white/20 rounded-lg" >
   <Image src={productImage} alt="product Image " /></div>
   {/*<Image src={productImage} alt="product Image " />*/}
    </div>
    </div>
  </section>
    
}


