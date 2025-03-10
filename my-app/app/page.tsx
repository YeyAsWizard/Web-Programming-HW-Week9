import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <main className="grid grid-cols-2 h-[80vh] place-content-center">
        <Link href="/next_exam" className="text-4xl hover:underline bg-gray-200 text-center">Nextjs Mid Exam</Link>
        <Link href="/animation" className="text-4xl hover:underline bg-gray-200 text-center">Animation</Link>
      </main>
      <Footer />
    </>
  );
}
