import { NavLink } from "react-router-dom";
// import clsx from "clsx";
import s from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operations";

const Header = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  return (
    <header className={s.header}>
      <h2>Phonebook</h2>
      <h3>{user.email}</h3>
      <ul className={s.list}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/contacts">Contacts</NavLink>
        </li>
        {!isLoggedIn && (
          <>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
          </>
        )}
        {isLoggedIn && (
          <li>
            <button
              className={s.btnLogout}
              onClick={() => dispatch(logoutThunk())}
            >
              Logout
            </button>
          </li>
        )}
      </ul>
    </header>
  );
};

export default Header;
