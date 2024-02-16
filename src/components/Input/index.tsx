import "./style.sass";

interface IInputProps extends React.HTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  inputRef: React.RefObject<HTMLInputElement>;
  errorText?: string;
}
export const Input = ({
  style,
  label,
  id,
  inputRef,
  errorText,
  ...props
}: IInputProps) => {
  return (
    <div style={{ textAlign: "left" }}>
      <label htmlFor={id}>{label}</label>
      <div className="input-wrapper">
        <input type="text" ref={inputRef} {...props} />
      </div>
      {errorText && (
        <span style={{ color: "red", fontStyle: "italic" }}>{errorText}</span>
      )}
    </div>
  );
};
