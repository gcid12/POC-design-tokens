import React, {useState} from 'react';
import { Icon } from '@material-ui/core';
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab';
import { Brightness1, PanoramaFishEye,  BrightnessAuto   } from '@material-ui/icons';

const ToggleTheme =({selected, update})=> {

  const handleUpdate = (event, newAlignment) => {
    update(newAlignment)
  };

  return (
    <div style={{position:'fixed', top:'10px', right:'10px'}}>
      <ToggleButtonGroup
        value={selected}
        exclusive
        onChange={handleUpdate}
        aria-label="Theme Selector"
      >
        <ToggleButton value="clear" aria-label="left aligned" size="small">
            <Brightness1/>
        </ToggleButton>
        <ToggleButton value="dark" aria-label="centered" size="small">
           <PanoramaFishEye/>
        </ToggleButton>
        <ToggleButton value="contrast" aria-label="right aligned" size="small">
            <BrightnessAuto/>
        </ToggleButton>
        
      </ToggleButtonGroup>
    </div>
  );
}

export default ToggleTheme;