import styled from "styled-components";


//El color hexadecimal del lila pastel que estoy usando en la Navbar es #D3B8E8.
export const CardContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem;
    width: 270px;
    height: 80px;
    box-shadow: 1px rgba(0,0,0,.4);
    border-top: 1px solid #D3B8E8;
    border-bottom: 1px solid #D3B8E8;


    &:nth-child(1) {
        border-radius: 10px 0 0 10px;
        border-right: 0.5px dashed #D3B8E8;
        border-left: 1px solid #D3B8E8;
;
    };

    &:nth-child(2) {
      border-right: 0.5px dashed #D3B8E8;

    };

    &:nth-child(3) {
      border-right: 0.5px dashed #D3B8E8;


    };

    &:nth-child(4) {
        border-radius: 0 10px 10px 0;
        border-right: 1px solid #D3B8E8;

    };

    &.hasImage {
      
      img{
        width: 29px;
        height: 39px;

        
      }

    }
`;


export const Eminem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 170px;

       p{
         color: #777;
         margin-bottom: 0.2rem;

        }

     span{
         color: #D3B8E8;
         font-weight: 600;
         font-size: 10px;
         cursor: pointer;
    
     }
`;

export const IconoCard = styled.div`
  border: 1px solid #D3B8E8;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 39px; /* Ancho del contenedor igual al tamaño del icono */
  height: 39px; /* Alto del contenedor igual al tamaño del icono */
  box-shadow: 0 1px 1px 0 rgba(0,0,0,.3);
  overflow: hidden;

  svg {
    font-size: 18px;
    color: #777;

  };

  img{
    width: 18px;
    height: 18px;
    border-radius: 50%;
  };
  
`;



export const Caard = styled.div`

    display: flex;
    align-items: center;
    flex-direction: column;

`;