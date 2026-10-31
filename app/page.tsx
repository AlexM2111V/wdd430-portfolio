import ProjectList from '@/components/ProjectList';

const projects = [
  {
    title: 'CineScope',
    description: 'A movie and TV show discovery app for browsing trending titles, searching, viewing details, and saving favorites.',
    technologies: ['JavaScript', 'HTML', 'CSS', 'RapidAPI'],
    link: 'https://alexm2111v.github.io/wdd330-final-project/'
  },
  {
    title: 'Service Project Manager',
    description: 'A full-stack app for managing organizations, service projects, and volunteers, with user registration and login.',
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'EJS'],
    link: 'https://github.com/AlexM2111V/cse340-course-repo'
  }
];

export default function Home() { 
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <p className="text-lg text-gray-700">
          I&apos;m a full-stack developer learning Next.js and React. Here are some of my recent projects.
        </p>
      </section>
      <ProjectList projects={projects} />
    </main>
  );
}