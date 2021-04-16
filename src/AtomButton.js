import React, {useState} from 'react';
import {Button, Icon} from '@material-ui/core';
import { withStyles, Theme } from '@material-ui/core/styles';
import { makeStyles } from "@material-ui/core/styles"

//import { IBaseProps } from '../../interfaces/componentBase';
//import variables from '../../styles/core/variables.scss';
//import './styles.scss';

const AtomButton = (props)=> {

  const [isLoading, setIsLoading]= useState(true);

  const customStyle = useStyles();


  customStyle.buttonStyle="#FF00FF";
  
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
      {buttonContent}
    </Button>
  )
}

// Custom Styles for this component
const useStyles = makeStyles(({ palette, ...theme }) => ({

  buttonStyle:{
    color:'#FF0000',
    border:'1px solid blue'
  },
  iconStyle:{
    color:'cyan'
  },


}));

export default AtomButton; 


//Figma can map better to Material UI so everything is more explicit
