import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Icon } from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { makeStyles } from "@material-ui/core/styles";

export const Boton = (props) => {
  const [isLoading, setIsLoading] = useState(true);

  const customStyle = useStyles();
  const customStyle2 = useStyles2();

  console.log(customStyle);
  console.log(customStyle2);

  const {
    onClick,
    buttonType,
    classes,
    id,
    isDisabled,
    size,
    buttonContent,
    isErrorMode,
    dataAttributes,
    children,
    className,
    //custom props
    type,
    compact,
  } = props;

  let variant;
  let addStyle;

  switch (type) {
    case "primary":
      variant = "contained";
      //addStyle = { color: "white" };
      break;
    case "secondary":
      variant = "outlined";
      break;
    case "tertiary":
      variant = "";
    //addStyle = { color: "white" };
  }
  //Semantic:  info, good, bad, warn, disabled
  //Compact: bool

  let buttonSize;

  if (compact) {
    buttonSize = "small";
  } else {
    buttonSize = "medium";
  }

  //Theme: clear, dark, accessible

  return (
    <Button
      id={id}
      size={buttonSize}
      variant={variant}
      startIcon={<CheckCircleIcon />}
      color={"secondary"}
      onClick={onClick}
      classes={classes}
      disabled={isDisabled}
      //className={`atom-component__button ${buttonType}`}
      className={customStyle.buttonStyle}
      style={addStyle}
    >
      {buttonContent}
    </Button>
  );
};

const useStyles2 = makeStyles(({ palette, ...theme }) => console.log(palette));

// Custom Styles for this component
const useStyles = makeStyles(({ palette, ...theme }) => ({
  buttonStyle: {
    //color:'#FF0000',
    border: `1px solid ${palette.primary.main}`,
    //boxShadow: theme.shadows[8],
    //color: palette.text.primary,
    "&:hover": {
      width: "var(--sidenav-width)",
      "& .sidenavHoverShow": {
        display: "block",
      },
      "& .compactNavItem": {
        width: "100%",
        maxWidth: "100%",
        "& .nav-bullet": {
          display: "block",
        },
        "& .nav-bullet-text": {
          display: "none",
        },
      },
    },
  },
  iconStyle: {
    color: "cyan",
  },
}));

Boton.propTypes = {
  /**
   * Type of Button
   */
  //type: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
  type: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
  /**
   * Semantic Color
   */
  semantic: PropTypes.oneOf(["info", "good", "bad", "warn", "disabled"]),
  /**
   * Button Size
   */
  compact: PropTypes.bool,
  /**
   * Optional click handler
   */
};

Boton.defaultProps = {
  compact: false,
};
