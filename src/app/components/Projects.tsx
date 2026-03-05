import React from "react";
import Image from "next/image";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-6 lg:px-8">
        <h2
          id="projects-heading"
          className="text-3xl font-bold text-slate-900 dark:text-white mb-2"
        >
          Projetos
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-10">
          Alguns dos projetos que desenvolvi ao longo da minha carreira.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="flex flex-col rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-44 bg-gradient-to-br from-indigo-100 to-indigo-50 dark:from-indigo-900/30 dark:to-slate-800">
                <Image
                  src={project.image}
                  alt={`Preview do projeto ${project.title}`}
                  fill
                  className="object-cover"
                  onError={() => {}}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              <div className="flex flex-col flex-1 p-5 gap-3">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 flex-1">
                  {project.description}
                </p>

                <ul className="flex flex-wrap gap-2" aria-label="Tecnologias usadas">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 font-medium"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-3 mt-2">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center text-sm font-medium py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-500 transition-colors"
                    aria-label={`Demo do projeto ${project.title}`}
                  >
                    Demo
                  </a>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center text-sm font-medium py-2 rounded-md border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                    aria-label={`Repositório do projeto ${project.title}`}
                  >
                    Repositório
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
