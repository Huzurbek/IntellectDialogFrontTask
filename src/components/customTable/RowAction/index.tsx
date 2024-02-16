interface IRowActionProps {
  handleUpdate: () => void;
  handleDelete: () => void;
}

export const RowActions: React.FC<IRowActionProps> = ({
  handleUpdate,
  handleDelete,
}) => {
  return (
    <div style={{ display: "flex", gap: "5px" }}>
      <button onClick={handleUpdate}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};
