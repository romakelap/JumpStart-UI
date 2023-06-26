import React from 'react'

const TableRetailADD = () => {
  
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
      <h2>List of Retail Region</h2>

      <table>
        <thead>
          <tr>
            <th>Retail Name</th>
            <th>Description</th>
            <th>Location</th>
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

export default TableRetailADD