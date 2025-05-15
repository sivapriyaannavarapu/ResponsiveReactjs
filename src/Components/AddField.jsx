// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Filter from '../assets/Filter.png';
// import Export from '../assets/Export.png';
// import './AddField.css';

// const AddField = ({ onAddState }) => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     id: '',
//     name: '',
//     country: '',
//     status: '',
//     date: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newState = {
//       ...formData,
//       id: formData.id || Date.now()
//     };

//     onAddState(newState);
//     navigate('/state');
//   };

//   const handleAddNewField = () => {
//     navigate('/add-field');
//   };

//   return (
//     <div className="pagestate">
//       <div className="header-state">
//         <div className="wrapper">
//           <div className="link">Masters</div>
//           <div className="separator">/</div>
//           <div className="current">State</div>
//         </div>
//         <h1 className="title">State Masters</h1>
//         <p className="description">
//           Access and manage comprehensive student details seamlessly. View personalized profiles tailored to your campus.
//         </p>
//         <div className="state-button">
//           <button className="bt filter">
//             <img src={Filter} alt="Filter" /> Filter
//           </button>
//           <button className="bt export">
//             <img src={Export} alt="Export" /> Export
//           </button>
//           <button onClick={handleAddNewField} className="bt add">
//             <span style={{ marginRight: '6px' }}>+</span> Add New Field
//           </button>
//         </div>
//       </div>

//       {/* Form Part */}
//       <div className="add-state-page">
//         <form onSubmit={handleSubmit} className="add-state-form">
//           <div className="form-table">
//             <div className="form-header-row">
//               <div className="form-header-cell">State ID</div>
//               <div className="form-header-cell">State Name</div>
//               <div className="form-header-cell">Country ID</div>
//               <div className="form-header-cell">Sync Status</div>
//               <div className="form-header-cell">Sync Date</div>
//               <div className="form-header-cell"></div>
//             </div>
//             <div className="form-input-row">
//               <div className="form-input-cell">
//                 <input
//                   type="text"
//                   name="id"
//                   placeholder="State ID"
//                   value={formData.id}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-input-cell">
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="State Name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="form-input-cell">
//                 <input
//                   type="text"
//                   name="country"
//                   placeholder="Country ID"
//                   value={formData.country}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="form-input-cell">
//                 <input
//                   type="text"
//                   name="status"
//                   placeholder="Sync Status"
//                   value={formData.status}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="form-input-cell">
//                 <input
//                   type="text"
//                   name="date"
//                   placeholder="Sync Date"
//                   value={formData.date}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="form-input-cell">
//                 <button type="submit" className="btn save">Save</button>
//               </div>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddField;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddField.css';

const AddField = ({ onAddState }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    id: '',
    name: '',
    country: '',
    status: '',
    date: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newState = {
      ...formData,
      id: formData.id || Date.now()
    };

    onAddState(newState);
    navigate('/state');
  };

  return (
    <div className="add-state-page">
      <form onSubmit={handleSubmit} className="add-state-form">
        <table className="form-table">
          <thead>
            <tr>
              <th>State ID</th>
              <th>State Name</th>
              <th>Country ID</th>
              <th>Sync Status</th>
              <th>Sync Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input type="text" name="id" placeholder="State ID" value={formData.id} onChange={handleChange}/>
              </td>
              <td>
                <input type="text" name="name" placeholder="State Name" value={formData.name} onChange={handleChange} required/>
              </td>
              <td>
                <input type="text" name="country" placeholder="Country ID" value={formData.country} onChange={handleChange}required/>
              </td>
              <td>
                <input type="text" name="status" placeholder="Sync Status" value={formData.status} onChange={handleChange} required/>
              </td>
              <td>
                <input type="text" name="date" placeholder="Sync Date" value={formData.date} onChange={handleChange} required/>
              </td>
              <td>
              <td class="save-button-cell"><button class="btn save">Save</button></td>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default AddField;