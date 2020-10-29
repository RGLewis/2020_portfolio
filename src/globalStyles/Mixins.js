import { pxToRem } from './Utils';
export const transition = (attr, speed, easing, delay) => `
  -webkit-transition: ${attr} ${speed} ${easing} ${delay};
  -moz-transition: ${attr} ${speed} ${easing} ${delay};
  -o-transition: ${attr} ${speed} ${easing} ${delay};
  transition: ${attr} ${speed} ${easing} ${delay};
`;

export const borderRadius = (borderRadius) => `
border-radius: ${pxToRem(borderRadius)};
-webkit-border-radius: ${pxToRem(borderRadius)};
-moz-border-radius: ${pxToRem(borderRadius)};
`;
