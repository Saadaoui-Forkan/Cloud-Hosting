import { Metadata } from "next";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './globals.css'
import { Tajawal  } from 'next/font/google';
import Header from "@/components/header";
import Footer from "@/components/footer";

const ubuntu = Tajawal ({
  subsets: ['arabic'],
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
        <ToastContainer theme='colored'/>
        <main>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
