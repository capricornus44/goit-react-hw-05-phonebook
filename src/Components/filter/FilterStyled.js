import styled from 'styled-components';

export const FilterContainer = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;

  .filterInput {
    display: block;
    width: 100%;
    height: 35px;
    margin-top: 5px;
    padding-left: 12px;
    padding-left: 12px;
    border: 1px solid #dfe1e5;
    border-radius: 8px;
    outline: none;

    font-size: 16px;
    color: rgba(0, 0, 0, 0.8);

    &:hover,
    &:focus {
      outline: none;
      box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.16);
    }
  }
`;
