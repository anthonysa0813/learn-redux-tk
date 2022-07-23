import React from "react";

const App = () => {
  return (
    <div className="container mt-4">
      <form>
        <h3>Busca algo</h3>
        <input className="form-control mb-2" type="text" />
        <button className="btn btn-primary">Buscar</button>
      </form>
    </div>
  );
};

export default App;
