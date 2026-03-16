import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abdul Basit Khan — DevOps & Cloud Engineer",
  description:
    "Certified DevOps & Cloud Engineer with 3+ years of experience on AWS, GCP, and Azure. Specialising in Kubernetes, Terraform, CI/CD, GitOps, and observability.",
  openGraph: {
    title: "Abdul Basit Khan — DevOps & Cloud Engineer",
    description:
      "AWS · Kubernetes · Terraform · GitOps · Observability. Open to freelance & contract engagements.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
