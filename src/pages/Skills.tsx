import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionWithBubbles from "../components/SectionWithBubbles";
import SkillFlipCard from "../components/SkillFlipCard";

const skills = [
  {
    title: "Comunicación",
    image: "/soft.webp",
    description:
      "Capacidad para expresar ideas de forma clara, empática y efectiva."
  },
  {
    title: "React",
    image: "/hard.jpg",
    description:
      "Desarrollo de interfaces modernas con hooks y componentes reutilizables."
  },
  {
    title: "Trabajo en equipo",
    image: "/soft.webp",
    description:
      "Colaboración activa, escucha y responsabilidad compartida."
  },
  {
    title: "Android",
    image: "/hard.jpg",
    description:
      "Desarrollo de aplicaciones Android con arquitectura limpia."
  },
    {
    title: "iOS",
    image: "/hard.jpg",
    description:
      "Desarrollo de aplicaciones iOS con arquitectura limpia."
  },
  {
    title: "Resolución de problemas",
    image: "/soft.webp",
    description:
      "Resolución de problemas."
  },
   {
    title: "Android",
    image: "/hard.jpg",
    description:
      "Desarrollo de aplicaciones Android con arquitectura limpia."
  },
  {
    title: "Honestidad",
    image: "/soft.webp",
    description:
      "Colaboración activa, escucha y responsabilidad compartida."
  },
];

export default function Skills() {
  return (
    <>
      <Navbar />

      <main className="pt-16 min-h-screen">
        <SectionWithBubbles title="Habilidades">
          <div className="
            mt-10
            mb-10
            grid
            gap-6
            grid-cols-2
            sm:grid-cols-3
            lg:grid-cols-4
          ">
            {skills.map((skill) => (
              <SkillFlipCard
                key={skill.title}
                title={skill.title}
                image={skill.image}
                description={skill.description}
              />
            ))}
          </div>
        </SectionWithBubbles>

        <Footer />
      </main>
    </>
  );
}
