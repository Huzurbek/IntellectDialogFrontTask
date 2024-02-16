import React from "react";

interface ScheduleInputProps {
  label: string;
  startTimeRef: React.RefObject<HTMLInputElement>;
  finishTimeRef: React.RefObject<HTMLInputElement>;
}

export const ScheduleInput: React.FC<ScheduleInputProps> = ({
  label,
  startTimeRef,
  finishTimeRef,
}) => {
  return (
    <div className="schedule">
      <label className="schedule-title">{label}</label>
      <div className="schedule-content">
        <div>
          <label>Время начала:</label>
          <input type="datetime-local" ref={startTimeRef} />
        </div>
        <div>
          <label>Время окончания:</label>
          <input type="datetime-local" ref={finishTimeRef} />
        </div>
      </div>
    </div>
  );
};
