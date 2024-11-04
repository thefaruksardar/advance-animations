import Link from "next/link";

export default function Home() {
  return (
    <div className="px-6 py-10 flex gap-4">
      <Link href="/three-sections" className="py-2 px-6 border rounded-xl">
        Three Sections
      </Link>
      <Link href="/parallax-one" className="py-2 px-6 border rounded-xl">
        Parallax One
      </Link>
      <Link
        href="/scroll-cards-parallax"
        className="py-2 px-6 border rounded-xl"
      >
        Scroll Cards Parallax
      </Link>
      <Link href="/reveal-text" className="py-2 px-6 border rounded-xl">
        Reveal Text
      </Link>
    </div>
  );
}
