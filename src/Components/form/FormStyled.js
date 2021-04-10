import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 20px;

  .formLabel {
    display: block;
    width: 100%;
    margin-bottom: 20px;
  }

  .formInput {
    display: block;
    width: 100%;
    height: 35px;
    margin-top: 5px;
    padding: 12px 16px;
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

  .button {
    display: block;
    width: 100%;
    height: 35px;
    border: 1px solid #dfe1e5;
    border-radius: 8px;
    outline: none;
    cursor: pointer;

    &:hover,
    &:focus {
      outline: none;
      box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.16);
    }
  }
`;
