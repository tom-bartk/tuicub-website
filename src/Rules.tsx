import Link from "./Link";

export default function Rules() {
  return (
    <section>
      <div className="mx-auto mt-12 max-w-3xl bg-zinc-800 px-4 py-8 shadow-2xl shadow-zinc-950 md:rounded-2xl md:px-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 rounded-lg bg-sky-400/[0.2] p-2  text-sky-300"
          width="1em"
          height="1em"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M11 0a3 3 0 0 1 3 3v3h3a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3h8Zm6 8H9a1 1 0 0 0-.993.883L8 9v8a1 1 0 0 0 .883.993L9 18h8a1 1 0 0 0 .993-.883L18 17V9a1 1 0 0 0-.883-.993L17 8Zm-7 7a1 1 0 1 1 0 2a1 1 0 0 1 0-2Zm6 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2Zm-3-3a1 1 0 1 1 0 2a1 1 0 0 1 0-2Zm-1.883-9.993L11 2H3a1 1 0 0 0-.993.883L2 3v8a1 1 0 0 0 .883.993L3 12h3V9a3 3 0 0 1 3-3h3V3a1 1 0 0 0-.883-.993ZM10 9a1 1 0 1 1 0 2a1 1 0 0 1 0-2Zm6 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2ZM4.513 8.993a1 1 0 1 1 0 2a1 1 0 0 1 0-2Zm0-3a1 1 0 1 1 0 2a1 1 0 0 1 0-2Zm0-3a1 1 0 1 1 0 2a1 1 0 0 1 0-2Zm5 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2Z"
          />
        </svg>
        <h3 className="mt-2 text-2xl font-black">Game rules</h3>
        <p className="mt-3">
          Tuicub is inspired by the popular tile-based game{" "}
          <Link href="https://rummikub.com">Rummikub&reg;</Link>. Most of the
          game rules of Rummikub&reg; apply also to tuicub.
        </p>
        <a
          href="https://en.wikipedia.org/wiki/Rummikub#Rules"
          className="group mt-4 block inline-flex items-center text-blue-400 visited:text-indigo-400 hover:underline"
        >
          Learn rules of Rummikub&reg;
          <svg
            fill="none"
            aria-hidden="true"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="ml-2 h-4 w-4 group-hover:underline"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </section>
  );
}
