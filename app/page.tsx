import Image from "next/image";
import { Reveal } from "./components/Reveal";

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
      {children}
    </p>
  );
}

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
      "Six agents that review a SaaS deal the way a desk would. Pricing, margin, revenue recognition. I built it to see how much of underwriting holds up when you hand it to AI.",
  },
  {
    name: "SFV IC Agent",
    href: "https://www.sfv-ic.com/",
    domain: "sfv-ic.com",
    blurb:
      "An agent that writes IC-grade memos on AI-native finance companies and scores them. I run it to keep my own thesis on the space sharp, and to tell core AI from a wrapper.",
  },
  {
    name: "F2 Field Brief",
    href: "https://www.f2-deploy.com/",
    domain: "f2-deploy.com",
    blurb:
      "A 30/60/90 deployment brief I wrote for an AI role at F2, instead of a cover letter. I'd rather show how I'd do the job than describe it.",
  },
  {
    name: "The Morning Brief",
    href: "https://morningbrief.xyz/",
    domain: "morningbrief.xyz",
    blurb:
      "My morning read. Valuations, deals, Fed meetings, the geopolitics that moves markets. Built so what I need to know that day sits in one place.",
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-[680px] px-6 pb-32 pt-20 sm:pt-28">
      {/* Hero */}
      <Reveal as="header" className="flex flex-col gap-8">
        <div className="flex items-start gap-6">
          <Image
            src="/portrait.jpg"
            alt="Filip Balenko"
            width={192}
            height={192}
            priority
            className="hidden h-24 w-24 shrink-0 rounded-md border border-hairline object-cover sm:block"
          />
          <div className="flex flex-col gap-3">
            <Label>Operator &amp; finance leader · New York</Label>
            <h1 className="font-serif text-5xl leading-[1.02] tracking-tight sm:text-6xl">
              Filip Balenko
            </h1>
          </div>
        </div>

        <p className="font-serif text-xl leading-relaxed text-ink sm:text-2xl">
          I run finance and operations. Capital in, clean books, decisions made
          on numbers that hold up under pressure. I&apos;ve done it from the CFO
          seat and as a managing partner, and I tend to rebuild the machinery
          while it&apos;s still running.
        </p>
      </Reveal>

      {/* 01 — Background */}
      <Reveal as="section" className="mt-24 flex flex-col gap-5">
        <Label>01 · Background</Label>
        <div className="flex flex-col gap-4 text-[17px] leading-relaxed text-ink">
          <p>
            Economics degree from Lehigh. New York since. I learned the work by
            doing it. Closing books late, modeling a raise, sitting across from
            people deciding whether to wire money.
          </p>
          <p>
            My instinct is to make a company legible. Where the cash is. What
            each dollar returns. Which assumptions are load-bearing and which
            are just hope wearing a suit.
          </p>
          <p>
            I run operations the way I&apos;d underwrite them. AI does the
            repetitive part now. I keep the judgment.
          </p>
        </div>
      </Reveal>

      {/* 02 — Work */}
      <Reveal as="section" className="mt-24 flex flex-col gap-10">
        <Label>02 · Work</Label>

        <div className="flex flex-col gap-4">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
            CFO · Devola Technologies
          </p>
          <div className="flex flex-col gap-4 text-[17px] leading-relaxed text-ink">
            <p>
              Co-founded at 19. I owned the finance function while it grew into
              a 30-person operation across the US and Europe. DeFi, smart
              contracts, custom software.
            </p>
            <p>
              55 projects shipped, from early startups to Auchan, the European
              retail group. I built the budget-versus-actuals, the cash
              forecasts, the financial architecture leadership leaned on for
              hiring, pricing, and the go or no-go calls. Commercial terms I
              negotiated drove{" "}
              <span className="font-medium text-ink">225% revenue growth</span>{" "}
              year over year.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
            Managing Partner · Extra Business Funding
          </p>
          <div className="flex flex-col gap-4 text-[17px] leading-relaxed text-ink">
            <p>
              Extra funds small businesses. AI-native alternative lending. I
              founded it and ran the seat where the capital and the risk meet.
            </p>
            <p>
              Raised{" "}
              <span className="font-medium text-ink">$2M+ as sole founder</span>
              . Led every negotiation from cold intro to signed term sheet. 35+
              deals in six months. The funded book returned{" "}
              <span className="font-medium text-ink">38% annualized</span>,
              against an industry benchmark near 18%.
            </p>
            <p>
              I built the underwriting in-house. Who gets funded, on what terms,
              and what it costs us when we&apos;re wrong. An AI model scores each
              deal against historical comps and sharpens every cycle. Per-deal
              review dropped from about four hours to twenty-five minutes.
            </p>
            <p>
              Express Trade Capital backed the firm as institutional partner.
              That relationship started when I worked there.
            </p>
          </div>
        </div>

        <p className="text-sm leading-relaxed text-muted">
          Before that, I was an analyst at Express Trade Capital, on invoice
          factoring and purchase-order financing.
        </p>
      </Reveal>

      {/* 03 — Projects */}
      <Reveal as="section" className="mt-24 flex flex-col gap-8">
        <Label>03 · Built</Label>
        <ul className="flex flex-col gap-8">
          {projects.map((p) => (
            <li key={p.href} className="flex flex-col gap-2">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <a
                  className="link font-serif text-xl"
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {p.name}
                </a>
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
                  {p.domain}
                </span>
              </div>
              <p className="text-[15px] leading-relaxed text-muted">{p.blurb}</p>
            </li>
          ))}
        </ul>
      </Reveal>

      {/* 04 — Venture */}
      <Reveal as="section" className="mt-24 flex flex-col gap-5">
        <Label>04 · Venture</Label>
        <div className="flex flex-col gap-4 text-[17px] leading-relaxed text-ink">
          <p>
            I think like an investor even when I&apos;m operating. I read the
            market constantly. What&apos;s getting funded, what&apos;s
            overvalued, what nobody&apos;s looking at yet.
          </p>
          <p>
            I advise early-stage founders on raising money. With GartAI I ran
            the fundraising strategy and led their negotiations with VCs,
            including Thundermark Capital.
          </p>
        </div>

        {/* Blog: tasteful coming-soon element, not a section */}
        <div className="mt-3 flex items-center gap-3 self-start rounded-md border border-hairline px-4 py-3">
          <span className="pulse" aria-hidden />
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
            VC blog · coming soon
          </span>
        </div>
      </Reveal>

      {/* 05 — Off the clock */}
      <Reveal as="section" className="mt-24 flex flex-col gap-5">
        <Label>05 · Off the clock</Label>
        <ul className="flex flex-col gap-3 text-[17px] leading-relaxed text-ink">
          <li>
            Three shows I&apos;ll defend in any argument: Game of Thrones, The
            Witcher, and From.
          </li>
          <li>
            1610 on chess.com. I want that number higher. I&apos;m working on
            it.
          </li>
          <li>I don&apos;t skip a Lex Fridman episode.</li>
          <li>I follow world politics closer than is probably healthy.</li>
        </ul>
      </Reveal>

      {/* 06 — Contact */}
      <Reveal as="section" className="mt-24 flex flex-col gap-5">
        <Label>06 · Reach me</Label>
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

      <footer className="mt-24 border-t border-hairline pt-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
          Filip Balenko · Built in New York
        </p>
      </footer>
    </main>
  );
}
