import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.replace('#', '');

    const scroll = () => {
      const el = document.getElementById(id);
      if (!el) return;

      el.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    };

    requestAnimationFrame(scroll);
  }, [location.pathname, location.hash]);

  return null;
}
