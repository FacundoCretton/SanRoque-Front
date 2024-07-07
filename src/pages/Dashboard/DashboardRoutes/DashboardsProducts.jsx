import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Button, Modal, Input, notification, Form } from 'antd';
import { fetchApiProducts, addApiProduct, updateApiProduct, deleteApiProduct } from '../../../redux/products/apiProductsSlice';
import AddProductForm from '../utils/AddProductForm';

const { Search } = Input;

const DashboardProducts = () => {
    const dispatch = useDispatch();
    const apiProducts = useSelector((state) => state.apiProducts.items);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);
    const [form] = Form.useForm();

    useEffect(() => {
        dispatch(fetchApiProducts());
    }, [dispatch]);

    useEffect(() => {
        setFilteredProducts(apiProducts);
    }, [apiProducts]);

    const handleSearch = (event) => {
        const value = event.target.value.toLowerCase();
        const filtered = apiProducts.filter(product =>
            product.name.toLowerCase().includes(value)
        );
        setFilteredProducts(filtered);
    };

    const handleAddProduct = async (values) => {
        try {
            await dispatch(addApiProduct(values)).unwrap();
            notification.success({
                message: "Producto agregado",
                description: "El producto ha sido agregado exitosamente."
            });
            setIsModalOpen(false);
            form.resetFields();
        } catch (error) {
            console.error("Error al agregar el producto:", error);
            notification.error({
                message: "Error",
                description: "No se pudo agregar el producto."
            });
        }
    };

    const handleUpdateProduct = async (values) => {
        try {
            const updatedProduct = {
                ...values,
                beneficios: values.beneficios.split(',').map(item => item.trim())
            };
            console.log('Datos a enviar:', updatedProduct); // Agrega este log
    
            await dispatch(updateApiProduct({ id: editingProduct._id, updatedProduct })).unwrap();
            notification.success({
                message: "Producto actualizado",
                description: "El producto ha sido actualizado exitosamente."
            });
            setIsEditModalOpen(false);
            form.resetFields();
            setEditingProduct(null);
        } catch (error) {
            console.error("Error al actualizar el producto:", error);
            notification.error({
                message: "Error",
                description: "No se pudo actualizar el producto."
            });
        }
    };
    
    const handleDeleteProduct = async (id) => {
        try {
            await dispatch(deleteApiProduct(id)).unwrap();
            notification.success({
                message: "Producto eliminado",
                description: "El producto ha sido eliminado exitosamente."
            });
        } catch (error) {
            console.error("Error al eliminar el producto:", error);
            notification.error({
                message: "Error",
                description: "No se pudo eliminar el producto."
            });
        }
    };

    const showAddModal = () => {
        setIsModalOpen(true);
    };

    const showEditModal = (product) => {
        setEditingProduct(product);
        form.setFieldsValue({
            ...product,
            beneficios: product.beneficios ? product.beneficios.join(', ') : ''
        });
        setIsEditModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        setIsEditModalOpen(false);
        form.resetFields();
        setEditingProduct(null);
    };

    const columns = [
        { title: "Imagen", dataIndex: "img", key: "img", render: (img) => <img src={img} alt="product" style={{ width: 50 }} /> },
        { title: "ID", dataIndex: "id", key: "id" },
        { title: "Nombre", dataIndex: "name", key: "name", sorter: (a, b) => a.name.localeCompare(b.name) },
        { title: "Precio", dataIndex: "price", key: "price", sorter: (a, b) => a.price - b.price },
        { title: "Categoría", dataIndex: "category", key: "category", sorter: (a, b) => a.category.localeCompare(b.category) },
        { title: "Subcategoría", dataIndex: "subcategory", key: "subcategory", sorter: (a, b) => a.subcategory.localeCompare(b.subcategory) },
        { title: "Stock", dataIndex: "stock", key: "stock", render: (stock) => (stock > 0 ? `${stock} disponibles` : "Sin stock"), sorter: (a, b) => a.stock - b.stock },
        {
            title: "Acciones",
            key: "actions",
            render: (text, record) => (
                <>
                    <Button onClick={() => showEditModal(record)}>Editar</Button>
                    <Button onClick={() => handleDeleteProduct(record._id)} danger style={{ marginLeft: 10 }}>Eliminar</Button>
                </>
            ),
        },
    ];

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                <Search placeholder="Buscar productos" onChange={handleSearch} style={{ width: 200 }} />
                <Button type="primary" onClick={showAddModal}>
                    Agregar Producto
                </Button>
            </div>
            <Table dataSource={filteredProducts} columns={columns} rowKey="_id" />

            <Modal
                title="Agregar Producto"
                open={isModalOpen}
                onCancel={handleCancel}
                footer={null}
            >
                <AddProductForm
                    setIsModalOpen={setIsModalOpen}
                    handleAddProduct={handleAddProduct}
                />
            </Modal>

            <Modal
                title="Editar Producto"
                open={isEditModalOpen}
                onCancel={handleCancel}
                footer={null}
            >
                <Form form={form} onFinish={handleUpdateProduct}>
                    <Form.Item
                        name="name"
                        label="Nombre"
                        rules={[{ required: true, message: "Por favor ingrese el nombre del producto" }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="price"
                        label="Precio"
                        rules={[{ required: true, message: "Por favor ingrese el precio del producto" }]}
                    >
                        <Input type="number" />
                    </Form.Item>
                    <Form.Item
                        name="category"
                        label="Categoría"
                        rules={[{ required: true, message: "Por favor ingrese la categoría del producto" }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="subcategory"
                        label="Subcategoría"
                        rules={[{ required: true, message: "Por favor ingrese la subcategoría del producto" }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="img"
                        label="Imagen"
                        rules={[{ required: true, message: "Por favor ingrese la URL de la imagen del producto" }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="imgDorso"
                        label="Imagen de Dorso"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="stock"
                        label="Stock"
                        rules={[{ required: true, message: "Por favor ingrese el stock del producto" }]}
                    >
                        <Input type="number" />
                    </Form.Item>
                    <Form.Item
                        name="beneficios"
                        label="Beneficios"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Guardar
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default DashboardProducts;
