import { Link, useLocation } from 'react-router-dom';
import { useActiveSection } from '../hooks/useActiveSection';
import { HEADER_MENU } from './headerMenu';

import * as s from './Header.css';
import logo from '../assets/images/logo/logo.svg';

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isProjectDetail = location.pathname.startsWith('/projects/');

  const activeSection = useActiveSection(['hero', 'projects', 'blog']);

  const getIsActive = (item: (typeof HEADER_MENU)[number]) => {
    if (isProjectDetail) {
      return item.id === 'projects';
    }

    if (!isHome) {
      return false;
    }

    if (!location.hash) {
      return item.id === 'hero';
    }

    return activeSection === item.id;
  };

  return (
    <header className={s.header}>
      <div className={s.inner}>
        <Link to='/#hero' className={s.logoLink} aria-label='홈으로 이동'>
          <h1>
            <img src={logo} alt='ui.soi Logo' className={s.logoImage} />
          </h1>
        </Link>

        <nav className={s.nav} aria-label='주요 메뉴'>
          <ul className={s.navList}>
            {HEADER_MENU.map((item) => {
              const isActive = getIsActive(item);

              return (
                <li key={item.id}>
                  <Link
                    to={item.href}
                    className={`${s.navLink} ${isActive ? s.navLinkActive : ''}`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
