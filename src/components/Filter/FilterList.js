import PropTypes from 'prop-types';
import css from '../ContactForm/Form.module.css';

function FilterList({ value, onChange }) {
    return (
        <label className={css.label}>
          <p>Find contacts by name:</p>
          <input
            type="text"
            className={css.input}
            value={value} 
            onChange={onChange} 
             />
        </label>
    );
}

FilterList.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default FilterList;
