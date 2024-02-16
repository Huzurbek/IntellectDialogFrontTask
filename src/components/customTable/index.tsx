import { ReactNode } from "react";
import { ITableHeader } from "../../types";
import { useWindowSize } from "../../hooks/useWindowSize";
import { TUser } from "../../features/users-slice";
import { ItemAsCard } from "./ItemAsCard/ItemAsCard";
import { RowActions } from "./RowAction";
import "./style.sass";

interface ICustomTableProps {
  rows: Record<string, ReactNode>[];
  heads: ITableHeader[];
  handleDelete: (user: TUser) => void;
  handleUpdate: (user: TUser) => void;
}
const CustomTable: React.FC<ICustomTableProps> = ({
  rows,
  heads,
  handleUpdate,
  handleDelete,
}) => {
  const { width } = useWindowSize();
  const isMobile = width <= 1100;
  return (
    <>
      {!isMobile ? (
        <table>
          <thead>
            <tr>
              {heads.map((head) => {
                if (head.hidden) return null;
                return (
                  <th key={head.key} style={{ width: 110, ...head.style }}>
                    {head.label}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                {heads.map((head, i) => {
                  if (head.hidden) return null;
                  if (head.render != null)
                    return (
                      <td key={i}>
                        {head.render(row[head.key] as string, row)}
                      </td>
                    );

                  return head.key === "action" ? (
                    <td key={i}>
                      <RowActions
                        handleUpdate={() => handleUpdate(row as TUser)}
                        handleDelete={() => handleDelete(row as TUser)}
                      />
                    </td>
                  ) : (
                    <td key={i}>{row[head.key]}</td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <>
          {rows?.length > 0 &&
            rows.map((row, i) => (
              <ItemAsCard key={i} heads={heads} row={row}>
                <RowActions
                  handleUpdate={() => handleUpdate(row as TUser)}
                  handleDelete={() => handleDelete(row as TUser)}
                />
              </ItemAsCard>
            ))}
        </>
      )}
    </>
  );
};

export default CustomTable;
