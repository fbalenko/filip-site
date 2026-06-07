import Image from "next/image";
import { Reveal } from "./components/Reveal";

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
      {children}
    </p>
  );
}

const heroIntro = [
  "I run the money side of companies. Where it comes from, where it goes, and whether the story the numbers tell is one you can actually trust.",
  "I have done that from the CFO seat and as a managing partner. I co-founded a software company at 19 and ran its finances until it was 30 people across two continents. Then I started a lending firm and underwrote the loans myself. Different seats, same job. Find the truth in the numbers, then make the calls other people can stand behind.",
  "I work AI-native. The repetitive parts of finance and operations run on systems I build. I keep the judgment for myself.",
];

const stats = [
  { value: "225%", label: "Devola revenue growth, year over year" },
  { value: "38%", label: "Extra return on capital, annualized" },
  { value: "$2M+", label: "Raised solo for Extra" },
  { value: "35+", label: "Deals closed in six months" },
];

type Role = {
  title: string;
  org: string;
  meta: string;
  body: string[];
};

const roles: Role[] = [
  {
    title: "CFO",
    org: "Devola Technologies",
    meta: "2022 – 2025 · Digital products, DeFi, custom software",
    body: [
      "I started Devola the year I turned 19. I wanted to learn how a company actually works by running one, not by reading about it in a finance class. So I took the part nobody else wanted, the money, and made it mine.",
      "For three years I owned the finance function. The model, the monthly close, the cash forecasts, the budget that every hiring and pricing call had to argue with. I sat in the commercial negotiations too. The person who knows the numbers should be the one defending them.",
      "We grew. From an idea to a 30-person shop working across the US and Europe. 55 projects shipped, from scrappy startups to Auchan, the European retail group. The terms I negotiated and the pricing I set pushed revenue up 225% year over year.",
      "I learned the thing you cannot pick up secondhand. A company is a stack of bets, and finance is how you keep score honestly enough to know which ones are paying off.",
    ],
  },
  {
    title: "Managing Partner",
    org: "Extra Business Funding",
    meta: "2025 – 2026 · AI-native alternative lending",
    body: [
      "After Devola I wanted the other side of the table. I had watched small businesses take bad money from non-bank lenders, mostly because the good lenders would not look at them fast enough. I thought I could fix the speed and the judgment at the same time.",
      "So I started Extra and raised the capital myself. Two million and change, every dollar from a conversation I ran from the first cold email to the signed term sheet. One of those checks came from Express Trade Capital, where I had worked as an analyst. A summer spent earning their trust turned into a capital partner.",
      "Then I did the real work. I built the underwriting from nothing. Who we would fund, on what terms, and what it would cost us when I got it wrong. I trained an AI model to score each deal against everything we had seen before, and it got sharper every cycle. A review that used to take me four hours took twenty-five minutes.",
      "The book returned 38% annualized. The industry runs closer to 18. Thirty-five deals in six months, and I answered for every one of them, the clean ones and the ugly ones both.",
    ],
  },
];

const earlier =
  "Before all of that I cut my teeth in other people's lending businesses. Analyst at Express Trade Capital on invoice factoring and purchase-order financing, then credit and investor relations at Scale Capital, a private-credit platform, where I built the models, prepped the investor materials, and trimmed enough waste out of the operation to move earnings before tax up 8%.";

type Project = {
  name: string;
  href: string;
  domain: string;
  blurb: string;
};

const projects: Project[] = [
  {
    name: "Kiln",
    href: "https://kiln-demo.vercel.app/",
    domain: "kiln-demo.vercel.app",
    blurb:
      "Six AI agents that review a SaaS deal the way a real desk would. They argue about pricing, margin, and revenue recognition, flag what does not add up, and push the ugly ones to a human. I built it to find out how much of underwriting survives being handed to a machine. More than I expected. Not all of it.",
  },
  {
    name: "SFV IC Agent",
    href: "https://www.sfv-ic.com/",
    domain: "sfv-ic.com",
    blurb:
      "Point it at a company building AI-native finance infrastructure and it writes the investment memo. Scored, sourced, ready for a partner meeting. I run it to keep my own read on the market honest, and to settle the only question that matters in that space. Is the AI the product, or just paint?",
  },
  {
    name: "F2 Field Brief",
    href: "https://www.f2-deploy.com/",
    domain: "f2-deploy.com",
    blurb:
      "A company was hiring for an AI deployment role. Instead of a cover letter I built the thing the job would actually produce in its first 90 days. A full deployment plan for a private-credit fund, grounded in real public research. I would rather show the work than talk about it.",
  },
  {
    name: "The Morning Brief",
    href: "https://morningbrief.xyz/",
    domain: "morningbrief.xyz",
    blurb:
      "My morning read, built for me. Valuations, deals, Fed meetings, the politics that moves markets. It pulls the day's important stuff into one place so I walk into every conversation already knowing what happened. Now anyone can use it.",
  },
];

