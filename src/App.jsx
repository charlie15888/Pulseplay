import { useState } from "react";
import { Play } from "lucide-react";

const shows = [
  {
    title: "Crimson Signal",
    desc: "A hacker teen starts hearing messages from deleted servers.",
    tag: "Sci-Fi / Thriller",
  },
  {
    title: "Glass Hearts Club",
    desc: "Messy friendships, betrayal, emotional damage in a chaotic friend group.",
    tag: "Drama / Romance",
  },
  {
    title: "Neon Ashes",
    desc: "Survivors navigate a post-collapse world using illegal tech.",
    tag: "Dystopian / Action",
  },
  {
    title: "The Last Offline Night",
    desc: "Every month, the internet disappears for 24 hours.",
    tag: "Mystery / Sci-Fi",
  },
  {
    title: "Echoes in Kutus",
    desc: "A small town where memories keep rewriting themselves.",
    tag: "Horror / Mystery",
  },
];

export default function App() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navbar */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-red-900/30">
        <h1 className="text-2xl font-bold tracking-widest text-red-500">
          PULSEPLAY
        </h1>
        <nav className="flex gap-6 text-sm text-gray-300">
          <span className="hover:text-red-400 cursor-pointer">Home</span>
          <span className="hover:text-red-400 cursor-pointer">Series</span>
          <span className="hover:text-red-400 cursor-pointer">My List</span>
        </nav>
      </header>

      {/* Hero */}
      <section className="px-6 py-16 border-b border-red-900/20">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-red-500">
          Welcome to PulsePlay
        </h2>
        <p className="text-gray-400 max-w-xl">
          No rules. No filters. Just stories that feel too real.
        </p>

        <button className="mt-6 flex items-center gap-2 bg-red-600 hover:bg-red-700 px-5 py-2 rounded transition">
          <Play size={18} /> Play Featured
        </button>
      </section>

      {/* Grid */}
      <main className="p-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {shows.map((s, i) => (
          <div
            key={i}
            onClick={() => setSelected(s)}
            className="border border-red-900/30 p-4 rounded hover:bg-red-950/20 cursor-pointer transition"
          >
            <h3 className="text-xl text-red-400 font-semibold">{s.title}</h3>
            <p className="text-sm text-gray-400 mt-2">{s.desc}</p>
            <span className="text-xs text-gray-600 mt-3 block">
              {s.tag}
            </span>
          </div>
        ))}
      </main>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center p-6"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-black border border-red-800 p-6 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl text-red-500 font-bold">
              {selected.title}
            </h2>
            <p className="text-gray-400 mt-3">{selected.desc}</p>
            <button className="mt-4 bg-red-600 hover:bg-red-700 px-4 py-2 rounded">
              Watch (Demo)
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
