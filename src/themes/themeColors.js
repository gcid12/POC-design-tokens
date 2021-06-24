//this Variables should be loaded externally

const textLight = {
  primary: "rgba(52, 49, 76, 1)",
  secondary: "rgba(52, 49, 76, 0.54)",
  disabled: "rgba(52, 49, 76, 0.38)",
  hint: "rgba(52, 49, 76, 0.38)",
};
const secondaryColor = {
  light: "#f9a352",
  main: "#ff9e43",
  dark: "#ff932e",
  contrastText: textLight.primary,
};
const errorColor = {
  main: "#FF3D57",
};

//INJECTING COLORS INTO MATERIAL UI THEME
export const themeColors = {
  clearTheme: {
    palette: {
      type: "light",
      //These are colors, not Button Props
      primary: {
        //GREEN 600 #7DB534
        main: "#7DB534",
        contrastText: textLight.primary,
      },
      secondary: {
        main: "#7DB534",
        contrastText: textLight.primary,
      },
      error: errorColor,
      text: textLight,
    },
  },
  darkTheme: {
    palette: {
      type: "dark",
      primary: {
        main: "#7DB534",
        contrastText: "#ffffff",
      },
      secondary: {
        main: "#7DB534",
        contrastText: textLight.primary,
      },
      error: errorColor,
      background: {
        paper: "#040A14",
        default: "#CCC",
      },
    },
  },
  contrastTheme: {
    palette: {
      type: "light",
      primary: {
        //PURPLE400 #6967EE
        main: "#6967EE",
        contrastText: textLight.primary,
      },
      secondary: {
        //PURPLE400 #6967EE
        main: "#6967EE",
        contrastText: textLight.primary,
      },
      text: textLight,
    },
  },
};
