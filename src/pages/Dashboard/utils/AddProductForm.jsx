import React from 'react';
import { Form, Input, Button, Switch, Select } from 'antd';
import { Option } from 'antd/es/mentions';

const AddProductForm = ({ setIsModalVisible, handleAddProduct }) => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        const cleanedValues = {
            ...values,
            imgDorso: values.imgDorso || '-',
            beneficios: values.beneficios ? values.beneficios.split(',').map(item => item.trim()) : []
        };
        handleAddProduct(cleanedValues);
        form.resetFields();
    };

    return (
        <Form form={form} onFinish={onFinish}>
            <Form.Item name="name" label="Nombre" rules={[{ required: true, message: "El nombre es obligatorio" }]}>
                <Input />
            </Form.Item>
            <Form.Item name="category" label="Categoría" rules={[{ required: true, message: "La categoría es obligatoria" }]}>
                <Select>
                    <Option value="Perros">Perros</Option>
                    <Option value="Gatos">Gatos</Option>


                </Select>
            </Form.Item>
             <Form.Item name="subcategory" label="Subcategoría" rules={[{ required: true, message:  "La subcategoría es obligatoria" }]}>
               <Select>
                    <Option value="Alimentos">Alimentos</Option>
                    <Option value="Accesorios">Accesorios</Option>
                    <Option value="Juguetes">Juguetes</Option>
                    <Option value="Cuchas">Cuchas</Option>
                    <Option value="Camas">Camas</Option>
                    <Option value="Rascadores">Rascadores</Option>

                </Select>
             </Form.Item>
            <Form.Item name="price" label="Precio" rules={[{ required: true, message: "El precio es obligatorio" }]}>
                <Input type="number" />
            </Form.Item>
            <Form.Item name="img" label="Imagen" rules={[{ required: true, message: "La imagen es obligatoria" }]}>
                <Input />
            </Form.Item>
            <Form.Item name="imgDorso" label="Imagen Dorso">
                <Input />
            </Form.Item>
            <Form.Item name="stock" label="Stock">
                <Input type="number" />
            </Form.Item>
            <Form.Item name="beneficios" label="Beneficios">
                <Input />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">Agregar</Button>
            </Form.Item>
        </Form>
    );
};

export default AddProductForm;

