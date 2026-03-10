import * as s from './Header.css';
import { useActiveSection } from '../hooks/useActiveSection';

const NAV_ITEMS = [
  { label: 'Home', href: '#hero', id: 'hero' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Blog', href: '#blog', id: 'blog' },
];

export default function Header() {
  const activeId = useActiveSection(['hero', 'projects', 'blog']);

  return (
    <header className={s.header}>
      <div className={s.inner}>
        <a href='#hero' className={s.logo}>
          SSO
        </a>

        <nav className={s.nav} aria-label='섹션 내비게이션'>
          <ul className={s.navList}>
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={`${s.navLink} ${
                    activeId === item.id ? s.navLinkActive : ''
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
