"use client";
import { DotLottieCommonPlayer, DotLottiePlayer } from "@dotlottie/react-player";
import Image from "next/image";
import productImage from "@/assets/product-image.png";
import { useEffect, useRef } from "react";
import { animate, motion, useMotionTemplate, useMotionValue } from "framer-motion";

const tabs = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "User-friendly dashboard",
    isNew: false,
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "One-click optimization",
    isNew: false,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "Smart keyword generator",
    isNew: true,
  },
];

const FeatureTab = ({ icon, title, isNew }: { icon: string; title: string; isNew: boolean }) => {
  const dotlottieRef = useRef<DotLottieCommonPlayer>(null);
  const xPercentage = useMotionValue(50);
  const yPercentage = useMotionValue(50);

  const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${xPercentage}% ${yPercentage}%, black, transparent)`;

  useEffect(() => {
    const controlsX = animate(xPercentage, [0, 100, 100, 0], {
      duration: 4,
      repeat: Infinity,
      ease: "linear",
    });

    const controlsY = animate(yPercentage, [0, 0, 100, 100, 0], {
      duration: 4,
      repeat: Infinity,
      ease: "linear",
    });

    return () => {
      controlsX.stop();
      controlsY.stop();
    };
  }, [xPercentage, yPercentage]);

  const handleTabHover = () => {
    if (dotlottieRef.current === null) return;
    dotlottieRef.current.seek(0);
    dotlottieRef.current.play();
  };

  return (
    <div
      onMouseEnter={handleTabHover}
      className="relative border border-white/15 flex p-2.5 rounded-xl gap-2.5 items-center lg:flex-1 overflow-hidden"
    >
      <motion.div
        style={{
          WebkitMaskImage: maskImage,
          maskImage,
        }}
        className="absolute inset-0 border border-[#A369FF] rounded-xl pointer-events-none"
      />
      <div className="h-12 w-12 border border-white/15 flex items-center justify-center rounded-xl">
        <DotLottiePlayer ref={dotlottieRef} src={icon} className="h-5 w-5" autoplay loop />
      </div>
      <div className="font-medium">{title}</div>
      {isNew && (
        <div className="text-xs rounded-full px-2 py-0.5 bg-[#8c44ff] text-black font-semibold">
          New
        </div>
      )}
    </div>
  );
};

export const Features = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-5xl md:text-6xl font-medium text-center tracking-tighter">
          Elevate your SEO efforts.
        </h2>
        <p className="text-white/70 md:text-xl max-w-2xl mx-auto text-lg tracking-tight text-center mt-5">
          From small startups to large enterprises, our AI-driven tool has
          revolutionized the way businesses approach SEO.
        </p>
        <div className="mt-10 flex flex-col lg:flex-row gap-3">
          {tabs.map((tab) => (
            <FeatureTab {...tab} key={tab.title} />
          ))}
        </div>
        <div className="border border-white/20 p-2.5 rounded-xl mt-10">
          <div className="aspect-video bg-cover border border-white/20 rounded-lg overflow-hidden">
            <Image src={productImage} alt="Product Image" className="object-cover w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
};
