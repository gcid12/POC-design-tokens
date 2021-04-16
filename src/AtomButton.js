import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Button, Icon} from '@material-ui/core';
import { withStyles, Theme } from '@material-ui/core/styles';
import { makeStyles } from "@material-ui/core/styles"

//import { IBaseProps } from '../../interfaces/componentBase';
//import variables from '../../styles/core/variables.scss';
//import './styles.scss';

const AtomButton = (props)=> {

  const [isLoading, setIsLoading]= useState(true);

  const customStyle = useStyles();
  const customStyle2 = useStyles2();

  console.log(customStyle);
  console.log(customStyle2);
  //customStyle.buttonStyle.border="#FF00FF";
  
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
    className
  }=props;
  
//  const ButtonIcon=(iconCode, visible)=>{
//    return(
//      <>
//      {visible ? <Icon className={customStyle.IconStyle}>{iconCode}</Icon>: null }
//      </>
//    )
   
//    }


  return(
    <Button
        id={id}
        size={size}
        variant={'outlined'}
        //startIcon={<ButtonIcon/>}
        color={'secondary'}
        onClick={onClick}
        classes={classes}
        disabled={isDisabled}
        //className={`atom-component__button ${buttonType}`}
        className={customStyle.buttonStyle}
    >
      {buttonContent}XY
    </Button>
  )
}

const useStyles2 = makeStyles(({ palette, ...theme }) => (
  console.log(palette)
));




// Custom Styles for this component
const useStyles = makeStyles(({ palette, ...theme }) => ({
  buttonStyle:{
    //color:'#FF0000',
    border:`1px solid ${palette.primary.main}`,
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
  iconStyle:{
    color:'cyan'
  },


}));

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};


export default AtomButton; 


//Figma can map better to Material UI so everything is more explicit
