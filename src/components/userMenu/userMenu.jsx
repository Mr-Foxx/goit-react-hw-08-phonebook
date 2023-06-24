import { useDispatch } from 'react-redux';
import { useAuth } from '../../Redux/auth/useAuth';
import { logOutUser } from 'Redux/auth/operations';
import style from '../Styles/UserMenu.module.css';
import { useNavigate } from 'react-router-dom';

export const UserMenu = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleClickLogOut = () => {
    dispatch(logOutUser());
    navigate('/');
  };
  return (
    <div className={style.container}>
      <p className={style.userName}>{user.email}</p>
      <button className={style.logoutBtn} onClick={handleClickLogOut}>
        Logout
      </button>
    </div>
  );
};
