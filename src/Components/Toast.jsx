import React, { useState, useEffect } from "react";

const Toast = ({ message, type, duration, onClose }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      if (onClose) onClose();
    }, duration || 3000);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    show && (
      <div
        className={`fixed top-4 right-4 p-4 rounded shadow-lg text-white ${
          type === "success"
            ? "bg-green-500"
            : type === "error"
            ? "bg-red-500"
            : "bg-blue-500"
        }`}
      >
        {message}
      </div>
    )
  );
};

export default Toast;
