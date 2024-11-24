"use client";
import Image from "next/image";
import avatar1 from "@/assets/avatar-1.png"; 
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import {motion} from "framer-motion";
const testimonials = [
  {
    text: "This product has completely transformed how I manage my projects and deadlines",
    name: "Sophia Perez",
    avatarImg: avatar1,
    title: "Director @ Quantum",
  },
  {
    text: "These AI tools have completely revolutionized our SEO entire strategy overnight",
    name: "Jamie Lee",
    avatarImg: avatar2,
    title: "Founder @ Pulse",
  },
  {
    text: "The user interface is so intuitive and easy to use, it has saved us countless hours",
    name: "Alisa Hester",
    avatarImg: avatar3,
    title: "Product @ Innovate",
  },
  {
    text: "Our team's productivity has increased significantly since we started using this tool",
    name: "Alec Whitten",
    avatarImg: avatar4,
    title: "CTO @ Tech Solutions",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-5xl md:text-6xl text-center tracking-tighter font-medium">
          Beyond Expectations
        </h2>
        <p className="text-white/70 text-lg md:text-xl text-center mt-5 tracking-tight max-w-sm mx-auto">
          Our revolutionary AI SEO tools have transformed our clients' strategies.
        </p>
        <div className="overflow-hidden mt-10 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <motion.div 
          initial={{
            translateX:'-50%'
          }}
          animate={{
            translateX:"0",
          }}
          transition={{
            repeat:Infinity,
            ease:"linear",
            duration:30,
          }}
          className="flex gap-5 pr-5 flex-none ">
            {[...testimonials,...testimonials] .map((testimonial) => (
              <div
                key={testimonial.name}
                className="border border-white/15 p-6 md:p-10 rounded-xl bg-[linear-gradient(to_bottom_left,rgb(140,69,255,0.3),black)] max-w-xs md:max-w-md flex-none"
              >
                <div className="text-lg tracking-tight md:text-2xl">{testimonial.text}</div>
                <div className="flex items-center gap-3 mt-5">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[rgb(140,69,244)] mix-blend-soft-light rounded-lg z-0"></div>
                    <div className="absolute inset-0 border border-white/30 rounded-lg z-10"></div>
                    <Image
                      src={testimonial.avatarImg}
                      alt={`Avatar for ${testimonial.name}`}
                      className="h-11 w-11 rounded-lg grayscale relative z-20"
                    />
                  </div>
                  <div>
                    <div className="font-medium">{testimonial.name}</div>
                    <div className="text-white/50 text-sm">{testimonial.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
