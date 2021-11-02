import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  background-color: var(--darkGrey);
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxWidth);
  padding: 10px 0;
  top: 0;
`;

export const LogoImg = styled.img`
  width: 200px;
  @media screen and (max-width: 500px) {
    width: 150px;
  }
`;
