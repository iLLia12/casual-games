"use client";
import { Press_Start_2P, Bangers } from "next/font/google";
import { ParallaxBanner } from "react-scroll-parallax";
import { ParallaxProvider } from "react-scroll-parallax";

const pressStart2P = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
});

const bangers = Bangers({
  subsets: ["latin"],
  weight: "400",
});

export default function Banner() {
  return (
    <section className="main-banner h-screen overflow-hidden">
      <ParallaxProvider>
        <ParallaxBanner
          layers={[
            {
              speed: -30,
              translateY: [0, 50],
              opacity: [1, 0.1],
              scale: [1.05, 1, "easeOutCubic"],
              style: {
                background:
                  'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/img/casual_game_banner-2.jpg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              },
              shouldAlwaysCompleteAnimation: true,
            },
            {
              speed: -5,
              children: (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center" style={{ width: "400px" }}>
                    <h1
                      className={`text-8xl text-white  inline-block ${bangers.className}`}
                    >
                      Hello World!
                    </h1>
                    <div
                      style={{
                        background: "rgba(0, 0, 0, 0.51)",
                      }}
                      className={`rounded-md text-xs p-4 ${pressStart2P.className}`}
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book
                    </div>
                  </div>
                </div>
              ),
            },
          ]}
          className="aspect-[2/1]"
        />
      </ParallaxProvider>
      {/* <Image src="/img/banner-1.jpg" fill={true} alt="Picture of the author" /> */}
    </section>
  );
}
