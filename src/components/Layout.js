import { NavLink, Outlet } from 'react-router-dom';
import { useAuth } from 'Redux/auth/useAuth';
import style from '../components/Styles/Layout.module.css';
import { AuthNav } from './AuthNav/AuthNav';
import { UserMenu } from './userMenu/userMenu';

export const Layout = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <header className={style.header}>
        <div className={style.container}>
          <NavLink to="/">HOME</NavLink>

          {isLoggedIn && (
            <>
              <NavLink to="contacts">Phonebook</NavLink>
            </>
          )}
        </div>

        <nav>{isLoggedIn ? <UserMenu /> : <AuthNav />}</nav>
      </header>
      <Outlet />
    </>
  );
};
