import PropTypes from 'prop-types';
import { FilterContainer } from './FilterStyled';

const Filter = ({ filter, onChange }) => {
  return (
    <FilterContainer>
      <label className="filterLabel">
        Filter
        <input
          type="text"
          value={filter}
          placeholder="Find contacts by name"
          onChange={onChange}
          className="filterInput"
        />
      </label>
    </FilterContainer>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
