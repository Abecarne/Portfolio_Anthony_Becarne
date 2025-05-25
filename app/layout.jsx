import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Components
import Header from "../components/Header";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weights: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrains-mono",
});

export const metadata = {
  title: "Anthony Becarne | Portfolio",
  keywords: [
    "Anthony Becarne",
    "Portfolio",
    "Web Developer",
    "UI/UX Designer",
    "Software Engineer",
    "Video Game Developer",
  ],
  description: "Portfolio of Anthony Becarne, showcasing skills in web development, UI/UX design, software engineering, and video game development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrains.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
