import { Inter } from "next/font/google";
import Footer from "./components/footer";
import "./globals.css";

const inter = Inter({
  weight: ["300", "400", "700", "900"],
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "[your site title]",
  description: "[yout site description]",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="max-w-6xl mx-auto px-4">
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
