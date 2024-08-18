import "./App.css";

// import ContactList from "./ContactList/ContactList";
// import SearchBox from "./SearchBox/SearchBox";
// import ContactForm from "./ContactForm/ContactForm";
// import { fetchContacts } from "../redux/contacts/operations";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { selectError, selectLoading } from "../redux/contacts/selectors";
// import Loader from "./Loader/Loader";
import { Route, Routes } from "react-router-dom";
import ContactsPage from "../pages/ContactsPage/ContactsPage";
import Layout from "./Layout";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
