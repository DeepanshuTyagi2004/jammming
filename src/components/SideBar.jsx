import React from "react";
import MenuItem from './MenuItem';

const items = [['Home', 'src/assets/home.png'], ['Trends', 'src/assets/trending.png'], ['Feed', 'src/assets/feed.png']];
const discover = [['News and Notable', 'src/assets/new.png'], ['Release Calender', 'src/assets/calender.png'], ['Events', 'src/assets/events.png']];
const collection = [['Favorite Songs', 'src/assets/favorite.png'], ['Artist', 'src/assets/artists.png'], ['Albums', 'src/assets/albums.png']];
function SideBar(){
    return (
        <>
            <img src='src/assets/Logo.png' height = '100px'/>
            {items.map((item, index) => <MenuItem key = {index} iconSrc = {item[1]} label = {item[0]} />)
            }
            <p>Discover</p>
            {discover.map((item, index) => 
                <MenuItem key = {index} iconSrc = {item[1]} label = {item[0]} />
            )}
            <p>Your Collection</p>
            {collection.map((item, index) => 
                <MenuItem key = {index} iconSrc = {item[1]} label = {item[0]} />
            )}
        </>
    )
}

export default SideBar;