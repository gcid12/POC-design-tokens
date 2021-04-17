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


export const themeColors = {
  clearTheme: {
    palette: {
      type: "light",
      primary: {
        main: "#ffffff",
        contrastText: textLight.primary,
      },
      secondary: {
        main: "#7467ef",
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
        main: "#222A45",
        contrastText: "#ffffff",
      },
      secondary: {
        main: "#ff9e43",
        contrastText: textLight.primary,
      },
      error: errorColor,
      background: {
        paper: "#222A45",
        default: "#1a2038",
      },
    },
  },
  contrastTheme: {
    palette: {
      type: "light",
      primary: {
        main: "#ffffff",
        contrastText: textLight.primary,
      },
      secondary: {
        main: "#000",
        contrastText: textLight.primary,
      },
      text: textLight,
    },
  },
};
