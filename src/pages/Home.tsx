import BlogSection from '../features/blog/ui/BlogSection';
import HeroSection from '../features/hero/ui/HeroSection';
import ProjectsSection from '../features/projects/ui/ProjectsSection';
import * as s from '../shared/styles/section.css';

export default function Home() {
  return (
    <main>
      <HeroSection id='hero' className={s.sectionBase} />
      <ProjectsSection id='projects' className={s.sectionBase} />
      <BlogSection id='blog' className={s.sectionBase} />
    </main>
  );
}
