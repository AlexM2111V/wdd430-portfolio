import SkillsCard from '@/components/SkillsCard';

const skills = [
  { skill: 'JavaScript', level: 5, notes: 'Proficient in ES6+' },
  { skill: 'React', level: 2 },
  { skill: 'Next.js', level: 2 },
  { skill: 'Node.js', level: 4 },
  { skill: 'Cypress', level: 5 },
  { skill: 'PostgreSQL', level: 3 },
  { skill: 'Puppeteer', level: 5 },
  { skill: 'Postman', level: 5 }
];

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p className="text-lg text-gray-700 mb-4">
        I&apos;m Alexander Mendoza, a web development student at BYU-Pathway
        Worldwide. I enjoy building full-stack applications, from responsive
        frontends to REST APIs and databases.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        My background in software testing taught me to think about how
        things break, and I bring that mindset to the code I write. I&apos;ve
        worked with tools like Cypress and Puppeteer for automated testing.
      </p>
      <p className="text-lg text-gray-700">
        Right now I&apos;m learning Next.js and TypeScript. Outside of coding,
        I like to watch series and play soccer.
      </p>
      <h2 className="text-2xl font-bold mt-8 mb-4">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {skills.map((item) => (
          <SkillsCard key={item.skill} {...item} />
        ))}
      </div>
    </main>
  );
}