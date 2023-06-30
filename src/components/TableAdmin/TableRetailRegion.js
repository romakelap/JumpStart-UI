import React, { useState,useEffect } from 'react';
import Service from '../../service/Service';
import { data } from 'autoprefixer';
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
  const [retailData, setRetailData] = useState([]);
  const [selectedOutlet, setSelectedOutlet] = useState({ name: '', id: 0 });
  const [outletData, setOutletData] = useState([]);
  const [products, setProducts] = useState([]);
  const [stockInput, setStockInput] = useState('');
  const [newStock, setNewStock] = useState('');
  const [updatedData, setUpdatedData] = useState({});
  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await Service.allRetail();
        setRetailData(response.data);
      } catch (error) {
        console.error('Error fetching retail data:', error);
      }
    }
    fetchData();
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
  const handleOutletSelection = async (retailId, retailName) => {
    try {
      const response = await Service.allRetailProduct(retailId);
      setOutletData(response.data);
      setSelectedOutlet({ name: retailName, id: retailId });
    } catch (error) {
      console.error('Error fetching product data:', error);
    }
  };
  const [showPopup, setShowPopup] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);

  const handlePopUp = () => {
    setShowPopup(!showPopup);
  };
  const handleUpdate = (data)=>{
    setNewStock(data.stock)
    setUpdatedData(data)
    setShowUpdate(!showUpdate);
  }
  
  const handleNewStock = (e) => {
    setNewStock(e.target.value);
  };
  const handleStockInputChange = (e) => {
    setStockInput(e.target.value);
  };

  const handleAddProductToRegion = async (id) => {
    let data={
      retailId:selectedOutlet.id,
      productId:id,
      stock:stockInput
    }
    try{
      const response = await Service.addRetailProduct(data);
      window.location.reload();
      alert(response.data)
    }catch(error){
      console.error('Error fetching data:', error);
    }
 
  };
  const handleUpdateStock = async ()=>{
    let data={
      id:updatedData.id,
      retailRegion:updatedData.retailRegion,
      product:updatedData.product,
      stock:newStock
    }
    try{
      const response = await Service.updateRetailProduct(data);
      window.location.reload();
      alert(response.data)
    }catch(error){
      console.error('Error fetching data:', error);
    }
  }
  const handleDelete= async (id)=>{
    try{
      const response = await Service.deleteRetailProduct(id);
      window.location.reload();
      alert(response.data)
    }catch(error){
      console.error('Error fetching data:', error);
    }
  }
  
  

  return (
    <div>
      
      <h2>
        List Product of {selectedOutlet.name}
        <select
        style={{ marginLeft: '1rem',marginTop:0 }}
        value={selectedOutlet}
        onChange={(e) => handleOutletSelection(e.target.value, e.target.selectedOptions[0].text)}
      >
        <option value="">Select Region</option>
        {retailData.map((retail) => (
          <option key={retail.id} value={retail.id}>
            {retail.name}
          </option>
        ))}
      </select>

      </h2>
      <button type="button" className='buttonadd m-0' style={{fontSize:'14px'}} onClick={handlePopUp}>
        Add Product
      </button>

      {showPopup && (
        <div  className="fixed top-0 left-0 flex items-center justify-center w-screen h-screen bg-black bg-opacity-50">
        <div className="p-8 bg-white rounded-md">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold">Add Product to Retail Region</h3>
                <button className="text-gray-500" onClick={handlePopUp}>
                  X
                </button>
            </div>
            <h2 className="mb-4">List Product</h2>
            <table className="w-full">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Product Name</th>
                        <th className="px-4 py-2">Description</th>
                        <th className="px-4 py-2">Price</th>
                        <th className="px-4 py-2">Stock</th>
                        <th className="px-4 py-2">Option</th>
                    </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id}>
                        <td className="px-4 py-2">{product.name}</td>
                        <td className="px-4 py-2">{product.description}</td>
                        <td className="px-4 py-2">$ {product.price}</td>
                        <td className="px-4 py-2"><input type="number" className='px-3' onChange={handleStockInputChange} value={data.stock} name="stock"  /></td>
                        <td className="px-4 py-2">
                          <button className='buttonadd m-0' onClick={()=>handleAddProductToRegion(product.id)}>ADD</button>
                        </td>
                    </tr>
                  ))}
                </tbody>
            </table>
        </div>
    </div>
      )}
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
            {outletData.map((retailProduct, index) => (
              <tr key={index}>
                <td>{retailProduct.product.name}</td>
                <td>{retailProduct.stock}</td>
                <td>{retailProduct.product.price}</td>
                <td>
                  <button style={editButtonStyle} onClick={()=>handleUpdate(retailProduct)}>Edit</button>
                  <button style={deleteButtonStyle} onClick={()=>handleDelete(retailProduct.id)}>Remove</button>
                </td>
              </tr>
            ))}
            {showUpdate && (
              <div  className="fixed top-0 left-0 flex items-center justify-center w-screen h-screen bg-black bg-opacity-50">
              <div className="p-8 bg-white rounded-md">
                  <div className="flex justify-between items-center mb-4">
                      <button className="text-gray-500" onClick={handleUpdate}>
                        X
                      </button>
                  </div>
                  <h2 className="mb-4">Update Product</h2>
                  <table className="w-full">
                      <thead>
                          <tr>
                              <th className="px-4 py-2">Stock</th>
                              <th className="px-4 py-2">Option</th>
                          </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><input type="number" className='px-3' onChange={handleNewStock} value={newStock} name="newStock"  /></td>
                          <td><button className='buttonadd m-0' onClick={()=>handleUpdateStock()}>Update</button></td>
                        </tr>
                      </tbody>
                  </table>
              </div>
              </div>
            )}

          </tbody>
        </table>
      )}
    </div>

  );
};

export default TableRetailRegion;
