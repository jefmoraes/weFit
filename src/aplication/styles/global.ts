import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
  * {
    box-sizing: border-box;
    border: none;
    padding: 0;
    outline: 0;
    margin: 0;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ;
    background-color: ${(props) => props.theme.colors.primary};
    background-repeat: no-repeat;
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
    border-radius: 4px;
    height: 40%;
    width: 40%;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: "rgba(13,13,13,0.8)";
  }
  
`;
