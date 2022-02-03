// ts module.css 인식
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}
