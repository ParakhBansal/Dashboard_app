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
let svg4 = <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="24" height="24" viewBox="0 0 225.000000 225.000000" preserveAspectRatio="xMidYMid meet">
<g transform="translate(0.000000,225.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
<path d="M1005 2106 c-33 -8 -81 -23 -108 -35 -151 -66 -280 -216 -322 -377 -21 -81 -19 -204 4 -284 31 -108 492 -1254 509 -1267 18 -15 51 -17 70 -4 16 10 495 1189 519 1276 61 228 -42 480 -251 617 -113 73 -290 104 -421 74z m114 -114 c114 -55 217 -180 256 -309 21 -70 19 -72 -13 -12 -101 194 -379 192 -476 -3 -87 -174 45 -388 239 -388 89 0 193 62 236 139 14 26 18 29 13 11 -6 -24 -353 -902 -359 -908 -4 -4 -335 830 -357 901 -25 81 -24 200 3 279 49 145 172 269 312 314 50 15 72 12 146 -24z m62 -264 c50 -17 83 -45 109 -90 32 -57 26 -150 -14 -203 -109 -143 -336 -65 -336 115 0 131 120 220 241 178z"/>
</g>
</svg>;
let svg5=<svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="24" height="24" viewBox="0 0 2558.000000 2046.000000" preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,2046.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
<path d="M12560 20445 c-222 -28 -400 -80 -600 -176 -384 -185 -689 -484 -881 -864 -392 -778 -218 -1691 438 -2287 l62 -56 -1639 -2867 c-902 -1576 -1662 -2899 -1690 -2939 -175 -253 -468 -443 -790 -512 -120 -26 -382 -26 -500 0 -97 21 -232 67 -305 103 -50 25 -2962 1769 -2979 1783 -4 5 11 57 34 117 270 699 108 1485 -417 2019 -280 286 -606 462 -1009 545 -144 30 -467 37 -624 15 -443 -64 -814 -255 -1126 -578 -736 -761 -705 -1984 68 -2714 410 -387 983 -580 1513 -509 61 8 110 15 110 15 1 0 651 -1732 1445 -3850 l1445 -3850 7675 0 7675 0 1445 3850 c794 2118 1444 3850 1445 3850 68 -13 246 -30 318 -30 671 -1 1309 370 1649 961 601 1042 101 2376 -1037 2769 -204 70 -328 91 -570 97 -230 6 -336 -5 -528 -53 -624 -155 -1146 -643 -1346 -1258 -147 -450 -125 -925 62 -1356 l15 -35 -1456 -873 c-802 -481 -1488 -889 -1526 -909 -102 -52 -259 -100 -388 -119 -455 -67 -929 130 -1203 501 -29 38 -792 1365 -1698 2948 l-1645 2879 77 71 c566 523 769 1294 530 2012 -166 499 -515 895 -991 1125 -329 159 -697 220 -1058 175z"/>
<path d="M4378 2550 c-140 -24 -285 -103 -378 -208 -61 -68 -134 -212 -150 -297 -8 -42 -10 -284 -8 -800 l3 -740 27 -73 c76 -208 263 -373 473 -417 106 -22 16784 -22 16890 0 210 44 397 209 473 417 l27 73 3 749 c3 836 5 803 -67 951 -73 149 -210 267 -374 322 l-82 28 -8395 1 c-4617 1 -8416 -2 -8442 -6z"/>
</g>
</svg>;

function Sidebar(){
        return (
            <div className="sidebar">
               <Sideitem svg={svg1} text="Home"/>
               <Sideitem svg={svg2} text="User"/>
               <Sideitem svg={svg3} text="Blog"/>
               <Sideitem svg={svg4} text="Location"/>
               <Sideitem svg={svg5} text="Premium"/>
            </div>
        )
    
}

export default Sidebar
