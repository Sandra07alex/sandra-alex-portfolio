import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const GoatCounterTracker = () => {
  const location = useLocation();

  useEffect(() => {
    const goatcounter = window.goatcounter;

    if (!goatcounter) return;

    // Use the full URL so GoatCounter can differentiate between routes.
    const url = `${window.location.origin}${location.pathname}${location.search}${location.hash}`;
    goatcounter.count(url);
  }, [location]);

  return null;
};

export default GoatCounterTracker;

