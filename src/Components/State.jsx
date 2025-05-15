
// import React,{useEffect} from 'react';
// import './State.css';
// import Filter from '../assets/Filter.png';
// import Export from '../assets/Export.png';
// import { useNavigate } from 'react-router-dom';

// const State = ({ states }) => {
//   const navigate = useNavigate();

//   const handleAddNewField = () => {
//     navigate('/add-field');
//   };

//   useEffect(() => {
//     localStorage.setItem('states', JSON.stringify(states));
//   }, [states]);

//   return (
//     <div className="state-page">
//       {/* Top White Card */}
//       <div className="state-header">
//         {/* Breadcrumb and Buttons */}
//         <div className="breadcrumb-wrapper">
//           <div className="breadcrumb-link">Masters</div>
//           <div className="breadcrumb-separator">/</div>
//           <div className="breadcrumb-current">State</div>
//         </div>
//         <h1 className="state-title">State Masters</h1>
//         <p className="state-description">Access and manage comprehensive student details seamlessly. View personalized profiles tailored to your campus.</p>
//         <div className="state-buttons">
//           <button className="btn filter">
//             <img src={Filter} alt="Filter" /> Filter
//           </button>
//           <button className="btn export">
//             <img src={Export} alt="Export" /> Export
//           </button>
//           <button onClick={handleAddNewField} class="btn add">
//           <span style={{ marginRight: '6px' }}>+</span> Add New Field</button>

//         </div>
//       </div>

