import React from 'react';
// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'Redax/contacts/selectors';
import { setFilter } from 'Redax/contacts/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const searchContact = evt => {
    dispatch(setFilter(evt.target.value.toLowerCase()));
  };

  return (
    <div>
      <label>
        Search
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={searchContact}
        ></input>
      </label>
    </div>
  );
};

// Filter.propTypes = {
//   filter: PropTypes.string.isRequired,
//   searchContact: PropTypes.func.isRequired,
// };

export default Filter;
