import styled from 'styled-components';

export const ContenedorPrincipal = styled.div`
  text-align: center;
  margin: 50px 0;
  padding: 20px;
  
`;

export const TituloProductos = styled.h2`
  color: #333;
  margin-bottom: 20px;
  text-transform: uppercase;
  font-family: "Bricolage Grotesque";
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 1px;
`;

export const ContenedorCategorias = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const CardCategoria = styled.div`
  padding: 5px 35px;
  background-color: ${({ selected }) => (selected ? '#FFCC80' : '#81D4FA')}; /* Colores actualizados */
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: ${({ selected }) => (selected ? '#FFB74D' : '#4FC3F7')}; /* Colores actualizados */
  }

  h2 {
    font-size: 18px;
    color: ${({ selected }) => (selected ? '#fff' : '#333')};
    font-weight: 500;
    text-transform: uppercase;
    margin: 0;
    font-family: "Quicksand";
  }
`;

export const SubcategoriasContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;



  .subcategory {
    cursor: pointer;
    padding: 8px 15px;
    margin: 0 5px;
    border-radius: 10px;
    background-color: #81D4FA;
    color: #333;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #4FC3F7;
    }
  }

  .selected {
    background-color: #FFCC80;
    color: #fff;

    &:hover {
      background-color: #FFB74D;
    }
  }
`;

export const CategoryIcon = styled.div`
    font-size: 23px;
    margin-bottom: 10px;
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;

    & img {
      width: 23px;
      height: 23px;
    }
  `;

export const IconH2 = styled.h2`

  font-size: 18px;
  color: #333;
  font-weight: 500;
  margin-top:10px;


`;

export const CategoryList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;



export const ElDivi = styled.div`

  /* display: flex; */
  gap:30px;



`;

export const TextoIntroductorio = styled.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 30px;
  font-family: "Plus Jakarta Sans";
  line-height: 1.6; /* Ajusta el interlineado */
  text-align: center; /* Justifica el texto */
`;


export const TextoIntroductorioContainer = styled.div`
display: flex;
justify-content: center;
margin-bottom: 50px;

`;

export const SpanText = styled.span`

font-weight: 800;
  font-size: 1.2rem;
  background: linear-gradient(83deg, #ffa100, #fb103d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

`;





export const CategoryIcon1 = styled.img`

width: 10px;
height: 10px;



`;