import React from "react";
import MenuItem from './MenuItem';

const items = [['Home', 'src/assets/home-white.png'], ['Trends', 'src/assets/trending.png'], ['Feed', 'src/assets/feed.png']];
const discover = [['News and Notable', 'src/assets/new.png'], ['Release Calender', 'src/assets/calender.png'], ['Events', 'src/assets/events.png']];
const collection = [['Favorite Songs', 'src/assets/favorite.png'], ['Artist', 'src/assets/artists.png'], ['Albums', 'src/assets/albums.png']];
function SideBar(){
    return (
        <div className='sidebar card span-6'>
            <img className="menu" src = 'src/assets/menu.png' />
            <img className='logo' src='src/assets/Logo.png'/>
            {items.map((item, index) => <MenuItem key = {index} iconSrc = {item[1]} label = {item[0]} />)
            }
            <p className="p">Discover</p>
            {discover.map((item, index) => 
                <MenuItem key = {index} iconSrc = {item[1]} label = {item[0]} />
            )}
            <p className="p">Your Collection</p>
            {collection.map((item, index) => 
                <MenuItem key = {index} iconSrc = {item[1]} label = {item[0]} />
            )}
        </div>
    )
}

export default SideBar;