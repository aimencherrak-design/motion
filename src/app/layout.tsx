import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/space-grotesk";
import "./globals.css";
import { BarreLaterale } from "@/components/layout/BarreLaterale";
import { BarreOngletsMobile, EnTeteMobile } from "@/components/layout/NavMobile";

// Chaque page lit la base locale à chaque affichage : pas de pages figées.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: { default: "Apporteur", template: "%s · Apporteur" },
  description: "Outil privé d'apporteur d'affaires automobile",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="min-h-full">
        <div className="flex min-h-dvh">
          <BarreLaterale />
          <div className="flex min-w-0 flex-1 flex-col">
            <EnTeteMobile />
            <main className="mx-auto w-full max-w-6xl flex-1 px-4 pt-6 pb-28 sm:px-6 lg:px-10 lg:pt-10 lg:pb-12">
              {children}
            </main>
          </div>
        </div>
        <BarreOngletsMobile />
      </body>
    </html>
  );
}
