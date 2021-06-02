import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const Container = styled.div`
  background-color: #f5f5f5;
  padding: 20px;
  margin: 0 20px 20px 20px;
  max-width: 300px;
  box-shadow: 0 0px 10px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

  button {
    border-radius: 4px;
    font-size: 16px;
    padding: 8px;
    text-align: center;
    width: 100%;
    margin-bottom: 0px;
  }
  p {
    text-align: center;
  }

  @media screen and (max-width: 368px) {
    p {
      font-size: small;
    }
  }

  h2 {
    margin-top: 0;
    text-align: center;
  }

  label {
    display: block;
    font-weight: bold;
    margin-bottom: 4px;
  }

  select,
  textarea {
    font-size: 16px;
    margin-bottom: 12px;
    width: 100%;
    height: 100%;
    position: relative;
  }
`;
