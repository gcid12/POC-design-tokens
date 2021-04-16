import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
//import { connect } from "react-redux";
//import PropTypes from "prop-types";
//import { setLayoutSettings } from "../../redux/actions/LayoutActions";
//import { setLayoutSettings } from "../../redux/actions/LayoutActions";
import CssBaseline from "@material-ui/core/CssBaseline";
//import MatxCssVars from "./MatxCssVars";

// import cssVars from "css-vars-ponyfill";
import { merge } from "lodash";

import {themeColors} from "./themeColors";
import GlobalCss  from "./GlobalCss";

const ThemeWrapper = ({ children, settings, themeSwitch }) => {

  //THIS DEFINES THE ACTIVE THEME
  //OPTIONS:
  //clearTheme |  darkTheme  |  contrastTheme


  let activeTheme = createMuiTheme(themeColors.darkTheme);

  console.log(activeTheme);

  return (
    <ThemeProvider 
     theme={activeTheme}
    >
      <h5>Switch</h5>
      <CssBaseline />
        
        {/* <MatxCssVars>  */}
          <GlobalCss>
            {children} 
          </GlobalCss>
        {/* </MatxCssVars> */}
       
    </ThemeProvider>
  );
};

export default ThemeWrapper;

// MatxTheme.propTypes = {
//   setLayoutSettings: PropTypes.func.isRequired,
//   settings: PropTypes.object.isRequired
// };

// const mapStateToProps = state => ({
//   settings: state.layout.settings,
//   setLayoutSettings: PropTypes.func.isRequired
// });

// export default connect(mapStateToProps, { setLayoutSettings })(MatxTheme);
