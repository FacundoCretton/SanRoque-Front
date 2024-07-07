import React from "react";
import { Table } from "antd";

const CompositionTable = ({ composition }) => {
  const data = Object.entries(composition).map(([key, value]) => ({
    Componente: key,
    Mínimo: value.min != null ? value.min : "-",
    Máximo: value.max != null ? value.max : "-",
  }));

  const columns = [
    {
      title: "Componente",
      dataIndex: "Componente",
      key: "Componente",
    },
    {
      title: "Mínimo",
      dataIndex: "Mínimo",
      key: "Mínimo",
    },
    {
      title: "Máximo",
      dataIndex: "Máximo",
      key: "Máximo",
    },
  ];

  return <Table columns={columns} dataSource={data} pagination={false} />;
};

export default CompositionTable;
