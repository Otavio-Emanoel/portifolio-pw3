import React from "react";
import Image from "next/image";

const skills = [
  "Node.js",
  "Next.js",
  "React",
  "TypeScript",
  "Java",
  "Spring Boot",
  "PostgreSQL",
  "MySQL",
  "Docker",
  "Git",
  "REST APIs",
  "Tailwind CSS",
];

const timeline = [
  {
    year: "2024",
    title: "Desenvolvedor Fullstack",
    description: "Desenvolvimento de sistemas web completos com Node.js e React.",
  },
  {
    year: "2023",
    title: "Desenvolvedor Backend",
    description: "APIs RESTful com Java Spring Boot e Node.js/Express.",
  },
  {
    year: "2022",
    title: "Início na Programação",
    description: "Primeiros passos com HTML, CSS, JavaScript e Java.",
  },
];

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-20 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-6 lg:px-8">
        <h2
          id="about-heading"
          className="text-3xl font-bold text-slate-900 dark:text-white mb-2"
        >
          Sobre Mim
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-10">
          Um pouco sobre minha trajetória e habilidades.
        </p>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Bio + foto */}
          <div className="flex flex-col sm:flex-row gap-8 lg:w-1/2">
            <div className="flex-shrink-0 flex justify-center sm:justify-start">
              <div className="relative w-40 h-40 rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-100 to-indigo-50 dark:from-indigo-900/30 dark:to-slate-800 shadow-md">
                <Image
                  src="/me.webp"
                  alt="Foto de Otávio Emanoel"
                  fill
                  className="object-cover"
                  sizes="160px"
                />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Otávio Emanoel
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Desenvolvedor Fullstack apaixonado por tecnologia e construção de
                soluções completas. Tenho experiência com Node.js, Next.js, Java
                e bancos de dados relacionais e não-relacionais. Busco sempre
                entregar código limpo, escalável e bem documentado.
              </p>
              <p className="mt-3 text-slate-600 dark:text-slate-400 leading-relaxed">
                Disponível para projetos freelance e oportunidades de emprego
                presencial ou remoto.
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="lg:w-1/2">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
              Habilidades
            </h3>
            <ul className="flex flex-wrap gap-2" aria-label="Lista de habilidades">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300"
                >
                  {skill}
                </li>
              ))}
            </ul>

            {/* Timeline */}
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mt-8 mb-4">
              Trajetória
            </h3>
            <ol className="relative border-l border-indigo-200 dark:border-indigo-800 ml-3">
              {timeline.map((item) => (
                <li key={item.year} className="mb-6 ml-6">
                  <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-white text-xs font-bold ring-4 ring-white dark:ring-slate-950">
                    {item.year.slice(2)}
                  </span>
                  <p className="text-xs text-indigo-600 dark:text-indigo-400 font-medium mb-1">
                    {item.year}
                  </p>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {item.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
