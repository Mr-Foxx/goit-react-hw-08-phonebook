// import { styled } from '@mui/system';
import { createTheme, styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

export const Header = styled('header')`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  background-color: rgb(71, 100, 132);
`;

export const NavLinkContainer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 280px;
`;

export const NavLink = styled(Link)`
  margin: ${({ theme }) => theme.spacing(0, 1)};

  text-decoration: none;
  color: #dedede;
  &:hover {
    transform: scale(1.1);
  }
`;

export const theme = createTheme({
  typography: {
    fontFamily: 'Georgia, serif',
  },
});
