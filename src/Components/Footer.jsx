import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Footer.css';
import Employee from '../assets/Employee.png';
import Fleet from '../assets/Fleet.png';
import Warehouse from '../assets/Warehouse.png';
import SMS from '../assets/SMS.png';
import HRMS from '../assets/HRMS.png';
import CCTC from '../assets/CCTC.png';
import QuestionBank from '../assets/QuestionBank.png';
import AssetsManagement from '../assets/AssetsManagement.png';
import PaymentServices from '../assets/PaymentServices.png';
import Application from '../assets/Application.png';

const Footer = ({ isVisible }) => {
  const navigate = useNavigate();
  const location = useLocation(); // Added to track current route
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  const [activeItem, setActiveItem] = useState('');
  const touchStartY = useRef(null);
  const menuRef = useRef(null);

  const menuItems = [
    {
      name: 'Students',
      icon: (
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          className="icon-image"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.6804 15.8336C16.6137 15.5314 16.2992 15.3373 15.9779 15.4001C15.6566 15.4628 15.4503 15.7586 15.517 16.0607C15.543 16.1789 15.5112 16.3008 15.4295 16.3952C15.3847 16.447 15.2858 16.5338 15.1264 16.5338H11.1809L12.7853 12.6756C13.3695 12.9603 13.8979 13.3485 14.3384 13.8266C14.5532 14.0598 14.9284 14.0851 15.1765 13.883C15.4244 13.681 15.4513 13.3281 15.2365 13.0949C14.507 12.303 13.5813 11.7124 12.5557 11.364C13.2998 10.7742 13.7734 9.89172 13.7734 8.90706C13.7734 8.32868 13.6118 7.77402 13.3092 7.28801L15.1398 6.65367V9.40995C15.1398 9.71854 15.4058 9.96868 15.734 9.96868C16.0621 9.96868 16.3281 9.71854 16.3281 9.40995V5.88991C16.3281 5.88441 16.3274 5.87904 16.3272 5.87357C16.3275 5.8665 16.3281 5.85946 16.3281 5.85233V5.82091C16.3281 5.58886 16.1756 5.38096 15.9449 5.29857L10.5849 3.38406C10.4496 3.33573 10.3002 3.33551 10.1646 3.38348L4.77105 5.29279C4.53952 5.37475 4.38624 5.58305 4.38624 5.81571V5.84714C4.38624 6.08172 4.54204 6.29133 4.77631 6.3719L7.41123 7.27803C7.1046 7.76626 6.94092 8.32432 6.94092 8.90708C6.94092 9.89284 7.41559 10.7761 8.16107 11.3659C7.47284 11.6004 6.82685 11.9445 6.25596 12.3874C5.12093 13.268 4.33179 14.4962 4.03386 15.8458C3.93548 16.2915 4.0538 16.7491 4.35852 17.1013C4.66099 17.4508 5.10907 17.6513 5.58787 17.6513H15.1264C15.6019 17.6513 16.0483 17.4506 16.3512 17.1005C16.6595 16.7442 16.7795 16.2824 16.6804 15.8336ZM6.64327 5.82406L10.373 4.50374L14.0831 5.82895L12.4117 6.40814C11.8278 6.1531 10.9203 6.10723 10.3637 6.10606C9.80699 6.1043 8.89878 6.14662 8.31471 6.39886L6.64327 5.82406ZM8.12919 8.90708C8.12919 8.3457 8.36206 7.81942 8.78474 7.42331C8.8995 7.3574 9.42717 7.2235 10.3413 7.2235C10.3483 7.2235 10.3553 7.2235 10.3623 7.2235C11.29 7.22557 11.8235 7.364 11.9379 7.43107C12.3552 7.82624 12.5851 8.34977 12.5851 8.90706C12.5851 10.0624 11.5856 11.0023 10.3571 11.0023C9.12865 11.0023 8.12919 10.0624 8.12919 8.90708ZM5.58787 16.5338C5.42396 16.5338 5.32474 16.4475 5.28021 16.396C5.23434 16.3429 5.16257 16.2305 5.19733 16.0729C5.52674 14.5806 6.56271 13.3551 7.93162 12.682L9.53333 16.5338H5.58787ZM9.03998 12.2791C9.46323 12.1751 9.90493 12.1198 10.3571 12.1198C10.8065 12.1198 11.2489 12.1738 11.6752 12.277L10.3571 15.4467L9.03998 12.2791Z"
            fill="#595E6C"
          />
        </svg>
      ),
      route: '/students',
      activeRoutes: ['/students','/state'], // Define routes where Students is active
    },
    {
      name: 'Application',
      icon: <img src={Application} alt="Application" className="icon-image" />,
      route: '/application',
      activeRoutes: ['/application'],
    },
    {
      name: 'Employee',
      icon: <img src={Employee} alt="Employee" className="icon-image" />,
      route: '/employee',
      activeRoutes: ['/employee'],
    },
    {
      name: 'Fleet',
      icon: <img src={Fleet} alt="Fleet" className="icon-image" />,
      route: '/fleet',
      activeRoutes: ['/fleet'],
    },
    {
      name: 'Warehouse',
      icon: <img src={Warehouse} alt="Warehouse" className="icon-image" />,
      route: '/warehouse',
      activeRoutes: ['/warehouse'],
    },
    {
      name: 'SMS',
      icon: <img src={SMS} alt="SMS" className="icon-image" />,
      route: '/sms',
      activeRoutes: ['/sms'],
    },
    {
      name: 'Question Bank',
      icon: <img src={QuestionBank} alt="Question Bank" className="icon-image" />,
      route: '/question-bank',
      activeRoutes: ['/question-bank'],
    },
    {
      name: 'Assets Management',
      icon: <img src={AssetsManagement} alt="Assets Management" className="icon-image" />,
      route: '/assets-management',
      activeRoutes: ['/assets-management'],
    },
    {
      name: 'Payment Services',
      icon: <img src={PaymentServices} alt="Payment Services" className="icon-image" />,
      route: '/payment-services',
      activeRoutes: ['/payment-services'],
    },
    {
      name: 'CCTV',
      icon: <img src={CCTC} alt="CCTV" className="icon-image" />,
      route: '/cctv',
      activeRoutes: ['/cctv'],
    },
    {
      name: 'HRMS',
      icon: <img src={HRMS} alt="HRMS" className="icon-image" />,
      route: '/hrms',
      activeRoutes: ['/hrms'],
    },
  ];

  // Set active item based on current route
  useEffect(() => {
    const currentItem = menuItems.find((item) =>
      item.activeRoutes.includes(location.pathname)
    );
    setActiveItem(currentItem ? currentItem.name : '');
  }, [location.pathname]);

  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e) => {
    if (touchStartY.current === null) return;
    e.preventDefault();
    const touchCurrentY = e.touches[0].clientY;
    const deltaY = touchStartY.current - touchCurrentY;

    if (deltaY > 30 && !isMenuExpanded) {
      setIsMenuExpanded(true);
    } else if (deltaY < -30 && isMenuExpanded) {
      setIsMenuExpanded(false);
    }
  };

  const handleTouchEnd = () => {
    touchStartY.current = null;
  };

  const handleMenuClick = (name, route) => {
    try {
      // setActiveItem(name); // Removed since useEffect handles active state
      if (route) {
        navigate(route);
      }
    } catch (error) {
      console.error('Navigation error:', error);
    }
  };

  return (
    <div
      className={`footer-menu-section ${isMenuExpanded ? 'expanded' : ''} ${
        isVisible ? 'visible' : 'hidden'
      }`}
      ref={menuRef}
      style={{ touchAction: 'none' }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="drag-message" style={{ opacity: isMenuExpanded ? 0 : 1 }}>
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8.5 4.75L4.75 1L1 4.75"
            stroke="#252C32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Drag up to see all modules
      </div>
      <div className="drag-message" style={{ opacity: isMenuExpanded ? 1 : 0 }}>
        <svg width="10" height="6" viewBox="0 0 106" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1 0.999999L4.75 4.75L8.5 1"
            stroke="#252C32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Drag down to collapse
      </div>
      <div className="menu-grid">
        {menuItems.map((item) => (
          <div
            className={`menu-item ${activeItem === item.name ? 'active' : ''}`}
            key={item.name}
            onClick={() => handleMenuClick(item.name, item.route)}
          >
            <span className="icon">{item.icon}</span>
            <span className="item-text">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;