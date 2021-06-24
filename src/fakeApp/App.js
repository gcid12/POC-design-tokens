import React from "react";
import { Button } from "@material-ui/core";
import { AtomButton } from "../AtomButton";
import ThemeWrapper from "../themes/ThemeWrapper";

const App = () => {
  return (
    <div>
      <ThemeWrapper toggle={true}>
        <h2>Hello I'm the App</h2>
        <Button variant="outlined" colorVariant="">
          Hello Friends
        </Button>

        <AtomButton
          type="primary"
          variant="outlined"
          buttonContent="Hello Friends"
          primary={true}
          backgroundColor="beige"
          compact={true}
          size="small"
          label="Hola Amigos"
        />
      </ThemeWrapper>
    </div>
  );
};

export default App;
