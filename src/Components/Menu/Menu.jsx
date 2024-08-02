import React, { useEffect, useState } from 'react';
import Sectiontitle from '../Sectiontitle/Sectiontitle';
import MenuCard from './MenuCard';

const Menu = () => {
    const [menuItems, setMenuItems] = useState([]);
    const [visibleItems, setVisibleItems] = useState(6); // State to manage visible items

    useEffect(() => {
        fetch('./menu.json')
            .then(res => res.json())
            .then(data => setMenuItems(data))
            .catch(error => console.error('Error fetching menu:', error));
    }, []);

    const handleLoadMore = () => {
        setVisibleItems(menuItems.length); // Show all items when "Load More" is clicked
    };

    return (
        <div>
            <Sectiontitle
                heading={"Our Menu"}
                subheading={"Explore our delectable menu featuring a wide variety of ice creams, sundaes, and other mouth-watering desserts"}
            />
            <div className='grid grid-cols-3 gap-2 py-4 mx-20 pl-10'>
                {menuItems.slice(0, visibleItems).map(menuItem => (
                    <MenuCard
                        key={menuItem.id}
                        menuitem={menuItem}
                    />
                ))}
            </div>
            {visibleItems < menuItems.length && (
                <div className='text-center mt-4'>
                    <button 
                        onClick={handleLoadMore} 
                        className='px-4 py-2 bg-coral text-white rounded'>
                        Load More
                    </button>
                </div>
            )}
        </div>
    );
};

export default Menu;
