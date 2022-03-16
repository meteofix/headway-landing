import { ITheme } from '../interfaces/styled';

type sizeTypes = { [device: string]: string };

const size: sizeTypes = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const defaultTheme: ITheme = {
  colors: {
    primary: '#0066FF',
    secondary: 'rgba(0, 0, 0, 0.4)',
    link: '#0066FF',

    bg: '#FFF8F4',
    bgBlock1: 'white',
    bgBlock2: '#E6F2E7',
    bgBlock3: '#FFEDE1',
    bgBlock4: 'rgba(122, 0, 218, 0.1)',
    bgBlock5: 'rgba(255, 51, 51, 0.1)',
    bgBlock6: '#E6E9F5',
    bgBlock7: 'white',

    borderBlock1: 'rgba(0, 0, 0, 0.1)',
    borderBlock2: 'rgba(0, 187, 119, 0.4)',
    borderBlock3: 'rgba(255, 136, 51, 0.2)',
    borderBlock4: 'rgba(122, 0, 218, 0.1)',
    borderBlock5: 'rgba(255, 51, 51, 0.1)',
    borderBlock6: 'rgba(0, 102, 255, 0.2)',
    borderBlock7: 'rgba(0, 0, 0, 0.1)',

    font: 'black',
  },

  media: {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`,
  },

  // in px
  sizes: {
    header: { height: 64 },
    container: { width: 375 },
    footer: { height: 56 },
  },

  // z-index
  order: {
    header: 50,
    footer: 100,
  },
};
