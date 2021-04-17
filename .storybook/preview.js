import React from "react";

import { GlobalStyle } from "../src/shared/global";
import ThemeWrapper from '../src/themes/ThemeWrapper'
import { muiTheme } from 'storybook-addon-material-ui'

// Global decorator to apply the styles to all stories
export const decorators = [
  (Story) => (
    <>
      <ThemeWrapper toggle={true} background={true}>
        {/* <GlobalStyle /> */}
        <Story />
      </ThemeWrapper>
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
