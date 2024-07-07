import React from "react";
import { InputLabel, MenuItem, Select, FormControl } from "@mui/material";
import styled from "styled-components";

const CustomFormControl = styled(FormControl)`
  margin-top: 16px;
  width: 100%;
`;


const InputCantidadContainer = styled.div`
  position: relative;
  margin-top: 8px;
`;

const CustomSelect = styled(Select)`
  width: 100%;
`;

const InputContainer = styled.div`
  position: relative;
`;

const CustomQuantityInput = styled.input`
  width: calc(100% - 32px); /* Restamos el padding horizontal */
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 8px;
`;

const InputCantidad = ({ value, onChange }) => {
  return (
    <CustomQuantityInput
      type="number"
      placeholder="Cantidad adicional"
      value={value}
      onChange={onChange}
    />
  );
};



const CustomSelectWrapper = ({ value, onChange }) => {
  return (
    <CustomFormControl variant="outlined">
      <InputLabel id="select-cantidad-label">Cantidad</InputLabel>
      <CustomSelect
  labelId="select-cantidad-label"
  id="select-cantidad"
  defaultValue={value} // Aquí cambiamos value a defaultValue
  onChange={onChange}
  label="Cantidad"
>
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>Más de 3 unidades</MenuItem>
      </CustomSelect>
    </CustomFormControl>
  );
};

export { InputCantidad, CustomSelectWrapper };
