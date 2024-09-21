import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateContact } from '../../redux/contacts/operations';
import styles from './EditContactForm.module.css';

const EditContactForm = ({ contact, onClose }) => {
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);
  const dispatch = useDispatch();

  useEffect(() => {
    setName(contact.name);
    setNumber(contact.number);
  }, [contact]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedContact = { ...contact, name, number };
    console.log('Updating contact:', updatedContact); 
    dispatch(updateContact(updatedContact));
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.editForm}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        placeholder="Name"
      />
      <input
        type="tel"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        required
        placeholder="Number"
      />
      <button type="submit">Update Contact</button>
      <button type="button" onClick={onClose}>Cancel</button>
    </form>
  );
};

export default EditContactForm;
