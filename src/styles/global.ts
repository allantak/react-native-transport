import { StyleSheet } from 'react-native';
import { createGlobalStyle } from 'styled-components';
import "@fontsource/source-sans-pro";

export default createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    font-family: "Source Sans Pro";
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