import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Arpit Agrawal",
  description: "Hello , this is Arpit Agrawal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark  overflow-x-hidden overflow-y-scroll  h-screen" >
      <body className={inter.className}>
        <Nav />
       {children}
       </body>
    </html>
  );
}
