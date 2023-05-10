import s from './FilterContacts.module.css';
import PropTypes from 'prop-types';

const FilterContacts = ({ filter, setFilter }) => {
  return (
    <div className={s.filterWrapper}>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        id="filter"
        type="text"
        name="name"
        value={filter}
        onChange={e => setFilter(e.currentTarget.value)}
        className={s.search}
      />
    </div>
  );
};

FilterContacts.propTypes = {
  onFilter: PropTypes.func,
};
export default FilterContacts;
