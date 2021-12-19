export type ThemeType = {
  colors: {
    lightGray: string;
    darkGray: string;
    veryDarkGray: string;
    orange: string;
    background: string;
    surfGreen: string;
    black: string;
    iconGray: string;
  };
  breakPoints: {
    tablet: string;
    laptop: string;
    desktop: string;
  };
};

type Theme = 'light'|'dark';

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
};

const lightTheme = {
  lightGray: '#7987A5',
  darkGray: '#3E3C50',
  veryDarkGray: '#393D46',
  orange: '#F86549',
  background: '#F6F7FB',
  surfGreen: '#34A59F',
  black: '#000000',
  iconGray: '#9BAAD3'
};

const darkTheme = {
  lightGray: '#7987A5',
  darkGray: '#3E3C50',
  veryDarkGray: '#393D46',
  orange: 'purple',
  background: 'black',
  surfGreen: 'red',
  black: '#000000',
  iconGray: '#9BAAD3'
};

const themeModes = {
  light: lightTheme,
  dark: darkTheme
};

export const createTheme = (theme: Theme): ThemeType => ({
  colors: themeModes[theme],
  breakPoints: {
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    desktop: `(min-width: ${size.desktop})`
  }
});
