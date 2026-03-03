import React from "react";
import Image from "next/image";

type HeroProps = {
  name: string;
  role?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc?: string;
  variant?: "left" | "right";
};

export const Hero: React.FC<HeroProps> = ({
  name,
  role,
  description,
  ctaLabel = "Ver projetos",
  ctaHref = "#projects",
  imageSrc,
  variant = "right",
}) => {
  const isLeft = variant === "left";

  return (
    <section
      className="w-full bg-gradient-to-b from-white/60 via-white/40 to-transparent dark:from-slate-900/80 dark:via-slate-900/60 py-16"
      aria-labelledby="hero-heading"
    >
      <div className="container mx-auto px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-10">
        <div
          className={`w-full lg:w-1/2 ${
            isLeft ? "order-2 lg:order-1" : "order-1 lg:order-1"
          }`}
        >
          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white"
          >
            Olá, eu sou{" "}
            <span className="text-indigo-600 dark:text-indigo-400">{name}</span>
          </h1>

          {role && (
            <p className="mt-3 text-lg text-slate-700 dark:text-slate-300">
              {role}
            </p>
          )}

          {description && (
            <p className="mt-6 max-w-2xl text-slate-600 dark:text-slate-300 leading-relaxed">
              {description}
            </p>
          )}

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={ctaHref}
              className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-5 py-3 text-sm font-medium text-white shadow hover:bg-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            >
              {ctaLabel}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md border border-slate-200 dark:border-slate-600 px-5 py-3 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              Contato
            </a>
          </div>

          <div className="mt-8 flex gap-4 text-sm text-slate-500 dark:text-slate-400">
            <span>Disponível para trabalho · Freelance</span>
          </div>
        </div>

        <div
          className={`w-full lg:w-1/2 flex justify-center lg:justify-end ${
            isLeft ? "order-1 lg:order-2" : "order-2 lg:order-2"
          }`}
          aria-hidden={imageSrc ? undefined : "true"}
        >
          <div className="relative">
            <div className="w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] rounded-xl overflow-hidden bg-gradient-to-br from-indigo-100 to-indigo-50 dark:from-indigo-900/30 dark:to-indigo-800/30 shadow-lg transform transition-transform hover:scale-[1.02]">
              {imageSrc ? (
                <Image
                  src={imageSrc}
                  alt={`${name} — foto`}
                  width={320}
                  height={320}
                  className="w-full h-full object-contain"
                  priority
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-indigo-600 dark:text-indigo-300 font-semibold">
                  {name}
                </div>
              )}
            </div>

            {/* Accent circle */}
            <span
              aria-hidden="true"
              className="hidden lg:block absolute -left-8 -bottom-8 w-40 h-40 bg-indigo-100/70 rounded-full blur-2xl dark:bg-indigo-800/40"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
