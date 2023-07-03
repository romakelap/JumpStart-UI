import React,{useState,useEffect} from 'react';
import Service from '../../service/Service';
const TableTransaction = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const response = await Service.allTransaction();
      setTransactions(response.data);
    } catch (error) {
      console.error(error);
    }
  };
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
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.customerName}</td>
              <td>{transaction.retailRegionProduct.product.name}</td>
              <td>{transaction.address}</td>
              <td>{transaction.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TableTransaction