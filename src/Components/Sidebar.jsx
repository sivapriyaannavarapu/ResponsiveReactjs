import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';
import Employee from '../assets/Employee.png';
import Fleet from '../assets/Fleet.png';
import Warehouse from '../assets/Warehouse.png';
import SMS from '../assets/SMS.png';
import HRMS from '../assets/HRMS.png';
import CCTC from '../assets/CCTC.png';
import QuestionBank from '../assets/QuestionBank.png';
import AssetsMangement from '../assets/AssetsManagement.png'
import PaymentServices from '../assets/PaymentServices.png'
import { useNavigate } from 'react-router-dom';


const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('');
  const navigate = useNavigate();

  

  const handleClick = (name,route) => {
    setActiveItem(name);
    navigate(route);
  };

  return (
    <div className="sidebar">
      <div className="back-section" onClick={() => handleClick('Dashboard')}>
        <FontAwesomeIcon icon={faArrowLeft} className="back-icon" />
        <span className="back-text">Back to Dashboard</span>
      </div>

      <div className='sidebar-content'>
      <div className={`sidebar-item ${activeItem === 'Students' ? 'active' : ''}`} onClick={() => handleClick('Students', '/students')}>
        {/* <img src={studenticon} alt="Students"  id='studentLogo' /> */}
        <svg width="20" height="21" viewBox="0 0 20 21" className="icon-image" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.6804 15.8336C16.6137 15.5314 16.2992 15.3373 15.9779 15.4001C15.6566 15.4628 15.4503 15.7586 15.517 16.0607C15.543 16.1789 15.5112 16.3008 15.4295 16.3952C15.3847 16.447 15.2858 16.5338 15.1264 16.5338H11.1809L12.7853 12.6756C13.3695 12.9603 13.8979 13.3485 14.3384 13.8266C14.5532 14.0598 14.9284 14.0851 15.1765 13.883C15.4244 13.681 15.4513 13.3281 15.2365 13.0949C14.507 12.303 13.5813 11.7124 12.5557 11.364C13.2998 10.7742 13.7734 9.89172 13.7734 8.90706C13.7734 8.32868 13.6118 7.77402 13.3092 7.28801L15.1398 6.65367V9.40995C15.1398 9.71854 15.4058 9.96868 15.734 9.96868C16.0621 9.96868 16.3281 9.71854 16.3281 9.40995V5.88991C16.3281 5.88441 16.3274 5.87904 16.3272 5.87357C16.3275 5.8665 16.3281 5.85946 16.3281 5.85233V5.82091C16.3281 5.58886 16.1756 5.38096 15.9449 5.29857L10.5849 3.38406C10.4496 3.33573 10.3002 3.33551 10.1646 3.38348L4.77105 5.29279C4.53952 5.37475 4.38624 5.58305 4.38624 5.81571V5.84714C4.38624 6.08172 4.54204 6.29133 4.77631 6.3719L7.41123 7.27803C7.1046 7.76626 6.94092 8.32432 6.94092 8.90708C6.94092 9.89284 7.41559 10.7761 8.16107 11.3659C7.47284 11.6004 6.82685 11.9445 6.25596 12.3874C5.12093 13.268 4.33179 14.4962 4.03386 15.8458C3.93548 16.2915 4.0538 16.7491 4.35852 17.1013C4.66099 17.4508 5.10907 17.6513 5.58787 17.6513H15.1264C15.6019 17.6513 16.0483 17.4506 16.3512 17.1005C16.6595 16.7442 16.7795 16.2824 16.6804 15.8336ZM6.64327 5.82406L10.373 4.50374L14.0831 5.82895L12.4117 6.40814C11.8278 6.1531 10.9203 6.10723 10.3637 6.10606C9.80699 6.1043 8.89878 6.14662 8.31471 6.39886L6.64327 5.82406ZM8.12919 8.90708C8.12919 8.3457 8.36206 7.81942 8.78474 7.42331C8.8995 7.3574 9.42717 7.2235 10.3413 7.2235C10.3483 7.2235 10.3553 7.2235 10.3623 7.2235C11.29 7.22557 11.8235 7.364 11.9379 7.43107C12.3552 7.82624 12.5851 8.34977 12.5851 8.90706C12.5851 10.0624 11.5856 11.0023 10.3571 11.0023C9.12865 11.0023 8.12919 10.0624 8.12919 8.90708ZM5.58787 16.5338C5.42396 16.5338 5.32474 16.4475 5.28021 16.396C5.23434 16.3429 5.16257 16.2305 5.19733 16.0729C5.52674 14.5806 6.56271 13.3551 7.93162 12.682L9.53333 16.5338H5.58787ZM9.03998 12.2791C9.46323 12.1751 9.90493 12.1198 10.3571 12.1198C10.8065 12.1198 11.2489 12.1738 11.6752 12.277L10.3571 15.4467L9.03998 12.2791Z" fill="#595E6C"/>
</svg>

        <span className="item-text">Students</span>
      </div>

      <div className={`sidebar-item ${activeItem === 'Application' ? 'active' : ''}`} onClick={() => handleClick('Application')}>
      {/* <img src={Application} alt="Students"  /> */}
      <svg width="20" height="20" viewBox="0 0 20 20" className="icon-image" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4C4 3.46957 4.21071 2.96086 4.58579 2.58579C4.96086 2.21071 5.46957 2 6 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V13.883L15 14.893V4C15 3.73478 14.8946 3.48043 14.7071 3.29289C14.5196 3.10536 14.2652 3 14 3H6C5.73478 3 5.48043 3.10536 5.29289 3.29289C5.10536 3.48043 5 3.73478 5 4V16C5 16.2652 5.10536 16.5196 5.29289 16.7071C5.48043 16.8946 5.73478 17 6 17H10.085C10.156 17.2 10.27 17.389 10.429 17.55L10.87 18H6C5.46957 18 4.96086 17.7893 4.58579 17.4142C4.21071 17.0391 4 16.5304 4 16V4ZM8 5.5C8 5.76522 7.89464 6.01957 7.70711 6.20711C7.51957 6.39464 7.26522 6.5 7 6.5C6.73478 6.5 6.48043 6.39464 6.29289 6.20711C6.10536 6.01957 6 5.76522 6 5.5C6 5.23478 6.10536 4.98043 6.29289 4.79289C6.48043 4.60536 6.73478 4.5 7 4.5C7.26522 4.5 7.51957 4.60536 7.70711 4.79289C7.89464 4.98043 8 5.23478 8 5.5ZM9.5 5C9.36739 5 9.24021 5.05268 9.14645 5.14645C9.05268 5.24021 9 5.36739 9 5.5C9 5.63261 9.05268 5.75979 9.14645 5.85355C9.24021 5.94732 9.36739 6 9.5 6H13.5C13.6326 6 13.7598 5.94732 13.8536 5.85355C13.9473 5.75979 14 5.63261 14 5.5C14 5.36739 13.9473 5.24021 13.8536 5.14645C13.7598 5.05268 13.6326 5 13.5 5H9.5ZM9.5 9C9.36739 9 9.24021 9.05268 9.14645 9.14645C9.05268 9.24021 9 9.36739 9 9.5C9 9.63261 9.05268 9.75979 9.14645 9.85355C9.24021 9.94732 9.36739 10 9.5 10H13.5C13.6326 10 13.7598 9.94732 13.8536 9.85355C13.9473 9.75979 14 9.63261 14 9.5C14 9.36739 13.9473 9.24021 13.8536 9.14645C13.7598 9.05268 13.6326 9 13.5 9H9.5ZM9 13.5C9 13.3674 9.05268 13.2402 9.14645 13.1464C9.24021 13.0527 9.36739 13 9.5 13H13.5C13.6326 13 13.7598 13.0527 13.8536 13.1464C13.9473 13.2402 14 13.3674 14 13.5C14 13.6326 13.9473 13.7598 13.8536 13.8536C13.7598 13.9473 13.6326 14 13.5 14H9.5C9.36739 14 9.24021 13.9473 9.14645 13.8536C9.05268 13.7598 9 13.6326 9 13.5ZM7 10.5C7.26522 10.5 7.51957 10.3946 7.70711 10.2071C7.89464 10.0196 8 9.76522 8 9.5C8 9.23478 7.89464 8.98043 7.70711 8.79289C7.51957 8.60536 7.26522 8.5 7 8.5C6.73478 8.5 6.48043 8.60536 6.29289 8.79289C6.10536 8.98043 6 9.23478 6 9.5C6 9.76522 6.10536 10.0196 6.29289 10.2071C6.48043 10.3946 6.73478 10.5 7 10.5ZM7 14.5C7.26522 14.5 7.51957 14.3946 7.70711 14.2071C7.89464 14.0196 8 13.7652 8 13.5C8 13.2348 7.89464 12.9804 7.70711 12.7929C7.51957 12.6054 7.26522 12.5 7 12.5C6.73478 12.5 6.48043 12.6054 6.29289 12.7929C6.10536 12.9804 6 13.2348 6 13.5C6 13.7652 6.10536 14.0196 6.29289 14.2071C6.48043 14.3946 6.73478 14.5 7 14.5ZM17.855 14.852C17.9458 14.7573 17.9957 14.6308 17.994 14.4996C17.9924 14.3685 17.9392 14.2433 17.8461 14.1509C17.753 14.0586 17.6273 14.0065 17.4962 14.006C17.365 14.0054 17.2389 14.0564 17.145 14.148L13.502 17.828L11.857 16.15C11.8113 16.102 11.7565 16.0636 11.6958 16.037C11.6351 16.0104 11.5698 15.9961 11.5035 15.995C11.4373 15.9938 11.3715 16.0059 11.3099 16.0304C11.2483 16.055 11.1923 16.0915 11.145 16.1379C11.0976 16.1843 11.06 16.2396 11.0343 16.3006C11.0085 16.3617 10.9952 16.4273 10.995 16.4935C10.9948 16.5598 11.0078 16.6254 11.0332 16.6866C11.0586 16.7478 11.0959 16.8034 11.143 16.85L13.072 18.818C13.1277 18.8748 13.1941 18.92 13.2675 18.9509C13.3408 18.9818 13.4195 18.9978 13.4991 18.998C13.5786 18.9982 13.6575 18.9825 13.7309 18.952C13.8044 18.9214 13.871 18.8766 13.927 18.82L17.855 14.852Z" fill="#595E6C"/>
</svg>

        <span className="item-text">Application</span>
      </div>

      <div className={`sidebar-item ${activeItem === 'Employee' ? 'active' : ''}`} onClick={() => handleClick('Employee')}>
      <img src={Employee} alt="Students" className="icon-image" />
        <span className="item-text">Employee</span>
      </div>

      <div className={`sidebar-item ${activeItem === 'Fleet' ? 'active' : ''}`} onClick={() => handleClick('Fleet')}>
      <img src={Fleet} alt="Students" className="icon-image" />
        <span className="item-text">Fleet</span>
      </div>

      <div className={`sidebar-item ${activeItem === 'Warehouse' ? 'active' : ''}`} onClick={() => handleClick('Warehouse')}>
      <img src={Warehouse} alt="Students" className="icon-image" />
        <span className="item-text">Warehouse</span>
      </div>

      <div className={`sidebar-item ${activeItem === 'SMS' ? 'active' : ''}`} onClick={() => handleClick('SMS')}>
      <img src={SMS} alt="Students" className="icon-image" />
        <span className="item-text">SMS</span>
      </div>

      <div className={`sidebar-item ${activeItem === 'Question Bank' ? 'active' : ''}`} onClick={() => handleClick('Question Bank')}>
      <img src={QuestionBank} alt="Students" className="icon-image" />
        <span className="item-text">Question Bank</span>
      </div>

      <div className={`sidebar-item ${activeItem === 'Assets Management' ? 'active' : ''}`} onClick={() => handleClick('Assets Management')}>
      <img src={AssetsMangement} alt="Students" className="icon-image" />
        <span className="item-text">Assets Management</span>
      </div>

      <div className={`sidebar-item ${activeItem === 'Payment Services' ? 'active' : ''}`} onClick={() => handleClick('Payment Services')}>
      <img src={PaymentServices} alt="Students" className="icon-image" />
        <span className="item-text">Payment Services</span>
      </div>

      <div className={`sidebar-item ${activeItem === 'CCTV' ? 'active' : ''}`} onClick={() => handleClick('CCTV')}>
      <img src={CCTC} alt="Students" className="icon-image" />
        <span className="item-text">CCTC</span>
      </div>

      <div className={`sidebar-item ${activeItem === 'HRMS' ? 'active' : ''}`} onClick={() => handleClick('HRMS')}>
      <img src={HRMS} alt="Students" className="icon-image" />
        <span className="item-text">HRMS</span>
      </div>
      </div>
    </div>
  );
};

export default Sidebar;
