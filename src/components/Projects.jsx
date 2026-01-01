const projects = [
  {
    title: "Smart Task Manager",
    subtitle: "AI-driven Scheduling System",
    description: [
      "Built an intelligent task manager using ML + RL-based scheduling.",
      "Implemented secure REST APIs with Flask and SQLite.",
      "Used TF-Agents for adaptive and personalized scheduling."
    ],
    tech: ["React Native", "Flask", "Machine Learning", "Reinforcement Learning", "SQLite"],
    github: "https://github.com/Gojo-Satoru-git/Smart-Task-Manager",
    demo: null,
  },
  {
    title: "Spacecraft & Orbital Debris Recognition",
    subtitle: "Computer Vision System",
    description: [
      "Developed a YOLOv8-based detection system for satellite imagery.",
      "Achieved 95.3% mAP@0.5 and 81.2% mAP@0.5:0.95.",
      "Handled preprocessing and inference using OpenCV and Python."
    ],
    tech: ["React", "YOLOv8", "OpenCV", "Python", "JavaScript"],
    github: "#",
    demo: null,
  },
  {
    title: "Hostel Outpass Management System",
    subtitle: "Full-Stack Mobile Application",
    description: [
      "Built a role-based mobile app for hostel outpass approvals.",
      "Implemented real-time request handling using Express.js.",
      "Load-tested APIs with 100+ student and counselor accounts."
    ],
    tech: ["React Native", "Express.js", "MongoDB", "Node.js"],
    github: "#",
    demo: null,
  },
  {
    title: "Finance Manager",
    subtitle: "Java Desktop Application",
    description: [
      "Developed a JavaFX finance manager using MVC architecture.",
      "Implemented JDBC-based persistence with MySQL.",
      "Added strong validation for reliable financial data handling."
    ],
    tech: ["Java 17", "JavaFX", "JDBC", "MySQL", "Maven"],
    github: "#",
    demo: null,
  },
];

const Projects = () => {
  return (
    <section className="min-h-screen bg-black text-gray-200 py-20">
      {/* Heading */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-green-400">
          Projects
        </h2>
        <p className="mt-4 text-gray-400">
          Things I’ve built with modern technologies.
        </p>
      </div>

      {/* Project Cards */}
      <div className="max-w-5xl mx-auto space-y-10 px-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="
              bg-[#0f172a]
              rounded-2xl
              p-8
              border border-gray-800
              hover:border-green-400
              transition-all
            "
          >
            {/* Title */}
            <div className="mb-4">
              <h3 className="text-2xl font-semibold">
                {project.title}
              </h3>
              <p className="text-sm text-gray-400">
                {project.subtitle}
              </p>
            </div>

            {/* Description */}
            <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
              {project.description.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="
                    text-sm
                    px-3 py-1
                    rounded-full
                    bg-black
                    border border-gray-700
                    text-gray-300
                  "
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4 text-sm">
              {project.github && (
                <a
                  href={project.github}
                  className="text-green-400 hover:underline"
                  target="_blank"
                >
                  GitHub →
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  className="text-green-400 hover:underline"
                  target="_blank"
                >
                  Live Demo →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
