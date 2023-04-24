const defaultThemeOptions: Exclude<ThemeOptions, false> = {
  defaultTheme: 'light',
  variations: { colors: [], lighten: 0, darken: 0 },
  themes: {
    light: {
      dark: false,
      colors: {
        background: '#FFFFFF',
        surface: '#FFFFFF',
        'surface-variant': '#424242',
        'on-surface-variant': '#EEEEEE',
        primary: '#6200EE',
        'primary-darken-1': '#3700B3',
        secondary: '#03DAC6',
        'secondary-darken-1': '#018786',
        error: '#B00020',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
      },
      variables: {
        'border-color': '#000000',
        'border-opacity': 0.12,
        'high-emphasis-opacity': 0.87,
        'medium-emphasis-opacity': 0.60,
        'disabled-opacity': 0.38,
        'idle-opacity': 0.04,
        'hover-opacity': 0.04,
        'focus-opacity': 0.12,
        'selected-opacity': 0.08,
        'activated-opacity': 0.12,
        'pressed-opacity': 0.12,
        'dragged-opacity': 0.08,
        'theme-kbd': '#212529',
        'theme-on-kbd': '#FFFFFF',
        'theme-code': '#F5F5F5',
        'theme-on-code': '#000000',
      },
    },
    dark: {
      dark: true,
      colors: {
        background: '#121212',
        surface: '#212121',
        'surface-variant': '#BDBDBD',
        'on-surface-variant': '#424242',
        primary: '#BB86FC',
        'primary-darken-1': '#3700B3',
        secondary: '#03DAC5',
        'secondary-darken-1': '#03DAC5',
        error: '#CF6679',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
      },
      variables: {
        'border-color': '#FFFFFF',
        'border-opacity': 0.12,
        'high-emphasis-opacity': 0.87,
        'medium-emphasis-opacity': 0.60,
        'disabled-opacity': 0.38,
        'idle-opacity': 0.10,
        'hover-opacity': 0.04,
        'focus-opacity': 0.12,
        'selected-opacity': 0.08,
        'activated-opacity': 0.12,
        'pressed-opacity': 0.16,
        'dragged-opacity': 0.08,
        'theme-kbd': '#212529',
        'theme-on-kbd': '#FFFFFF',
        'theme-code': '#343434',
        'theme-on-code': '#CCCCCC',
      },
    },
  },
}

