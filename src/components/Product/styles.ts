import styled from "styled-components";
import { colors } from "../../utils/colors";


export const StyledProduct = styled.section`

margin: 1rem 2rem;
width: 12rem;
border: 0.04rem solid black;
padding: 0.5rem;
border-radius: 0.6rem;
border-color: ${colors.red};


ul {
    list-style: none;


    li {

        

        :nth-child(1){
            font-size: 1.2rem;
            text-align: center;
         }

        :nth-child(2){
            font-size: 1.2rem;
            text-align: center;
         }

         :nth-child(3){
             color: ${colors.orange};
             text-align: center;
             font-weight: 900;
             font-size: 1.5rem;
         }
    }
}

`;