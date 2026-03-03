import Image from "next/image";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div>
      <Hero
        name="Otávio Emanoel"
        role="Desenvolvedor Fullstack • NodeJS / Next.js / Java"
        description="Eu desenvolvo sistemas completos em diversas tecnologias."
        ctaLabel="Meus Projetos"
        ctaHref="#projects"
        imageSrc="/me.webp"
        variant="right"
      />

    </div>
  );
}
