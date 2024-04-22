import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { fonts } from "./fonts";

export const metadata: Metadata = {
  title: "Bechsud",
  description: "Bechsud prueba",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={fonts.inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
