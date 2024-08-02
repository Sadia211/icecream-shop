import React from 'react';

const Sectiontitle = ({heading,subheading}) => {
    return (
        <div className='mx-auto text-center w-96 my-8'>
            <h3 className='text-4xl  py-4 font-pacifico text-coral'>{heading}</h3>
            <p className='text-black-600 mb-2 border-y-4 '>{subheading}</p>
            
        </div>
    );
};

export default Sectiontitle;