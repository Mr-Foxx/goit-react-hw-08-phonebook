import { FilterTitle, FilterIntput } from './Filter.styled';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { handleFindContact } from 'Redux/filterContactsSlice';

export const Filter = ({ title }) => {
  const dispatch = useDispatch();
  const query = useSelector(state => state.filter.filter);

  return (
    <>
      <FilterTitle>{title}</FilterTitle>
      <FilterIntput
        type="text"
        name="filter"
        value={query}
        onChange={evt => dispatch(handleFindContact(evt.target.value))}
      />
    </>
  );
};

Filter.propTypes = {
  title: PropTypes.string.isRequired,
};