//       {/* Table Section */}
//       <div className="state-table-wrapper">
//         <table className="state-table">
//           <thead>
//             <tr>
//               <th></th> 
//               <th>State ID</th>
//               <th>State Name</th>
//               <th>Country ID</th>
//               <th>Sync Status</th>
//               <th>Sync Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             {states.map((state) => (
//               <tr key={state.id}>
//                 <td><input type="checkbox" /></td>
//                 <td>{state.id}</td>
//                 <td>{state.name}</td>
//                 <td>{state.country}</td>
//                 <td>{state.status}</td>
//                 <td>{state.date}</td>
//                 <td className="action-buttons">
//                   <button className="icon-button" >
//                   <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M21.9999 20.4999L18.3808 16.8808M18.3808 16.8808C18.9998 16.2617 19.4909 15.5267 19.8259 14.7179C20.161 13.909 20.3334 13.0421 20.3334 12.1666C20.3334 11.2911 20.161 10.4242 19.826 9.61531C19.4909 8.80645 18.9998 8.0715 18.3808 7.45243C17.7617 6.83335 17.0267 6.34228 16.2179 6.00724C15.409 5.6722 14.5421 5.49976 13.6666 5.49976C12.7911 5.49976 11.9242 5.6722 11.1153 6.00724C10.3064 6.34228 9.5715 6.83335 8.95243 7.45243C7.70215 8.7027 6.99976 10.3984 6.99976 12.1666C6.99976 13.9347 7.70215 15.6305 8.95243 16.8808C10.2027 18.131 11.8984 18.8334 13.6666 18.8334C15.4347 18.8334 17.1305 18.131 18.3808 16.8808Z" stroke="#7D7777" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
// </svg></button>

                    
//                     {/* <img src={EditIcon} alt="Edit" className="button-icon" /> */}
//                     <button className="icon-button" >
//                     <svg width="63" height="26" viewBox="0 0 63 26" fill="none" xmlns="http://www.w3.org/2000/svg">
// <rect x="1" y="0.5" width="61" height="25" rx="12.5" fill="#BBB7FF"/>
// <rect x="1" y="0.5" width="61" height="25" rx="12.5" stroke="#20179D"/>
// <path d="M18.5 7H13.8333C13.4797 7 13.1406 7.14048 12.8905 7.39052C12.6405 7.64057 12.5 7.97971 12.5 8.33333V17.6667C12.5 18.0203 12.6405 18.3594 12.8905 18.6095C13.1406 18.8595 13.4797 19 13.8333 19H23.1667C23.5203 19 23.8594 18.8595 24.1095 18.6095C24.3595 18.3594 24.5 18.0203 24.5 17.6667V13" stroke="#20179D" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
// <path d="M22.7501 6.75015C23.0154 6.48493 23.3751 6.33594 23.7501 6.33594C24.1252 6.33594 24.4849 6.48493 24.7501 6.75015C25.0154 7.01537 25.1644 7.37508 25.1644 7.75015C25.1644 8.12522 25.0154 8.48493 24.7501 8.75015L18.7415 14.7595C18.5832 14.9176 18.3876 15.0334 18.1728 15.0962L16.2575 15.6562C16.2001 15.6729 16.1393 15.6739 16.0814 15.6591C16.0235 15.6442 15.9707 15.6141 15.9284 15.5719C15.8862 15.5296 15.8561 15.4768 15.8412 15.4189C15.8264 15.361 15.8274 15.3002 15.8441 15.2428L16.4041 13.3275C16.4672 13.1129 16.5832 12.9175 16.7415 12.7595L22.7501 6.75015Z" stroke="#20179D" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
// <path d="M33.5568 18V9.27273H38.8239V10.2102H34.6136V13.1591H38.5511V14.0966H34.6136V17.0625H38.892V18H33.5568ZM43.0639 18.1364C42.5185 18.1364 42.0369 17.9986 41.6193 17.723C41.2017 17.4446 40.875 17.0526 40.6392 16.5469C40.4034 16.0384 40.2855 15.4375 40.2855 14.7443C40.2855 14.0568 40.4034 13.4602 40.6392 12.9545C40.875 12.4489 41.2031 12.0582 41.6236 11.7827C42.044 11.5071 42.5298 11.3693 43.081 11.3693C43.5071 11.3693 43.8438 11.4403 44.0909 11.5824C44.3409 11.7216 44.5313 11.8807 44.6619 12.0597C44.7955 12.2358 44.8991 12.3807 44.973 12.4943H45.0582V9.27273H46.0639V18H45.0923V16.9943H44.973C44.8991 17.1136 44.794 17.2642 44.6577 17.446C44.5213 17.625 44.3267 17.7855 44.0739 17.9276C43.821 18.0668 43.4844 18.1364 43.0639 18.1364ZM43.2003 17.233C43.6037 17.233 43.9446 17.1278 44.223 16.9176C44.5014 16.7045 44.7131 16.4105 44.858 16.0355C45.0028 15.6577 45.0753 15.2216 45.0753 14.7273C45.0753 14.2386 45.0043 13.8111 44.8622 13.4446C44.7202 13.0753 44.5099 12.7884 44.2315 12.5838C43.9531 12.3764 43.6094 12.2727 43.2003 12.2727C42.7741 12.2727 42.419 12.3821 42.1349 12.6009C41.8537 12.8168 41.642 13.1108 41.5 13.483C41.3608 13.8523 41.2912 14.267 41.2912 14.7273C41.2912 15.1932 41.3622 15.6165 41.5043 15.9972C41.6491 16.375 41.8622 16.6761 42.1435 16.9006C42.4276 17.1222 42.7798 17.233 43.2003 17.233ZM48.0455 18V11.4545H49.0511V18H48.0455ZM48.5568 10.3636C48.3608 10.3636 48.1918 10.2969 48.0497 10.1634C47.9105 10.0298 47.8409 9.86932 47.8409 9.68182C47.8409 9.49432 47.9105 9.33381 48.0497 9.20028C48.1918 9.06676 48.3608 9 48.5568 9C48.7528 9 48.9205 9.06676 49.0597 9.20028C49.2017 9.33381 49.2727 9.49432 49.2727 9.68182C49.2727 9.86932 49.2017 10.0298 49.0597 10.1634C48.9205 10.2969 48.7528 10.3636 48.5568 10.3636ZM53.7397 11.4545V12.3068H50.3477V11.4545H53.7397ZM51.3363 9.88636H52.342V16.125C52.342 16.4091 52.3832 16.6222 52.4656 16.7642C52.5508 16.9034 52.6587 16.9972 52.7894 17.0455C52.9229 17.0909 53.0636 17.1136 53.2113 17.1136C53.3221 17.1136 53.413 17.108 53.484 17.0966C53.555 17.0824 53.6119 17.071 53.6545 17.0625L53.859 17.9659C53.7908 17.9915 53.6957 18.017 53.5735 18.0426C53.4513 18.071 53.2965 18.0852 53.109 18.0852C52.8249 18.0852 52.5465 18.0241 52.2738 17.902C52.0039 17.7798 51.7795 17.5938 51.6005 17.3438C51.4244 17.0938 51.3363 16.7784 51.3363 16.3977V9.88636Z" fill="#20179D"/>
// </svg>

