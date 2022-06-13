import React from 'react';
import "../../theme_styles/dasboard/sidebar.css";
import Sideitem from './Sideitem';

let svg1 = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="#2C5282" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 22V12H15V22" stroke="#2C5282" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>;
let svg2 = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#2C5282" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#2C5282" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="#2C5282" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="#2C5282" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>;
let svg3 = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 19L19 12L22 15L15 22L12 19Z" stroke="#2C5282" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 13L16.5 5.5L2 2L5.5 16.5L13 18L18 13Z" stroke="#2C5282" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 2L9.586 9.586" stroke="#2C5282" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 13C12.1046 13 13 12.1046 13 11C13 9.89543 12.1046 9 11 9C9.89543 9 9 9.89543 9 11C9 12.1046 9.89543 13 11 13Z" stroke="#2C5282" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>;


function Sidebar(){
        return (
            <div className="sidebar">
               <Sideitem svg={svg1} text="Home"/>
               <Sideitem svg={svg2} text="User"/>
               <Sideitem svg={svg3} text="Blog"/>
            </div>
        )
    
}

export default Sidebar
