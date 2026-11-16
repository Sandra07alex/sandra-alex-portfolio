import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { afterEach, describe, expect, it, vi } from "vitest";
import ContactSection from "@/components/portfolio/ContactSection";
import ScrollToTop from "@/components/ScrollToTop";
import Leadership from "@/pages/Leadership";
import NotFound from "@/pages/NotFound";
import Projects from "@/pages/Projects";

afterEach(() => vi.restoreAllMocks());

const Home = () => <h1>home page</h1>;

describe("navigation", () => {
  it.each([
    ["scrapbook", "/leadership", <Leadership />, /back to portfolio/i],
    ["404 page", "/nope", <NotFound />, /return to home/i],
  ])("%s goes home without a full page reload", (_, start, page, linkName) => {
    vi.spyOn(console, "error").mockImplementation(() => {}); // NotFound logs the bad path
    render(
      <MemoryRouter initialEntries={[start]}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={page} />
        </Routes>
      </MemoryRouter>,
    );
    fireEvent.click(screen.getByRole("link", { name: linkName }));
    expect(screen.getByRole("heading", { name: "home page" })).toBeInTheDocument();
  });

  it("scrolls to the top when the page changes", () => {
    const scrollTo = vi.spyOn(window, "scrollTo");
    render(
      <MemoryRouter initialEntries={["/leadership"]}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Leadership />} />
        </Routes>
      </MemoryRouter>,
    );
    scrollTo.mockClear();
    fireEvent.click(screen.getByRole("link", { name: /back to portfolio/i }));
    expect(scrollTo).toHaveBeenCalledWith(0, 0);
  });

  it("sets and restores the Projects page title", () => {
    document.title = "Home title";
    const { unmount } = render(
      <MemoryRouter>
        <Projects />
      </MemoryRouter>,
    );
    expect(document.title).toBe("Projects | Sandra Alex");
    unmount();
    expect(document.title).toBe("Home title");
  });
});

describe("contact cards", () => {
  it("never nest a button inside a link", () => {
    const { container } = render(<ContactSection />);
    expect(container.querySelectorAll("a button, a a")).toHaveLength(0);
    expect(screen.getAllByRole("link")).toHaveLength(4);
    expect(screen.getAllByRole("button", { name: /^copy/i })).toHaveLength(2);
  });
});
