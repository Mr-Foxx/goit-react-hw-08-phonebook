import React from 'react';
import {
  AuthNavList,
  AuthNavItem,
  NavLink,
  theme,
} from '../Styles/AuthNav.style';
import { Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

export const AuthNav = () => {
  return (
    <ThemeProvider theme={theme}>
      <AuthNavList>
        <AuthNavItem>
          <NavLink to="login">
            <Typography variant="h6">Login</Typography>
          </NavLink>
        </AuthNavItem>

        <AuthNavItem>
          <NavLink to="register ">
            <Typography variant="h6">Registration</Typography>
          </NavLink>
        </AuthNavItem>
      </AuthNavList>
    </ThemeProvider>
  );
};
