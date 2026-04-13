import Hero from "@/components/sections/Hero";
import AboutUs from "@/components/sections/AboutUs";
import VisiMisi from "@/components/sections/VisiMisi";
import AboutUs2 from "@/components/sections/AboutUs2";
import Service from "@/components/sections/Service";
import Pengiriman from "@/components/sections/Pengiriman";

export default function Home() {
  return (
    <main className="pt-20">
      <Hero />
      <AboutUs />
      <VisiMisi />
      <AboutUs2 />
      <Service />
      <Pengiriman />
    </main>
  );
}