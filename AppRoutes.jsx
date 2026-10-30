import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home.jsx";
import SearchPage from "../pages/SearchPage.jsx";
import NotFoundPage from "../pages/NotFoundPage.jsx";
import ServiceDetailPage from "../pages/ServiceDetailPage.jsx";
import OurWorkPage from "../pages/OurWorkPage.jsx";
import AboutPage from "../pages/AboutPage.jsx";
import { GrowthPlanPage, AuditPage, ContactPage, TeamPage, InsightsPage } from "../pages/ReferenceExperiencePages.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/work" element={<OurWorkPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/growth-plan" element={<GrowthPlanPage />} />
      <Route path="/free-growth-audit" element={<AuditPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/team" element={<TeamPage />} />
      <Route path="/blog" element={<InsightsPage />} />
      <Route path="/consult" element={<AuditPage />} />
      <Route path="/ai-audit" element={<AuditPage />} />
      <Route path="/login" element={<ContactPage />} />
      <Route path="/services/:slug" element={<ServiceDetailPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
