import styled from "styled-components";
import { colors } from "../../utils/colors";
import { fonts } from "../../utils/fonts";

export const Screen = styled.div`

background-color: ${colors.dark_black};

`;

export const Content = styled.div`

width: 1024px;
margin: auto;
background-color: ${colors.white};

       .cart-header{
           
           margin-top: 2rem;
           font-family: ${fonts.poppins};
           font-size: 0.8rem;
           font-weight: 200;
           position: relative;
           

           h2{
               padding-left: 1rem;
           }


           ::after{
               position: absolute;
               content: '';
               width: 100%;
               height: 0.25rem;
               background-color: #DDD;
           }
       }

       .content-container{

        button{
            width: 2rem;
            height: 2rem;
            background-color: red;
            border: 0;
        }
        
        ul{
            list-style: none ;
            display: flex;

            li{

                border-bottom: 1px solid #DDD;
                padding: 1.2rem 3rem;


                :nth-child(1){
                  width: 50%;
                  font-size: 1.2rem;
                  display: flex;
                  align-items: center;
                  color: ${colors.dark_light};

                  div{
                      position: relative;

                      button {
                          background-color: ${colors.white};
                          box-shadow: 0.2rem 0.2rem 0.2rem rgba(0,0,0,0.4), -0.2rem -0.2rem 0.2rem rgba(0,0,0,0.4) ;
                          position: absolute;
                          width: 2.5rem;
                          height: 2.5rem;
                          display: flex;
                          justify-content: center;
                          align-items: center;
                          border-radius: 50%;
                          cursor: pointer;
                      }
                   
                  }
                }

                :nth-child(2){

                display: flex;
                width: 50%;
                font-weight: 600;
                align-items: center;
                justify-content: flex-end;
                color: ${colors.red}

                }
            }
        }
       }

       .prices-section{

        display: flex;
        justify-content: flex-end;
        padding-bottom: 2rem;
        

        ul{
            width: 50%;
            list-style: none;

            li{

                :nth-child(1){
                    font-family: ${fonts.poppins};
                    font-size: 1.2rem;
                    font-weight: 700;
                    border-bottom: 1px solid #DDD;
                    padding: 0.7rem 0rem;
                    color: ${colors.red};
                }

                :nth-child(2){
                    font-family: ${fonts.mavenPro};
                    font-weight: 100;
                    display: flex;
                    justify-content: space-between;
                    padding: 0.7rem 1.5rem 0.7rem 0;
                    border-bottom: 1px solid #DDD;
                    h3{
                        font-size: 1rem;
                        font-weight: 200;
                    }
                }

                :nth-child(3){
                    font-family: ${fonts.mavenPro};
                    font-weight: 100;
                    display: flex;
                    padding: 0.7rem 1.5rem 0.7rem 0;
                    justify-content: space-between;
                    border-bottom: 1px solid #DDD;
                    h3{
                        font-size: 1rem;
                        font-weight: 200;
                        
                    }
                }

                :nth-child(4){
                    font-family: ${fonts.mavenPro};
                    font-weight: 100;
                    display: flex;
                    padding: 0.7rem 1.5rem 0.7rem 0;
                    justify-content: space-between;
                    border-bottom: 1px solid #DDD;
                    h3{
                        font-size: 1rem;
                        font-weight: 600;
                        color: ${colors.orange};
                    }
                    span{
                        font-size: 1.5rem;
                        font-weight: 700;
                        color: ${colors.orange};
                    }
                }
            }
        }

       }

       .animate-deleted-product{
        
       
        transform: translateX(-100%);
       }
`;