import React, { useState } from "react";
import Toast from "./Toast";

const ToastManager = () => {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type, duration) => {
    const id = new Date().getTime();
    setToasts([...toasts, { id, message, type, duration }]);
  };

  const removeToast = (id) => {
    setToasts(toasts.filter((toast) => toast.id !== id));
  };

  return (
    <div>
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          duration={toast.duration}
          onClose={() => removeToast(toast.id)}
        />
      ))}
      <button
        className="fixed top-4 right-4 bg-blue-500 text-white p-2 rounded"
        onClick={() => addToast("This is a test message!", "success")}
      >
        Show Toast
      </button>
    </div>
  );
};

export default ToastManager;
