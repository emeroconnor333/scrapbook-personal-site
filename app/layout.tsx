import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaTiktok } from "react-icons/fa";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});


export const metadata: Metadata = {
  title: "Emer O'Connor",
  description: "Personal site of Emer O'Connor - student, software engineer, designer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} h-full`}>
      <body className="h-full flex flex-col pt-6" style={{backgroundImage:"repeating-linear-gradient(0deg,transparent,transparent 19px,rgba(251,207,232,0.4) 19px,rgba(251,207,232,0.4) 20px),repeating-linear-gradient(90deg,transparent,transparent 19px,rgba(251,207,232,0.4) 19px,rgba(251,207,232,0.4) 20px)",backgroundColor:"#FFFBE9"}}>
        <header className="sticky top-6 z-50 bg-rose-300 px-6 py-1.5 flex items-center justify-between shadow-sm shrink-0">
          <Link href="/" className="font-playfair text-xl font-semibold text-white tracking-wide hover:text-rose-50 transition-colors">
            Emer O&apos;Connor
          </Link>
          <nav className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/emeroconnor333/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white hover:text-rose-50 transition-colors"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="https://github.com/emeroconnor333"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-white hover:text-rose-50 transition-colors"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://www.tiktok.com/@emerocon_"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="text-white hover:text-rose-50 transition-colors"
            >
              <FaTiktok size={18} />
            </a>
          </nav>
        </header>
        <main className="flex-1 flex flex-col">{children}</main>
      </body>
    </html>
  );
}
