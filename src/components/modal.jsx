import React from "react";

const Modal = ({ onClose, children }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        {children}
        <div className="close" onClick={onClose}>
          &times;
        </div>
      </div>
    </div>
  );
};

export default Modal;
