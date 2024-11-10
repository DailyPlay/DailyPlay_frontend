const blue = {
  blue950: '#0a0b5c',
  blue900: '#10169f',
  blue800: '#0609cd',
  blue700: '#0000ff',
  blue600: '#0c0eff',
  blue500: '#2f45ff',
  blue400: '#5676ff',
  blue300: '#85a8ff',
  blue200: '#b3ccff',
  blue100: '#d5e4ff',
  blue50: '#e8f1ff',
} as const;

const gray = {
  gray900: '#3d3d3d',
  gray800: '#454545',
  gray700: '#4f4f4f',
  gray600: '#5d5d5d',
  gray500: '#6d6d6d',
  gray400: '#888888',
  gray300: '#b0b0b0',
  gray200: '#d1d1d1',
  gray100: '#e7e7e7',
  gray50: '#f6f6f6',
} as const;

const neutral = {
  neutral900: '#101828',
  neutral800: '#1d2939',
  neutral700: '#344054',
  neutral600: '#475467',
  neutral500: '#667085',
  neutral400: '#888888',
  neutral300: '#98a2b3',
  neutral200: '#d0d5dd ',
  neutral100: '#e4e7ec',
  neutral50: '#f2f4f7',
} as const;

export const theme = {
  ...blue,
  ...gray,
  ...neutral,
  black: '#000000',
  white: '#ffffff',
} as const;
