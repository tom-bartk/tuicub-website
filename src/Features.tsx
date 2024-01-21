import FeatureImg from "./FeatureImg";
import FeatureRepo from "./FeatureRepo";
import FeatureText from "./FeatureText";

export default function Features() {
  return (
    <>
      <section>
        <div className="mt-20 bg-zinc-850 pb-16 pt-12 lg:pb-20 lg:pt-20">
          <div className="flex flex-col items-center justify-center gap-0 xl:flex-row xl:gap-10">
            <FeatureText
              badgeColor="lime"
              badgeIcon="gameplay"
              badgeText="Gameplay"
              header="Seemless terminal experience."
            >
              Simple and intuitive controls let you fully enjoy the game.
            </FeatureText>
            <FeatureImg
              aspect="aspect-[1136/646]"
              alt="Screenshot showing gameplay"
              src="https://static.tuicub.com/img/tuicub_screenshot_3.png"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col-reverse items-center justify-center gap-0 py-12 xl:flex-row xl:gap-10 xl:py-20">
          <FeatureImg
            aspect="aspect-[1233/601]"
            alt="Screenshot showing gamerooms feature"
            src="https://static.tuicub.com/img/tuicub_screenshot_2.png"
          />
          <FeatureText
            badgeColor="indigo"
            badgeIcon="online"
            badgeText="Online"
            header="Play with friends."
          >
            Gamerooms make it easy for everyone to quickly jump into the game.
          </FeatureText>
        </div>
      </section>
      <section>
        <div className="bg-zinc-850 px-0 py-12 lg:px-10 xl:py-20">
          <div className="flex flex-col items-center justify-center gap-10 xl:flex-row">
            <FeatureText
              badgeColor="cyan"
              badgeIcon="openSource"
              badgeText="Open-source"
              header="Free and open-source."
            >
              Both the client and the server are licensed under the{" "}
              <a
                className="text-blue-400 visited:text-indigo-500 hover:underline"
                href="https://www.gnu.org/licenses/agpl-3.0.en.html"
              >
                GNU Affero General Public License
              </a>
              . Contributions are welcome!
            </FeatureText>
            <div className="w-full bg-zinc-766 px-0 py-0 shadow-2xl sm:w-fit sm:rounded-lg sm:px-5 sm:py-5">
              <FeatureRepo
                title="Client"
                name="tom-bartk/tuicub"
                link="https://github.com/tom-bartk/tuicub"
              />
              <FeatureRepo
                title="Server"
                name="tom-bartk/tuicub-server"
                link="https://github.com/tom-bartk/tuicub-server"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
