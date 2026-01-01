const skills = [
  {
    title: 'Languages',
    icon: '</>',
    items: ['Python', 'Java', 'C++', 'JavaScript'],
  },
  {
    title: 'Frontend & App Dev',
    icon: '<UI/>',
    items: ['React', 'React Native', 'Redux Toolkit', 'HTML5 / CSS3'],
  },
  {
    title: 'Backend & Databases',
    icon: '⚙️',
    items: ['Node.js', 'Express.js', 'Flask', 'Oracle SQL', 'MongoDB', 'MySQL'],
  },
  {
    title: 'CS & AI Foundations',
    icon: '🧠',
    items: [
      'Data Structures & Algorithms',
      'Operating Systems',
      'DBMS',
      'Machine Learning',
      'Computer Vision',
    ],
  },
];

const Skills = () => {
  return (
    <section className="min-h-screen bg-black text-gray-200 py-20">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-green-400">The Skills</h2>
        <p className="mt-4 text-gray-400">Technologies I use to build scalable solutions.</p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {skills.map((skill) => (
          <div
            key={skill.title}
            className="
              bg-[#0f172a]
              rounded-2xl
              p-8
              text-center
              border border-gray-800
              hover:border-green-400
              hover:-translate-y-2
              transition-all duration-300
            "
          >
            <div className="text-4xl mb-4 text-green-400">{skill.icon}</div>
            <h3 className="text-xl font-semibold mb-6">{skill.title}</h3>
            <ul className="space-y-2 text-gray-400">
              {skill.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
