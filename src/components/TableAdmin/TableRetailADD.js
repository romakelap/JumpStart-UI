
import React, { useEffect, useState } from 'react';
import Service from '../../service/Service';
import { useNavigate } from 'react-router-dom';
const TableRetailADD = () => {
  const [retailRegions, setRetailRegions] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    const fetchRetailRegions = async () => {
      try {
        const response = await Service.allRetail();
        setRetailRegions(response.data); // Update the retailRegions state with the fetched data
      } catch (error) {
        console.error(error);
      }
    };

    fetchRetailRegions();
  }, []);

  const handleUpdateClick = (data) => {
    navigate(`/manageretail`, { state: { data } });
  };
  const handleDeleteClick = async (id) => {
    try {
      const response = await Service.deleteRetail(id);
      window.location.reload();
      alert(response.data);
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
      <h2>List of Retail Region</h2>

      <table>
        <thead>
          <tr>
            <th>Retail Name</th>
            <th>Location</th>
            <th>Option</th>
          </tr>
        </thead>
        <tbody>
          {retailRegions.map((retailRegion) => (
            <tr key={retailRegion.id}>
              <td>{retailRegion.name}</td>
              <td>{retailRegion.location}</td>
              <td>
                <button style={editButtonStyle} onClick={() => handleUpdateClick(retailRegion)}>Edit</button>
                <button style={deleteButtonStyle} onClick={() => handleDeleteClick(retailRegion.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TableRetailADD