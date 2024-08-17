import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
// import { selectFilter } from "../../redux/filters/selectors";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  // const filter = useSelector(selectFilter);

  // const filteredContacts = contacts.filter((contact) => {
  //   return contact.name.toLowerCase().includes(filter.toLowerCase());
  // });

  return (
    <ul className={s.contactList}>
      {contacts.map((contact) => {
        return (
          <li key={contact.id} className={s.contactItem}>
            <Contact contactInfo={contact} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
