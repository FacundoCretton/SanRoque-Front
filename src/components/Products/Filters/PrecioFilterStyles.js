// PrecioFilterStyles.js
import styled from "styled-components";

export const TooltipWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const OrderPriceContainer = styled.div`
  border-radius: 15px;
  color: #fff;
  background-color: #1976d2;  
  padding: 0.5rem 1rem;
  cursor: pointer;
  position: relative;
`;

export const TooltipText = styled.div`
  position: absolute;
  top: 50%;
  left: calc(100% + 10px);
  transform: translateY(-50%);
  background-color: #333;
  color: #fff;
  padding: 5px;
  border-radius: 5px;
  font-size: 14px;
  visibility: ${({ show }) => (show ? "visible" : "hidden")}
`; 
