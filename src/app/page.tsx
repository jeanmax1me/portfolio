import Hero from "@/app/pages/Hero";
import About from "./pages/About";
import Work from "./pages/Work";
import Footer from "./pages/Footer";

export default function Home() {
  return (
    <div className="max-w-full">
      <Hero />
      <About />
      <Work />
      <Footer />
    </div>
  );
}
