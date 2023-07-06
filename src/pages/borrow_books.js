import React from 'react';
import {
    GlobalStyle, HeadTitle
  } from '../components/Styles';
import NavbarHead  from '../components/NavbarHead';


const Borrow = () => {
    return (
        <div>
            <GlobalStyle />
            <NavbarHead />
            <HeadTitle  style={{ marginTop: '130px' }}>Your Books</HeadTitle>
  
        </div>
    );
};

export default Borrow;