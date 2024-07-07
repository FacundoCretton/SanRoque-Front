import { createGlobalStyle } from "styled-components";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { anticipate } from "framer-motion";


export const GlobalStyles = createGlobalStyle`
   
  html{
    scroll-behavior: smooth;
    box-sizing: border-box;

  }
  body {
    margin: 0;
    
    /* padding: 0; */
    background: rgba(255, 247, 224, 1); ;
    font-family: 'Roboto';
    color: #333333;
    -webkit-tap-highlight-color: transparent;
    overflow-x: hidden
    }
    a {
    text-decoration: none;
    color: white;
    }
    a:visited {
    color: white;
    }
    li {
    list-style: none;
    }
   
 
 :where(.css-dev-only-do-not-override-1rqnfsa).ant-layout.ant-layout-has-sider {
    flex-direction: column !important; /* Asegurando que el diseño se mantenga en fila */
}   

.my-dashboard-layout.ant-layout.ant-layout-has-sider {
    flex-direction: column !important; 
}
`;

