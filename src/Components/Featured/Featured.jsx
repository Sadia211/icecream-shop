import React from 'react';
import Sectiontitle from '../Sectiontitle/Sectiontitle';

const Featured = () => {
    return (
        <div>
            <Sectiontitle
                heading={"Featured Flavors"}
                subheading={"Flavours You’ll Love"}
            />
            <div className='relative' style={{ height: '110vh' }}>
                <div 
                    className='absolute inset-0 bg-cover bg-center'
                    style={{
                        backgroundImage: "url('https://i.ibb.co/YkFh35j/Untitled-design.png')",
                        opacity: 0.50,
                        zIndex: -1
                    }}
                ></div>
                <div className='relative z-10 grid-cols-3'>
                    <div className='h-56 w-56'>
                        <img src="https://i.ibb.co/6mM48xz/kelsey-curtis-d-Is-Mqal-SSE-unsplash.jpg" alt="Featured Ice Cream"/>
                        <img src="https://i.ibb.co/6mM48xz/kelsey-curtis-d-Is-Mqal-SSE-unsplash.jpg" alt="Featured Ice Cream"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;
