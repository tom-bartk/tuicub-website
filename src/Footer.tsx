import Link from "./Link";

export default function Footer() {
  return (
    <footer className="mt-12">
      <div className="flex items-center justify-center gap-4 py-8">
        <img
          src="https://static.tuicub.com/img/tuicub-logo-project.png"
          className="w-[80px]"
          alt="Logo of tuicub"
        />
        <p className="pt-0.5 text-zinc-400">
          Made by <Link href="https://tombartk.com">tombartk</Link>.
        </p>
      </div>
    </footer>
  );
}
