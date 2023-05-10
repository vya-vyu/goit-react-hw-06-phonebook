import s from './FilterContacts.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { contactsFilter } from 'redux/store';

const FilterContacts = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  return (
    <div className={s.filterWrapper}>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        id="filter"
        type="text"
        name="name"
        value={filter}
        onChange={e => dispatch(contactsFilter(e.currentTarget.value))}
        className={s.search}
      />
    </div>
  );
};

export default FilterContacts;
