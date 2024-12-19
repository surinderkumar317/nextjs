import Image from "next/image";
import localFont from "next/font/local";
import Header from "./components/header";
import Footer from "./components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable}`}>
      <Header />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          Middle Section
      </main>
      <Footer />
    </div>
  );
}
