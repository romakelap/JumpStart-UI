import React, { useState } from 'react';
import { AiOutlineSetting } from 'react-icons/ai';

const TableProduct = () => {

  const styles = {
    padding: '0rem 0.5rem',
    marginLeft: '1rem'
  };
  const editButtonStyle = {
    ...styles,
    backgroundColor: '#6379DD',
    color: 'white',
    borderRadius: '0.25rem',
  };

  const deleteButtonStyle = {
    ...styles,
    backgroundColor: '#DC6767',
    color: 'white',
    borderRadius: '0.25rem',
  };
  return (
    <div>
      <h2>List of Product</h2>

      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Option</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>xiomi</td>
            <td>12</td>
            <td>$3</td>
            <td>
              <button style={editButtonStyle}>Edit</button>
              <button style={deleteButtonStyle}>Remove</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default TableProduct