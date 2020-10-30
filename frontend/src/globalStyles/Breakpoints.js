const breakpoints = {
  small: '576px',
  medium: '768px',
  large: '992px',
  extraLarge: '1200px',
};

export const device = {
  small: `(min-width: ${breakpoints.small})`,
  medium: `(min-width: ${breakpoints.medium})`,
  large: `(min-width: ${breakpoints.large})`,
  extraLarge: `(min-width: ${breakpoints.extraLarge})`,
};
