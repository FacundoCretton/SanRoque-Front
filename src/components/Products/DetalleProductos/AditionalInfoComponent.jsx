import React from "react";
import { Select, InputNumber } from "antd";
import { AddToCartButton, AdditionalInfo, AdditionalInfoText, AdditionalInfoTitle, Price, TotalPrice } from "./DetalleProductosStyles";

const { Option } = Select;

const AdditionalInfoComponent = ({ producto, totalPrice, addToCart, cantidad, handleCantidadChange, inputValue, handleCantidadAdicionalChange, cantidadAdicional }) => {
  const dropdownRender = (menu) => {
    return (
      <div>
        {menu}
        {inputValue === "masDe3" && (
          <InputNumber
            min={1} // Se establece el valor mínimo como 1
            value={cantidadAdicional}
            onChange={handleCantidadAdicionalChange}
            style={{ marginTop: 8 }}
          />
        )}
      </div>
    );
  };

  return (
    <AdditionalInfo>
      <AdditionalInfoTitle>Información adicional:</AdditionalInfoTitle>
      <AdditionalInfoText>Calificación: {producto.calificacion}</AdditionalInfoText>
      <AdditionalInfoText>Más formas de entrega...</AdditionalInfoText>
      <Price>Precio: ${producto.price}</Price>
      <Select
        value={inputValue || 1} // Se establece el valor predeterminado como 1 si inputValue es null
        style={{ width: 120 }}
        onChange={handleCantidadChange}
        dropdownRender={dropdownRender}
      >
        <Option value={1}>1</Option>
        <Option value={2}>2</Option>
        <Option value={3}>3</Option>
        <Option value={"masDe3"}>Más de 3 unidades</Option>
      </Select>
      <AddToCartButton onClick={addToCart}>Agregar al carrito</AddToCartButton>
      <TotalPrice>Total: ${totalPrice}</TotalPrice>
    </AdditionalInfo>
  );
};

export default AdditionalInfoComponent;
