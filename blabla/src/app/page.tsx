import WorldMap from "@/components/WorldMap";

export default function Home() {
  const handleCountryClick = (country: any) => {
    alert(`Inspiration pour ${country.NAME}`);
  };

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

      <h2 className="text-2xl font-semibold mt-16 mb-4 text-blue-900">
        MES PROJETS
      </h2>
      {/* On ajoutera ici le tableau stylisé plus tard */}
    </main>
  );
}
