import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Placement Readiness | B2B CareerTech",
  description: "Advanced student readiness tracking and recruiter dashboard.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
