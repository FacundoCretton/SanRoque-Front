import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardProducto from "./CardProducto";
import ListProductos from "../ListProductos/ListProductos";
import Button from "../../../UI/Button/Button";
import { CardProductosContainer, FiltersIconsProducts, LoadButtonContainer, SectionProductosContainer } from "../ProductsStyles";
import { INITIAL_LIMIT } from "../../../utils/constants";
import { FaList, FaTh } from "react-icons/fa";
import { ListProductosContainer } from "../ListProductos/ListProductosStyles";
import PrecioFilter from "../Filters/PrecioFilter";
import Categorias from "../../Categories/Categorias";

const CardsProductos = () => {
    const [limit, setLimit] = useState(INITIAL_LIMIT);
    const [viewType, setViewType] = useState("cards");
    const selectedCategory = useSelector(state => state.categories.selectedCategory);
    const products = useSelector(state => state.apiProducts.items); // Cambiado para usar apiProducts
    const selectedSubcategory = useSelector(state => state.categories.selectedSubcategory);
    const precioSortOrder = useSelector(state => state.categories.precioSortOrder);

    const dispatch = useDispatch();

    const toggleView = () => {
        setViewType(prevType => (prevType === "cards" ? "list" : "cards"));
    };

    useEffect(() => {
        setLimit(INITIAL_LIMIT);
    }, [selectedCategory, selectedSubcategory]);

    const sortProductsByPrice = (products) => {
        if (precioSortOrder === "asc") {
            return [...products].sort((a, b) => a.price - b.price);
        } else if (precioSortOrder === "desc") {
            return [...products].sort((a, b) => b.price - a.price);
        } else {
            return products;
        }
    };

    const filteredProducts = 
        selectedCategory && selectedCategory !== "Todos"
            ? selectedSubcategory
                ? products.filter(
                    (product) => product.category === selectedCategory && product.subcategory === selectedSubcategory.name
                )
                : products.filter((product) => product.category === selectedCategory)
            : selectedCategory === "Todos"
                ? selectedSubcategory
                    ? products.filter((product) => product.subcategory === selectedSubcategory.name)
                    : products
                : products;

    const sortedProducts = sortProductsByPrice(filteredProducts);
    const stockAvailableProducts = sortedProducts.filter(product => product.stock);
    const outOfStockProducts = sortedProducts.filter(product => !product.stock);
    const orderedProducts = [...stockAvailableProducts, ...outOfStockProducts];
    const visibleProducts = orderedProducts.slice(0, limit);

    const handleLoadMoreClick = () => {
        setLimit(prevLimit => Math.min(prevLimit + INITIAL_LIMIT, orderedProducts.length));
    };

    const handleLoadLessClick = () => {
        setLimit(INITIAL_LIMIT);
    };

    return (
        <>
            <Categorias />
            <SectionProductosContainer>
                <FiltersIconsProducts>
                    <Button 
                        onClick={toggleView}
                        radius="10" 
                        style={{ marginRight: "10px" }}
                    >
                        {viewType === "cards" ? <FaList /> : <FaTh />}
                    </Button>
                    <PrecioFilter />
                </FiltersIconsProducts>
                {viewType === "cards" ? (
                    <ListProductosContainer>
                    {visibleProducts.map(product => (
                        <ListProductos {...product} key={product._id} />
                    ))}
                     </ListProductosContainer>
                ) : (
                    <CardProductosContainer>
                        {visibleProducts.map(product => (
                            <CardProducto {...product} key={product._id} />
                        ))}
                    </CardProductosContainer>
                )}
                <LoadButtonContainer>
                    {(viewType === "cards" || viewType === "list") && (
                        <>
                            <Button
                                onClick={handleLoadLessClick}
                                radius="10"
                                secondary="true"
                                disabled={limit <= INITIAL_LIMIT}
                                padding='1rem 2rem'
                                icon={true}
                                direction="up"
                            >
                                Ver Menos
                            </Button>
                            <Button
                                onClick={handleLoadMoreClick}
                                disabled={limit >= orderedProducts.length}
                                radius="10"
                                padding='1rem 2rem'
                                icon={true}
                                direction="down"
                            >
                                Ver Más
                            </Button>
                        </>
                    )}
                </LoadButtonContainer>
            </SectionProductosContainer>
        </>
    );
};

export default CardsProductos;
