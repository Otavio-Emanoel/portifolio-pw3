import React from "react";
import Image from "next/image";

const REPOS = [
  "Otavio-Emanoel/ConsultaMedicosOnline",
  "Otavio-Emanoel/BeautyHub",
  "Otavio-Emanoel/GoLocal",
  "Otavio-Emanoel/LabControl",
  "Otavio-Emanoel/node-api-template",
  "Otavio-Emanoel/OllamaJava",
];

type GitHubRepo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  homepage: string | null;
};

async function fetchRepo(fullName: string): Promise<GitHubRepo | null> {
  try {
    const res = await fetch(`https://api.github.com/repos/${fullName}`, {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data as GitHubRepo;
  } catch (e) {
    return null;
  }
}

export default async function Projects() {
  const fetched = await Promise.all(REPOS.map((r) => fetchRepo(r)));
  const projects = fetched.filter(Boolean) as GitHubRepo[];

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
          Alguns dos meus repositórios no GitHub.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="flex flex-col rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-44 bg-gradient-to-br from-indigo-100 to-indigo-50 dark:from-indigo-900/30 dark:to-slate-800">
                <Image
                  src={`https://opengraph.githubassets.com/1/${project.html_url.replace("https://github.com/", "")}`}
                  alt={`Preview do projeto ${project.name}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              <div className="flex flex-col flex-1 p-5 gap-3">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {project.name}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 flex-1">
                  {project.description ?? "Sem descrição"}
                </p>

                <ul className="flex flex-wrap gap-2" aria-label="Tecnologias usadas">
                  {project.language ? (
                    <li className="text-xs px-2 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 font-medium">
                      {project.language}
                    </li>
                  ) : null}
                </ul>

                <div className="flex gap-3 mt-2">
                  <a
                    href={project.homepage ?? project.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center text-sm font-medium py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-500 transition-colors"
                    aria-label={`Demo do projeto ${project.name}`}
                  >
                    Demo
                  </a>
                  <a
                    href={project.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center text-sm font-medium py-2 rounded-md border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                    aria-label={`Repositório do projeto ${project.name}`}
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
