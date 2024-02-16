import { ReactNode } from "react";

export enum ETableHeaderType {
  Number,
  Text,
}

export interface ITableHeader {
  key: string;
  label: string;
  style?: React.CSSProperties;
  render?: (value: string, row?: Record<string, ReactNode>) => ReactNode;
  hidden?: boolean;
}
export type TTableAction = {
  label: string;
  onClick: (id: string) => void;
};
