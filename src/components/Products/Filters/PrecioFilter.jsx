// PrecioFilter.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaSortAmountDown, FaSortAmountUp } from "react-icons/fa";
import { togglePrecioSortOrder } from "../../../redux/categories/categoriesSlice";
import { TooltipWrapper, OrderPriceContainer, TooltipText } from "./PrecioFilterStyles";

const PrecioFilter = () => {
  const dispatch = useDispatch();
  const precioSortOrder = useSelector((state) => state.categories.precioSortOrder);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleToggleSortOrder = () => {
    dispatch(togglePrecioSortOrder());
  };

  return (
    <TooltipWrapper>
      <OrderPriceContainer onClick={handleToggleSortOrder} onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)}>
        {precioSortOrder === "asc" ? <FaSortAmountDown /> : <FaSortAmountUp />}
        <TooltipText show={showTooltip}>Ordenar por precio</TooltipText>
      </OrderPriceContainer>
    </TooltipWrapper>
  );
};

export default PrecioFilter;
