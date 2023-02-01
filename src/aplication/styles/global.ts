import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    border: none;
    box-sizing: border-box;
  }

  body {
    background-repeat: no-repeat;
    background-color: ${(props) => props.theme.colors.primary};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ;
  }

  button {
    background-color: transparent;
  }

  ::-webkit-scrollbar {
    background-color: transparent;
    max-height: 8px;
    width: 6px;
  
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: rgba(13,13,13,0.5);
    height: 40%;
    width: 40%;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: "rgba(13,13,13,0.8)";
  
  }


`;
