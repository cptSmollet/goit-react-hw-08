import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import styles from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts); // уже фильтрованные контакты
  const dispatch = useDispatch();

  return (
    <ul className={styles.contactList}>
      {contacts.length > 0 ? (
        contacts.map(({ id, name, number }) => (
          <li key={id} className={styles.contactItem}>
            <p>{name}: {number}</p>
            <button
              onClick={() => dispatch(deleteContact(id))}
              className={styles.deleteBtn}
            >
              Delete
            </button>
          </li>
        ))
      ) : (
        <li className={styles.noContacts}>No contacts found</li>
      )}
    </ul>
  );
};

export default ContactList;

