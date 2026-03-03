import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Hero
        name="Otávio Emanoel"
        role="Desenvolvedor Fullstack • NodeJS / Next.js / Java"
        description="Eu desenvolvo sistemas completos em diversas tecnologias."
        ctaLabel="Meus Projetos"
        ctaHref="#projects"
        imageSrc="/me.webp"
        variant="right"
      />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

