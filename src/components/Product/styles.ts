import styled from "styled-components";
import { colors } from "../../utils/colors";


export const StyledProduct = styled.section`


width: 15rem;
padding: 2rem 2rem 4rem 2rem;
border-radius: 0.1rem;
border-color: ${colors.red};
position: relative;
overflow: hidden;
background-color: ${colors.white};
box-shadow: 4px 7px 8px 7px rgba(0,0,0,0.31);

header{    
   
    img{
        width: 100%;
    }
}


ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    li {

        :nth-child(1){
            font-size: 1.2rem;
            text-align: center;
            font-weight: 700;
            color: ${colors.red};
            margin-bottom: 0.4rem;
            margin-top: 0.8rem;
         }

        :nth-child(2){
            font-size: 1.2rem;
            text-align: center;
            color: #555;
            margin-bottom: 0.4rem;
         }

         :nth-child(3){
             color: ${colors.orange};
             text-align: center;
             font-weight: 900;
             font-size: 1.5rem;

         }

         :nth-child(4){
             display: flex;
             justify-content: center;
             height: 2rem;
             width: 70%;
             position: absolute;
             bottom: -20%;
             transition: 0.5s;

                button{
                    width: 100%;
                    color: ${colors.white};
                    border-radius: 0.3rem;
                    background-color: ${colors.orange};
                    border: 0;
                    cursor: pointer;
                    font-size: 1rem;
                
                }
         }
    }
}

:hover {

ul{
    li {
        :nth-child(4) {
        bottom: 5%;
         }
    }
}            
}

`;