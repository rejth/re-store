import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import './Table.css';

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

const Table = props => {
  const { books } = props;
  const { sortedData, requestSort } = useSortableTable(books);

  return (
    <React.Fragment>
      <div className="shopping-table">
        <h2 className="table-title">Your Order</h2>
        <table className="table table-bordered border-primary">
          <thead>
            <tr className="table-primary">
              <th scope="col">
                <button
                  className="btn btn-primary"
                  onClick={() => requestSort('id')}
                >
                  ID
                </button>
              </th>
              <th scope="col">
                <button
                  className="btn btn-primary"
                  onClick={() => requestSort('title')}
                >
                  Book Name
                </button>
              </th>
              <th scope="col">
                <button
                  className="btn btn-primary"
                  onClick={() => requestSort('count')}
                >
                  Count
                </button>
              </th>
              <th scope="col">
                <button
                  className="btn btn-primary"
                  onClick={() => requestSort('price')}
                >
                  Price
                </button>
              </th>
              <th scope="col">
                <button className="btn btn-primary">Action</button>
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map(item => (
              <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td>{item.title}</td>
                <td>{item.count}</td>
                <td>{item.price}</td>
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
            ))}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

Table.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Table;
