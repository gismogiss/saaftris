"use client";

import {
  countryInspirations,
  defaultInspiration,
} from "@/data/countryInspirations";
interface CountryPanelProps {
  countryName: string;
  onClose: () => void;
}

export default function CountryPanel({ countryName, onClose }: CountryPanelProps) {
  const inspirationText =
    countryInspirations[countryName] ?? defaultInspiration;
  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50" onClick={onClose}>
      <div
        className="bg-white text-navy w-80 max-w-full p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="mb-4 text-right w-full text-sm text-orange font-semibold"
          onClick={onClose}
        >
          Fermer
        </button>
        <h3 className="text-xl font-bold mb-2">{countryName}</h3>
        <p className="text-sm">{inspirationText}</p>
      </div>
    </div>
  );
}
