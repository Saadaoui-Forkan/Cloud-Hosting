import { Metadata } from "next";
import { Noto_Kufi_Arabic } from "next/font/google";

const bodyFontFamily = Noto_Kufi_Arabic({ subsets: ['arabic'] })

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
      <body className={bodyFontFamily.className}>
        {children}
      </body>
    </html>
  );
}
