import { MessageCircle } from "lucide-react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Academy } from "./components/Academy";
import { Philosophy } from "./components/Philosophy";
import { Program } from "./components/Program";
import { Process } from "./components/Process";
import { ApplicationForm } from "./components/ApplicationForm";
import { Faq } from "./components/Faq";
import { FinalCta } from "./components/FinalCta";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div
      dir="rtl"
      lang="ur"
      className="min-h-screen bg-cream font-urdu text-ink antialiased"
    >
      <a
        href="#main"
        className="sr-only z-[70] rounded-full bg-forest px-5 py-3 text-paper focus:not-sr-only focus:fixed focus:right-4 focus:top-4"
      >
        مرکزی مواد پر جائیں
      </a>

      <Header />

      <main id="main">
        <Hero />
        <Academy />
        <Philosophy />
        <Program />
        <Process />
        <ApplicationForm />
        <Faq />
        <FinalCta />
      </main>

      <Footer />

      <a
        href="https://wa.me/923001234567"
        target="_blank"
        rel="noreferrer"
        aria-label="واٹس ایپ پر حمید ڈاٹ سے رابطہ کریں"
        className="fixed bottom-5 left-4 z-40 grid h-12 w-12 place-items-center rounded-full bg-forest text-paper shadow-[0_16px_35px_-14px_rgba(23,63,51,0.8)] transition hover:-translate-y-0.5 hover:bg-clay sm:left-6 sm:h-13 sm:w-13"
      >
        <MessageCircle size={21} aria-hidden="true" />
        <span className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full border-2 border-cream bg-clay" />
      </a>
    </div>
  );
}
