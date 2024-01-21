import HowToPlayStep from "./HowToPlayStep";
import Link from "./Link";

export default function HowToPlay() {
  return (
    <section>
      <div className="mt-12 px-3 xl:mt-20 xl:text-lg">
        <h2 className="mx-auto text-center text-3xl font-black leading-tight tracking-tight text-zinc-50 xl:text-4xl">
          How to play?
        </h2>
        <div className="mx-auto mb-5 mt-3 h-1 max-w-[220px] rounded-full bg-gradient-to-r from-amber-500 to-rose-500 xl:max-w-[280px]"></div>
        <div className="mx-auto max-w-prose pt-5">
          <HowToPlayStep title="terminal" num="1">
            <p>
              For the best experience, use a decent terminal emulator,
              <br className="hidden md:inline" /> such as{" "}
              <Link href="https://sw.kovidgoyal.net/kitty/">kitty</Link>.
            </p>
          </HowToPlayStep>
          <HowToPlayStep title="font" num="2">
            <p>
              Make sure to use a font that supports wide range of Unicode glyphs
              (previews show{" "}
              <Link href="https://github.com/tonsky/FiraCode">Fira Code</Link>
              ). The{" "}
              <Link href="https://github.com/ryanoasis/nerd-fonts">
                Nerd Fonts
              </Link>{" "}
              project has a list of compatible fonts.
            </p>
          </HowToPlayStep>
          <HowToPlayStep title="install" num="3">
            <p>
              Install{" "}
              <span className="mx-1 rounded bg-zinc-766 px-2 pt-0.5 font-mono">
                tuicub
              </span>{" "}
              using
              <Link href="https://pip.pypa.io/en/stable/installation/">
                {" "}
                pip
              </Link>
              :
            </p>
            <div className="mt-3 rounded-md bg-zinc-766 py-1 pl-4 pr-16 text-left font-mono font-medium leading-loose">
              pip install{" "}
              <span className="font-semibold text-amber-400">tuicub</span>
            </div>
          </HowToPlayStep>
          <HowToPlayStep title="launch" num="4">
            Start the game simply by running{" "}
            <span className="ml-1 rounded bg-zinc-766 px-2 pt-0.5 font-mono">
              tuicub
            </span>
            . Then, pick a nickname and press{" "}
            <kbd className="rounded-md border border-zinc-700 bg-zinc-766 px-2 py-1 text-xs font-semibold text-zinc-300">
              Enter
            </kbd>{" "}
            — no email, or other nonsense required.
          </HowToPlayStep>
          <img
            src="https://static.tuicub.com/img/tuicub_screenshot_4.png"
            className="mx-auto mb-16 shadow-2xl shadow-zinc-950 sm:rounded-lg"
            alt="Screenshot showing introduction screen"
          />
          <HowToPlayStep title="find gameroom" num="5">
            Join a gameroom, or create one and wait for your friends to join.
            When everyone is ready, start the game!
          </HowToPlayStep>
          <img
            src="https://static.tuicub.com/img/tuicub_screenshot_5.png"
            className="mx-auto mb-16 shadow-2xl shadow-zinc-950 sm:rounded-lg"
            alt="Screenshot showing gamerooms feature"
          />
          <HowToPlayStep title="win" num="6">
            Beat other players, or just enjoy the game.
          </HowToPlayStep>
          <hr className="mt-4 border-2 border-zinc-833" />
        </div>
      </div>
    </section>
  );
}
