import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../utils/logo.png';
import profile from '../utils/profile.png';
import './Nav.css';

const Nav = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener('scroll', () => {});
    };
  }, []);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`);
  };

  return (
    <nav className={`nav ${show && 'nav__black'}`}>
      <img
        alt='Netflix logo'
        src={logo}
        onClick={() => (window.location.href = '/SidePJ-Netflix_Clone_page')}
        className='nav__logo'
      />
      <input
        value={searchValue}
        onChange={handleChange}
        className='nav__input'
        type='text'
        placeholder='검색어를 입력하세요.'
      />
      <img alt='User logged' src={profile} className='nav__avatar' />
    </nav>
  );
};

export default Nav;
