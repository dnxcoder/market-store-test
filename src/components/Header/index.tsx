import React from "react";

// images imports
import headerIMG from '../../assets/banner.png';
import cartIcon from '../../assets/cart-icon.svg';

//components imports
import { StyledHeader } from './styles';

export function Header() {

    return (
        <StyledHeader>
            <img src={headerIMG} alt="banner of lau games" />
            <nav>
                <ul>
                    <li>Home</li>
                    <li></li>
                    <li>
                        <svg width="90px" height="72px" viewBox="0 0 90 72">
                            <title>Group 3</title>
                            <desc>Created with Sketch.</desc>
                            <defs></defs>
                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="Group-3" fill="#E1E1E1" fill-rule="nonzero">
                                    <g id="mbri-cart-add">
                                        <path d="M76.2100333,0 C68.7973992,0 62.7596892,6.06 62.7596892,13.5 C62.7596892,20.94 68.7973992,27 76.2100333,27 C83.6226674,27 89.6603774,20.94 89.6603774,13.5 C89.6603774,6.06 83.6226674,0 76.2100333,0 Z M76.2100333,3 C82.0086261,3 86.671412,7.68 86.671412,13.5 C86.671412,19.32 82.0086261,24 76.2100333,24 C70.4114405,24 65.7486546,19.32 65.7486546,13.5 C65.7486546,7.68 70.4114405,3 76.2100333,3 Z M76.2100333,6 C75.3820899,6 74.7155506,6.669 74.7155506,7.5 L74.7155506,12 L70.2321026,12 C69.4041592,12 68.7376199,12.669 68.7376199,13.5 C68.7376199,14.331 69.4041592,15 70.2321026,15 L74.7155506,15 L74.7155506,19.5 C74.7155506,20.331 75.3820899,21 76.2100333,21 C77.0379767,21 77.704516,20.331 77.704516,19.5 L77.704516,15 L82.187964,15 C83.0159074,15 83.6824467,14.331 83.6824467,13.5 C83.6824467,12.669 83.0159074,12 82.187964,12 L77.704516,12 L77.704516,7.5 C77.704516,6.669 77.0379767,6 76.2100333,6 Z M31.3755531,39 L70.2321026,39 C71.060046,39 71.7265853,39.669 71.7265853,40.5 C71.7265853,41.331 71.060046,42 70.2321026,42 L31.3755531,42 C30.5476097,42 29.8810704,41.331 29.8810704,40.5 C29.8810704,39.669 30.5476097,39 31.3755531,39 Z M28.3865877,27 L64.2541719,27 C65.0821153,27 65.7486546,27.669 65.7486546,28.5 C65.7486546,29.331 65.0821153,30 64.2541719,30 L28.3865877,30 C27.5586443,30 26.8921051,29.331 26.8921051,28.5 C26.8921051,27.669 27.5586443,27 28.3865877,27 Z M64.2541719,57 C60.1443445,57 56.7817585,60.375 56.7817585,64.5 C56.7817585,68.625 60.1443445,72 64.2541719,72 C68.3639993,72 71.7265853,68.625 71.7265853,64.5 C71.7265853,60.375 68.3639993,57 64.2541719,57 Z M64.2541719,60 C66.746969,60 68.7376199,61.998 68.7376199,64.5 C68.7376199,67.002 66.746969,69 64.2541719,69 C61.7613748,69 59.7707239,67.002 59.7707239,64.5 C59.7707239,61.998 61.7613748,60 64.2541719,60 Z M34.3645184,57 C30.2546911,57 26.8921051,60.375 26.8921051,64.5 C26.8921051,68.625 30.2546911,72 34.3645184,72 C38.4743458,72 41.8369318,68.625 41.8369318,64.5 C41.8369318,60.375 38.4743458,57 34.3645184,57 Z M34.3645184,60 C36.8573155,60 38.8479664,61.998 38.8479664,64.5 C38.8479664,67.002 36.8573155,69 34.3645184,69 C31.8717213,69 29.8810704,67.002 29.8810704,64.5 C29.8810704,61.998 31.8717213,60 34.3645184,60 Z M1.50981131,3 C-0.492795468,3 -0.513718226,6 1.50981131,6 L12.2461748,6 C12.4673583,7.065 14.1591127,15.165 16.1736753,24.69 C17.2437249,29.748 18.3376862,34.908 19.216442,38.988 C20.0922089,43.068 20.7258695,45.969 20.9739537,46.887 C21.3684971,48.369 21.7391288,50.052 22.8271122,51.519 C23.9091176,52.983 25.8160775,53.997 28.3865877,53.997 L70.2081909,53.997 C72.7787011,53.997 74.685661,52.983 75.7736444,51.519 C76.8586388,50.049 77.2262815,48.369 77.6268029,46.884 C77.8868429,45.888 78.2963311,43.575 78.8522787,40.674 C79.3992593,37.764 80.0478648,34.395 80.6456579,31.833 C81.1388372,29.994 78.0871035,29.193 77.7403836,31.155 C77.1246567,33.807 76.4640953,37.191 75.9111368,40.107 C75.3581782,43.026 74.8739658,45.603 74.7394623,46.107 C74.3329631,47.625 73.9533645,48.942 73.3735052,49.725 C72.7936459,50.511 72.1181397,50.997 70.2111798,50.997 L28.3865877,50.997 C26.4796278,50.997 25.8041217,50.511 25.2182845,49.725 C24.6414141,48.945 24.2618155,47.625 23.8553163,46.11 C23.705868,45.531 23.018406,42.429 22.1396501,38.355 C21.2638833,34.281 20.166933,29.127 19.0998724,24.063 C16.9597732,13.944 14.9153209,4.191 14.9153209,4.191 C14.7718506,3.501 14.1621016,3.003 13.4507279,3.003 L1.50981131,3 Z M25.4036003,15 C23.4159384,15 23.4398501,18 25.4036003,18 L55.2693421,18 C57.2779268,18 57.2330923,15 55.2693421,15 L25.4036003,15 Z" id="Shape"></path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </li>
                </ul>
            </nav>
        </StyledHeader>
    )
}