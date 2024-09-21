import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.contactForm_form}>
      <label className={styles.contactForm_formLabel}>
        Name
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={styles.contactForm_formData}
        />
      </label>
      <label className={styles.contactForm_formLabel}>
        Number
        <input
          type="tel"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className={styles.contactForm_formData}
        />
      </label>
      <button type="submit" className={styles.contactForm_formBtn}>
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
