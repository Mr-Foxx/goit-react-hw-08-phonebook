import { useDispatch } from 'react-redux';
import { registerUser } from 'Redux/auth/operations';
import style from '../components/Styles/Form.module.css';

export const RegisterUser = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;

    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    const userDetails = { name, email, password };
    console.log(userDetails);
    dispatch(registerUser(userDetails));
    form.reset();
  };

  return (
    <>
      <h2 className={style.title}>Create Your account</h2>
      <form className={style.form} onSubmit={handleSubmit}>
        <label>
          <input
            className={style.input}
            type="text"
            name="name"
            placeholder="Name"
          />
        </label>
        <label>
          <input
            className={style.input}
            type="email"
            name="email"
            placeholder="Email"
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
          Create
        </button>
      </form>
    </>
  );
};
