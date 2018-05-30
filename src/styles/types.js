// @flow
type Colors = {
  // Primary Palette
  primary100: string,
  primary200: string,
  primary300: string,
  primary400: string,
  primary: string,
  primary500: string,

  // Alert Palette
  alert100: string,
  alert200: string,
  alert300: string,
  alert400: string,
  alert: string,
  alert500: string,

  // Warning Palette
  warning100: string,
  warning200: string,
  warning300: string,
  warning400: string,
  warning: string,
  warning500: string,

  // Success Palette
  success100: string,
  success200: string,
  success300: string,
  success400: string,
  success: string,
  success500: string,

  // Monochrome Palette
  white: string,
  mono100: string,
  mono200: string,
  mono300: string,
  mono400: string,
  mono500: string,
  mono600: string,
  mono700: string,
  mono800: string,
  mono900: string,
  mono1000: string,
  black: string,

  // Semantic Colors

  // Background
  background: string,
  backgroundAlt: string,
  backgroundInv: string,

  // Foreground
  foreground: string,
  foregroundAlt: string,
  foregroundInv: string,

  // Borders
  border: string,
  borderAlt: string,
  borderFocus: string,
  borderError: string,

  // Buttons
  buttonPrimaryFill: string,
  buttonPrimaryText: string,
  buttonPrimaryHover: string,
  buttonPrimaryActive: string,
  buttonSecondaryFill: string,
  buttonSecondaryText: string,
  buttonTertiaryFill: string,
  buttonTertiaryText: string,
  buttonMinimalFill: string,
  buttonMinimalText: string,
  buttonDisabledFill: string,
  buttonDisabledText: string,

  // Links
  linkText: string,
  linkVisited: string,
  linkHover: string,

  // Shadow
  shadowFocus: string,
  shadowError: string,
};

type Typography = {
  font100: Font,
  font200: Font,
  font300: Font,
  font400: Font,
  font500: Font,
  font600: Font,
  font700: Font,
  font800: Font,
  font900: Font,
  font1000: Font,
};

type Font = {
  fontFamily: string,
  fontWeight: string,
  fontSize: string,
  lineHeight: string,
};

type Sizing = {
  scale0: string,
  scale100: string,
  scale200: string,
  scale300: string,
  scale400: string,
  scale500: string,
  scale600: string,
  scale800: string,
  scale1000: string,
  scale1200: string,
  scale1400: string,
  scale1600: string,
  scale2400: string,
  scale3200: string,
  scale4800: string,
};

type Lighting = {
  shadow400: string,
  shadow500: string,
  shadow600: string,
  shadow700: string,
  overlay0: string,
  overlay100: string,
  overlay200: string,
  overlay300: string,
  overlay400: string,
  overlay500: string,
  overlay600: string,
};

type Animation = {};

export type ThemeT = {
  colors: Colors,
  typography: Typography,
  sizing: Sizing,
  lighting: Lighting,
  animation: Animation,
};