//                   </button>
//                   <button className="icon-button">
//                     {/* <img src={ViewIcon} alt="View" className="button-icon" /> */}
//                     <svg width="63" height="26" viewBox="0 0 63 26" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M23.3626 12.3633C23.5653 12.6473 23.6666 12.7899 23.6666 12.9999C23.6666 13.2106 23.5653 13.3526 23.3626 13.6366C22.4519 14.9139 20.1259 17.6666 16.9999 17.6666C13.8733 17.6666 11.5479 14.9133 10.6373 13.6366C10.4346 13.3526 10.3333 13.2099 10.3333 12.9999C10.3333 12.7893 10.4346 12.6473 10.6373 12.3633C11.5479 11.0859 13.8739 8.33325 16.9999 8.33325C20.1266 8.33325 22.4519 11.0866 23.3626 12.3633Z" stroke="#7B7B7B" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
// <path d="M19 13C19 12.4696 18.7893 11.9609 18.4142 11.5858C18.0391 11.2107 17.5304 11 17 11C16.4696 11 15.9609 11.2107 15.5858 11.5858C15.2107 11.9609 15 12.4696 15 13C15 13.5304 15.2107 14.0391 15.5858 14.4142C15.9609 14.7893 16.4696 15 17 15C17.5304 15 18.0391 14.7893 18.4142 14.4142C18.7893 14.0391 19 13.5304 19 13Z" stroke="#7B7B7B" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
// <path d="M29.4148 9.27273L32.0057 16.6193H32.108L34.6989 9.27273H35.8068L32.6023 18H31.5114L28.3068 9.27273H29.4148ZM37.0298 18V11.4545H38.0355V18H37.0298ZM37.5412 10.3636C37.3452 10.3636 37.1761 10.2969 37.0341 10.1634C36.8949 10.0298 36.8253 9.86932 36.8253 9.68182C36.8253 9.49432 36.8949 9.33381 37.0341 9.20028C37.1761 9.06676 37.3452 9 37.5412 9C37.7372 9 37.9048 9.06676 38.044 9.20028C38.1861 9.33381 38.2571 9.49432 38.2571 9.68182C38.2571 9.86932 38.1861 10.0298 38.044 10.1634C37.9048 10.2969 37.7372 10.3636 37.5412 10.3636ZM42.6218 18.1364C41.9911 18.1364 41.4471 17.9972 40.9897 17.7188C40.5352 17.4375 40.1843 17.0455 39.9371 16.5426C39.6928 16.0369 39.5707 15.4489 39.5707 14.7784C39.5707 14.108 39.6928 13.517 39.9371 13.0057C40.1843 12.4915 40.5281 12.0909 40.9684 11.804C41.4116 11.5142 41.9286 11.3693 42.5195 11.3693C42.8604 11.3693 43.1971 11.4261 43.5295 11.5398C43.8619 11.6534 44.1644 11.8381 44.4371 12.0938C44.7099 12.3466 44.9272 12.6818 45.0891 13.0994C45.2511 13.517 45.332 14.0312 45.332 14.642V15.0682H40.2866V14.1989H44.3093C44.3093 13.8295 44.2354 13.5 44.0877 13.2102C43.9428 12.9205 43.7354 12.6918 43.4656 12.5241C43.1985 12.3565 42.8832 12.2727 42.5195 12.2727C42.119 12.2727 41.7724 12.3722 41.4798 12.571C41.19 12.767 40.967 13.0227 40.8107 13.3381C40.6545 13.6534 40.5763 13.9915 40.5763 14.3523V14.9318C40.5763 15.4261 40.6616 15.8452 40.832 16.1889C41.0053 16.5298 41.2454 16.7898 41.5522 16.9688C41.859 17.1449 42.2156 17.233 42.6218 17.233C42.886 17.233 43.1246 17.196 43.3377 17.1222C43.5536 17.0455 43.7397 16.9318 43.896 16.7812C44.0522 16.6278 44.1729 16.4375 44.2582 16.2102L45.2298 16.483C45.1275 16.8125 44.9556 17.1023 44.7141 17.3523C44.4727 17.5994 44.1744 17.7926 43.8192 17.9318C43.4641 18.0682 43.065 18.1364 42.6218 18.1364ZM48.3448 18L46.3505 11.4545H47.4073L48.8221 16.4659H48.8903L50.288 11.4545H51.3619L52.7425 16.4489H52.8107L54.2255 11.4545H55.2823L53.288 18H52.2994L50.8675 12.9716H50.7653L49.3335 18H48.3448Z" fill="#7B7B7B"/>
// </svg>

