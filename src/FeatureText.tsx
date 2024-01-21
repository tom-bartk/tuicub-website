import { ReactNode } from "react";

import Badge, { Color, Icon } from "./Badge";

interface FeatureTextProps {
  badgeColor: Color;
  badgeIcon: Icon;
  badgeText: string;
  header: string;
  children?: ReactNode;
}

export default function FeatureText({
  badgeColor,
  badgeIcon,
  badgeText,
  header,
  children,
}: FeatureTextProps) {
  return (
    <div className="px-3 text-center xl:max-w-md xl:px-5 xl:text-left">
      <Badge color={badgeColor} icon={badgeIcon} text={badgeText} />
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-100">
        {header}
      </h2>
      <p className="mt-3 max-w-prose font-medium leading-snug text-zinc-400 xl:text-lg">
        {children}
      </p>
    </div>
  );
}
