import { Outlet } from 'react-router-dom';

import { Footer, Header } from '../../components';

export function UserLayout() {
  return (
    <>
      <Header />
      <div style={{ paddingTop: 72 }}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
