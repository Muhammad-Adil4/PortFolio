import About from "@/Components/About";
import GetInTouch from "@/Components/GetInTouch";
import Hero from "@/Components/Hero";
import LastestWork from "@/Components/LastestWork";
import MyService from "@/Components/MyService";
import Navbar from "@/Components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
   <>
   <Navbar />
   <Hero />
   <About />
   <MyService />
   <LastestWork />
   <GetInTouch />
   </>
  );
}
