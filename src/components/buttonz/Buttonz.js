import React from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { makeStyles } from "@material-ui/core/styles";

export const Buttonz = (props) => {
  const customStyle = useStyles();

  const { onClick, classes, id, isDisabled, buttonContent, compact } = props;

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
      variant="outlined"
      startIcon={<CheckCircleIcon />}
      color={"secondary"}
      onClick={onClick}
      classes={classes}
      disabled={isDisabled}
      className={customStyle.buttonStyle}
    >
      {buttonContent}
    </Button>
  );
};

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

Buttonz.propTypes = {
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

Buttonz.defaultProps = {
  compact: false,
};
