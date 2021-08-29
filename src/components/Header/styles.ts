import styled from "styled-components";
import { colors } from "../../utils/colors";


export const StyledHeader = styled.header`

display: flex;
flex-direction: column;
justify-content: center;
background-color: ${colors.dark_extra_light};
width: 100%;

ul {
    list-style: none;
    display: flex;
    height: 4rem;
    justify-content: space-around;
    align-items: center;
    background-color: ${colors.dark_middle};

    li{
        
        color: ${colors.white};
        font-size: 2rem;
        padding: 0.2rem .9rem;
        border: 2px solid rgba(0,0,0,0);

        :nth-child(1){

            button{
                font-size: 2rem;
                color: ${colors.white};
                background-color: rgba(0,0,0,0);
                border: 0;
                cursor: pointer;
            }
        }

       :nth-child(2){
            height: 95%;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;


            .link{

                height: 100%;

                button{
                cursor: pointer;
                height: 95%;
                border: 0;
                background-color: rgba(0,0,0,0);
                
            }

            svg{
                
                height: 90%;
            }

            :hover{
                border-radius: 10rem;
            }

            }

            
         }

        :hover {

            background-color: ${colors.dark_light};
            border-radius: 0.8rem;
            border: 2px solid ${colors.red};
            cursor: pointer;
        }
    }
    
}
`;