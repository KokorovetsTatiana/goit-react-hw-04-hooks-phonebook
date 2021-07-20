import { useState, useEffect } from "react";
import PropTypes, { number } from "prop-types";
import css from "../Phonebook/Phonebook.module.css";


export default function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      
      case 'number':
        setNumber(value);
        break;
      
      default:
        return;
    }
  };

  const handleSubmit = event => {

  }

  useEffect(() => {
    window.localStorage.setItem('name', JSON.stringify(name))
  }, [name]);

  return (
      <form onSubmit={handleSubmit} className={css.form}>
        <label className={css.label}>
          Name
          <input
            className={css.input}
            type="text"
            value={name}
            onChange={handleChange}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label className={css.label}>
          Number
          <input
            className={css.input}
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
            required
          />
        </label>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </form>
    );
}

// const initialState = {
//   name: "",
//   number: "",
// };

// class Form extends Component {
//   state = { ...initialState };

//   onHandleChange = (event) => {
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
//   };
//   onHandleSubmit = (event) => {
//     event.preventDefault();
//     this.props.addContact(this.state);
//     this.setState({ ...initialState });
//   };

//   render() {
//     const { name, number } = this.state;
//     return (
//       <form onSubmit={this.onHandleSubmit} className={css.form}>
//         <label className={css.label}>
//           Name
//           <input
//             className={css.input}
//             type="text"
//             value={name}
//             onChange={this.onHandleChange}
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//             required
//           />
//         </label>
//         <label className={css.label}>
//           Number
//           <input
//             className={css.input}
//             type="tel"
//             name="number"
//             value={number}
//             onChange={this.onHandleChange}
//             pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
//             title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
//             required
//           />
//         </label>
//         <button className={css.button} type="submit">
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }

// Form.propTypes = {
//   name: PropTypes.string,
//   number: PropTypes.number,
// };

// export default Form;