import { Outlet } from 'react-router-dom';
import { useAuth } from 'Redux/auth/useAuth';
import { Typography } from '@mui/material';
import { AuthNav } from './AuthNav/AuthNav';
import { UserMenu } from './userMenu/userMenu';
import {
  Header,
  NavLinkContainer,
  NavLink,
  theme,
} from './Styles/Layout.style';
import { ThemeProvider } from '@mui/material/styles';

export const Layout = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header>
          <NavLinkContainer>
            <NavLink to="/">
              <Typography variant="h6">HOME</Typography>
            </NavLink>

            {isLoggedIn && (
              <NavLink to="/contacts">
                <Typography variant="h6">Phonebook</Typography>
              </NavLink>
            )}
          </NavLinkContainer>

          <nav>{isLoggedIn ? <UserMenu /> : <AuthNav />}</nav>
        </Header>
      </ThemeProvider>
      <Outlet />
    </>
  );
};
