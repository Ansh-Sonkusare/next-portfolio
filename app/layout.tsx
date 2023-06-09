import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TeakMirror113",
  description: "Ansh Sonkusare AKA TeakMirror113",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
    <html lang="en">
      <link rel="icon" href="/icon.png" type="image/png" sizes="32x32" />
      <body className="bg-primary text-white md">
       <div className="z-40 w-full  bg-primary shadow-xl"> <Navbar/></div>
        {children}
      </body>
    </html>
  );
}
