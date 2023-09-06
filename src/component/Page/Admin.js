import React from "react";

function Admin() {
  const handleSubmit = () => {
    console.log("----------");
  };
  return (
    <main>
      <div className="component">
        <h1>Admin</h1>
      </div>
      <button onClick={handleSubmit}>Back to Home</button>
    </main>
  );
}

export default Admin;
