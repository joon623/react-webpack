// ts module.css 인식
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.jpg';
declare module '*.png';
declare module '*.jpeg';
declare module '*.gif';
