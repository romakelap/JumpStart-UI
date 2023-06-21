import React from 'react'

const TableTransaction = () => {
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
      <h2>List of Transaction</h2>

      <table>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Product Name</th>
            <th>Address</th>
            <th>Quantity</th>
            <th>Message</th>
            <th>Status</th>
            <th>Option</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mei mei</td>
            <td>Laptop</td>
            <td>Bali</td>
            <td>2</td>
            <td>ok</td>
            <td>PENDING</td>
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

export default TableTransaction