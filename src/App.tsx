import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import './styles/global.css';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const location = useLocation();
  return (
    <>
      <ScrollToTop />
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
