import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import Loader from "../../components/Loader/Loader"; 
import { fetchContacts } from "../../redux/contacts/operations";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import css from './ContactsPage.module.css'; 

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const status = useSelector(state => state.contacts.status);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (status === 'loading') {
    return <Loader />;
  }

  return (
    <div className={css.container}>
      <div className={css.item}>
        <ContactForm />
      </div>
      <div className={css.item}>
        <SearchBox />
      </div>
      <div className={css.item}>
        <ContactList contacts={contacts} />
      </div>
    </div>
  );
};

export default ContactsPage;

