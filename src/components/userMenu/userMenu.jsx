import { useDispatch } from 'react-redux';
import { useAuth } from '../../Redux/auth/useAuth';
import { logOutUser } from 'Redux/auth/operations';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  UserName,
  LogoutBtn,
} from 'components/Styles/UserMenu.style';
import { Typography } from '@mui/material';

export const UserMenu = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleClickLogOut = () => {
    dispatch(logOutUser());
    navigate('/');
  };
  return (
    <Container>
      <UserName>{user.email}</UserName>
      <LogoutBtn onClick={handleClickLogOut}>
        <Typography variant="h6">Logout</Typography>
      </LogoutBtn>
    </Container>
  );
};
