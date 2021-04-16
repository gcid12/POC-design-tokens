import React, {useState} from 'react';
import { Icon } from '@material-ui/core';
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab';
import { AccessAlarm, ThreeDRotation, Brightness1, PanoramaFishEye,  BrightnessAuto   } from '@material-ui/icons';

const ToggleTheme =()=> {
  const [alignment, setAlignment] = useState('left');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <div style={{position:'fixed', top:'10px', right:'10px'}}>
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
      >
        <ToggleButton value="left" aria-label="left aligned" size="small">
            <Brightness1/>
        </ToggleButton>
        <ToggleButton value="center" aria-label="centered" size="small">
           <PanoramaFishEye/>
        </ToggleButton>
        <ToggleButton value="right" aria-label="right aligned" size="small">
            <BrightnessAuto/>
        </ToggleButton>
        
      </ToggleButtonGroup>
    </div>
  );
}

export default ToggleTheme;