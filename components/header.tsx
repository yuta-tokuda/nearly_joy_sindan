import Link from "next/link";

export const Header = () => {
  return (
    <header className="mx-auto w-full max-w-md px-4 pt-4">
      <Link
        href="/"
        className="inline-flex items-baseline gap-2 transition-opacity hover:opacity-80"
      >
        <span className="font-display text-base tracking-wide text-primary">≒JOY</span>
        <span className="text-[11px] font-medium text-muted-foreground">推し診断</span>
      </Link>
    </header>
  );
};
