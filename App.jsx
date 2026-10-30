
import { useEffect } from "react";

import Header from "./components/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import GlassWorldBackground from "./components/background/GlassWorldBackground.jsx";
import AppRoutes from "./routes/AppRoutes.jsx";

import "./styles/global.css";
import "./styles/glass-world.css";
import "./styles/light-redesign.css";

export default function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <GlassWorldBackground />
      <Header />
      <AppRoutes />
      <Footer />
    </>
  );
}
