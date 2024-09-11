"use client";
import React, { useEffect, useState } from "react";
import { Link } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ScrollAnimatePage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const calculateOpacity = (elementTop: number, elementHeight: number) => {
    const scrollPosition = scrollY;
    const windowHeight = window.innerHeight;

    // Calculate how far the element is from the center of the viewport
    const elementDistance = elementTop - scrollPosition;

    // Make the element in the center of the viewport fully visible (opacity = 1)
    if (
      elementDistance < windowHeight / 2 &&
      elementDistance > -elementHeight + windowHeight / 2
    ) {
      return 1; // Full opacity
    }

    // Fade the elements in and out based on their distance from the center of the viewport
    const fadeDistance = Math.abs(elementDistance - windowHeight / 2);

    if (fadeDistance > windowHeight) return 0;

    return 1 - fadeDistance / windowHeight; // Gradual fade
  };

  return (
    <>
      <section
        id={"home"}
        style={{
          opacity: calculateOpacity(0, window.innerHeight),
        }}
        className="h-screen bg-white text-gray-800 flex items-center justify-center transition-opacity duration-500"
      >
        <Home />
      </section>

      <section
        id={"about"}
        style={{
          opacity: calculateOpacity(window.innerHeight, window.innerHeight),
        }}
        className="h-screen text-gray-800 flex items-center justify-center transition-opacity duration-500"
      >
        <About />
      </section>
    </>
  );
}

export const Home = () => {
  return (
    <div className="h-screen flex bg-white text-gray-800 p-4 md:p-8 relative overflow-hidden">
      {/* Navigation */}
      <nav className="flex fixed w-full justify-between items-center pb-6 z-50">
        <ul className="flex sm:space-x-10 space-x-4 pr-8 pl-4 text-sm text-black">
          <li className="hover:underline group bg-red-70d">
            <a href="#home" className="hover:text-gray-600">
              <img
                className="size-5 group mx-auto hover:underline"
                src={"home.png"}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-minus mx-auto group-hover:opacity-100 opacity-0 transition-all duration-200"
              >
                <path d="M5 12h14" />
              </svg>
            </a>
          </li>
          <li className="hover:underline group bg-red-70d">
            <a href="#about" className="hover:text-gray-600">
              <img
                className="size-5 group mx-auto hover:underline"
                src={"about.png"}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-minus mx-auto group-hover:opacity-100 opacity-0 transition-all duration-200"
              >
                <path d="M5 12h14" />
              </svg>
            </a>
          </li>
          {/* <li className="hover:underline group bg-red-70d">
            <a href="#projects" className="hover:text-gray-600">
              <img
                className="size-5 group mx-auto hover:underline"
                src={"light-bulb.png"}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-minus mx-auto group-hover:opacity-100 opacity-0 transition-all duration-200"
              >
                <path d="M5 12h14" />
              </svg>
            </a>
          </li> */}
        </ul>

        <div
          className="
         text-white rounded-full w-12 h-12 flex items-center justify-center text-sm font-bold font-mono"
        >
          <img className="mx-auto" src={"yb.png"} />
        </div>
        <ul className="flex space-x-4 sm:space-x-8 pr-12 sm:pr-16">
          <li className="hover:underline group bg-red-70d">
            <a href="#" className="hover:text-gray-600">
              <img
                className="size-5 group mx-auto hover:underline"
                src={"github-logo.png"}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-minus mx-auto group-hover:opacity-100 opacity-0 transition-all duration-200"
              >
                <path d="M5 12h14" />
              </svg>
            </a>
          </li>
          <li className="hover:underline group bg-red-70d">
            <a href="#" className="hover:text-gray-600">
              <img
                className="size-5 group mx-auto hover:underline"
                src={"linkedin.png"}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-minus mx-auto group-hover:opacity-100 opacity-0 transition-all duration-200"
              >
                <path d="M5 12h14" />
              </svg>
            </a>
          </li>
          <li className="hover:underline group bg-red-70d">
            <a href="#" className="hover:text-gray-600">
              <img
                className="size-5 group mx-auto hover:underline"
                src={"mail.png"}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-minus mx-auto group-hover:opacity-100 opacity-0 transition-all duration-200"
              >
                <path d="M5 12h14" />
              </svg>
            </a>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="flex flex-col md:flex-row items-center justify-between mt-12">
        {/* Illustration */}
        <div className="relative w-full sm:pb-20 my-auto md:w-1/2 md:mb-0">
          <img
            src={"avatar.jpeg"}
            alt="Creative portrait"
            className="w-[60%] max-w-md mx-auto rounded-full"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-500 opacity-50 mix-blend-color-dodge"></div>
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500 rounded-full opacity-50 mix-blend-multiply"></div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-green-500 rounded-full opacity-50 mix-blend-multiply"></div>
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 md:pl-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Hi, I'm Yash!
          </h1>
          <p className="text-lg mb-6 text-gray-600">
            A passionate full-stack developer who loves transforming creative
            ideas into efficient web solutions. With a focus on seamless user
            experiences and cutting-edge technologies, I’m here to turn your
            vision into reality—one line of code at a time.
          </p>
          <div className="flex space-x-4">
            <Button className="bg-gray-800 hover:bg-gray-700 text-white">
              Resume <Link />
            </Button>
            <Button
              variant="outline"
              className="border-gray-300 text-gray-800 hover:bg-gray-100"
            >
              Contact
            </Button>
          </div>
        </div>
      </main>

      {/* "Web Developer" Text */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -rotate-90 text-gray-200 text-4xl font-bold opacity-20 select-none">
        Web Developer
      </div>

      {/* Light Bulb Icon */}
      <div className="fixed bottom-8 right-8 rounded-full p-3 shadow-lg size-14 cursor-pointer">
        <img className="shadow-sm" src={"sun.png"} />
      </div>
    </div>
  );
};

export const About = () => {
  return (
    <div className="w-full h-screen flex flex-col overflow-hidden items-center justify-center px-6 py-8 pt-12 ">
      <h1 className="text-4xl font-bold mb-6 font-mono">MY SKILLS</h1>
      <div className="grid sm:grid-cols-4 sm:grid-rows-2 grid-cols-2 grid-rows-4 gap-4 h-full w-full">
        {[
          "ShadCN",
          "Tailwind CSS",
          "MERN Stack",
          "Node.js",
          "React",
          "MongoDB",
          "JavaScript",
          "TypeScript",
          //   "C++",
        ].map((skill) => (
          <div
            key={skill}
            className="bg-gray-100 shadow-lg shadow-gray-200 text-center h-full w-full rounded-lg font-mono flex items-center justify-center"
          >
            {/* <CardHeader> */}
            <CardTitle className="text-xl font-semibold">{skill}</CardTitle>
            {/* </CardHeader> */}
            <CardContent className="p-4">
              <img className="size-8" src="nodejs.png" />
            </CardContent>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Projects = () => {
  return <div className="w-full h-screen bg-blue-900 absolute">Projects</div>;
};
