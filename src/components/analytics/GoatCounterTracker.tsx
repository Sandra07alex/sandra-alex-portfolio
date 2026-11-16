import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

/**
 * Counts client-side route changes. The GoatCounter script in index.html
 * already counts the first page load itself, so the initial render is skipped
 * here to avoid double-counting it.
 */
const GoatCounterTracker = () => {
  const location = useLocation();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    window.goatcounter?.count({ path: location.pathname + location.search });
  }, [location.pathname, location.search]);

  return null;
};

export default GoatCounterTracker;
