import css from "./ContactsList.module.css";
import PropTypes from 'prop-types';
import ContactItem from './ContactItem';

function ContactList({ contacts, onDeleteContact }) {
    return (
        <ul className={css.phoneList}>
            {contacts.map(({ name, id, number }) => (
                <ContactItem
                    name={name}
                    number={number}
                    key={id}
                    id={id}
                    onDeleteContact={onDeleteContact}
                />
            ))}
        </ul>
    );
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
        }),
    ),
    onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;



// import PropTypes from "prop-types";

// const ContactsList = ({ contact, ondeleteContact }) => (
//   <ul className={css.phoneList}>
//     {contact.map(({ id, name, number }) => (
//       <li key={id} className={css.ContactsList}>
//         <p className={css.name}>{name}:</p>
//         <p className={css.number}>{number}</p>
//         <button
//           onClick={() => ondeleteContact(id)}
//           className={css.button}
//           type="button"
//         >
//           Delete
//         </button>
//       </li>
//     ))}
//   </ul>
// );

// ContactsList.propTypes = {
//   contact: PropTypes.array,
//   ondeleteContact: PropTypes.func,
// };
