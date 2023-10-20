import React from "react";
import { Outlet } from "react-router-dom";

import IterpolationBtn from "./iterpolationfunc/iterpolationBtn.jsx";
function Iterpolantion() {
  return (
    <>
      <IterpolationBtn />
      <Outlet />
    </>
  );
}

export default Iterpolantion;
