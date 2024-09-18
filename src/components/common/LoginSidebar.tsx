"use client";

import { useState, useEffect } from "react";

import AuthBackground1 from "@/assets/images/auth/auth1.jpg";
import AuthBackground2 from "@/assets/images/auth/auth2.jpg";
import AuthBackground3 from "@/assets/images/auth/auth3.jpg";
import AuthBackground4 from "@/assets/images/auth/auth4.jpg";
import AuthBackground5 from "@/assets/images/auth/auth5.jpg";

const backgrounds = [
  AuthBackground1,
  AuthBackground2,
  AuthBackground3,
  AuthBackground4,
  AuthBackground5,
];

const quotes = [
  {
    text: "This library has saved me countless hours of work and helped me deliver stunning designs to my clients faster than ever before.",
    author: "Sofia Davis",
  },
  {
    text: "The intuitive interface and powerful features have revolutionized my workflow. I can't imagine working without it now.",
    author: "Alex Johnson",
  },
  {
    text: "From concept to deployment, this tool streamlines every step of the development process. It's a game-changer.",
    author: "Emma Thompson",
  },
  {
    text: "The support team is incredibly responsive and helpful. They've gone above and beyond to ensure our success.",
    author: "Michael Chen",
  },
  {
    text: "With this platform, we've been able to scale our operations efficiently while maintaining the highest quality standards.",
    author: "Olivia Rodriguez",
  },
];

const LoginSidebar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % backgrounds.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative hidden h-full w-full max-w-[667px] flex-col bg-muted p-10 text-white lg:flex overflow-hidden">
      {backgrounds.map((bg, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{
            backgroundImage: `url(${bg.src})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: index === currentIndex ? 1 : 0,
          }}
        />
      ))}
      <div className="absolute inset-0 border-l" />

      <div className="relative z-20 mt-auto">
        <div className="absolute inset-0 bg-black/60 rounded-lg" />
        <blockquote className="space-y-2 relative z-10 p-4">
          <p className="text-lg transition-opacity duration-500 ease-in-out">
            &ldquo;{quotes[currentIndex].text}&rdquo;
          </p>
          <footer className="text-sm transition-opacity duration-500 ease-in-out">
            {quotes[currentIndex].author}
          </footer>{" "}
        </blockquote>
      </div>
    </div>
  );
};

export default LoginSidebar;
