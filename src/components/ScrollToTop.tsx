import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

/** Start each page at the top, as a full page load would. In-page #anchors are left alone. */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
