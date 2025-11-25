// Declarations for CSS and other static assets so TypeScript accepts side-effect imports
declare module '*.css';
declare module '*.scss';
declare module '*.sass';
declare module '*.less';

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.svg';

// If you use CSS Modules and want typed classes, uncomment and use the following:
// declare module '*.module.css' {
//   const classes: { [key: string]: string };
//   export default classes;
// }
// declare module '*.module.scss' {
//   const classes: { [key: string]: string };
//   export default classes;
// }
