import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ScrollToHash from './shared/ui/ScrollToHash';
import { AnimatePresence } from 'framer-motion';
import './styles/global.css';

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
      <ScrollToHash />
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home />} />
          <Route path='/projects/:slug' element={<ProjectDetailPage />} />
          <Route path='*' element={<Navigate to='/' replace />}></Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
