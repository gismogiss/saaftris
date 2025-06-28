"use client";

import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

export default function WorldMap({
  onCountryClick,
}: {
  onCountryClick: (country: any) => void;
}) {
  return (
    <div className="rounded-lg border border-blue-900 shadow-md p-4">
      <ComposableMap
        projectionConfig={{ scale: 130 }}
        width={800}
        height={400}
        className="mx-auto"
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onClick={() => onCountryClick(geo.properties)}
                style={{
                  default: { fill: "#1e3a8a", outline: "none" },
                  hover: { fill: "#f97316", outline: "none" },
                  pressed: { fill: "#f97316", outline: "none" },
                }}
                className="transition duration-200 cursor-pointer"
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
}
