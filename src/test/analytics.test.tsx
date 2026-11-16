import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, Link, Route, Routes } from "react-router-dom";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import ContactSection from "@/components/portfolio/ContactSection";
import GoatCounterTracker from "@/components/analytics/GoatCounterTracker";
import CanonicalUrl from "@/components/analytics/CanonicalUrl";

const count = vi.fn();

beforeEach(() => {
  count.mockClear();
  window.goatcounter = { count };
});
afterEach(() => {
  delete window.goatcounter;
});

describe("analytics", () => {
  it("records an event when the email card is clicked", () => {
    render(<ContactSection />);
    const link = screen.getByRole("link", { name: /email me/i });
    link.addEventListener("click", (e) => e.preventDefault()); // jsdom can't open mailto:
    fireEvent.click(link);
    expect(count).toHaveBeenCalledWith({ path: "contact-email", title: "Email Me", event: true });
  });

  it("records an event when the email address is copied", () => {
    Object.assign(navigator, { clipboard: { writeText: vi.fn().mockResolvedValue(undefined) } });
    render(<ContactSection />);
    fireEvent.click(screen.getByRole("button", { name: /copy email me/i }));
    expect(count).toHaveBeenCalledWith({ path: "contact-email-copy", title: "Copied: Email Me", event: true });
  });

  it("counts route changes but not the first load (the script counts that)", () => {
    render(
      <MemoryRouter>
        <GoatCounterTracker />
        <Link to="/projects">go</Link>
      </MemoryRouter>,
    );
    expect(count).not.toHaveBeenCalled();
    fireEvent.click(screen.getByText("go"));
    expect(count).toHaveBeenCalledWith({ path: "/projects" });
  });

  it("sets a per-route canonical URL", () => {
    render(
      <MemoryRouter initialEntries={["/projects/"]}>
        <CanonicalUrl />
        <Routes>
          <Route path="*" element={null} />
        </Routes>
      </MemoryRouter>,
    );
    expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute(
      "href",
      "https://sandra-alex-portfolio.vercel.app/projects",
    );
  });
});
