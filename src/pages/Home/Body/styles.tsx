import styled from "styled-components";
import { colors } from "../../../utils/colors";


export const StyledBody = styled.main`

display: flex;
height: 100%;
width: 100%;
background-color: ${colors.white};

    h2{
        color: ${colors.white};
        font-weight: 400;
        
        margin: 1rem 0 1rem 2rem;
    }

    .products-container{
        display: flex;
        flex-wrap: wrap;
    }
`; 