import Link from "next/link";
import { ExternalLink } from "lucide-react";

const officialLinks = [
  { label: "公式サイト", href: "https://nearly-equal-joy.jp/" },
  { label: "YouTube", href: "https://www.youtube.com/@nearlyequaljoy5843" },
  { label: "X", href: "https://x.com/Nearlyequal_joy" },
  { label: "TikTok", href: "https://www.tiktok.com/@nearlyequal_joy" },
] as const;

const HomePage = () => {
  return (
    <section className="relative overflow-hidden surface-panel px-5 py-7 text-center">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-10 -top-10 size-28 rounded-[40%] bg-[oklch(0.93_0.11_96/0.58)] blur-2xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-10 -right-8 size-32 rounded-[45%] bg-[oklch(0.95_0.09_84/0.52)] blur-2xl"
      />

      <div className="relative space-y-3.5">
        <p className="animate-rise text-[11px] font-medium tracking-[0.2em] text-primary">
          FAN DIAGNOSIS
        </p>
        <h1 className="animate-rise-delay font-display text-[1.85rem] leading-snug text-foreground">
          ≒JOY
          <span className="mt-0.5 block text-xl text-primary">推し診断</span>
        </h1>
        <p className="animate-rise-delay-2 mx-auto max-w-[20rem] text-xs leading-5 text-muted-foreground">
          指原莉乃プロデュースのアイドルグループ。
          <br />
          通称「ニアジョイ」。
        </p>
        <p className="animate-rise-delay-2 text-sm leading-6 text-foreground/80">
          質問に答えるだけで、ぴったりのメンバーがわかるよ
          <span className="mt-0.5 block text-xs text-primary/80">約1分で完了</span>
        </p>

        <Link
          href="/diagnosis"
          className="animate-rise-delay-2 inline-flex w-full items-center justify-center rounded-2xl bg-primary px-5 py-3.5 text-sm font-bold text-primary-foreground transition-transform duration-200 hover:scale-[1.02] hover:brightness-105 active:scale-[0.98]"
        >
          診断スタート
        </Link>

        <div className="animate-rise-delay-2 border-t border-primary/10 pt-3.5">
          <p className="mb-2 text-[11px] font-medium tracking-wide text-muted-foreground">
            公式チャンネル
          </p>
          <div className="grid grid-cols-2 gap-2">
            {officialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1 rounded-xl border border-primary/15 bg-white/80 px-2.5 py-2 text-xs font-medium text-foreground transition-colors hover:border-primary/35 hover:bg-[oklch(0.98_0.05_98)]"
              >
                {link.label}
                <ExternalLink className="size-3 text-primary/50" aria-hidden />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
