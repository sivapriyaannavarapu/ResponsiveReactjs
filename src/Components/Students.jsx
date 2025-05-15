import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Students.css';
import State from '../assets/State.png';
import City from '../assets/City.png';
import Campus from '../assets/Campus.png';
import FeePaymentYear from '../assets/FeePaymentYear.png';
import FeeHeads from '../assets/FeeHeads.png';
import Organization from '../assets/Organization.png';
import CardType from '../assets/CardType.png';
import Steam from '../assets/Steam.png';
import ProgramName from '../assets/ProgramName.png';
import ExamProgram from '../assets/ExamProgram.png';
import CourseTrack from '../assets/CourseTrack.png';
import search from '../assets/search.png';
import Footer from './Footer';
import Sidebar from './Sidebar';

const Students = () => {
  const navigate = useNavigate();
  const headerRef = useRef(null);
  const wrapperRef = useRef(null);
  const lastScrollTop = useRef(0);

  const cardData = [
    {
      title: 'State',
      description: 'State, City, Campus.',
      icon: State,
      route: '/state',
    },
    {
      title: 'City',
      description: 'Fee payment Year, Fee Head Organization, Card Type.',
      icon: City,
    },
    {
      title: 'Campus',
      description: 'Stream, Program Name, Exam program, Course Track, Batch, Section.',
      icon: Campus,
    },
    {
      title: 'Fee Payment Year',
      description: 'Description/Reason, Paymode',
      icon: FeePaymentYear,
    },
    {
      title: 'Fee heads',
      description: 'Mandal',
      icon: FeeHeads,
    },
    {
      title: 'Organization',
      description: 'Sponsored by, Sponsored Dist, School State, School District, School Type, Marks.',
      icon: Organization,
    },
    {
      title: 'Card Type',
      description: 'Reservation, Standard, Sibling Type.',
      icon: CardType,
    },
    {
      title: 'Steam',
      description: 'Second Language, Nationality, Religion, Exam Type, Appearing Year...',
      icon: Steam,
    },
    {
      title: 'ProgramName',
      description: 'Account Type',
      icon: ProgramName,
    },
    {
      title: 'Exam program',
      description: 'Payment Status, Books For Class.',
      icon: ExamProgram,
    },
    {
      title: 'Course Track',
      description: 'Route From, Stages, Bus No., Route',
      icon: CourseTrack,
    },
  ];

  const handleCardClick = (card) => {
    if (card.route) {
      navigate(card.route);
    }
  };

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!wrapperRef.current || !headerRef.current) return;

//       const currentScrollTop = wrapperRef.current.scrollTop;

//       if (Math.abs(currentScrollTop - lastScrollTop.current) < 5) return;

//       if (currentScrollTop > lastScrollTop.current) {

//   headerRef.current.classList.add('scrolled-up');
// } else {

//   headerRef.current.classList.remove('scrolled-up');
// }


   
//       if (currentScrollTop <= 0) {
//         headerRef.current.classList.remove('scrolled-up');
//       }

//       lastScrollTop.current = currentScrollTop <= 0? 0 : currentScrollTop;
//     };

//     const wrapperElement = wrapperRef.current;
//     if (wrapperElement) {
     
//       if (headerRef.current) {
//         headerRef.current.classList.remove('scrolled-up');
//       }
//       wrapperElement.addEventListener('scroll', handleScroll);
//     }

//     return () => {
//       if (wrapperElement) {
//         wrapperElement.removeEventListener('scroll', handleScroll);
//       }
//     };
//   }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!wrapperRef.current || !headerRef.current) return;

      const currentScrollTop = wrapperRef.current.scrollTop;

      // Debounce small scroll changes
      if (Math.abs(currentScrollTop - lastScrollTop.current) < 5) return;

      // Apply scrolled-up after 30px downward scroll
      if (currentScrollTop > 50 && currentScrollTop > lastScrollTop.current) {
        headerRef.current.classList.add('scrolled-up');
        wrapperRef.current.classList.add('scrolled-up');
      } else {
        // Remove scrolled-up when scrolling up or near top
        headerRef.current.classList.remove('scrolled-up');
        wrapperRef.current.classList.remove('scrolled-up');
      }

      // Ensure expanded state at the top
      if (currentScrollTop <= 0) {
        headerRef.current.classList.remove('scrolled-up');
        wrapperRef.current.classList.remove('scrolled-up');
      }

      lastScrollTop.current = currentScrollTop <= 0 ? 0 : currentScrollTop;
    };

    const wrapperElement = wrapperRef.current;
    if (wrapperElement) {
      // Set initial expanded state
      if (headerRef.current) {
        headerRef.current.classList.remove('scrolled-up');
      }
      wrapperElement.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (wrapperElement) {
        wrapperElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div className="students-wrapper" ref={wrapperRef}>
      <div className="students-header-section" ref={headerRef}>
        <h1 className="students-header">Students Masters</h1>
        <p className="students-subtext">
          Access and manage comprehensive student details seamlessly. View personalized profiles tailored to your campus.
        </p>
        <div className="search">
          <img src={search} alt="Search" className="search-icon" />
          <input type="text" placeholder="Search for the module" className="search-bar" />
        </div>
      </div>
      <div className="card-grid-section">
        <div className="card-grid">
          {cardData.map((card, index) => (
            <div
              className="card"
              key={index}
              onClick={() => handleCardClick(card)}
              style={{ cursor: card.route ? 'pointer' : 'default' }}
            >
              <img src={card.icon} alt={card.title} className="card-icon" />
              <h3 className="card-title">{card.title}</h3>
              <p className="card-description">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    
  );
};

export default Students;