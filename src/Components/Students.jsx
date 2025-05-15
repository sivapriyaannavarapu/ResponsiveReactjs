import React, { useState, useEffect, useRef } from 'react';
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

const Students = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 360);
 
  useEffect(() => {
    console.log('useEffect is running');
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 360);
    };
 
    const handleScroll = () => {
      console.log('Scroll position:', window.scrollY);
      setIsScrolled(window.scrollY > 50);
    };
    
    console.log('Adding scroll event listener');
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkMobile);
 
    checkMobile();
 
    return () => {
      console.log('Removing scroll event listener');
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

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

  return (
    <div className="students-wrapper">
      <div className={`students-header-section ${isScrolled && isMobile ? 'scrolled' : ''}`}>
        <div className='header-content'>
        <h1 className="students-header">Students Masters</h1>
        {(!isScrolled || !isMobile) && (
          <p className="students-subtext">
            Access and manage comprehensive student details seamlessly. View personalized profiles tailored to your campus.
          </p>
        )}
        <div className="search">
          <img src={search} alt="Search" className="search-icon" />
          <input type="text" placeholder="Search for the module" className="search-bar" />
        </div>
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