import { Inter } from "next/font/google";
import "./globals.css";
import {ThemeProvider} from '../components/contextApi'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lab Task",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <ThemeProvider>
         <body className={inter.className} >{children}</body>
      </ThemeProvider>
    </html>
  );
}
// {inter.className} 
