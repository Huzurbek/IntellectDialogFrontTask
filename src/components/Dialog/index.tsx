import React, { ReactNode } from "react";
import "./style.sass";
interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Dialog: React.FC<DialogProps> = ({ isOpen, onClose, children }) => {
  const dialogClass = `dialog ${isOpen ? "open" : ""}`;
  const overlayClass = `overlay ${isOpen ? "open" : ""}`;

  return (
    <div>
      <div className={overlayClass} onClick={onClose}></div>
      <div className={dialogClass}>
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default Dialog;
