import BlogSection from '../features/blog/ui/BlogSection';
import HeroSection from '../features/hero/ui/HeroSection';
import TechMarquee from '../features/marquee/ui/TechMarquee';
import ProjectsSection from '../features/projects/ui/ProjectsSection';
import * as s from '../shared/styles/section.css';

export default function Home() {
  return (
    <main className={s.mainWrap}>
      <HeroSection id='hero' className={(s.sectionBase, s.heroVisual)} />
      <TechMarquee />
      <ProjectsSection id='projects' className={s.sectionBase} />
      <BlogSection id='blog' className={s.sectionBase} />
    </main>
  );
}
