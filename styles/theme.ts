export type ThemeType = {
    colors: {
      lightGray: string,
      darkGray: string,
      veryDarkGray: string,
      orange: string,
      background: string,
      surfGreen: string,
    },
    breakPoints: {
      tablet: string,
      laptop: string,
      desktop: string,
    }
}

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}
  
export const theme: ThemeType = {
    colors: {
      lightGray: "#7987A5",
      darkGray: "#3E3C50",
      veryDarkGray: "#393D46",
      orange: "#F86549",
      background: "#F6F7FB",
      surfGreen: "#34A59F",
    },
    breakPoints: {
      tablet: `(min-width: ${size.tablet})`,
      laptop: `(min-width: ${size.laptop})`,
      desktop: `(min-width: ${size.desktop})`
    }
  }