import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import './Table.css';

// функциональность сортировки данных в таблице
const useSortableTable = (data, config = null) => {
  const [sortConfig, setSortConfig] = useState(config);

  const sortedData = useMemo(() => {
    const sortableData = [...data];

    if (sortConfig !== null) {
      sortableData.sort((a, b) => {
        if (a[sortConfig.field] < b[sortConfig.field]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.field] > b[sortConfig.field]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }

    return sortableData;
  }, [data, sortConfig]);

  const requestSort = field => {
    let direction = 'asc';
    if (sortConfig && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ field, direction });
  };

  return { sortedData, requestSort };
};

// настройка таблицы и логика рендера
const TableContainer = props => {
  const { books } = props;
  const { sortedData, requestSort } = useSortableTable(books);

  const columnProperties = [
    { name: 'id', label: '#' },
    { name: 'title', label: 'Book Name' },
    { name: 'count', label: 'Count' },
    { name: 'price', label: 'Price' },
    { name: 'action', label: 'Action' },
  ];

  const columns = columnProperties.map(({ name, label }) => {
    const columnClassName = 'btn btn-primary';
    return (
      <th key={name} scope="col">
        <button className={columnClassName} onClick={() => requestSort(name)}>
          {label}
        </button>
      </th>
    );
  });

  const data = sortedData.map(({ id, title, count, price }) => (
    <tr key={id}>
      <th scope="row">{id}</th>
      <td>{title}</td>
      <td>{count}</td>
      <td>{price}</td>
      <td>
        <div className="btn-group" role="group" aria-label="Buttons">
          <button className="btn btn-outline-success">
            <i className="fa fa-plus"></i>
          </button>
          <button className="btn btn-outline-warning">
            <i className="fa fa-minus"></i>
          </button>
          <button className="btn btn-outline-danger">
            <i className="fa fa-trash-o"></i>
          </button>
        </div>
      </td>
    </tr>
  ));

  return <Table columns={columns} data={data} />;
};

const Table = ({ columns, data }) => (
  <div className="shopping-table">
    <h2 className="table-title">Your Order</h2>
    <table className="table table-bordered border-primary">
      <thead>
        <tr className="table-primary">{columns}</tr>
      </thead>
      <tbody>{data}</tbody>
    </table>
  </div>
);

TableContainer.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Table.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
};

export default TableContainer;
