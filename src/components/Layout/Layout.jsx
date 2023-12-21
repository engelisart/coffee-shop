import { NavLink, Outlet } from 'react-router-dom';

export const Layout = () => {
  //   const { pathname } = useLocation();

  return (
    <>
      <header>
        <nav>
          <NavLink to={'/'}>HOME</NavLink>
          <NavLink to={'/admin'}>ADMIN</NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  );
};
