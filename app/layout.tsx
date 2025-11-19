import type { Metadata } from "next";
import { Poppins, Quicksand } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Kenji Mobutu - Full Stack Developer",
  description: "Portfolio de Kenji Mobutu - Développeur Full Stack passionné",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${poppins.variable} ${quicksand.variable} antialiased font-sans`}
        style={{ fontFamily: 'var(--font-quicksand), var(--font-poppins), sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}
