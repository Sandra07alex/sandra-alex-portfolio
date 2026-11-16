import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { afterEach, describe, expect, it, vi } from "vitest";
import Leadership from "@/pages/Leadership";

afterEach(() => vi.restoreAllMocks());

describe("scrapbook parallax", () => {
  it("shares one scroll listener across all layers and removes it on unmount", () => {
    const add = vi.spyOn(window, "addEventListener");
    const remove = vi.spyOn(window, "removeEventListener");
    const { unmount } = render(
      <MemoryRouter>
        <Leadership />
      </MemoryRouter>,
    );
    expect(add.mock.calls.filter(([type]) => type === "scroll")).toHaveLength(1);
    unmount();
    expect(remove.mock.calls.filter(([type]) => type === "scroll")).toHaveLength(1);
  });

  it("stops its animation loop once layers settle", () => {
    const queue: FrameRequestCallback[] = [];
    vi.spyOn(window, "requestAnimationFrame").mockImplementation((cb) => {
      queue.push(cb);
      return queue.length;
    });
    const { unmount } = render(
      <MemoryRouter>
        <Leadership />
      </MemoryRouter>,
    );
    window.dispatchEvent(new Event("scroll"));
    for (let i = 0; i < 500 && queue.length; i++) queue.shift()!(performance.now());
    expect(queue).toHaveLength(0);
    unmount();
  });

  it("loads the scrapbook fonts only once", () => {
    for (let i = 0; i < 2; i++) {
      const { unmount } = render(
        <MemoryRouter>
          <Leadership />
        </MemoryRouter>,
      );
      unmount();
    }
    expect(document.querySelectorAll('link[href*="Special+Elite"]')).toHaveLength(1);
  });
});
