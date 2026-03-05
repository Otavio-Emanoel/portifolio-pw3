import React from "react";
import { render, screen } from "@testing-library/react";
import Projects from "@/app/components/Projects";

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
    fill?: boolean;
    sizes?: string;
    onError?: () => void;
  }) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} className={className} width={width} height={height} />;
  },
}));

describe("Projects", () => {
  it("renders the section heading", () => {
    render(<Projects />);
    expect(
      screen.getByRole("heading", { name: "Projetos" })
    ).toBeInTheDocument();
  });

  it("renders 6 project cards", () => {
    render(<Projects />);
    const articles = screen.getAllByRole("article");
    expect(articles).toHaveLength(6);
  });

  it("each project card has a demo link and a repo link", () => {
    render(<Projects />);
    const demoLinks = screen.getAllByRole("link", { name: /demo do projeto/i });
    const repoLinks = screen.getAllByRole("link", {
      name: /repositório do projeto/i,
    });
    expect(demoLinks).toHaveLength(6);
    expect(repoLinks).toHaveLength(6);
  });

  it("section has id='projects' for anchor navigation", () => {
    render(<Projects />);
    expect(document.getElementById("projects")).toBeInTheDocument();
  });

  it("section is labelled by its heading", () => {
    render(<Projects />);
    const section = screen.getByRole("region", { name: "Projetos" });
    expect(section).toBeInTheDocument();
  });
});
