import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Viper Capital | Private Capital & Strategic Finance",
  description:
    "Viper Capital is a private capital advisory concept focused on strategic funding, acquisition support, and real estate capital structuring."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
