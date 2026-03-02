import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import './styles/global.css';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<ProjectsPage />} />
          <Route path='/projects/:slug' element={<ProjectDetailPage />} />
          <Route path='*' element={<Navigate to='/' replace />}></Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
