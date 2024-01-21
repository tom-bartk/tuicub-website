import { ReactNode } from "react";

interface LinkProps {
  href: string;
  children?: ReactNode;
}

export default function Link({ href, children }: LinkProps) {
  return (
    <a
      className="text-blue-400 visited:text-indigo-400 hover:underline"
      href={href}
    >
      {children}
    </a>
  );
}
