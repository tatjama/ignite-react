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
            background-color: darkgrey;
        }
    }
    body{
        font-family: 'Montserrat', sans-serif;
        width: 100%;
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
        padding: 1.5rem;
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
`
export default GlobalStyles