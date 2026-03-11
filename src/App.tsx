import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import ProjectDetailPage from './pages/ProjectDetailPage';
import RootLayout from './layout/RootLayout';
import './styles/global.css';

function App() {
  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/projects/:slug' element={<ProjectDetailPage />} />
          <Route path='*' element={<Navigate to='/' replace />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
