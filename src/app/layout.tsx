import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daksh | 3D Spatial Portfolio & Cybersecurity Engineer",
  description:
    "Interactive 3D Spatial Portfolio of Daksh - Full-Stack Developer, Cybersecurity Enthusiast (Top 15 Nationally in CTF), and Hackathon Veteran from Newton School of Technology (Rishihood University).",
  keywords: [
    "Daksh",
    "Creative Developer",
    "Cybersecurity",
    "Top 15 CTF",
    "Full-Stack Engineer",
    "Three.js",
    "React Three Fiber",
    "Odyssey 20",
    "Community Hero",
    "Next.js Portfolio",
  ],
  authors: [{ name: "Daksh", url: "https://github.com/masterdaksh23" }],
  openGraph: {
    title: "Daksh | 3D Spatial Portfolio & Cybersecurity Engineer",
    description:
      "Interactive 3D Spatial Portfolio. Top 15 National CTF Finalist, Agri-Tech & Civic-Tech Builder.",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-gray-100 font-body antialiased selection:bg-neon-cyan selection:text-black min-h-screen overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
