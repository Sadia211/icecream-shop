import React from 'react';

const MenuCard = ({ menuitem }) => {
    const { name, image,price } = menuitem;
    return (
        <div className='w-72 border-1 border-[#800080]'>
            <div
                className="m-2 group px-10 py-5 bg-white/10 rounded-lg flex flex-col items-center justify-center gap-2 relative after:absolute after:h-full after:bg-[#800080] z-20 shadow-lg after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden cursor-pointer after:-translate-y-full after:hover:translate-y-0 [&_p]:delay-200 [&_p]:transition-all"
            >
                <img
                    src={image}
                    className="w-44 card1img aspect-square text-[#abd373] group-hover:bg-[#E6E6FA] text-5xl rounded-full p-2 transition-all duration-300 group-hover:transition-all group-hover:duration-300 group-hover:-translate-y-2 mx-auto"
                    alt={name}
                />

                <p
                    className="cardtxt font-semibold text-black tracking-wider group-hover:text-white text-xl"
                >
                    {name}
                </p>

                <div className="ordernow flex flex-row justify-between items-center w-full">
                    <p
                        className="ordernow-text text-red-600 font-semibold group-hover:text-white"
                    >
                        $ {price}                     </p>
                    <p
                        className="btun4 lg:inline-flex items-center gap-3 group-hover:bg-[#E6E6FA] bg-[#E6E6FA] shadow-md cursor-pointer py-2 px-4 text-sm font-semibold rounded-full butn"
                    >
                        Add to cart
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MenuCard;
