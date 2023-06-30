import React, { useState,useEffect } from 'react';
import { AiOutlineSetting } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import Service from '../../service/Service';

const TableProduct = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const handleProductClick = (data) => {
      navigate(`/manageproduct`, { state: { data } });
  };
  const handleDeleteClick = async (id) => {
    try {
      const response = await Service.deleteProduct(id);
      window.location.reload();
      alert(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  
  useEffect(() => {
    // Fetch all products
  const fetchProducts = async () => {
    try {
      const response = await Service.allProduct();
      setProducts(response);
    } catch (error) {
      console.error(error);
    }
  };

    fetchProducts();
  }, []);
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
            <th>Description</th>
            <th>Price</th>
            <th>Option</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.description}</td>
            <td>{product.price}</td>
            <td>
              <button style={editButtonStyle} onClick={() => handleProductClick(product)}>Edit</button>
              <button style={deleteButtonStyle} onClick={() => handleDeleteClick(product.id)}>Remove</button>
            </td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TableProduct