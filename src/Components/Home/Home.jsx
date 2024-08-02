import React from 'react';
import Banner from '../Banner/Banner';
import Menu from '../Menu/Menu';
import Featured from '../Featured/Featured';
const Home = () => {
    return (
        <div className='mb-20'>
            <Banner></Banner>
            <div className='mt-20'>
                <Menu></Menu>
                <div className='mt-20'>
<Featured></Featured>
            </div></div>
        </div>
    );
};

export default Home;