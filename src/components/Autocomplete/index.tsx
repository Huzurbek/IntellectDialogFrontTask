import React, { useEffect, useMemo, useState } from "react";
import { ClearIcon, DownIcon, UpIcon } from "../icons";

import "./style.sass";

interface AutocompleteProps {
  options: string[];
  selectOption: (val: string) => void;
  inputRef: React.RefObject<HTMLInputElement>;
  title: string;
  errorText?: string;
}

const Autocomplete: React.FC<AutocompleteProps> = ({
  options,
  selectOption,
  inputRef,
  title,
  errorText,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    setIsOpen(true);
  };

  const handleOptionClick = (option: string) => {
    setInputValue(option);
    selectOption(option);
    setIsOpen(false);
  };

  const optionList = useMemo(() => {
    return options.filter((option) =>
      option.toLowerCase().includes(inputValue.toLowerCase())
    );
  }, [options, inputValue]);

  useEffect(() => {
    const handleMouseDown = () => {
      setIsOpen(false);
    };
    document.addEventListener("mousedown", handleMouseDown);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);
  useEffect(() => {
    if (inputRef.current) {
      setInputValue(inputRef.current.value);
    }
  }, [inputRef]);
  return (
    <>
      <div className="autocomplete">
        <label style={{ padding: 0 }}>
          {title ? title : "Выберите параметры"}
        </label>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onFocus={() => setIsOpen(true)}
          ref={inputRef}
          placeholder="Select Option"
          onMouseDown={(e) => e.stopPropagation()}
        />
        {inputValue ? (
          <div
            className="cycle_wrapper clear"
            onClick={() => setInputValue("")}
          >
            <ClearIcon />
          </div>
        ) : null}

        <div
          className="cycle_wrapper"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <UpIcon /> : <DownIcon />}
        </div>

        {isOpen && (
          <ul className="options">
            {optionList.map((option) => (
              <li
                key={option}
                onClick={(e) => {
                  handleOptionClick(option);
                }}
                onMouseDown={(e) => e.stopPropagation()}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
      <span
        style={{
          color: "red",
          fontStyle: "italic",
          float: "left",
        }}
      >
        {errorText ? errorText : ""}
      </span>
      <br></br>
    </>
  );
};

export default Autocomplete;
