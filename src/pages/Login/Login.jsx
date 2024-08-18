import { Form, Field, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { loginThunk } from "../../redux/auth/operations";

const Login = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const initialValues = {
    email: "",
    password: "",
  };
  const dispatch = useDispatch();
  const handleSubmit = (values, options) => {
    dispatch(loginThunk(values));
    console.log(values);
    options.resetForm();
  };
  if (isLoggedIn) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field name="email" placeholder="Enter your email" />
          <Field
            name="password"
            type="password"
            placeholder="Enter your password"
          />
          <button type="submit">Login</button>
          <p>
            You do not have account?<Link to="/register">Sign up!</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};
export default Login;
