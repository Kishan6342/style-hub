import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import CartSidebar from './CartSidebar';
import { useScrollToHash } from '@/hooks/useScrollToHash';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {

  useScrollToHash(); // 👈 ADD THIS


  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <CartSidebar />
    </div>
  );
};

export default Layout;
