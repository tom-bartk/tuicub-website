import { ReactNode } from "react";

interface HowToPlaySteProps {
  title: string;
  num: string;
  children?: ReactNode;
}

export default function HowToPlayStep({
  title,
  num,
  children,
}: HowToPlaySteProps) {
  return (
    <div className="flex flex-row gap-5 pb-8">
      <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded bg-amber-500/[0.10] text-xl font-black text-amber-400">
        {num}
      </div>
      <div className="">
        <p className="pb-1 text-xs font-bold uppercase tracking-wider text-amber-400/[0.8] xl:text-sm">
          {title}
        </p>
        {children}
      </div>
    </div>
  );
}
