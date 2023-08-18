import React from "react";
import "../App.css";
import Button from "./Button";

function AppInterfacesTwo() {
  const [total, setTotal] = React.useState(0);

  return (
    <div>
      <p>Total: {total}</p>
      <Button total={total} setTotal={setTotal} />
    </div>
  );
}

export default AppInterfacesTwo;
