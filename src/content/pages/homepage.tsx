import Scrambles from "@/components/ui/scrambles";
import Footer from "../footer";
import Stopwatch from "../stopwatch/stopwatch";

function HomePage() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Scrambles />

      <main className="flex flex-col  row-start-2 items-center sm:items-start">
        <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
          src/app/page.tsx
        </code>
        <Stopwatch />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
