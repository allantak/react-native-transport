import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200&display=swap');
  * {
    margin: 0;
    padding: 10px;
    outline: none;
    box-sizing: border-box;
  }
  body {
    background-color: #FBFBFB;
    font: 'Source Sans Pro', sans-serif;
  }
  body, input, button {
    font: 'Source Sans Pro', sans-serif;
  }
  `