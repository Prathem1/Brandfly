import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Providers } from "./providers";

export const metadata = {
  title: "Brandfly - Designing, Printing & Digital Branding Services",
  description:
    "Brandfly offers premium designing, printing, and branding services including graphic design, flex printing, visiting cards, paper printing, standees, wedding services, software solutions, and digital promotions to make your brand stand out.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className="antialiased">
        <Providers>
          <div className="mb-[3.2cm]">
            <Navbar />
          </div>
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
