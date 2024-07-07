// Categorias.js
import React from "react";
import  Categoria  from "./Categoria";
import { useDispatch, useSelector } from "react-redux";
import { selectSubcategory } from "../../redux/categories/categoriesSlice";
import {
  ContenedorPrincipal,
  TituloProductos,
  ContenedorCategorias,
  SubcategoriasContainer,
  TextoIntroductorio,
  TextoIntroductorioContainer,
  SpanText,
  CategoryIcon,
} from "./CategoriasStyles";
import { CategoriaContainer, containerVariants } from "../Products/ProductsStyles";

const Categorias = () => {
  const categories = useSelector((state) => state.categories.categories);
  const selectedCategory = useSelector((state) => state.categories.selectedCategory);
  const selectedSubcategory = useSelector((state) => state.categories.selectedSubcategory);
  const dispatch = useDispatch();
  

  const handleSubcategoryClick = (subcategory) => {
    dispatch(selectSubcategory(subcategory));
  };

  return (
    <ContenedorPrincipal id="productos">
      <TituloProductos>Nuestros productos</TituloProductos>
      <TextoIntroductorioContainer>
      <TextoIntroductorio>
        Descubre nuestros productos de alta calidad para tus <SpanText>mascotas</SpanText>.
      </TextoIntroductorio>
      </TextoIntroductorioContainer>
      <ContenedorCategorias>
        {categories.map((category) => (
          <CategoriaContainer key={category.id} variants={containerVariants} initial="hidden" animate="visible">
          <Categoria {...category} />
        </CategoriaContainer>
        ))}
      </ContenedorCategorias>
      {selectedCategory && (
        <SubcategoriasContainer>
          {categories
            .find((cat) => cat.category === selectedCategory)
            ?.subcategories.map((subcategory) => (
              <div
                key={subcategory.id}
                onClick={() => handleSubcategoryClick(subcategory)}
                className={`subcategory ${selectedSubcategory && subcategory.id === selectedSubcategory.id ? 'selected' : ''}`}
              >
               <CategoryIcon>{subcategory.icon}</CategoryIcon> {subcategory.name}
              </div>
            ))}
        </SubcategoriasContainer>
      )}
    </ContenedorPrincipal>
  );
};

export default Categorias;
