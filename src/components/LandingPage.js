import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const TOOLS = [

  {
    id: "json-formatter",
    name: "JSON Formatter & Validator",
    description: "Paste messy JSON, get clean output. Auto-detect syntax errors, collapse nested objects, and switch between tree view and raw formatted code.",
    icon: "{ }",
    category: "Code",
    status: "coming-soon",
  },
  {
    id: "html-to-jsx",
    name: "HTML to JSX Converter",
    description: "Drop in any HTML snippet and get production-ready JSX. Converts class to className, fixes self-closing tags, and handles inline style objects.",
    icon: "⟨/⟩",
    category: "Code",
    status: "coming-soon",
  },
  {
    id: "qr-generator",
    name: "QR Code Generator",
    description: "Turn any URL, text, or WiFi credentials into a scannable QR code. Customize size and colors, then download as high-resolution PNG or SVG.",
    icon: "⊞",
    category: "Utility",
    status: "coming-soon",
  },
  {
    id: "base64",
    name: "Base64 Encoder / Decoder",
    description: "Encode strings, images, or files to Base64 instantly. Decode Base64 back to readable text or binary — perfect for embedding assets and debugging APIs.",
    icon: "⟁",
    category: "Code",
    status: "coming-soon",
  },

  {
    id: "regex-tester",
    name: "Regex Tester & Debugger",
    description: "Write regex patterns and see matches highlighted live. Inspect capture groups, get plain-English explanations, and test against multiple strings at once.",
    icon: ".*",
    category: "Code",
    status: "coming-soon",
  },
  {
    id: "markdown-preview",
    name: "Markdown Preview Editor",
    description: "Write GitHub-flavored Markdown on the left, see rendered HTML on the right. Supports tables, code blocks with syntax highlighting, and one-click HTML export.",
    icon: "M↓",
    category: "Writing",
    status: "coming-soon",
  },
  {
    id: "css-minifier",
    name: "CSS Minifier & Beautifier",
    description: "Compress bloated CSS for production or expand minified stylesheets for debugging. See file size savings in real time — typically 20-30% smaller output.",
    icon: "{ }",
    category: "Code",
    status: "coming-soon",
  },
  {
    id: "url-encoder",
    name: "URL Encoder / Decoder",
    description: "Safely encode special characters for query strings and API endpoints. Decode percent-encoded URLs back to human-readable text for easier debugging.",
    icon: "%",
    category: "Utility",
    status: "coming-soon",
  },

];

const CATEGORIES = ["All", "Code", "Utility",  "Writing"];


const FEATURES = [
  { title: "A Distraction-Free Workspace", desc: "No advertisements. No cookie banners. No 'create an account' prompts. Open any tool and start working — the way every dev tool should be.", icon: "⊘" },
  { title: "Find the Right Tool in Seconds", desc: "One clean dashboard, clear categories, instant search. Stop cycling through ten browser tabs to find a JSON formatter that actually works.", icon: "⊡" },
  { title: "Your Data Stays on Your Machine", desc: "Every tool runs locally in your browser. Nothing is uploaded, stored, or logged. Safe enough for production data, API keys, and client credentials.", icon: "⊙" },
];

function Badge({ status }) {
  if (status === "live") {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-bold tracking-wider uppercase bg-emerald-950 text-emerald-400 border border-emerald-800 rounded-md">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        Live
      </span>
    );
  }
  return (
    <span className="inline-flex items-center px-2.5 py-1 text-xs font-bold tracking-wider uppercase bg-zinc-900 text-zinc-500 border border-zinc-800 rounded-md">
      Coming Soon
    </span>
  );
}

