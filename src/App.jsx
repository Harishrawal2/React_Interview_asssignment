import React, { useState } from "react";
import Toast from "./Components/Toast";

const App = () => {
  const [showToast, setShowToast] = useState(false);

  const handleShowToast = () => {
    setShowToast(true);
  };

  return (
    <div className="mt-10 flex justify-center items-center">
      <button
        className="bg-blue-500 text-white p-2 px-5 rounded"
        onClick={handleShowToast}
      >
        Show Toast
      </button>

      {showToast && (
        <Toast
          message="This is a success message!"
          type="success"
          duration={3000}
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  );
};

export default App;
