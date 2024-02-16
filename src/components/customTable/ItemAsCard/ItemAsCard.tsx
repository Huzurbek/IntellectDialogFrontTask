import { ReactNode } from "react";
import { ITableHeader } from "../../../types";
import "./style.sass";

interface IItemAsCardProp {
  heads: ITableHeader[];
  row: Record<string, ReactNode>;
  children?: ReactNode;
}

export const ItemAsCard: React.FC<IItemAsCardProp> = ({
  heads,
  row,
  children,
}) => {
  return (
    <div className="item_as_card">
      {heads.map((head, i) => {
        if (head.hidden) return null;
        if (head.render != null) {
          return (
            <div key={head.key}>
              <h4 style={{ padding: 0, margin: "0 0 3px 0" }}>{head.label}:</h4>
              <div>{head.render(row[head.key] as string, row)}</div>
            </div>
          );
        }
        return (
          <div className="text_wrapper" key={head.key}>
            <h4>{head.label}:</h4>
            {row[head.key]}
          </div>
        );
      })}
      {children}
    </div>
  );
};
