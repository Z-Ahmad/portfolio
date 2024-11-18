import { projectsData } from '@/lib/data';
import { notFound } from 'next/navigation';

export default function ProjectPage({ params }: { params: { project: string } }) {
  const project = projectsData.find(
    (project) => project.title.toLowerCase().replace(/\s+/g, '-') === params.project
  );

    if (!project || !project.blogUrl) {
      notFound();
    }

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
      {/* Add your blog post content here */}
    </main>
  );
} 