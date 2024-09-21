import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import toast from 'react-hot-toast';
import EditContactForm from '../EditContactForm/EditContactForm';
import styles from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts); 
  const dispatch = useDispatch();
  const [selectedContact, setSelectedContact] = useState(null);

  const handleDelete = (id) => {
    confirmAlert({
      title: 'Confirmation',
      message: 'Do you really want to delete this contact?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            dispatch(deleteContact(id)); 
            toast.success('Contact deleted!'); 
          },
        },
        {
          label: 'No',
        },
      ],
    });
  };

  const handleEdit = (contact) => {
    setSelectedContact(contact);
  };

  const closeEditModal = () => {
    setSelectedContact(null);
  };

  return (
    <>
      <ul className={styles.contactList}>
        {contacts.length > 0 ? (
          contacts.map(({ id, name, number }) => (
            <li key={id} className={styles.contactItem}>
              <p>{name}: {number}</p>
              <div>
                <button
                  onClick={() => handleEdit({ id, name, number })} 
                  className={styles.editBtn}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(id)} 
                  className={styles.deleteBtn}
                >
                  Delete
                </button>
              </div>
            </li>
          ))
        ) : (
          <li className={styles.noContacts}>No contacts</li>
        )}
      </ul>

      {selectedContact && (
        <EditContactForm 
          contact={selectedContact} 
          onClose={closeEditModal} 
        />
      )}
    </>
  );
};

export default ContactList;




