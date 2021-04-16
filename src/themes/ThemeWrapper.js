import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import {themeColors} from "./themeColors";
import GlobalCss  from "./GlobalCss";
import ThemeToggle  from "./utilities/themeToggle";

const ThemeWrapper = ({ children, settings }) => {

  //THIS DEFINES THE ACTIVE THEME
  //OPTIONS: clearTheme |  darkTheme  |  contrastTheme
  let activeTheme = createMuiTheme(themeColors.darkTheme);

  console.log(activeTheme);

  return (
    <ThemeProvider 
     theme={activeTheme}
    >
      <h5>Switch</h5>
      <ThemeToggle/>

      <CssBaseline />
          <GlobalCss>
            {children} 
          </GlobalCss>
    </ThemeProvider>
  );
};

export default ThemeWrapper;