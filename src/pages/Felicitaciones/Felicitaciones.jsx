import { useNavigate } from 'react-router-dom';

import Button from '../../UI/Button/Button';
import exito from "../../Assets/compra-exitosa.png"

import {
  Congrats,
  ContainerInfoStyled,
  TextStyled,
  TitleStyled,
} from './FelicitacionesStyles';

const Felicitaciones = () => {
  const navigate = useNavigate();
  return (
    <Congrats>
      <TextStyled>
        <img
          src={exito}
          alt=''
        />
        <ContainerInfoStyled>
          <TitleStyled>¡Felicitaciones!</TitleStyled>
          <p>Tu pedido fué realizado</p>
        </ContainerInfoStyled>
        <Button onClick={() => navigate('/')}>Volver</Button>
      </TextStyled>
    </Congrats>
  );
};

export default Felicitaciones;
