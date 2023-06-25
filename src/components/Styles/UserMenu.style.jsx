import { styled } from '@mui/material/styles';

export const Container = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserName = styled('p')`
  margin-right: 20px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: #dedede;
`;

export const LogoutBtn = styled('button')`
  background-color: rgb(71, 102, 134);
  align-items: center;
  height: 25px;
  color: #dedede;
  cursor: pointer;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.1);
  }
`;
