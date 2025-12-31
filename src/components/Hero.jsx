import useTypewriter from "../hooks/useTypewriter";
import Cursor from "./Cursor";

const HeroSection = () => {
  const cmd = "whoami";
  const nme = "Praveen Kumar C";
  const edu = "B.Tech AI & Data Science";
  const tgline = "Software Engineer in progress";

  const command = useTypewriter(cmd, 100);
  const name = useTypewriter(nme, 50, command.length === cmd.length);
  const education = useTypewriter(
    edu,
    40,
    name.length === nme.length
  );
  const tagline = useTypewriter(
    tgline,
    30,
    education.length === edu.length
  );

  return (
    <section className="min-h-screen flex flex-col justify-center">
      <p className="text-green-500">
        $ {command}
        {command.length < cmd.length && <Cursor />}
      </p>

      <div className="mt-4 space-y-1">
        {command.length === cmd.length && (
          <p>
            {name}
            {name.length < nme.length && <Cursor />}
          </p>
        )}
        {name.length === nme.length && (
          <p>
            {education}
            {education.length < edu.length && <Cursor />}
          </p>
        )}

        {education.length === edu.length && (
          <p>{tagline}
             {tagline.length < tgline.length && <Cursor />}   
          </p>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