function ToolCard({ tool }) {
  const isLive = tool.status === "live";
  return (
    <article className={`group relative flex flex-col rounded-2xl p-5 sm:p-6 border transition-all duration-300 hover:-translate-y-1 min-h-0 sm:min-h-52 ${isLive ? "bg-zinc-950 border-emerald-900/40 hover:border-emerald-800/60" : "bg-zinc-950 border-zinc-800/50 hover:border-zinc-700/60"}`}>
      <div className="flex items-start justify-between mb-4 sm:mb-5">
        <div className={`flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-xl text-sm font-extrabold border transition-colors ${isLive ? "bg-emerald-950 border-emerald-800/50 text-emerald-400" : "bg-zinc-900 border-zinc-800 text-zinc-500"}`}>
          {tool.icon}
        </div>
        <Badge status={tool.status} />
      </div>
      <span className="text-xs font-bold tracking-widest uppercase text-zinc-600 mb-1.5">{tool.category}</span>
      <h3 className={`text-base font-bold mb-2 leading-tight ${isLive ? "text-zinc-100" : "text-zinc-400"}`}>
        {tool.name}
      </h3>
      <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed flex-1">{tool.description}</p>
      <div className="mt-3 sm:mt-4">
        {isLive ? (
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 transition-transform duration-200 group-hover:translate-x-1">
            Open Tool <span className="opacity-60">→</span>
          </span>
        ) :null}
      </div>
    </article>
  );
}

