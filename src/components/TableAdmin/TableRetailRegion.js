import React, { useState } from 'react';

const TableRetailRegion = () => {
  const styles = {
    padding: '0rem 0.5rem',
    marginLeft: '1rem',
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

  const [selectedOutlet, setSelectedOutlet] = useState(null);

  const handleOutletSelection = (outlet) => {
    setSelectedOutlet(outlet);
  };

  const getOutletData = () => {
    // Simulated data based on the selected outlet
    if (selectedOutlet === 'Outlet 1') {
      return [
        { productName: 'Product A', stock: 10, price: '$5' },
        { productName: 'Product B', stock: 15, price: '$8' },
      ];
    } else if (selectedOutlet === 'Outlet 2') {
      return [
        { productName: 'Product C', stock: 5, price: '$7' },
        { productName: 'Product D', stock: 20, price: '$10' },
      ];
    } else if (selectedOutlet === 'Outlet 3') {
      return [
        { productName: 'Product E', stock: 8, price: '$6' },
        { productName: 'Product F', stock: 12, price: '$9' },
      ];
    } else if (selectedOutlet === 'Outlet 4') {
      return [
        { productName: 'Product G', stock: 3, price: '$4' },
        { productName: 'Product H', stock: 18, price: '$12' },
      ];
    }

    return []; // Default empty array if no outlet is selected
  };

  const outletData = getOutletData();

  return (
    <div>
      <h2>
        List Product of {selectedOutlet}
        <select
          style={{ marginLeft: '1rem' }}
          value={selectedOutlet}
          onChange={(e) => handleOutletSelection(e.target.value)}
        >
          <option value="">Select Outlet</option>
          <option value="Outlet 1">Outlet 1</option>
          <option value="Outlet 2">Outlet 2</option>
          <option value="Outlet 3">Outlet 3</option>
          <option value="Outlet 4">Outlet 4</option>
        </select>
      </h2>

      {selectedOutlet && (
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
            {outletData.map((product, index) => (
              <tr key={index}>
                <td>{product.productName}</td>
                <td>{product.stock}</td>
                <td>{product.price}</td>
                <td>
                  <button style={editButtonStyle}>Edit</button>
                  <button style={deleteButtonStyle}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TableRetailRegion;
