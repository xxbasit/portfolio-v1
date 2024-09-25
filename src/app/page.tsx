"use client";
import Footer from "@/layout/footer";
import Navbar from "@/layout/navbar";

export default function Home() {
  return (
    <main
      style={{
        background:
          "radial-gradient(circle at center top, rgba(97, 99, 108, 0.311) 0%, rgba(31, 32, 37, 0.158) 50%), #151519",
      }}
      className="flex h-[100dvh] flex-col items-center justify-between px-8 pt-8 pb-4 md:px-24 md:py-12 flex-1"
    >
      <Navbar page="home" />
      <div className="flex flex-1 items-center justify-center text-white">
        <div className="w-max relative">
          <p
            style={{
              letterSpacing: "0.3em",
            }}
            className="absolute top-[-10px] left-12 text-sm font-thin"
          >
            I AM
          </p>
          <h1 className="md:text-[100px] text-[60px] font-bold text-center">
            PROJECT.
          </h1>
          <p
            style={{
              letterSpacing: "0.3em",
            }}
            className="absolute bottom-[-10px] right-12 text-sm font-thin"
          >
            MANAGER
          </p>
        </div>
      </div>
      <Footer page="home" />
    </main>
  );
}
