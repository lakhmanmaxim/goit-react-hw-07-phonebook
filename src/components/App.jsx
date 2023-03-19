import { useSelector, useDispatch } from 'react-redux';

import { getFilteredContacts } from 'redux/contacts/contacts-selectors';
import { addContact } from '../redux/contacts/contacts-slice';
import { getFilter } from 'redux/filter/filter-selectors';
import { setFilter } from '../redux/filter/filter-slice';

import ContactForm from './ContactForm/ContactForm';
import ContactFilter from './ContactsFilter/ContactsFilter';
import ContactList from './ContactList/ContactList';

// import contactsArray from './contactsArray';

import styles from './ContactForm/contactForm.module.css';

const App = () => {
  const contacts = useSelector(getFilteredContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const isDublicateContact = (name, number) => {
    const normalizedName = name.toLowerCase();
    const phoneNumber = number;
    const contact = contacts.find(({ name, number }) => {
      return name.toLowerCase() === normalizedName || number === phoneNumber;
    });
    return Boolean(contact);
  };

  const handleAddContact = ({ name, number }) => {
    if (isDublicateContact(name, number)) {
      return alert(
        `The contact "${name}" or number "${number}" alredy exist your contact list. Please, check name or number of contact and try again`
      );
    }

    const action = addContact({ name, number });
    dispatch(action);
  };

  const onFilterInputChange = evt => {
    dispatch(setFilter(evt.target.value));
  };

  return (
    <div className={styles.wrapper}>
      <ContactForm onSubmit={handleAddContact} />

      <div className={styles.contacts}>
        <h2 className={styles.title}>Contacts:</h2>
        <ContactFilter value={filter} onInputChange={onFilterInputChange} />
        <ContactList
        // contacts={filter}
        // deleteContact={handleDeleteContact}
        />
      </div>
    </div>
  );
};

export default App;
