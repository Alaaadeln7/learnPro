"use client";
import { Geist, Roboto } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" data-theme="light">
      <Head>
        <title>LearnPro</title>
        <meta
          name="description"
          content="Generate your own course and study materials"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className={`${geistSans.variable} ${roboto.variable} antialiased`}>
        {/* <Provider store={store}> */}
        <div id="root">{children}</div>
        {/* </Provider> */}
        <Toaster position="top-center" reverseOrder={false} />
      </body>
    </html>
  );
}
