import styled from 'styled-components';

export const Wrapper = styled.div`
`;

export const Content = styled.div`
  display: flex;
  padding: 15px;
  flex-direction: column;
`;

export const Container = styled.div``;

export const ModalContainer = styled.div`
  margin-bottom: 10px;
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: center;
  color: var(--medGrey);
  flex-direction: column;
  margin-top: 10px;
`;

export const ModalContent = styled.div`
  align-items: center;
  justify-content: center;
  width: 100%;
  display: flex;
  margin-top: 10px;
  flex-direction: row;
`;

export const Label = styled.div`
  display: flex;
  width: 30%;
  justify-content: end;
  color: var(--medGrey);
  margin-right: 20px;
`;

export const Information = styled.div`
  display: flex;
  width: 70%;
  justify-content: start;
  color: #ababab;
`;

export const Header = styled.div`
  display: flex;
  background-color: var(--lightGrey);
  width: 100%;
  height: 50px;
  justify-content: space-between;
  flex-direction: row;
  font-weight: bold;
  padding: 10px;
  align-items: center;
`;

export const PersonContainer = styled.div`
  background-color: var(--white);
  display: flex;
  padding: 35px;
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

export const Separator = styled.hr`
  border-bottom: 1px solid var(--lightGrey);
`;

export const Footer = styled.div`
  display: flex;
  background-color: var(--lightGrey);
  height: 50px;
  justify-content: space-between;
  flex-direction: row;
  font-weight: bold;
  padding: 10px;
  align-items: center;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

export const Picture = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;

export const ModalPicture = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 70px;
`;

export const Button = styled.button`
  align-items: center;
  background-color: white;
  border-radius: 3px;
  font-weight: bold;
  width: 70px;
  height: 30px;
  outline: none;
  border: none;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  color: var(--darkGrey);
  opacity: 0.7;

  :hover {
    opacity: 1;
  }
`;