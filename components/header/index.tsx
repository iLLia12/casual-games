"use client";
import { useEffect } from "react";

function handleScroll() {
  const header = document.getElementById("header");
  if (window.scrollY > 50) {
    header?.classList.add("h-12");
    header?.classList.remove("h-20");
    header?.classList.add("text-xs");
  } else {
    header?.classList.remove("h-12");
    header?.classList.add("h-20");
    header?.classList.remove("text-xs");
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
      className="transition-all main-header w-full md:flex h-20 justify-between items-center bg-black/25 z-50 fixed scrolling px-6"
    >
      <div className="flex justify-between w-full">
        <div>
          <div>LOGO</div>
        </div>
        <div className="flex">
          <div className="pr-2">ABOT</div>
          <div className="pr-2">GAMES</div>
          <div>MENU</div>
        </div>
      </div>
    </header>
  );
}
