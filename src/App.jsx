import React from "react";

const Button = ({ children, ...props }) => (
  <button
    className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
    {...props}
  >
    {children}
  </button>
);

const Card = ({ children, ...props }) => (
  <div className="bg-white rounded-lg shadow-md" {...props}>{children}</div>
);

const CardContent = ({ children, ...props }) => (
  <div className="p-4" {...props}>{children}</div>
);

export default function App() {
  return (
    <>
      {/* App content omitted here for brevity but will be pasted in canvas */}
    </>
  );
}
