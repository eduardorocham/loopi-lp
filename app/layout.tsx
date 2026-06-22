import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SuaMarca — Inteligência Artificial para o seu negócio",
  description:
    "Transformamos os dados que você já tem num assistente inteligente que responde qualquer pergunta do seu time em segundos. Sem precisar de TI.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={inter.className}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
