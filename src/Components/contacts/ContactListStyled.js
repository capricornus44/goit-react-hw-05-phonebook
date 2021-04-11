import styled from 'styled-components';

export const ContactListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: auto;
  margin-top: 20px;

  .item {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 50px;
    padding: 12px 8px;
    border-radius: 8px;
    border: 1px solid #2f3c87;

    color: #ffffff;
    box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.16);
    background-color: #181a1b;

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
    width: 35px;
    height: 35px;
    // border: 1px solid #dfe1e5;
    border: 1px solid #f1392d;
    border-radius: 8px;

    color: #ffffff;

    background-color: #f1392d;
    cursor: pointer;
  }

  .fa.fa-trash {
    font-size: 24px;
    color: #ffffea;
  }
`;
