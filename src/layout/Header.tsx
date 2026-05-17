import { Link, useLocation } from 'react-router-dom';

import { useActiveSection } from '../hooks/useActiveSection';
import { HEADER_MENU } from './headerMenu';
import * as s from './Header.css';
import logo from '../assets/images/logo/logo.png';

const SECTION_IDS = ['hero', 'projects', 'blog'] as const;

export default function Header() {
  const location = useLocation();

  const isHome = location.pathname === '/';
  const isProjectDetail = location.pathname.startsWith('/projects/');
  const activeSection = useActiveSection(SECTION_IDS);

  const getIsActive = (item: (typeof HEADER_MENU)[number]) => {
    if (isProjectDetail) {
      return item.id === 'projects';
    }

    if (!isHome) {
      return false;
    }

    return activeSection === item.id;
  };

  return (
    <header className={s.header}>
      <div className={s.inner}>
        <Link to='/#hero' className={s.logoLink} aria-label='홈으로 이동'>
          <img
            src={logo}
            alt='UI 개발자 이소원 포트폴리오 로고'
            className={s.logoImage}
          />
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
