import BlogSection from '../features/blog/ui/BlogSection';
import Header from './Header';
import HeroSection from '../features/hero/ui/HeroSection';
import ProjectsSection from '../features/projects/ui/ProjectsSection';
import Footer from './Footer';
import * as s from './Home.css';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div id='hero' className={s.section}>
          <HeroSection />
        </div>
        <div id='projects' className={s.section}>
          <ProjectsSection />
        </div>
        <div id='blog' className={s.section}>
          <BlogSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
