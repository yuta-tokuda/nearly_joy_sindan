import { Button } from "@/components/ui/button";

type AnswerButtonProps = {
  text: string;
  onClick: () => void;
};

export const AnswerButton = ({ text, onClick }: AnswerButtonProps) => {
  return (
    <Button
      variant="outline"
      className="h-auto w-full items-start justify-start rounded-2xl border-primary/15 bg-white/80 px-4 py-3.5 text-left transition-all duration-200 hover:scale-[1.01] hover:border-primary/35 hover:bg-[oklch(0.98_0.05_98)] active:scale-[0.99]"
      onClick={onClick}
    >
      <span className="whitespace-normal font-medium text-foreground">{text}</span>
    </Button>
  );
};
