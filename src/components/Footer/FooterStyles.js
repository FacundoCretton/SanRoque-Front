import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px 0 0 0;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FooterLogo = styled.img`
  width: 100px;
  height: 100px;
`;

export const FooterMenu = styled.ul`
  display: flex;
  flex-direction:column;
`;

export const FooterMenuItem = styled.li`
  margin-right: 20px;
  font-size: 1rem;
  padding: 5px;

  &:last-child {
    margin-right: 0;
  }

  a {
    color: #fff;
    font-family: "Poppins";

    &:hover {
      text-decoration: underline;
    }
  }
`;



export const FooterText = styled.div`
    text-align: center;
    padding: 20px 0 1px 0;


  p {
    font-family: "Noto Sans JP";


  }
    

`;