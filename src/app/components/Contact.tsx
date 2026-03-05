"use client";

import React, { useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formState, setFormState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = "Nome é obrigatório.";
    if (!email.trim()) {
      newErrors.email = "E-mail é obrigatório.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "E-mail inválido.";
    }
    if (!message.trim()) newErrors.message = "Mensagem é obrigatória.";
    return newErrors;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setFormState("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setFormState("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  }

  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-6 lg:px-8 max-w-2xl">
        <h2
          id="contact-heading"
          className="text-3xl font-bold text-slate-900 dark:text-white mb-2"
        >
          Contato
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-10">
          Tem um projeto em mente? Entre em contato!
        </p>

        <form
          onSubmit={handleSubmit}
          noValidate
          aria-label="Formulário de contato"
          className="flex flex-col gap-6"
        >
          <div>
            <label
              htmlFor="contact-name"
              className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
            >
              Nome
            </label>
            <input
              id="contact-name"
              type="text"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              aria-describedby={errors.name ? "contact-name-error" : undefined}
              aria-invalid={!!errors.name}
              className="w-full rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white px-4 py-2 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            />
            {errors.name && (
              <p id="contact-name-error" role="alert" className="mt-1 text-xs text-red-600 dark:text-red-400">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="contact-email"
              className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
            >
              E-mail
            </label>
            <input
              id="contact-email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-describedby={errors.email ? "contact-email-error" : undefined}
              aria-invalid={!!errors.email}
              className="w-full rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white px-4 py-2 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            />
            {errors.email && (
              <p id="contact-email-error" role="alert" className="mt-1 text-xs text-red-600 dark:text-red-400">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="contact-message"
              className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
            >
              Mensagem
            </label>
            <textarea
              id="contact-message"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              aria-describedby={errors.message ? "contact-message-error" : undefined}
              aria-invalid={!!errors.message}
              className="w-full rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white px-4 py-2 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 resize-none"
            />
            {errors.message && (
              <p id="contact-message-error" role="alert" className="mt-1 text-xs text-red-600 dark:text-red-400">
                {errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={formState === "loading"}
            className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-6 py-3 text-sm font-medium text-white shadow hover:bg-indigo-500 disabled:opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 transition-colors"
          >
            {formState === "loading" ? "Enviando…" : "Enviar mensagem"}
          </button>

          {formState === "success" && (
            <p role="status" className="text-sm text-green-600 dark:text-green-400 font-medium">
              Mensagem enviada com sucesso! Entrarei em contato em breve.
            </p>
          )}
          {formState === "error" && (
            <p role="alert" className="text-sm text-red-600 dark:text-red-400 font-medium">
              Ocorreu um erro ao enviar. Tente novamente ou envie um e-mail
              diretamente.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
