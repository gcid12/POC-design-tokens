import React from "react";

import { Button } from '@material-ui/core';
import AtomButton from '../AtomButton'

const App=()=>{

  return(
    <div>
      <h5>Hello I'm the App</h5>
      <Button variant="outlined" colorVariant="" >Hello Friends</Button>

      <AtomButton 
      variant="outlined" 
      buttonContent="Hello Friends"
      />
    </div>
  )

}

export default App;