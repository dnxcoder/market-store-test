import styled from "styled-components";
import { colors } from "../../utils/colors";
import { fonts } from "../../utils/fonts";

export const StyledSort = styled.div`

width: 100%;
font-family: ${fonts.poppins};
font-size: 1.5rem;
display: flex ;
justify-content: center;
margin-top: 2rem;
gap: 0rem 3rem;

div{

    input{

        color: ${colors.red};
        background-color: ${colors.red};
    }
    
    label{
        padding-left: 0.5rem;
        color: ${colors.red};
       
    }

    .sort-button{
        width: 2.5rem;
        height: 2.5rem;
        border: 0;
        background-color: ${colors.red};
        border-radius: 0.4rem;
        box-shadow: 0.3rem 0.3rem 0.4rem 0.1rem rgba(0,0,0,0.4);
        cursor: pointer;
    }
}

`;
