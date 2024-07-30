"use client";
import { useEffect } from "react";
import Image from "next/image";

function handleScroll() {
  const header = document.getElementById("header");
  const headerLogo = document.getElementById("header-logo");
  if (window.scrollY > 50) {
    header?.classList.add("h-12");
    header?.classList.remove("h-20");
    header?.classList.add("text-xs");
    header?.classList.remove("bg-black/65");
    header?.classList.add("bg-black/25");
    headerLogo?.classList.add("w-20");
  } else {
    header?.classList.remove("h-12");
    header?.classList.add("h-20");
    header?.classList.remove("text-xs");
    header?.classList.add("bg-black/65");
    header?.classList.remove("bg-black/25");
    headerLogo?.classList.remove("w-20");
  }
}

export default function HeaderComponent() {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <header
      id="header"
      className="transition-all main-header w-full md:flex h-20 justify-between items-center bg-black/65 z-50 fixed scrolling px-6"
    >
      <div className="flex justify-between w-full">
        <div>
          <div>
            <Image
              id="header-logo"
              src="/img/logo.png"
              width={150}
              height={50}
              alt="Picture of the author"
              className="transition-all"
            />
          </div>
        </div>
        <div className="flex items-center">
          <div className="pr-2">ABOT</div>
          <div className="pr-2">GAMES</div>
          <div>MENU</div>
        </div>
      </div>
    </header>
  );
}
