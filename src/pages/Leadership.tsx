import { useEffect } from "react";

import { Scrapbook } from "@/components/leadership/Scrapbook";

const SCRAPBOOK_FONTS_HREF =
  "https://fonts.googleapis.com/css2?family=Kalam:wght@400;700&family=Patrick+Hand&family=Shadows+Into+Light&family=Special+Elite&display=swap";

/** Handwriting fonts used only by the scrapbook; added once, kept for later visits. */
function loadScrapbookFonts() {
  if (document.querySelector(`link[href="${SCRAPBOOK_FONTS_HREF}"]`)) return;
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = SCRAPBOOK_FONTS_HREF;
  document.head.appendChild(link);
}

const Leadership = () => {
  useEffect(() => {
    loadScrapbookFonts();
    const previousTitle = document.title;
    document.title = "Beyond Code — Building Communities, Leading People";
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return <Scrapbook />;
};

export default Leadership;
