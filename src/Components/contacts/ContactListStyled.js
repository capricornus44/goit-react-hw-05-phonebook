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
`;
