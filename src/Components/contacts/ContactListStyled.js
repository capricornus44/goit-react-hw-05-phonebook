import styled from 'styled-components';

export const ContactListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  .item {
    display: flex;
    justify-content: flex-end;
    width: 100%;

    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }

  .num {
    margin-left: auto;
  }

  .deleteButton {
    display: inline-block;
    margin-left: 40px;
    border: 1px solid #dfe1e5;
    border-radius: 8px;
    cursor: pointer;

    &:hover,
    &:focus {
      outline: none;
      box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.16);
    }
  }
`;
