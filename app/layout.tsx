import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sumit Jhaldiyal",
  description: "This website belongs to a full stack software enginner whose name is sumit kumar jhaldiyal and he is from uttarakhnd and have completed his study from chandigarh university and his shadown name is racxamtitone",
  twitter:{
    card:"summary_large_image"
  }
};






export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="google-site-verification" content="h_VfeTNOXak8ubvEgAim6mVMVeZoWXX7oFq7INkBEhI" />

      </head>
      <body className={inter.className}>

        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>

        </body>
    </html>
  );
}
