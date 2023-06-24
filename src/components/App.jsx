import { Home } from 'pages/Home';
import { LoginUser } from 'pages/LoginUser';
import { PhoneBook } from 'pages/PhoneBook';
import { RegisterUser } from 'pages/RegisterUser';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from 'Redux/auth/operations';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { PublicRoute } from './PublicRoute/PublicRoute';
import { useAuth } from 'Redux/auth/useAuth';
import { Loader } from '../components/Loader/Loader';


export const App = () => {
  const { isRefreshing } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>

          <Route
            path="contacts"
            element={
              <PrivateRoute
                redirectTo={'/contacts'}
                component={<PhoneBook />}
              />
            }
          />

          <Route
            path="login"
            element={
              <PublicRoute redirectTo={'/contacts'} component={<LoginUser />} />
            }
          />

          <Route
            path="register"
            element={
              <PublicRoute
                redirectTo={'/contacts'}
                component={<RegisterUser />}
              />
            }
          />
        </Route>
      </Routes>
    </>
  );
};
