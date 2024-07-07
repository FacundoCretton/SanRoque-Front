import React, { useState } from "react";
import PropTypes from 'prop-types';
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { DetallesWrapper, TituloH1, ProductImage, ProductDetails, Price, Specifications, DescriptionWrapper, DescriptionTitle, DescriptionText, BeneficiosWrapper, ImageColumn, BeneficioIcon } from "./DetalleProductosStyles";
import { Divider, List, Typography } from "antd"; // Importar List y Typography de Ant Design
import CompositionTable from "./CompositionTable";
import AdditionalInfoComponent from "./AditionalInfoComponent";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";
import { handleBackClick, handleForwardClick } from "../Flechas";
import { SmileOutlined } from '@ant-design/icons'; // Icono de Ant Design

const { Title, Text } = Typography; // Ant Design Typography

const DetalleProducto = () => {
  const { id } = useParams();
  const productsByCategory = useSelector((state) => state.products.products);
  const [cantidad, setCantidad] = useState(1);
  const [cantidadAdicional, setCantidadAdicional] = useState(0);
  const [inputValue, setInputValue] = useState(null);
  const [mostrarDorso, setMostrarDorso] = useState(false);

  const allProducts = Object.values(productsByCategory).flat();
  const producto = allProducts.find((product) => product.id === parseInt(id));
  const specifications = useSelector((state) =>
    state.specifications.specifications[id]
  );

  if (!producto) {
    return <p>Producto no encontrado</p>;
  }

  const handleCantidadChange = (value) => {
    if (value === "masDe3") {
      setInputValue(value);
    } else {
      setCantidadAdicional(0);
      setInputValue(value);
    }
    setCantidad(value);
  };

  const handleCantidadAdicionalChange = (value) => {
    setCantidadAdicional(value);
  };

  const addToCart = () => {
    const total = cantidad === "masDe3" ? cantidadAdicional : cantidad;
    console.log(
      `Agregado al carrito: ${total} unidades de ${producto.name}`
    );
  };

  const totalPrice =
    producto.price * (cantidad === "masDe3" ? cantidadAdicional : cantidad);

  return (
    <DetallesWrapper>
      <ImageColumn>
        <ProductImage
          src={mostrarDorso ? producto.imgDorso : producto.img}
          alt={producto.name}
          className={`${mostrarDorso ? "rotar dorso-visible" : ""}`}
        />
        <div className="flechas">
          <RiArrowLeftLine onClick={() => handleBackClick(mostrarDorso, setMostrarDorso)} />
          <RiArrowRightLine onClick={() => handleForwardClick(mostrarDorso, setMostrarDorso)} />
        </div>
      </ImageColumn>

      <ProductDetails>
        <TituloH1>{producto.name}</TituloH1>
        <Divider />
        <DescriptionWrapper>
          <DescriptionTitle>Descripción:</DescriptionTitle>
          <DescriptionText>{specifications.desc}</DescriptionText>
        </DescriptionWrapper>
        <Price>Precio: ${producto.price}</Price>

        {specifications && (
          <Specifications>
            {specifications.beneficios && (
              <BeneficiosWrapper>
                <Title level={3}>Beneficios:</Title>
                <ListBeneficios beneficios={specifications.beneficios} />
              </BeneficiosWrapper>
            )}
            <Title level={2}>Especificaciones:</Title>
            {specifications.composicion && (
              <CompositionTable composition={specifications.composicion} />
            )}
          </Specifications>
        )}
      </ProductDetails>

      <AdditionalInfoComponent
        producto={producto}
        totalPrice={totalPrice}
        addToCart={addToCart}
        cantidad={cantidad}
        handleCantidadChange={handleCantidadChange}
        inputValue={inputValue}
        handleCantidadAdicionalChange={handleCantidadAdicionalChange}
        cantidadAdicional={cantidadAdicional}
      />
    </DetallesWrapper>
  );
};

// Componente interno ListBeneficios
const ListBeneficios = ({ beneficios }) => {
  return (
    <BeneficiosWrapper>
      <List
        dataSource={beneficios}
        renderItem={(beneficio, index) => (
          <List.Item>
            <BeneficioIcon>
              <SmileOutlined style={{ color: "#faad14" }} />
            </BeneficioIcon>
            <Text>{beneficio}</Text>
            {index !== beneficios.length - 1 && <Divider />}
          </List.Item>
        )}
      />
    </BeneficiosWrapper>
  );
}

// Añadir prop-types
DetalleProducto.propTypes = {
  producto: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    imgDorso: PropTypes.string,
    price: PropTypes.number.isRequired,
  }),
  specifications: PropTypes.shape({
    desc: PropTypes.string,
    beneficios: PropTypes.arrayOf(PropTypes.string),
    composicion: PropTypes.arrayOf(PropTypes.object),
  }),
  cantidad: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  cantidadAdicional: PropTypes.number,
  inputValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  mostrarDorso: PropTypes.bool,
  handleCantidadChange: PropTypes.func,
  handleCantidadAdicionalChange: PropTypes.func,
  addToCart: PropTypes.func,
  totalPrice: PropTypes.number,
};

// Añadir prop-types a ListBeneficios
ListBeneficios.propTypes = {
  beneficios: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default DetalleProducto;
