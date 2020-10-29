import { baseFontSize } from './Global.styles';

/**
 * Converts px to rem based on a base font size.
 *
 * @param {Float} px
 * @param {Float} base optional
 */

export const pxToRem = (px, base = baseFontSize) =>
  `${parseFloat(px) / parseFloat(base)}rem`;
