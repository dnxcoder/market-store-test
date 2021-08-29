import styled from "styled-components";
import { colors } from "../../../utils/colors";


export const StyledBody = styled.main`

display: flex;
flex-direction: column;
height: 100%;
width: 100%;
justify-content: center;
padding-bottom: 3rem ;


align-items: center;
background-color: ${colors.white};



    h2{
        color: ${colors.white};
        font-weight: 400;
        margin: 1rem 0 1rem 2rem;
    }

    .products-container{

        width: 95%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        padding-top: 1.5rem;
        gap: 3rem 3rem;
    }
`; 