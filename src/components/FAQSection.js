/**
 * FAQ Section Component
 * Displays frequently asked questions in an accordion format
 */

const FAQ_ITEMS = [
  {
    id: 1,
    question: "Is devtools4me free to use?",
    answer: "Yes, all tools on devtools4me are completely free to use. No sign-ups, no subscriptions, no hidden fees.",
  },
  {
    id: 2,
    question: "Is my data safe?",
    answer: "Absolutely. Every tool runs locally in your browser. Nothing is uploaded, stored, or logged. Your data never leaves your machine.",
  },
  {
    id: 3,
    question: "Do I need to create an account?",
    answer: "No account needed. Just open any tool and start working immediately.",
  },
  {
    id: 4,
    question: "Are there any ads?",
    answer: "No advertisements. No cookie banners. No tracking. Just clean, distraction-free tools.",
  },
];

function FAQItem({ question, answer }) {
  return (
    <details className="group rounded-2xl bg-zinc-950 border border-zinc-800/50 hover:border-zinc-700/60 transition-all overflow-hidden">
      <summary className="cursor-pointer list-none px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between">
        <h3 className="text-sm sm:text-base font-bold text-zinc-100 pr-4">
          {question}
        </h3>
        <span className="shrink-0 w-6 h-6 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 text-xs font-bold transition-transform group-open:rotate-180">
          ↓
        </span>
      </summary>
      <div className="px-5 sm:px-6 pb-4 sm:pb-5 pt-0">
        <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">
          {answer}
        </p>
      </div>
    </details>
  );
}

export default function FAQSection() {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
      <div className="text-center mb-10 sm:mb-12">
        <span className="block text-xs font-bold tracking-widest uppercase text-emerald-400 font-mono mb-2">
          FAQ
        </span>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-zinc-100 mb-2">
          Questions You Might Have
        </h2>
        <p className="text-xs sm:text-sm text-zinc-500 max-w-2xl mx-auto">
          Everything you need to know about devtools4me and how we keep your data safe.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
        {FAQ_ITEMS.map((item) => (
          <FAQItem key={item.id} question={item.question} answer={item.answer} />
        ))}
      </div>
    </section>
  );
}
