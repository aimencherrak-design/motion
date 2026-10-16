import type { NextConfig } from "next";

// Outil local mono-utilisateur : pas de mise en cache des pages,
// chaque page lit la base SQLite à chaque affichage.
const nextConfig: NextConfig = {
  serverExternalPackages: ["better-sqlite3"],
  devIndicators: false,
  poweredByHeader: false,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
