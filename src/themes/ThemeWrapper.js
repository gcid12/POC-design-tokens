import React, {useState, useEffect} from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import {themeColors} from "./themeColors";
import GlobalCss  from "./GlobalCss";
import ThemeToggle  from "./utilities/themeToggle";

const ThemeWrapper = ({ children, settings }) => {

  const [selectedTheme, setSelectedTheme] = useState('dark');
 
  let active;

  switch(selectedTheme){
    case 'clear': active = themeColors.clearTheme;
    break;
    case 'dark': active = themeColors.darkTheme;
    break;
    case 'contrast': active = themeColors.contrastTheme;
    break;
    default: active = themeColors.contrastTheme;
  }


  let activeTheme = createMuiTheme(active);

  return (
    <ThemeProvider theme={activeTheme}>
      <CssBaseline />
      <GlobalCss>
        {children} 
      </GlobalCss>

      <ThemeToggle selected={selectedTheme} update={setSelectedTheme}/>

    </ThemeProvider>
  );
};

export default ThemeWrapper;