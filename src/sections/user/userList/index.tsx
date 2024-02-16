import { useState } from "react";
import { TUser, removeUser } from "../../../features/users-slice";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import CustomTable from "../../../components/customTable";
import Dialog from "../../../components/Dialog";
import { USER_TABLE_DATA } from "./components/constants";
import CreateUpdateForm from "../createUpdate";

import "./style.sass";

const UserList = () => {
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [createDialog, setCreateDialog] = useState(false);
  const [updateDialog, setUpdateDialog] = useState(false);
  const [currentUser, setCurrent] = useState<TUser | null>(null);
  const users = useAppSelector((state) => state.users.entities);
  const dispatch = useAppDispatch();
  const deleteUser = () => {
    if (currentUser != null) {
      dispatch(removeUser(currentUser.id));
      setCurrent(null);
      setDeleteDialog(false);
    }
  };
  return (
    <div className="list_content">
      <div className="list_content__header" style={{}}>
        <h3>Добавить нового пользователя</h3>
        <button onClick={() => setCreateDialog(true)}>Добавить</button>
      </div>
      <CustomTable
        heads={USER_TABLE_DATA}
        rows={users}
        handleDelete={(user) => {
          setCurrent(user);
          setDeleteDialog(true);
        }}
        handleUpdate={(user) => {
          setCurrent(user);
          setUpdateDialog(true);
        }}
      />

      {/* Delete User Dialog  */}
      <Dialog isOpen={deleteDialog} onClose={() => setDeleteDialog(false)}>
        <h5>Вы уверены, что хотите удалить этого пользователя?</h5>
        <button onClick={deleteUser}>Удалить пользователя</button>
      </Dialog>

      {/* Create New User Form Dialog  */}
      {createDialog ? (
        <Dialog isOpen={createDialog} onClose={() => setCreateDialog(false)}>
          <CreateUpdateForm onClose={() => setCreateDialog(false)} />
        </Dialog>
      ) : null}

      {/* Update New User Form Dialog  */}
      {updateDialog && currentUser ? (
        <Dialog isOpen={updateDialog} onClose={() => setUpdateDialog(false)}>
          <CreateUpdateForm
            onClose={() => setCreateDialog(false)}
            initialData={currentUser}
          />
        </Dialog>
      ) : null}
    </div>
  );
};
export default UserList;
