export interface ITheme {
  colors: {
    primary: string;
    secondary: string;
    link: string;

    bg: string;
    bgBlock1: string;
    bgBlock2: string;
    bgBlock3: string;
    bgBlock4: string;
    bgBlock5: string;
    bgBlock6: string;
    bgBlock7: string;

    borderBlock1: string;
    borderBlock2: string;
    borderBlock3: string;
    borderBlock4: string;
    borderBlock5: string;
    borderBlock6: string;
    borderBlock7: string;

    font: string;
  };

  media: {
    mobileS: string;
    mobileM: string;
    mobileL: string;
    tablet: string;
    laptop: string;
    laptopL: string;
    desktop: string;
    desktopL: string;
  };

  sizes: {
    header: { height: number };
    container: { width: number };
    footer: { height: number };
  };

  order: {
    header: number;
    footer: number;
  };
}
