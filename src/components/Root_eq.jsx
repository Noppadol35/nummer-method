import React from 'react'
import { Outlet } from "react-router-dom";

import RootBtn from './Rootfunc/RootBtn.jsx';


function Root_eq() {
  return (
    <>
      <RootBtn/>
      <Outlet />
    </>
  )
}

export default Root_eq