import { Metadata } from "next";
import { ToastContainer } from 'react-toastify';
import './globals.css'
import { Ubuntu } from 'next/font/google';
import Header from "@/components/header";
import Footer from "@/components/footer";

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
});

export const metadata: Metadata = {
  title: "Cloud Hosting",
  description: "Cloud Hosting Project Using Nextjs | Typescript | PostgreSql",
  authors: [
    {
      name: "Saadaoui Mahmoud",
    },
  ],
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <Header/>
        <ToastContainer />
        <main>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
