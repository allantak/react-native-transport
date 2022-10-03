import { StyleSheet } from 'react-native';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    font-family: ${({theme}) => theme.fonts.regular};
  }
  `

export const stylesGlobal = StyleSheet.create({
  
  p0: {
    padding: 0,
  },

  m0: {
    margin: 0,
  },

  mb: {
    marginBottom: "10px",
  },
  mr: {
    marginRight: "5px",
  },
});