:root {
      color-scheme: dark;
    }
    :root {
      --v-theme-background: 18,18,18;
      --v-theme-background-overlay-multiplier: 1;
      --v-theme-surface: 33,33,33;
      --v-theme-surface-overlay-multiplier: 1;
      --v-theme-surface-variant: 189,189,189;
      --v-theme-surface-variant-overlay-multiplier: 2;
      --v-theme-on-surface-variant: 66,66,66;
      --v-theme-primary: 187,134,252;
      --v-theme-primary-overlay-multiplier: 2;
      --v-theme-primary-darken-1: 55,0,179;
      --v-theme-primary-darken-1-overlay-multiplier: 1;
      --v-theme-secondary: 3,218,197;
      --v-theme-secondary-overlay-multiplier: 2;
      --v-theme-secondary-darken-1: 3,218,197;
      --v-theme-secondary-darken-1-overlay-multiplier: 2;
      --v-theme-error: 207,102,121;
      --v-theme-error-overlay-multiplier: 2;
      --v-theme-info: 33,150,243;
      --v-theme-info-overlay-multiplier: 2;
      --v-theme-success: 76,175,80;
      --v-theme-success-overlay-multiplier: 2;
      --v-theme-warning: 251,140,0;
      --v-theme-warning-overlay-multiplier: 2;
      --v-theme-on-background: 255,255,255;
      --v-theme-on-surface: 255,255,255;
      --v-theme-on-primary: 255,255,255;
      --v-theme-on-primary-darken-1: 255,255,255;
      --v-theme-on-secondary: 0,0,0;
      --v-theme-on-secondary-darken-1: 0,0,0;
      --v-theme-on-error: 255,255,255;
      --v-theme-on-info: 255,255,255;
      --v-theme-on-success: 255,255,255;
      --v-theme-on-warning: 255,255,255;
      --v-border-color: 255, 255, 255;
      --v-border-opacity: 0.12;
      --v-high-emphasis-opacity: 0.87;
      --v-medium-emphasis-opacity: 0.6;
      --v-disabled-opacity: 0.38;
      --v-idle-opacity: 0.1;
      --v-hover-opacity: 0.04;
      --v-focus-opacity: 0.12;
      --v-selected-opacity: 0.08;
      --v-activated-opacity: 0.12;
      --v-pressed-opacity: 0.16;
      --v-dragged-opacity: 0.08;
      --v-theme-kbd: 33, 37, 41;
      --v-theme-on-kbd: 255, 255, 255;
      --v-theme-code: 52, 52, 52;
      --v-theme-on-code: 204, 204, 204;
    }
    .v-theme--light {
      color-scheme: normal;
      --v-theme-background: 255,255,255;
      --v-theme-background-overlay-multiplier: 1;
      --v-theme-surface: 255,255,255;
      --v-theme-surface-overlay-multiplier: 1;
      --v-theme-surface-variant: 66,66,66;
      --v-theme-surface-variant-overlay-multiplier: 2;
      --v-theme-on-surface-variant: 238,238,238;
      --v-theme-primary: 98,0,238;
      --v-theme-primary-overlay-multiplier: 2;
      --v-theme-primary-darken-1: 55,0,179;
      --v-theme-primary-darken-1-overlay-multiplier: 2;
      --v-theme-secondary: 3,218,198;
      --v-theme-secondary-overlay-multiplier: 1;
      --v-theme-secondary-darken-1: 1,135,134;
      --v-theme-secondary-darken-1-overlay-multiplier: 1;
      --v-theme-error: 176,0,32;
      --v-theme-error-overlay-multiplier: 2;
      --v-theme-info: 33,150,243;
      --v-theme-info-overlay-multiplier: 1;
      --v-theme-success: 76,175,80;
      --v-theme-success-overlay-multiplier: 1;
      --v-theme-warning: 251,140,0;
      --v-theme-warning-overlay-multiplier: 1;
      --v-theme-on-background: 0,0,0;
      --v-theme-on-surface: 0,0,0;
      --v-theme-on-primary: 255,255,255;
      --v-theme-on-primary-darken-1: 255,255,255;
      --v-theme-on-secondary: 0,0,0;
      --v-theme-on-secondary-darken-1: 255,255,255;
      --v-theme-on-error: 255,255,255;
      --v-theme-on-info: 255,255,255;
      --v-theme-on-success: 255,255,255;
      --v-theme-on-warning: 255,255,255;
      --v-border-color: 0, 0, 0;
      --v-border-opacity: 0.12;
      --v-high-emphasis-opacity: 0.87;
      --v-medium-emphasis-opacity: 0.6;
      --v-disabled-opacity: 0.38;
      --v-idle-opacity: 0.04;
      --v-hover-opacity: 0.04;
      --v-focus-opacity: 0.12;
      --v-selected-opacity: 0.08;
      --v-activated-opacity: 0.12;
      --v-pressed-opacity: 0.12;
      --v-dragged-opacity: 0.08;
      --v-theme-kbd: 33, 37, 41;
      --v-theme-on-kbd: 255, 255, 255;
      --v-theme-code: 245, 245, 245;
      --v-theme-on-code: 0, 0, 0;
    }
    .v-theme--dark {
      color-scheme: dark;
      --v-theme-background: 18,18,18;
      --v-theme-background-overlay-multiplier: 1;
      --v-theme-surface: 33,33,33;
      --v-theme-surface-overlay-multiplier: 1;
      --v-theme-surface-variant: 189,189,189;
      --v-theme-surface-variant-overlay-multiplier: 2;
      --v-theme-on-surface-variant: 66,66,66;
      --v-theme-primary: 187,134,252;
      --v-theme-primary-overlay-multiplier: 2;
      --v-theme-primary-darken-1: 55,0,179;
      --v-theme-primary-darken-1-overlay-multiplier: 1;
      --v-theme-secondary: 3,218,197;
      --v-theme-secondary-overlay-multiplier: 2;
      --v-theme-secondary-darken-1: 3,218,197;
      --v-theme-secondary-darken-1-overlay-multiplier: 2;
      --v-theme-error: 207,102,121;
      --v-theme-error-overlay-multiplier: 2;
      --v-theme-info: 33,150,243;
      --v-theme-info-overlay-multiplier: 2;
      --v-theme-success: 76,175,80;
      --v-theme-success-overlay-multiplier: 2;
      --v-theme-warning: 251,140,0;
      --v-theme-warning-overlay-multiplier: 2;
      --v-theme-on-background: 255,255,255;
      --v-theme-on-surface: 255,255,255;
      --v-theme-on-primary: 255,255,255;
      --v-theme-on-primary-darken-1: 255,255,255;
      --v-theme-on-secondary: 0,0,0;
      --v-theme-on-secondary-darken-1: 0,0,0;
      --v-theme-on-error: 255,255,255;
      --v-theme-on-info: 255,255,255;
      --v-theme-on-success: 255,255,255;
      --v-theme-on-warning: 255,255,255;
      --v-border-color: 255, 255, 255;
      --v-border-opacity: 0.12;
      --v-high-emphasis-opacity: 0.87;
      --v-medium-emphasis-opacity: 0.6;
      --v-disabled-opacity: 0.38;
      --v-idle-opacity: 0.1;
      --v-hover-opacity: 0.04;
      --v-focus-opacity: 0.12;
      --v-selected-opacity: 0.08;
      --v-activated-opacity: 0.12;
      --v-pressed-opacity: 0.16;
      --v-dragged-opacity: 0.08;
      --v-theme-kbd: 33, 37, 41;
      --v-theme-on-kbd: 255, 255, 255;
      --v-theme-code: 52, 52, 52;
      --v-theme-on-code: 204, 204, 204;
    }
    