//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         {/* Pagination */}
//          <div className="pagination">
//           <button className="btn">Prev</button>
//           <button className="btn">Next</button>
//         </div> 
//       </div>
//     </div>
//   );
// };

// export default State;



import React,{useEffect,useState} from 'react';
import './State.css';
import Filter from '../assets/Filter.png';
import Export from '../assets/Export.png';
import { useNavigate } from 'react-router-dom';
import AddField from './AddField';
import bulb from '../assets/bulb.png';

const State = ({ states }) => {
   const [stateList, setStateList] = useState(states || []); 
   const [isAddingField, setIsAddingField] = useState(false); 
   const navigate = useNavigate();
   const [isButtonClicked, setIsButtonClicked] = useState(false); 
   const handleAddNewField = () => {
     setIsAddingField(true); 
     setIsButtonClicked(true); 
   };
   const [currentPage, setCurrentPage] = useState(1);
   const rowsPerPage = 10;
   const totalPages = Math.ceil(stateList.length / rowsPerPage);
   const indexOfLastRow = currentPage * rowsPerPage;
   const indexOfFirstRow = indexOfLastRow - rowsPerPage;
   const currentRows = stateList.slice(indexOfFirstRow, indexOfLastRow);
 
 
   const handleSaveNewField = (newField) => {
    setStateList((prevState) => {
      const updatedStates = [...prevState, newField];
      localStorage.setItem('states', JSON.stringify(updatedStates)); 
      return updatedStates;
    });
    setIsAddingField(false);
    setIsButtonClicked(false); 
  };

 
  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
 
  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };
  
  useEffect(() => {
    const storedStates = localStorage.getItem('states');
    if (storedStates) {
      setStateList(JSON.parse(storedStates)); 
    }
  }, []);

  return (
    <div className="state-page">
      <div className="state-header">
        <div className="breadcrumb-wrapper">
          <div className="breadcrumb-link">Masters</div>
          <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.12488 8.375L4.87488 4.625L1.12488 0.875" stroke="#6E7C87" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
          <div className="breadcrumb-current">State</div>
        </div>
        <h1 className="state-title">State Masters</h1>
        <p className="state-description">Access and manage comprehensive student details seamlessly. View personalized profiles tailored to your campus.</p>
        <div className="state-buttons">
          <button className="btn filter">
            <img src={Filter} alt="Filter" /> Filter <span className="notification-badge">1</span>
          </button>
          <button className="btn export">
            <img src={Export} alt="Export" /> Export
          </button>
          <button onClick={handleAddNewField} className={`btn add ${isButtonClicked ? 'add-clicked' : ''}`}>
            <span style={{ marginRight: '6px' }}>+</span> Add New Field
          </button>
          </div>
      </div>

      <div className="state-table-wrapper">
      {isAddingField ? (
          <AddField onAddState={handleSaveNewField} />
        ) : (
        <table className="state-table">
          <thead>
            <tr>
              <th></th> 
              <th>State ID</th>
              <th>State Name</th>
              <th>Country ID</th>
              <th>Sync Status</th>
              <th>Sync Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {currentRows.map((state) => (
              <tr key={state.id}>
                <td><input type="checkbox" /></td>
                <td>{state.id}</td>
                <td>{state.name}</td>
                <td>{state.country}</td>
                <td>{state.status}</td>
                <td>{state.date}</td>
                <td className="action-buttons">
                  <button className="icon-button" >
                  <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.9999 20.4999L18.3808 16.8808M18.3808 16.8808C18.9998 16.2617 19.4909 15.5267 19.8259 14.7179C20.161 13.909 20.3334 13.0421 20.3334 12.1666C20.3334 11.2911 20.161 10.4242 19.826 9.61531C19.4909 8.80645 18.9998 8.0715 18.3808 7.45243C17.7617 6.83335 17.0267 6.34228 16.2179 6.00724C15.409 5.6722 14.5421 5.49976 13.6666 5.49976C12.7911 5.49976 11.9242 5.6722 11.1153 6.00724C10.3064 6.34228 9.5715 6.83335 8.95243 7.45243C7.70215 8.7027 6.99976 10.3984 6.99976 12.1666C6.99976 13.9347 7.70215 15.6305 8.95243 16.8808C10.2027 18.131 11.8984 18.8334 13.6666 18.8334C15.4347 18.8334 17.1305 18.131 18.3808 16.8808Z" stroke="#7D7777" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg></button>
                  <button className="icon-button" >
                  <svg width="63" height="26" viewBox="0 0 63 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="1" y="0.5" width="61" height="25" rx="12.5" fill="#BBB7FF"/>
<rect x="1" y="0.5" width="61" height="25" rx="12.5" stroke="#20179D"/>
<path d="M18.5 7H13.8333C13.4797 7 13.1406 7.14048 12.8905 7.39052C12.6405 7.64057 12.5 7.97971 12.5 8.33333V17.6667C12.5 18.0203 12.6405 18.3594 12.8905 18.6095C13.1406 18.8595 13.4797 19 13.8333 19H23.1667C23.5203 19 23.8594 18.8595 24.1095 18.6095C24.3595 18.3594 24.5 18.0203 24.5 17.6667V13" stroke="#20179D" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.7501 6.75015C23.0154 6.48493 23.3751 6.33594 23.7501 6.33594C24.1252 6.33594 24.4849 6.48493 24.7501 6.75015C25.0154 7.01537 25.1644 7.37508 25.1644 7.75015C25.1644 8.12522 25.0154 8.48493 24.7501 8.75015L18.7415 14.7595C18.5832 14.9176 18.3876 15.0334 18.1728 15.0962L16.2575 15.6562C16.2001 15.6729 16.1393 15.6739 16.0814 15.6591C16.0235 15.6442 15.9707 15.6141 15.9284 15.5719C15.8862 15.5296 15.8561 15.4768 15.8412 15.4189C15.8264 15.361 15.8274 15.3002 15.8441 15.2428L16.4041 13.3275C16.4672 13.1129 16.5832 12.9175 16.7415 12.7595L22.7501 6.75015Z" stroke="#20179D" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M33.5568 18V9.27273H38.8239V10.2102H34.6136V13.1591H38.5511V14.0966H34.6136V17.0625H38.892V18H33.5568ZM43.0639 18.1364C42.5185 18.1364 42.0369 17.9986 41.6193 17.723C41.2017 17.4446 40.875 17.0526 40.6392 16.5469C40.4034 16.0384 40.2855 15.4375 40.2855 14.7443C40.2855 14.0568 40.4034 13.4602 40.6392 12.9545C40.875 12.4489 41.2031 12.0582 41.6236 11.7827C42.044 11.5071 42.5298 11.3693 43.081 11.3693C43.5071 11.3693 43.8438 11.4403 44.0909 11.5824C44.3409 11.7216 44.5313 11.8807 44.6619 12.0597C44.7955 12.2358 44.8991 12.3807 44.973 12.4943H45.0582V9.27273H46.0639V18H45.0923V16.9943H44.973C44.8991 17.1136 44.794 17.2642 44.6577 17.446C44.5213 17.625 44.3267 17.7855 44.0739 17.9276C43.821 18.0668 43.4844 18.1364 43.0639 18.1364ZM43.2003 17.233C43.6037 17.233 43.9446 17.1278 44.223 16.9176C44.5014 16.7045 44.7131 16.4105 44.858 16.0355C45.0028 15.6577 45.0753 15.2216 45.0753 14.7273C45.0753 14.2386 45.0043 13.8111 44.8622 13.4446C44.7202 13.0753 44.5099 12.7884 44.2315 12.5838C43.9531 12.3764 43.6094 12.2727 43.2003 12.2727C42.7741 12.2727 42.419 12.3821 42.1349 12.6009C41.8537 12.8168 41.642 13.1108 41.5 13.483C41.3608 13.8523 41.2912 14.267 41.2912 14.7273C41.2912 15.1932 41.3622 15.6165 41.5043 15.9972C41.6491 16.375 41.8622 16.6761 42.1435 16.9006C42.4276 17.1222 42.7798 17.233 43.2003 17.233ZM48.0455 18V11.4545H49.0511V18H48.0455ZM48.5568 10.3636C48.3608 10.3636 48.1918 10.2969 48.0497 10.1634C47.9105 10.0298 47.8409 9.86932 47.8409 9.68182C47.8409 9.49432 47.9105 9.33381 48.0497 9.20028C48.1918 9.06676 48.3608 9 48.5568 9C48.7528 9 48.9205 9.06676 49.0597 9.20028C49.2017 9.33381 49.2727 9.49432 49.2727 9.68182C49.2727 9.86932 49.2017 10.0298 49.0597 10.1634C48.9205 10.2969 48.7528 10.3636 48.5568 10.3636ZM53.7397 11.4545V12.3068H50.3477V11.4545H53.7397ZM51.3363 9.88636H52.342V16.125C52.342 16.4091 52.3832 16.6222 52.4656 16.7642C52.5508 16.9034 52.6587 16.9972 52.7894 17.0455C52.9229 17.0909 53.0636 17.1136 53.2113 17.1136C53.3221 17.1136 53.413 17.108 53.484 17.0966C53.555 17.0824 53.6119 17.071 53.6545 17.0625L53.859 17.9659C53.7908 17.9915 53.6957 18.017 53.5735 18.0426C53.4513 18.071 53.2965 18.0852 53.109 18.0852C52.8249 18.0852 52.5465 18.0241 52.2738 17.902C52.0039 17.7798 51.7795 17.5938 51.6005 17.3438C51.4244 17.0938 51.3363 16.7784 51.3363 16.3977V9.88636Z" fill="#20179D"/>
</svg></button>
                  <button className="icon-button">
                  <svg width="63" height="26" viewBox="0 0 63 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.3626 12.3633C23.5653 12.6473 23.6666 12.7899 23.6666 12.9999C23.6666 13.2106 23.5653 13.3526 23.3626 13.6366C22.4519 14.9139 20.1259 17.6666 16.9999 17.6666C13.8733 17.6666 11.5479 14.9133 10.6373 13.6366C10.4346 13.3526 10.3333 13.2099 10.3333 12.9999C10.3333 12.7893 10.4346 12.6473 10.6373 12.3633C11.5479 11.0859 13.8739 8.33325 16.9999 8.33325C20.1266 8.33325 22.4519 11.0866 23.3626 12.3633Z" stroke="#7B7B7B" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 13C19 12.4696 18.7893 11.9609 18.4142 11.5858C18.0391 11.2107 17.5304 11 17 11C16.4696 11 15.9609 11.2107 15.5858 11.5858C15.2107 11.9609 15 12.4696 15 13C15 13.5304 15.2107 14.0391 15.5858 14.4142C15.9609 14.7893 16.4696 15 17 15C17.5304 15 18.0391 14.7893 18.4142 14.4142C18.7893 14.0391 19 13.5304 19 13Z" stroke="#7B7B7B" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M29.4148 9.27273L32.0057 16.6193H32.108L34.6989 9.27273H35.8068L32.6023 18H31.5114L28.3068 9.27273H29.4148ZM37.0298 18V11.4545H38.0355V18H37.0298ZM37.5412 10.3636C37.3452 10.3636 37.1761 10.2969 37.0341 10.1634C36.8949 10.0298 36.8253 9.86932 36.8253 9.68182C36.8253 9.49432 36.8949 9.33381 37.0341 9.20028C37.1761 9.06676 37.3452 9 37.5412 9C37.7372 9 37.9048 9.06676 38.044 9.20028C38.1861 9.33381 38.2571 9.49432 38.2571 9.68182C38.2571 9.86932 38.1861 10.0298 38.044 10.1634C37.9048 10.2969 37.7372 10.3636 37.5412 10.3636ZM42.6218 18.1364C41.9911 18.1364 41.4471 17.9972 40.9897 17.7188C40.5352 17.4375 40.1843 17.0455 39.9371 16.5426C39.6928 16.0369 39.5707 15.4489 39.5707 14.7784C39.5707 14.108 39.6928 13.517 39.9371 13.0057C40.1843 12.4915 40.5281 12.0909 40.9684 11.804C41.4116 11.5142 41.9286 11.3693 42.5195 11.3693C42.8604 11.3693 43.1971 11.4261 43.5295 11.5398C43.8619 11.6534 44.1644 11.8381 44.4371 12.0938C44.7099 12.3466 44.9272 12.6818 45.0891 13.0994C45.2511 13.517 45.332 14.0312 45.332 14.642V15.0682H40.2866V14.1989H44.3093C44.3093 13.8295 44.2354 13.5 44.0877 13.2102C43.9428 12.9205 43.7354 12.6918 43.4656 12.5241C43.1985 12.3565 42.8832 12.2727 42.5195 12.2727C42.119 12.2727 41.7724 12.3722 41.4798 12.571C41.19 12.767 40.967 13.0227 40.8107 13.3381C40.6545 13.6534 40.5763 13.9915 40.5763 14.3523V14.9318C40.5763 15.4261 40.6616 15.8452 40.832 16.1889C41.0053 16.5298 41.2454 16.7898 41.5522 16.9688C41.859 17.1449 42.2156 17.233 42.6218 17.233C42.886 17.233 43.1246 17.196 43.3377 17.1222C43.5536 17.0455 43.7397 16.9318 43.896 16.7812C44.0522 16.6278 44.1729 16.4375 44.2582 16.2102L45.2298 16.483C45.1275 16.8125 44.9556 17.1023 44.7141 17.3523C44.4727 17.5994 44.1744 17.7926 43.8192 17.9318C43.4641 18.0682 43.065 18.1364 42.6218 18.1364ZM48.3448 18L46.3505 11.4545H47.4073L48.8221 16.4659H48.8903L50.288 11.4545H51.3619L52.7425 16.4489H52.8107L54.2255 11.4545H55.2823L53.288 18H52.2994L50.8675 12.9716H50.7653L49.3335 18H48.3448Z" fill="#7B7B7B"/>
</svg></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        )}
      </div>
      {!isAddingField && (
        <div className="pagination">
          <div className="pro-tip-container">
            <div class="pro-tip-box">
              <img src={bulb} alt="Light Bulb" class="bulb-icon" />
              <strong>ProTip!</strong> Check twice before editing the masters data.
            </div>
          </div>
          <div className="pagination-info">
            <span>{currentPage}-{totalPages} of {totalPages}</span>
          </div>
          <div className="pagination-buttons">
            <button onClick={handlePrev} disabled={currentPage === 1} className="btn pagination-btn">Prev</button>
            <button onClick={handleNext} disabled={currentPage === totalPages} className="btn pagination-btn">Next</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default State;

{/* <div className="pro-tip-container">
    <div class="pro-tip-box">
      <img src={bulb} alt="Light Bulb" class="bulb-icon" />
      <strong>ProTip!</strong> Check twice before editing the masters data.
    </div>
  </div> */}