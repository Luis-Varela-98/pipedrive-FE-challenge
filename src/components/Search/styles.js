import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: var(--white);
  display: flex;
  padding: 15px;
  margin-bottom: 10px;
  height: 100px;
  border-style: solid;
  border-radius: 3px;
  border-width: 2px;
  border-color: var(--lightGrey);
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const Container = styled.div`
  font-weight: bold;
`;

export const Content = styled.div`
  align-items: center;
  position: relative;
  max-width: var(--maxWidth);
  width: 200px;
  height: 40px;
  background: var(--lightGrey);
  border-radius: 40px;
  color: var(--white);

  img {
    position: absolute;
    left: 10px;
    top: 10px;
    width: 20px;
  }

  input {
    font-size: var(--fontSmall);
    position: absolute;
    left: 0;
    margin: 12px 0;
    padding: 0 0 0 40px;
    border: 0;
    width: 95%;
    background: transparent;
    height: 15px;
    color: var(--medGrey);

    :focus {
      outline: none;
    }
  }
`;

export const AddButton = styled.img`
  opacity: 0.7;
  
  :hover {
    opacity: 1;
  }
`;