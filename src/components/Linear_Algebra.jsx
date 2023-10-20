import React from 'react'
import { Outlet } from "react-router-dom";
import LinearBtn from './Linearfunc/LinearBtn';

function Linear_Algebra() {
  return (
    <>
      <LinearBtn/>
      <Outlet />
    </>
  )
}

export default Linear_Algebra