import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 1170px;
  height: 100vh;
  padding: 0 15px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;

  // background-color: #181a1b;

  .section {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 350px;
    height: auto;
    padding: 20px;
    border-radius: 5px;
    border: 1px solid #2f3c87;
    // background-color: #ffffff;
    background-color: #1c1f20;

    box-shadow: 0 4px 6px 4px rgba(0, 0, 0, 0.2);

    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  .errorMessage {
    color: red;
    margin-bottom: 40px;
  }
`;
