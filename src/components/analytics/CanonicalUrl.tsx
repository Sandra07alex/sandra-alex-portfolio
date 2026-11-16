import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const SITE_URL = "https://sandra-alex-portfolio.vercel.app";

/**
 * Keeps <link rel="canonical"> in sync with the current route, so /projects and
 * /leadership aren't treated as duplicates of the home page. The tag in
 * index.html covers the home page for crawlers that don't run JavaScript.
 */
const CanonicalUrl = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = SITE_URL + (pathname === "/" ? "/" : pathname.replace(/\/+$/, ""));
  }, [pathname]);

  return null;
};

export default CanonicalUrl;
