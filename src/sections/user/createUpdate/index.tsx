import React, { useEffect, useRef, useState } from "react";
import { Input } from "../../../components/Input";
import { useAppDispatch } from "../../../hooks/hooks";
import {
  TFormData,
  TUser,
  addUser,
  updateUser,
} from "../../../features/users-slice";
import Autocomplete from "../../../components/Autocomplete";
import { CustomRadioInput } from "../../../components/CustomRadioInput";
import { ScheduleInput } from "../../../components/ScheduleInput";

interface ICreateFormProps {
  onClose: () => void;
  initialData?: TUser;
}
const CreateUpdateForm: React.FC<ICreateFormProps> = ({
  onClose,
  initialData,
}) => {
  const dispatch = useAppDispatch();
  const [status, setStatus] = useState("active");

  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const user_nameRef = useRef<HTMLInputElement>(null);
  const mobileRef = useRef<HTMLInputElement>(null);
  const companyRef = useRef<HTMLInputElement>(null);
  const departmentRef = useRef<HTMLInputElement>(null);
  const dialoguesRef = useRef<HTMLInputElement>(null);
  const startTimeRef = useRef<HTMLInputElement>(null);
  const finishTimeRef = useRef<HTMLInputElement>(null);

  const [errors, setErrors] = useState<Partial<TFormData>>({});

  const resetForm = () => {
    const allRefs = [
      firstNameRef,
      lastNameRef,
      user_nameRef,
      startTimeRef,
      finishTimeRef,
      mobileRef,
      companyRef,
      departmentRef,
      dialoguesRef,
    ];
    allRefs.forEach((ref) => {
      if (ref.current) {
        ref.current.value = "";
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData: TFormData = {
      firstName: firstNameRef.current?.value || "",
      lastName: lastNameRef.current?.value || "",
      user_name: user_nameRef.current?.value || "",
      startTime: startTimeRef.current?.value || "",
      finishTime: finishTimeRef.current?.value || "",
      mobile: mobileRef.current?.value || "",
      company: companyRef.current?.value || "",
      department: departmentRef.current?.value || "",
      status: status || "",
      dialogues: dialoguesRef.current?.value || "",
    };

    const newErrors: Partial<TFormData> = {};
    for (const key in formData) {
      if (!formData[key as keyof TFormData].trim()) {
        newErrors[key as keyof TFormData] = `${key} is required`;
      }
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    if (initialData) {
      dispatch(updateUser({ ...formData, id: initialData.id }));
    } else {
      dispatch(addUser(formData));
    }
    onClose();
    resetForm();
  };

  useEffect(() => {
    if (initialData) {
      const {
        firstName,
        lastName,
        user_name,
        startTime,
        finishTime,
        mobile,
        company,
        department,
        status,
        dialogues,
      } = initialData;

      if (firstNameRef.current) firstNameRef.current.value = firstName;
      if (lastNameRef.current) lastNameRef.current.value = lastName;
      if (user_nameRef.current) user_nameRef.current.value = user_name;
      if (startTimeRef.current) startTimeRef.current.value = startTime;
      if (finishTimeRef.current) finishTimeRef.current.value = finishTime;
      if (mobileRef.current) mobileRef.current.value = mobile;
      if (companyRef.current) companyRef.current.value = company;
      if (departmentRef.current) departmentRef.current.value = department;
      if (dialoguesRef.current) dialoguesRef.current.value = dialogues;
      if (status) setStatus(status);
    }
  }, [initialData]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          id="firstName"
          label="Имя"
          inputRef={firstNameRef}
          errorText={errors.firstName}
        />

        <Input
          id="lastName"
          label="Фамилия"
          inputRef={lastNameRef}
          errorText={errors.lastName}
        />

        <Input
          id="user_name"
          label="Имя пользователя"
          inputRef={user_nameRef}
          errorText={errors.user_name}
        />

        <ScheduleInput
          label="График работы"
          startTimeRef={startTimeRef}
          finishTimeRef={finishTimeRef}
        />

        <Input
          id="mobile"
          label="Телефон"
          inputRef={mobileRef}
          errorText={errors.mobile}
        />

        <Autocomplete
          title="Выберите компанию"
          options={["Gazprom", "Lukoil", "Rosneft", "Rosseti", "Tatneft"]}
          selectOption={(val) => {
            if (companyRef.current) {
              companyRef.current.value = val;
            }
          }}
          inputRef={companyRef}
          errorText={errors.company}
        />

        <Input
          id="department"
          label="Отдел"
          inputRef={departmentRef}
          errorText={errors.department}
        />

        <CustomRadioInput
          title="Выберите статус пользователя"
          options={[
            { value: "active", label: "Активный" },
            { value: "no-active", label: "Не активен" },
          ]}
          selected={status}
          handleOptionChange={(val: string) => setStatus(val)}
          errorText={errors.status}
        />

        <Input
          id="dialogues"
          label="Диалогов в работе"
          inputRef={dialoguesRef}
          errorText={errors.dialogues}
        />

        <button type="submit" style={{ marginTop: 20 }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateUpdateForm;
