import PropTypes from 'prop-types';
import styles from '../ContactForm/contactForm.module.css';

const ContactFilter = ({value, onInputChange }) => {
  return (
    <label className={styles.contacts_label}>
      Find contacts:
      <input
        onChange={onInputChange}
        name="filter"
        value={value}
        className={styles.contacts_input}
        type="text"
        placeholder="Enter contact name or phone number"
      />
    </label>
  );
};

export default ContactFilter;

ContactFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};
