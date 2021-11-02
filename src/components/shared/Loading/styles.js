import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  z-index: 2;
  cursor: pointer;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  font-weight: bold;
`;

export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 50px;
  color: white;
  transform: translate(-50%,-50%);
`;