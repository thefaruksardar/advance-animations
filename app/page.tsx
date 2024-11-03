import Link from "next/link";

export default function Home() {
  return (
    <div className="px-6 py-10 flex gap-4">
      <Link href="/two-sections" className="py-2 px-6 border rounded-xl">
        Two Sections
      </Link>
      <Link href="/parallax-one" className="py-2 px-6 border rounded-xl">
        Parallax One
      </Link>
    </div>
  );
}
