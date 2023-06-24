import { useDispatch } from 'react-redux';
import { loginUser } from 'Redux/auth/operations';
import style from '../components/Styles/Form.module.css';

export const LoginUser = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;

    const email = form.elements.email.value;
    const password = form.elements.password.value;

    const userDetails = { email, password };
    // console.log(userDetails);
    dispatch(loginUser(userDetails));
  };
  return (
    <>
      <h2 className={style.title}>Log in to your account</h2>

      <form className={style.form} onSubmit={handleSubmit}>
        <label>
          <input
            className={style.input}
            type="email"
            name="email"
            placeholder="Name"
          />
        </label>
        <label>
          <input
            className={style.input}
            type="password"
            name="password"
            placeholder="Password"
          />
        </label>
        <button className={style.buttonForm} type="submit">
          Login
        </button>
      </form>
    </>
  );
};
