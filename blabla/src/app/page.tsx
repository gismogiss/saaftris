import { useState } from "react";
import WorldMap from "@/components/WorldMap";
import CountryPanel from "@/components/CountryPanel";

export default function Home() {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  const projects = [
    {
      title: "Projet A",
      description: "Une courte description du projet A.",
      link: "https://example.com/projet-a",
    },
    {
      title: "Projet B",
      description: "Une courte description du projet B.",
      link: "https://example.com/projet-b",
    },
    {
      title: "Projet C",
      description: "Une courte description du projet C.",
      link: "https://example.com/projet-c",
    },
  ];

  const handleCountryClick = (country: any) => {
    setSelectedCountry(country.NAME);
  };

  const closePanel = () => setSelectedCountry(null);

  return (
    <main className="p-6 text-center">
      <h1 className="text-4xl font-bold text-blue-900">SAAFTRIS</h1>
      <p className="italic text-blue-700 mt-1">
        “I build quiet tools for a noisy world”
      </p>

      <h2 className="text-2xl font-semibold mt-12 mb-4 text-blue-900">
        INSPIRATIONS DU MONDE
      </h2>
      <WorldMap onCountryClick={handleCountryClick} />
      {selectedCountry && (
        <CountryPanel countryName={selectedCountry} onClose={closePanel} />
      )}

      <h2 className="text-2xl font-semibold mt-16 mb-4 text-blue-900">
        MES PROJETS
      </h2>
      <div className="mx-auto max-w-4xl grid gap-4">
        {projects.map((p) => (
          <div key={p.title} className="border border-navy/20 p-4 rounded-lg shadow-sm text-left bg-white">
            <h3 className="text-xl font-semibold text-navy mb-1">{p.title}</h3>
            <p className="text-sm mb-2 text-navy/80">{p.description}</p>
            <a href={p.link} className="text-orange font-medium" target="_blank" rel="noopener noreferrer">
              Voir le projet
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
