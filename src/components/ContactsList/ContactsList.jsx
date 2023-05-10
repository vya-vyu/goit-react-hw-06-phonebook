import s from './ContactsList.module.css';
import PropTypes from 'prop-types';

const ContactsList = ({ contacts, onDelete }) => {
  return (
    <>
      <ul>
        {contacts.map(({ id, name, number }) => {
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
                    onDelete(e.target.id);
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

ContactsList.propTypes = {
  contacts: PropTypes.array,
  onDelete: PropTypes.func,
};

export default ContactsList;
