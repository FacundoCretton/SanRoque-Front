import React from "react";
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import { selectCategory } from "../../redux/categories/categoriesSlice";
import { CardCategoria, CategoryIcon, ElDivi, IconH2 } from "./CategoriasStyles";

const Categoria = ({ name, category, icon }) => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.categories.selectedCategory);

  const handleCategoryClick = () => {
    dispatch(selectCategory(category));
  };

  return (
    <CardCategoria 
      selected={category === selectedCategory} 
      onClick={handleCategoryClick}
    >
      <ElDivi>
        <CategoryIcon>{icon}</CategoryIcon>
        <CategoryIcon>
          <IconH2>{name}</IconH2>
        </CategoryIcon>
      </ElDivi>
    </CardCategoria>
  );
};

// Añadir prop-types
Categoria.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired, // node permite cualquier tipo de React (número, string, elemento, o fragmento)
};

export default Categoria;
