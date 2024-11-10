import type { Preview } from "@storybook/react";
import { withThemeFromJSXProvider } from '@storybook/addon-themes';

// Material UI Font Imports
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/material-icons';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;


import { createTheme } from "@mui/material";
import { CssBaseline, ThemeProvider } from '@mui/material';

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

export const lightTheme = createTheme({
    palette: {
        mode: "light",
    },
});

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: lightTheme,
      dark: darkTheme
    },
    defaultTheme: 'light',
    Provider: ThemeProvider,
    GlobalStyles: CssBaseline,
  })
]