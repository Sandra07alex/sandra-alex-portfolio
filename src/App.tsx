import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import Index from "./pages/Index.tsx";
import EasterEgg from "./components/EasterEgg.tsx";
import GoatCounterTracker from "./components/analytics/GoatCounterTracker";
import CanonicalUrl from "./components/analytics/CanonicalUrl";
import ScrollToTop from "./components/ScrollToTop";

// Only the home page ships in the initial bundle; the rest load on demand.
const Projects = lazy(() => import("./pages/Projects.tsx"));
const Leadership = lazy(() => import("./pages/Leadership.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

const App = () => (
  // Respect the visitor's "reduce motion" setting for every framer-motion animation.
  <MotionConfig reducedMotion="user">
    <EasterEgg />
    <BrowserRouter>
      <GoatCounterTracker />
      <CanonicalUrl />
      <ScrollToTop />
      <Suspense fallback={<div className="min-h-screen bg-background" />}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/leadership" element={<Leadership />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </MotionConfig>
);

export default App;
