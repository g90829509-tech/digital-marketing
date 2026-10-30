import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function NotFoundPage() {
  const location = useLocation();

  const pageName = location.pathname.split("/").filter(Boolean).pop() || "Home";

  const title = pageName
    .replaceAll("-", " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <main className="simple-page">
      <span className="section-label">CRUZEN DIGITAL</span>
      <h1>{title}</h1>
      <p>This page is not available yet.</p>

      <Link className="consult-btn simple-cta" to="/">
        Back to Home <ArrowUpRight size={16} />
      </Link>
    </main>
  );
}
