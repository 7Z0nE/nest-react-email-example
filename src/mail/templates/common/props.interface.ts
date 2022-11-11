export type TFunction = (key: string, options?: any) => string;

export interface BaseProps {
  t: TFunction;
  to: string;
}
