import { ITableHeader } from "../../../../types";

export const USER_TABLE_DATA: ITableHeader[] = [
  {
    key: "firstName",
    label: "Имя",
  },
  {
    key: "lastName",
    label: "Фамилия",
  },
  {
    key: "user_name",
    label: "User Name",
  },
  {
    key: "finishTime",
    label: "",
    hidden: true,
  },
  {
    key: "startTime",
    label: "График работы",
    render: (value, row) => (
      <div style={{ padding: "2px" }}>
        <span style={{ fontWeight: 600 }}>Начала:</span>
        <p
          style={{
            fontStyle: "italic",
            margin: 0,
            marginBottom: "7px",
          }}
        >
          {formatDate(value)}
        </p>
        <span style={{ fontWeight: 600 }}>Окончания:</span>
        <p style={{ fontStyle: "italic", textAlign: "center", margin: 0 }}>
          {row?.finishTime && typeof row.finishTime === "string"
            ? formatDate(row.finishTime)
            : ""}
        </p>
      </div>
    ),
    style: {
      width: 255,
    },
  },

  {
    key: "mobile",
    label: "Телефон",
  },
  {
    key: "company",
    label: "Компания",
  },
  {
    key: "department",
    label: "Отдел",
  },
  {
    key: "status",
    label: "Статус",
    render: (value) => (
      <div
        style={{
          border: `1px solid ${value === "active" ? "green" : "red"}`,
          background: `${value === "active" ? "#00e676" : "#ff9e80"}`,
          padding: "1px",
          borderRadius: "4px",
        }}
      >
        {value === "active" ? "Активный" : "Не активен"}
      </div>
    ),
    style: {
      width: 130,
      boxSizing: "border-box",
    },
  },
  {
    key: "dialogues",
    label: "Диалогов в работе",
    style: {
      width: 260,
    },
  },
  {
    key: "action",
    label: "Action",
  },
];

export function formatDate(isoDateString: string) {
  const date = new Date(isoDateString);
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    hour: "numeric",
    // minute: "numeric",
    hour12: true,
  };
  return date.toLocaleString("en-US", options);
}
