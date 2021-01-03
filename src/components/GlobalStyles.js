import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle` 
    *{
        padding: 0px;
        margin: 0px;
        box-sizing: border-box;
    }
    html{
        &::-webkit-scrollbar{
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color: darkgray;
        }
        &::-webkit-scrollbar-track{
            background-color: white;
        }
        
    }
    body{
        font-family: 'Montserrat', sans-serif;
        width: 100%;
        overflow-x: hidden;
    }
    h2{
        font-family: 'Abril FatFace', cursive;
        font-size: 3rem;
        font-weight: lighter;
        color: #FF7676;
    }
    h3{
        font-size: 1.3rem;
        color: #333;
        padding: 1.5rem 0rem;
    }
    h4{
        font-size: 1rem;
        color: #333;
        padding: 1.5rem 0rem;
    }
    p{
        color: #696969;
        font-size: 1.2rem;
        line-height: 200%;
    }
    a{
        text-decoration:none;
        color: #333;
    }
    img{
        display: block;
    }
    input{        
        font-weight: bold;
        font-family: "Montserrat", sans-serif;
    }
    label{
        padding: 1rem;
        font-size: 1.5rem;
        
    }
    select{
        margin: 1rem;
        padding: 0.2rem 1rem;
        border: none;
        box-shadow: 0 0 30px  rgba(0, 0, 0, 0.2);
        font-size: 1.2rem;
    }
    @media screen and (max-width: 450px){
        label{
            font-size: 0.9rem;
        }
        select{
            font-size: 0.9rem;
        }
    }
`
export default GlobalStyles