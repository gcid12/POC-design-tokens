import React, {useState} from 'react';
import { Icon, Card } from '@material-ui/core';
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab';
import { Brightness3, WbSunny,  BrightnessAuto   } from '@material-ui/icons';

const ToggleTheme =({selected, update, background})=> {

  const handleUpdate = (event, newAlignment) => {
    update(newAlignment)
  };

  return (
    <>
      {background && <Card style={{position:'absolute', top:'0', left:'0', width:'100%', height:'100%'}}/>}
      
      <Card style={{position:'fixed', top:'10px', right:'10px', zIndex:'2'}}>
        <ToggleButtonGroup
          value={selected}
          exclusive
          onChange={handleUpdate}
          aria-label="Theme Selector"
        >
          <ToggleButton value="clear" aria-label="left aligned" size="small">
              <WbSunny style={{ fontSize: 15 }}/>
          </ToggleButton>
          <ToggleButton value="dark" aria-label="centered" size="small">
            <Brightness3 style={{ fontSize: 15 }}/>
          </ToggleButton>
          <ToggleButton value="contrast" aria-label="right aligned" size="small">
              <BrightnessAuto style={{ fontSize: 15 }}/>
          </ToggleButton>
          
        </ToggleButtonGroup>
      </Card>
      

    </>
  );
}

export default ToggleTheme;