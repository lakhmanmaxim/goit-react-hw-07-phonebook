import styles from '../ContactForm/contactForm.module.css';

import { getFilteredContacts } from 'redux/contacts/contacts-selectors';
import { deleteContact } from 'redux/contacts/contacts-slice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const ContactList = () => {

  const dispatch = useDispatch();
  const contacts = useSelector(getFilteredContacts);

  const contact = contacts.map(({ id, name, number }) => (
    <li key={id} className={styles.list_item}>
      <p className={styles.item_text}>{name}: </p>
      <span>{number}</span>
      <button
        onClick={() => dispatch(deleteContact(id))}
        className={styles.contacts_btn}
        type="button"
      >
        Delete
      </button>
    </li>
  ));

  return <ul className={styles.contacts_list}>{contact}</ul>;
};

export default ContactList;

ContactList.defaultProps = {
  contacts: [],
};

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   deleteContact: PropTypes.func.isRequired,
// };
