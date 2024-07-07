import styled from 'styled-components';

export const TextStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(70vh - 100px);
`;

export const TitleStyled = styled.h1`
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const ContainerInfoStyled = styled.div`
  text-align: center;

  & p {
    margin-bottom: 20px;
  }
`;

export const PatternStyled = styled.img`
  width: 100%;
  position: fixed;
  z-index: -100000000;
  bottom: -80px;
`;


export const Congrats= styled.div`
margin-top: 100px;
margin-bottom: 50px;
`;