const howIThink = [
  "My instinct is to make a company legible. I want to see where the cash is, what each dollar returns, and which assumptions are holding the whole thing up versus which ones are just hope in a nice suit.",
  "I run operations the way I would underwrite a loan. Assume it can go wrong, price that in, then build so it mostly does not. AI does the repetitive part now, the spreading and the sorting and the first draft. The judgment stays with me, and that is the part I care about.",
  "I read the market constantly. What is getting funded, what is overvalued, what nobody is paying attention to yet. I advise early founders on raising money, and with GartAI I ran the fundraising and led the negotiations with VCs, including Thundermark Capital.",
];

const background =
  "I am from New York and I studied economics and finance at Lehigh. I speak English and Russian like a native and Ukrainian close to it. Most of what I actually use I learned by doing it. Closing books past midnight, modeling a raise, sitting across from someone deciding whether to wire the money.";

const offClock = [
  "Three shows I will defend to anyone: Game of Thrones, The Witcher, and From.",
  "1610 on chess.com. I want that number higher and I am chipping at it.",
  "I do not skip a Lex Fridman episode.",
  "I follow world politics closer than is good for me.",
];

function Nav() {
  const items = [
    { href: "#work", label: "Work" },
    { href: "#projects", label: "Built" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-bg/80 backdrop-blur">
      <nav className="mx-auto flex h-14 max-w-4xl items-center justify-between px-6">
        <a href="#top" className="navlink font-serif text-base text-ink">
          Filip Balenko
        </a>
        <div className="flex items-center gap-5 font-mono text-[11px] uppercase tracking-[0.18em]">
          {items.map((it) => (
            <a key={it.href} href={it.href} className="navlink">
              {it.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top" className="mx-auto max-w-4xl px-6 pb-32">
        {/* Hero */}
        <Reveal as="header" className="flex flex-col gap-8 pt-16 sm:pt-24">
          <div className="flex items-start gap-6">
            <Image
              src="/portrait.jpg"
              alt="Filip Balenko"
              width={224}
              height={224}
              priority
              className="hidden h-28 w-28 shrink-0 rounded-lg border border-hairline object-cover sm:block"
            />
            <div className="flex flex-col gap-3">
              <Label>Operator &amp; finance leader · New York</Label>
              <h1 className="font-serif text-5xl leading-[1.02] tracking-tight sm:text-7xl">
                Filip Balenko
              </h1>
            </div>
          </div>

          <div className="flex max-w-[640px] flex-col gap-4">
            <p className="font-serif text-xl leading-relaxed text-ink sm:text-2xl">
              {heroIntro[0]}
            </p>
            {heroIntro.slice(1).map((t, i) => (
              <p key={i} className="text-[17px] leading-relaxed text-muted">
                {t}
              </p>
            ))}
          </div>
        </Reveal>

        {/* Stats band */}
        <Reveal className="mt-16 grid grid-cols-2 border-y border-hairline sm:grid-cols-4 sm:divide-x sm:divide-hairline">
          {stats.map((s) => (
            <div key={s.value} className="flex flex-col gap-2 px-5 py-7">
              <span className="font-serif text-4xl tracking-tight text-ink">
                {s.value}
              </span>
              <span className="font-mono text-[11px] uppercase leading-snug tracking-[0.12em] text-faint">
                {s.label}
              </span>
            </div>
          ))}
        </Reveal>

        {/* Work */}
        <section id="work" className="scroll-mt-20">
          <Reveal className="mt-28 flex flex-col gap-3">
            <Label>Work</Label>
            <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">
              Two companies, two seats
            </h2>
            <p className="max-w-[620px] text-[17px] leading-relaxed text-muted">
              I built the finance function at one and ran the whole operation at
              the other. Here is what each was, and why I was in the room.
            </p>
          </Reveal>

          <div className="mt-14 flex flex-col gap-16">
            {roles.map((role) => (
              <Reveal
                key={role.org}
                className="grid gap-6 sm:grid-cols-[200px_1fr] sm:gap-10"
              >
                <div className="flex flex-col gap-1 sm:sticky sm:top-20 sm:self-start">
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink">
                    {role.title}
                  </p>
                  <p className="font-serif text-lg text-ink">{role.org}</p>
                  <p className="mt-1 text-[13px] leading-relaxed text-faint">
                    {role.meta}
                  </p>
                </div>
                <div className="flex flex-col gap-4 text-[17px] leading-relaxed text-ink">
                  {role.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </Reveal>
            ))}

            <Reveal className="grid gap-6 sm:grid-cols-[200px_1fr] sm:gap-10">
              <div className="flex flex-col gap-1">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
                  Earlier
                </p>
              </div>
              <p className="max-w-[620px] text-[15px] leading-relaxed text-muted">
                {earlier}
              </p>
            </Reveal>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="scroll-mt-20">
          <Reveal className="mt-28 flex flex-col gap-3">
            <Label>Built</Label>
            <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">
              I build to understand
            </h2>
            <p className="max-w-[620px] text-[17px] leading-relaxed text-muted">
              When I want to know whether something works, I make it. These are
              live. Click any of them.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {projects.map((p) => (
              <Reveal key={p.href}>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card flex h-full flex-col gap-3 rounded-lg border border-hairline p-6"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-serif text-2xl tracking-tight text-ink">
                      {p.name}
                    </h3>
                    <span className="card-arrow font-mono text-base text-faint">
                      ↗
                    </span>
                  </div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
                    {p.domain}
                  </p>
                  <p className="text-[15px] leading-relaxed text-muted">
                    {p.blurb}
                  </p>
                  <span className="card-cta mt-1 font-mono text-[11px] uppercase tracking-[0.18em]">
                    Visit →
                  </span>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-8 flex items-center gap-3 self-start">
            <span className="pulse" aria-hidden />
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
              VC blog · coming soon
            </span>
          </Reveal>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-20">
          <Reveal className="mt-28 flex flex-col gap-3">
            <Label>About</Label>
            <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">
              How I think
            </h2>
          </Reveal>

          <Reveal className="mt-10 grid gap-12 sm:grid-cols-[1fr_1fr] sm:gap-14">
            <div className="flex flex-col gap-4 text-[17px] leading-relaxed text-ink">
              {howIThink.map((t, i) => (
                <p key={i}>{t}</p>
              ))}
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-3">
                <Label>Background</Label>
                <p className="text-[15px] leading-relaxed text-muted">
                  {background}
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <Label>Off the clock</Label>
                <ul className="flex flex-col gap-2 text-[15px] leading-relaxed text-muted">
                  {offClock.map((t, i) => (
                    <li key={i}>{t}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-20">
          <Reveal className="mt-28 flex flex-col gap-6 rounded-lg border border-hairline p-8 sm:p-12">
            <div className="flex flex-col gap-3">
              <Label>Contact</Label>
              <h2 className="max-w-[620px] font-serif text-3xl leading-tight tracking-tight sm:text-4xl">
                What I want next
              </h2>
              <p className="max-w-[620px] text-[17px] leading-relaxed text-muted">
                An operating or finance leadership seat where the numbers are
                hard, the stakes are real, and someone needs the machinery
                rebuilt while it is still running. If that is the room you are
                filling, let&apos;s talk.
              </p>
            </div>
            <ul className="flex flex-col gap-2 text-[17px] leading-relaxed text-ink">
              <li>
                <a className="link" href="mailto:filippbalenko@gmail.com">
                  filippbalenko@gmail.com
                </a>
              </li>
              <li>
                <a
                  className="link"
                  href="https://linkedin.com/in/filipbalenko"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/filipbalenko
                </a>
              </li>
              <li>
                <a className="link" href="/filip-balenko-resume.pdf" download>
                  Resume (PDF)
                </a>
              </li>
            </ul>
          </Reveal>
        </section>

        <footer className="mt-24 border-t border-hairline pt-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
            Filip Balenko · Built in New York
          </p>
        </footer>
      </main>
    </>
  );
}
