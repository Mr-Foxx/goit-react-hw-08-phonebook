import { createTheme, styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

export const AuthNavList = styled('ul')`
  display: flex;
  margin: 0;
`;

export const AuthNavItem = styled('li')`
  margin-left: 10px;
  list-style: none;
`;

export const NavLink = styled(Link)`
  margin: ${({ theme }) => theme.spacing(0, 1)};
  text-decoration: none;
  display: inline-block;
  color: #dedede;
  &:hover {
    transform: scale(1.1) !important;
  }
`;

export const theme = createTheme({
  typography: {
    fontFamily: 'Georgia, serif',
  },
});
