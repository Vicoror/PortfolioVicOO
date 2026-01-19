interface ProjectCardProps {
  title: string;

  stack: string;        // Lenguaje / Framework / Biblioteca
  ide: string;
  database: string;
  githubUrl: string;

  demoTitle?: string;
  demoVideoUrl?: string;
}

export default function ProjectCard({
  title,
  stack,
  ide,
  database,
  githubUrl,
  demoTitle = "Demo",
  demoVideoUrl,
}: ProjectCardProps) {
  return (
    <div  className=" 
        w-[clamp(280px,80vw,360px)]
        flex-shrink-0
        rounded-2xl
        bg-white
        p-6
        shadow-xl
        backdrop-blur
        transition
        hover:-translate-y-2
        hover:shadow-2xl">
      {/* Title */}
      <h2 className="text-center text-2xl font-bold text-[#054172]
                     [text-shadow:1px_1px_2px_#ffffff]">
        {title}
      </h2>

      {/* Info */}
      <div className="mt-6 space-y-3 text-[#054172]">
        <p>
          <span className="font-semibold">
            Lenguaje / Framework / Biblioteca:
          </span>{" "}
          {stack}
        </p>

        <p>
          <span className="font-semibold">IDE:</span> {ide}
        </p>

        <p>
          <span className="font-semibold">Back-end/Base de datos:</span> {database}
        </p>

        <p>
          <span className="font-semibold">GitHub:</span>{" "}
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-600 hover:underline break-all"
          >
            {githubUrl}
          </a>
        </p>
      </div>

      {/* Demo */}
      {demoVideoUrl && (
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-center text-[#054172] mb-3">
            {demoTitle}
          </h3>

          <div className="overflow-hidden rounded-xl border shadow-md">
            <video
              src={demoVideoUrl}
              controls
              className="w-full h-auto"
            />
          </div>
        </div>
      )}
    </div>
  );
}
