import About from "./Modules/About/About";
import Contact from "./Modules/Contact/Contact";

import Hero from "./Modules/Hero/Hero";
import Statistics from "./Modules/Statistics/Statistics";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Statistics />
      <Contact />
    </main>
  );
}
