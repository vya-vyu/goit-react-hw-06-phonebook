import s from './ContactsList.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/constantsSlice';

const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.data);
  const filter = useSelector(state => state.filter);

  const filterContacts = () => {
    if (filter === '') return contacts;
    return contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const filteredContacts = filterContacts();

  return (
    <>
      <ul>
        {filteredContacts.map(({ id, name, number }) => {
          return (
            <li key={id}>
              <div className={s.item}>
                {' '}
                <span>
                  {name}: {number}
                </span>
                <button
                  id={id}
                  type="button"
                  className={s.btn}
                  onClick={e => {
                    dispatch(deleteContact(e.target.id));
                  }}
                >
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ContactsList;
