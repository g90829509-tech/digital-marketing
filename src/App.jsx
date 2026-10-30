
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Header from "./components/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import ScrollProgress from "./components/layout/ScrollProgress.jsx";
import GlassWorldBackground from "./components/background/GlassWorldBackground.jsx";
import AppRoutes from "./routes/AppRoutes.jsx";

import "./styles/global.css";
import "./styles/glass-world.css";
import "./styles/light-redesign.css";
import "./styles/motion-system.css";

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <GlassWorldBackground />
      <ScrollProgress />
      <Header />
      <div key={pathname} className="route-stage">
        <AppRoutes />
      </div>
      <Footer />
    </>
  );
}
