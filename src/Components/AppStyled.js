import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: center;
  // align-items: flex-start;
  justify-content: center;
  align-items: center;
  width: 1170px;
  height: 100vh;
  padding: 0 15px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 80px;

  .section {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 350px;
    height: auto;
    padding: 20px;
    border-radius: 10px;
    background-color: #ffffffea;
    box-shadow: 0 4px 6px 4px rgba(0, 0, 0, 0.2);

    &:not(:last-child) {
      // margin-right: 32px;
      margin-bottom: 20px;
    }
  }
`;
