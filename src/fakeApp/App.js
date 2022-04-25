import React from "react";
import { Button } from "@material-ui/core";
import { Buttonz } from "../components/buttonz/Buttonz";
import ThemeWrapper from "../themes/ThemeWrapper";

const App = () => {
  return (
    <div>
      <ThemeWrapper toggle={true}>
        <h2>Hello I'm the App</h2>

        <p>Regular Material Button</p>
        <Button variant="outlined">Hello Friends</Button>

        <p>Custom Button</p>
        <Buttonz
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
