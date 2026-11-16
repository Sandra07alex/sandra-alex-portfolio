import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import App from "@/App";
import Index from "@/pages/Index";
import Projects from "@/pages/Projects";
import Leadership from "@/pages/Leadership";

const renderAt = (ui: React.ReactElement) => render(<MemoryRouter>{ui}</MemoryRouter>);

describe("pages", () => {
  it("home page renders the hero and a working email link", () => {
    renderAt(<Index />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(/I BUILD THINGS/);
    const email = screen.getByRole("link", { name: /email me/i });
    expect(email).toHaveAttribute("href", "mailto:sandraalexofficial@gmail.com");
  });

  it("projects page lists every project and the count matches", () => {
    renderAt(<Projects />);
    const titles = screen.getAllByRole("heading", { level: 2 });
    expect(titles.length).toBe(11);
    expect(screen.getByText("Projects").previousSibling).toHaveTextContent(String(titles.length));
  });

  it("leadership page renders", () => {
    renderAt(<Leadership />);
    expect(screen.getByRole("link", { name: /back to portfolio/i })).toBeInTheDocument();
  });

  it("app mounts with its own router", () => {
    render(<App />);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });
});
