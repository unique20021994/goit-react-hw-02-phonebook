import PropTypes from 'prop-types';
import css from './Filter.module.css';

function Filter({ filter, changeFilter }) {
  return (
    <label className={css.label}>
      <p className={css.text}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={changeFilter}
      ></input>
    </label>
  );
}

Filter.prototype = {
  filter: PropTypes.string.isRequired,
};

export default Filter;
