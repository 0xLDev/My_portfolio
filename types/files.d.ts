declare const font: string;

declare const SvgComponent: (props: {
  className?: string;
  children?: JSX.Element;
  style?: Record<string, _>;
  title?: string;
  onClick?: VoidFunction;
}) => null;

declare module "*.ttf" {
  export default font;
}

declare module "*.eot" {
  export default font;
}

declare module "*.woff" {
  export default font;
}

declare const img: string;
declare const file: string;

declare module "*.png" {
  export default img;
}

declare module "*.pdf" {
  export default file;
}

declare module "*.svg" {
  export default img;
}

declare module "*.jpg" {
  export default img;
}
declare module "*.ico" {
  export default img;
}

declare module "*.scss" {
  declare const scss: Record<string, string>;

  export default scss;
}

declare module "*.css" {
  declare const scss: Record<string, string>;

  export default scss;
}
