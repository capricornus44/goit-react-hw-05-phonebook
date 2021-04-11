import { FilterContainer } from './FilterStyled';

const Filter = ({ filter, onChange }) => {
  return (
    <FilterContainer>
      <input
        type="text"
        value={filter}
        onChange={onChange}
        className="filterInput"
      />
    </FilterContainer>
  );
};

export default Filter;
