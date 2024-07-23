import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Wrapper from "@/components/wrapper/Wrapper";
import ReduxProvider from "@/store/ReduxProvider";

const montserrat = Montserrat({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "Skypro Music",
  description: "Музыкальный плеер",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReduxProvider>
        <body className={montserrat.className}>
          <Wrapper>{children}</Wrapper>
        </body>
      </ReduxProvider>
    </html>
  );
}
