import ProjectsSection from '../features/projects/ui/ProjectsSection';
import RouteTransition from '../shared/ui/RouteTransition';
import * as s from './ProjectsPage.css';

export default function ProjectsPage() {
  return (
    <RouteTransition>
      <div className={s.page}>
        <ProjectsSection />
      </div>
    </RouteTransition>
  );
}
