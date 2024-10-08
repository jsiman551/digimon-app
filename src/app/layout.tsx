import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import StoreProvider from "./storeProvider";
import "../styles/globals.css";

//load roboto font
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

//load metadatas in header
export const metadata: Metadata = {
  title: "Digimon Wiki App",
  description: "This is an application which porpuse is help you find your favorite's digimon info",
  icons: {
    icon: "favicon.ico",
    apple: "favicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} bg-gray-200 dark:bg-base-100 min-h-screen`}
      >
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
