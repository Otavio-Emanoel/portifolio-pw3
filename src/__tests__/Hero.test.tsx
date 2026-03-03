import React from "react";
import { render, screen } from "@testing-library/react";
import Hero from "@/app/components/Hero";

// Mock next/image
jest.mock("next/image", () => ({
  __esModule: true,
  default: ({
    src,
    alt,
    className,
    width,
    height,
  }: {
    src: string;
    alt: string;
    className?: string;
    width?: number;
    height?: number;
    priority?: boolean;
    fill?: boolean;
  }) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} className={className} width={width} height={height} />;
  },
}));

describe("Hero", () => {
  it("renders the name prominently", () => {
    render(<Hero name="Otávio Emanoel" />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Otávio Emanoel"
    );
  });

  it("renders role when provided", () => {
    render(<Hero name="Otávio" role="Desenvolvedor Fullstack" />);
    expect(screen.getByText("Desenvolvedor Fullstack")).toBeInTheDocument();
  });

  it("renders description when provided", () => {
    render(<Hero name="Otávio" description="Minha descrição" />);
    expect(screen.getByText("Minha descrição")).toBeInTheDocument();
  });

  it("renders the CTA link with correct href", () => {
    render(
      <Hero name="Otávio" ctaLabel="Ver Projetos" ctaHref="#projects" />
    );
    const link = screen.getByRole("link", { name: "Ver Projetos" });
    expect(link).toHaveAttribute("href", "#projects");
  });

  it("renders contact link", () => {
    render(<Hero name="Otávio" />);
    expect(screen.getByRole("link", { name: "Contato" })).toBeInTheDocument();
  });

  it("renders the image with correct alt text when imageSrc is given", () => {
    render(<Hero name="Otávio" imageSrc="/me.webp" />);
    expect(screen.getByAltText("Otávio — foto")).toBeInTheDocument();
  });

  it("has aria-labelledby linking to h1 id", () => {
    render(<Hero name="Otávio" />);
    const section = screen.getByRole("region");
    expect(section).toHaveAttribute("aria-labelledby", "hero-heading");
    expect(document.getElementById("hero-heading")).toBeInTheDocument();
  });
});
