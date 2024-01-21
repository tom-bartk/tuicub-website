export default function Hero() {
  return (
    <header>
      <div className="items-center text-center md:flex md:flex-col">
        <div className="my-12 px-3">
          <h1 className="text-4xl font-black leading-tight tracking-tight text-zinc-50 xl:text-5xl">
            Online multiplayer board game
            <br className="hidden md:inline" /> in your terminal.
          </h1>
          <p className="mb-8 mt-5 text-base font-medium text-zinc-400 md:text-lg xl:text-xl xl:tracking-tight">
            A fun, free and open-source board game that you can play with your
            friends.
            <br className="hidden md:inline" /> Everything from your terminal.
          </p>
          <code className="mx-auto block w-fit rounded-md bg-zinc-766 py-2 pl-5 pr-12 text-left font-mono font-medium leading-loose shadow-2xl">
            $ pip install{" "}
            <span className="font-semibold text-amber-400">tuicub</span>
            <br />$ <span className="font-semibold text-amber-400">tuicub</span>
          </code>
        </div>
        <img
          src="https://static.tuicub.com/img/tuicub_screenshot_1.png"
          alt="Screenshot showing tuicub gameplay"
          className="mt-5 aspect-[1750/929] max-w-full rounded shadow-2xl shadow-zinc-950 md:rounded-xl xl:max-w-6xl"
        />
      </div>
    </header>
  );
}
