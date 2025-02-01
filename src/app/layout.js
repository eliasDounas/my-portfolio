import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Elias Dounas",
    template: "%s | Elias Dounas Portfolio",
  },
  description:
    "Software engineer portfolio of Elias Dounas, showcasing software development projects and technical expertise",
  keywords: [
    "Elias Dounas",
    "Web Developer",
    "Full Stack Developer",
    "Portfolio",
    "JavaScript",
    "TypoScript",
    "Frontend Developer",
    "Backtend Developer",
    "DevOps",
    "DevSecOps",
    "Kubernetes",
    "Docker",
    "Java",
    "SpringBoot",
    "React",
    "Next.js",
  ],
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} 
          absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]`}
      >
        {children}
      </body>
    </html>
  );
}
