import Features from "./Features";
import Footer from "./Footer";
import Hero from "./Hero";
import HowToPlay from "./HowToPlay";
import Navbar from "./Navbar";
import Rules from "./Rules";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowToPlay />
        <Rules />
      </main>
      <Footer />
    </>
  );
}
