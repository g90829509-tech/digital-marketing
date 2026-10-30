import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { searchableServices } from "../data/navigation.js";

export default function SearchPage() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("search") || "";

  const results = searchableServices.filter((service) =>
    `${service.label} ${service.group}`
      .toLowerCase()
      .includes(query.toLowerCase()),
  );

  return (
    <main className="simple-page">
      <span className="section-label">CRUZEN DIGITAL</span>
      <h1>Search results for “{query}”</h1>

      {results.length > 0 ? (
        <div className="simple-results">
          {results.map((service) => (
            <Link key={service.path} to={service.path}>
              {service.label}
              <ArrowUpRight size={15} />
            </Link>
          ))}
        </div>
      ) : (
        <p>No matching service found. Contact our team for assistance.</p>
      )}

      <Link className="consult-btn simple-cta" to="/consult">
        Talk to our team <ArrowUpRight size={16} />
      </Link>
    </main>
  );
}