export default function DevTools4MeLanding() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const filtered = activeCategory === "All" ? TOOLS : TOOLS.filter(t => t.category === activeCategory);

  const handleSubscribe = () => {
    if (email.includes("@")) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen w-full bg-zinc-950 text-zinc-100 overflow-x-hidden">
      {/* ====== NAV ====== */}
      <nav className="sticky top-0 z-50 w-full border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur-xl">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <Link href='/' className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-emerald-950 border border-emerald-800/50 flex items-center justify-center text-emerald-400 text-xs font-extrabold font-mono">
            <Image src='/favicon.png' alt="devtools4me Logo" width={28} height={28} priority />
            </div>
            <span className="text-sm font-bold tracking-tight text-zinc-100">devtools4me</span>
          </Link>
          <div className="flex items-center gap-3 sm:gap-5">
            <a href="#tools" className="hidden sm:block text-xs font-medium font-mono text-zinc-500 hover:text-zinc-300 transition-colors">Tools</a>
            <a href="#why" className="hidden sm:block text-xs font-medium font-mono text-zinc-500 hover:text-zinc-300 transition-colors">About</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-medium font-mono text-zinc-500 hover:text-zinc-300 transition-colors">
              <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </div>
        </div>
      </nav>

      {/* ====== HERO ====== */}
      <header className="grid-dot relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-14 sm:pt-20 lg:pt-24 pb-14 sm:pb-20 text-center">

        

       
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight sm:leading-none mb-4 sm:mb-5 max-w-3xl mx-auto">
          The Developer Toolkit You&apos;ll Actually Bookmark
          </h1>

          {/* SEO description */}
          <h2 className="text-sm sm:text-base lg:text-lg text-zinc-500 leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10 px-2">
          Fast, clean, and private. No ads. No sign-ups. Every tool runs in your browser — your data never leaves your machine.
          </h2>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10 sm:mb-12 px-4 sm:px-0">
            <a href="#tools" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-950 border border-emerald-800/60 text-emerald-400 text-sm font-semibold font-mono hover:bg-emerald-900/40 transition-colors">
              Explore All Tools <span className="opacity-50">↓</span>
            </a>
          </div>

         
        </div>
      </header>

      {/* ====== TOOLS ====== */}
      <section id="tools" className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 sm:pt-16 pb-14 sm:pb-20">

        <div className="mb-6 sm:mb-8">
          <span className="block text-xs font-bold tracking-widest uppercase text-emerald-400 font-mono mb-2">Tools</span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-zinc-100 mb-2">
            Ship Faster with the Right Tool at Hand
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 max-w-lg">
            A growing collection of free browser-based developer utilities. Format code, generate assets, convert data, and check accessibility — without leaving your browser or compromising your data.
          </p>
        </div>

        {/* Category filter — horizontal scroll on mobile */}
        <div className="flex gap-1.5 sm:gap-2 mb-6 sm:mb-8 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`shrink-0 cursor-pointer px-3 py-1.5 rounded-lg text-xs font-semibold font-mono border transition-all ${
                activeCategory === cat
                  ? "bg-emerald-950 text-emerald-400 border-emerald-800/60"
                  : "bg-transparent text-zinc-500 border-transparent hover:text-zinc-400 hover:bg-zinc-900"
              }`}
            >
              {cat}
              {cat !== "All" && (
                <span className="ml-1 opacity-50">
                  {TOOLS.filter(t => t.category === cat).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Tool cards — responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {filtered.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </section>

      {/* ====== WHY SECTION ====== */}
      <section id="why" className="border-t border-b border-zinc-800/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

          {/* Left */}
          <div>
            <span className="block text-xs font-bold tracking-widest uppercase text-emerald-400 font-mono mb-3">Why devtools4me</span>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-zinc-100 leading-snug mb-4">
              Developer Tools That Respect Your Privacy and Your Time
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed mb-6 max-w-md">
              Most free online tools bury you in pop-ups, cookie banners, and forced sign-ups before you can paste a single line of code. We built devtools4me as the antidote — a clean, fast, ad-free workspace where every keystroke stays on your machine and every tool loads in milliseconds.
            </p>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-2">
              {["No Tracking", "No Cookies", "No Ads", "GDPR Friendly"].map((t, i) => (
                <span key={i} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-500 text-xs font-semibold font-mono">
                  <span className="text-emerald-400 text-xs">✓</span>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-5 sm:gap-6">
            {FEATURES.map((f, i) => (
              <div key={i} className="flex gap-3 sm:gap-4">
                <div className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 text-sm sm:text-base font-bold font-mono">
                  {f.icon}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-zinc-200 mb-1">{f.title}</h3>
                  <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== FAQ SECTION ====== */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <div className="text-center mb-10 sm:mb-12">
          <span className="block text-xs font-bold tracking-widest uppercase text-emerald-400 font-mono mb-2">FAQ</span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-zinc-100 mb-2">
            Questions You Might Have
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 max-w-2xl mx-auto">
            Everything you need to know about devtools4me and how we keep your data safe.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
          {/* FAQ Item 1 */}
          <details className="group rounded-2xl bg-zinc-950 border border-zinc-800/50 hover:border-zinc-700/60 transition-all overflow-hidden">
            <summary className="cursor-pointer list-none px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between">
              <h3 className="text-sm sm:text-base font-bold text-zinc-100 pr-4">
                Is devtools4me free to use?
              </h3>
              <span className="shrink-0 w-6 h-6 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 text-xs font-bold transition-transform group-open:rotate-180">
                ↓
              </span>
            </summary>
            <div className="px-5 sm:px-6 pb-4 sm:pb-5 pt-0">
              <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">
                Yes, all tools on devtools4me are completely free to use. No sign-ups, no subscriptions, no hidden fees.
              </p>
            </div>
          </details>

          {/* FAQ Item 2 */}
          <details className="group rounded-2xl bg-zinc-950 border border-zinc-800/50 hover:border-zinc-700/60 transition-all overflow-hidden">
            <summary className="cursor-pointer list-none px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between">
              <h3 className="text-sm sm:text-base font-bold text-zinc-100 pr-4">
                Is my data safe?
              </h3>
              <span className="shrink-0 w-6 h-6 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 text-xs font-bold transition-transform group-open:rotate-180">
                ↓
              </span>
            </summary>
            <div className="px-5 sm:px-6 pb-4 sm:pb-5 pt-0">
              <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">
                Absolutely. Every tool runs locally in your browser. Nothing is uploaded, stored, or logged. Your data never leaves your machine.
              </p>
            </div>
          </details>

          {/* FAQ Item 3 */}
          <details className="group rounded-2xl bg-zinc-950 border border-zinc-800/50 hover:border-zinc-700/60 transition-all overflow-hidden">
            <summary className="cursor-pointer list-none px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between">
              <h3 className="text-sm sm:text-base font-bold text-zinc-100 pr-4">
                Do I need to create an account?
              </h3>
              <span className="shrink-0 w-6 h-6 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 text-xs font-bold transition-transform group-open:rotate-180">
                ↓
              </span>
            </summary>
            <div className="px-5 sm:px-6 pb-4 sm:pb-5 pt-0">
              <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">
                No account needed. Just open any tool and start working immediately.
              </p>
            </div>
          </details>

          {/* FAQ Item 4 */}
          <details className="group rounded-2xl bg-zinc-950 border border-zinc-800/50 hover:border-zinc-700/60 transition-all overflow-hidden">
            <summary className="cursor-pointer list-none px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between">
              <h3 className="text-sm sm:text-base font-bold text-zinc-100 pr-4">
                Are there any ads?
              </h3>
              <span className="shrink-0 w-6 h-6 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 text-xs font-bold transition-transform group-open:rotate-180">
                ↓
              </span>
            </summary>
            <div className="px-5 sm:px-6 pb-4 sm:pb-5 pt-0">
              <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">
                No advertisements. No cookie banners. No tracking. Just clean, distraction-free tools.
              </p>
            </div>
          </details>
        </div>
      </section>

      {/* ====== NEWSLETTER ====== */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-14 sm:py-20 text-center">
        <span className="block text-xs font-bold tracking-widest uppercase text-emerald-400 font-mono mb-2">Stay Updated</span>
        <h2 className="text-lg sm:text-2xl font-bold tracking-tight text-zinc-100 mb-2">
          New Tools Drop Every Two Weeks
        </h2>
        <p className="text-xs sm:text-sm text-zinc-500 mb-6 sm:mb-8 max-w-md mx-auto">
        The next tool on our list might be the one you&apos;ve been Googling for. Get a short email when it ships.
        </p>

        {subscribed ? (
          <div className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-950 border border-emerald-800/60 text-emerald-400 text-sm font-semibold font-mono">
            <span>✓</span> Thanks for trusting us! You&apos;ll be the first to know when something new drops.
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2 max-w-md mx-auto px-2 sm:px-0">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              onKeyDown={e => e.key === "Enter" && handleSubscribe()}
              placeholder="you@company.com"
              className="w-full sm:flex-1 px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-100 text-sm font-mono outline-none focus:border-zinc-700 transition-colors"
            />
            <button
              onClick={handleSubscribe}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-emerald-950 border border-emerald-800/60 text-emerald-400 text-sm font-semibold font-mono hover:bg-emerald-900/40 transition-colors whitespace-nowrap"
            >
              Notify Me →
            </button>
          </div>
        )}
      </section>

     
    
      {/* ====== FOOTER ====== */}
      <footer className="border-t border-zinc-800/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-5 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
          <Link href='/' className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-emerald-950 border border-emerald-800/50 flex items-center justify-center text-emerald-400 text-xs font-extrabold font-mono">
            <Image src='/favicon.png' alt="devtools4me Logo" width={28} height={28} />
            </div>
            <span className="text-sm font-bold tracking-tight text-zinc-600">devtools4me</span>
          </Link>
            <span className="text-xs font-mono text-zinc-600">
               © {new Date().getFullYear()}
            </span>
          </div>
          <div className="flex items-center gap-4 sm:gap-5">
          
              <a  href="https://peerlist.io/saurowankhade" className="text-xs font-mono text-zinc-600 hover:text-zinc-400 transition-colors">
               Peerlist
              </a>
              <a  href="https://github.com/saurowankhade" className="text-xs font-mono text-zinc-600 hover:text-zinc-400 transition-colors">
                Github
              </a>
             
          </div>
        </div>
      </footer>
    </div>
  );
}