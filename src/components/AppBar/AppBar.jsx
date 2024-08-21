// import { NavLink } from "react-router-dom";
// import clsx from "clsx";
import s from "./AppBar.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
// import { logoutThunk } from "../../redux/auth/operations";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";

const AppBar = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  // const dispatch = useDispatch();

  return (
    <header className={s.header}>
      <h2>Phonebook</h2>
      <h3>{user.email}</h3>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
      {/* <ul className={s.list}>
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
      </ul> */}
    </header>
  );
};

export default AppBar;
