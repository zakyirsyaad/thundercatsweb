// Layout.js
import React from 'react';
import Footer from './footer';

const Layoutfooter = ({ children }) => {
    return (
        <div>
            <Footer />
            {children}
        </div>
    );
};

export default Layoutfooter;