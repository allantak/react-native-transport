import { StyleSheet } from 'react-native';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200&display=swap');
  * {
    margin: 0;
    padding: 10px;
    outline: none;
    box-sizing: border-box;
    font-family: 'Source Sans Pro', sans-serif;
  }
  `

export const stylesGlobal = StyleSheet.create({
  p0: {
    padding: 0,
  },

  mb: {
    marginBottom: "10px",
  },
  mr: {
    marginRight: "5px",
  },
});