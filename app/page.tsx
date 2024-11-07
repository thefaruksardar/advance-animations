import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

const projectLinks = [
  { text: "Three Sections", url: "/three-sections" },
  { text: "Parallax One", url: "/parallax-one" },
  { text: "Scroll Cards Parallax", url: "/scroll-cards-parallax" },
  { text: "Reveal Text", url: "/reveal-text" },
  { text: "Text Animation", url: "/text-animation" },
];

export default function Home() {
  return (
    <main className="bg-slate-700 h-screen">
      <div className=" px-6 py-10 flex gap-4 flex-wrap">
        {projectLinks.map((el) => (
          <Link
            key={el.url}
            href={el.url}
            className="relative py-2 px-8 border-2 rounded-xl text-neutral-50 hover flex items-center justify-center gap-2 group"
          >
            <span className="inline-block transition-all group-hover:-translate-x-2">
              {el.text}
            </span>
            {/* group-hover:inline-block */}
            <span className="text-xl transition-all absolute right-4 opacity-0 group-hover:opacity-100 group-active:rotate-45">
              <MdArrowOutward />
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
