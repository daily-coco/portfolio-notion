import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollToHash from '../shared/ui/ScrollToHash';

export default function RootLayout() {
  return (
    <>
      <Header />
      <ScrollToHash />
      <Outlet />
      <Footer />
    </>
  );
}
