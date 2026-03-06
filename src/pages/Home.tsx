import BlogSection from '../features/blog/ui/BlogSection';
import HeroSection from '../features/hero/ui/HeroSection';
import ProjectsSection from '../features/projects/ui/ProjectsSection';

export default function Home() {
  return (
    <>
      <header></header>
      <main>
        <section id='top'>
          <HeroSection />
        </section>

        <section id='projects'>
          <ProjectsSection showHeader />
        </section>

        <section id='blog'>
          <BlogSection />
        </section>
      </main>
      <footer></footer>
    </>
  );
}
