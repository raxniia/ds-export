"use client";
import { LangProvider } from "@/components/LangProvider";
import { Hero, Journey, Marquee, Nav } from "@/components/Top";
import { About, Assistant, Hub, Services } from "@/components/Middle";
import { Booking, Contact, FloatingWA, Footer, Knowledge, Network, Tools, Updates } from "@/components/Bottom";

export default function Home() {
  return (
    <LangProvider>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Journey />
        <Services />
        <About />
        <Assistant />
        <Hub />
        <Tools />
        <Knowledge />
        <Updates />
        <Network />
        <Booking />
        <Contact />
      </main>
      <Footer />
      <FloatingWA />
    </LangProvider>
  );
}
