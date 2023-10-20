import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Navbar from "./components/Navbar.jsx";
import Iterpolantion from "./components/Iterpolantion.jsx";
import Root_eq from "./components/Root_eq.jsx";
import Linear_Algebra from "./components/Linear_Algebra.jsx";
import Home_page from "./components/Home_page.jsx";


//import RootEQ
import Graphcial from "./components/Rootfunc/Graphcial.jsx";
import Bisection from "./components/Rootfunc/Bisection.jsx";
import Flase from "./components/Rootfunc/Flase.jsx";
import OnePoint from "./components/Rootfunc/Onepoint.jsx";
import NewtonRoot from "./components/Rootfunc/NewtonRoot.jsx";
import Secant from "./components/Rootfunc/Secant.jsx";

//import Linear
import Guss from "./components/Linearfunc/Guss.jsx";
import GussJodan from "./components/Linearfunc/GussJodan.jsx";
import Cramer from "./components/Linearfunc/Cramer.jsx";
import MatrixIV from "./components/Linearfunc/MatrixIV.jsx";
import LU from "./components/Linearfunc/LU.jsx";
import Cholesky from "./components/Linearfunc/Cholesky.jsx";

// import interpolation
import Jacobi from "./components/iterpolationfunc/Jacobi.jsx";
import GaussSeidel from "./components/iterpolationfunc/GaussSeidel.jsx";
import Conjugate from "./components/iterpolationfunc/Conjugate.jsx";
import Newton from "./components/iterpolationfunc/Newton.jsx";
import Lagrange from "./components/iterpolationfunc/Lagrange.jsx";
import Spline from "./components/iterpolationfunc/Spline.jsx";
import Multidmensional from "./components/iterpolationfunc/Multidmensional.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="Home_page" element={<Home_page />} />

        {/* RootEQ */}
        <Route path="Root_eq" element={<Root_eq />}>
          <Route path="Graphcial" element={<Graphcial />} />
          <Route path="Bisection" element={<Bisection />} />
          <Route path="Flase" element={<Flase />} />
          <Route path="Conjugate" element={<Conjugate />} />
          <Route path="OnePoint" element={<OnePoint />} />
          <Route path="NewtonRoot" element={<NewtonRoot />} />
          <Route path="Secant" element={<Secant />} />
        </Route>

        {/* Linear */}
        <Route path="Linear_Algebra" element={<Linear_Algebra />}>
          <Route path="Guss" element={<Guss />} />
          <Route path="GussJodan" element={<GussJodan />} />
          <Route path="Cramer" element={<Cramer />} />
          <Route path="MatrixIV" element={<MatrixIV />} />
          <Route path="LU" element={<LU />} />
          <Route path="Cholesky" element={<Cholesky />} />
        </Route>

        {/* Interpolation */}
        <Route path="Iterpolantion" element={<Iterpolantion />}>
          <Route path="Jacobi" element={<Jacobi />} />
          <Route path="GaussSeidel" element={<GaussSeidel />} />
          <Route path="Conjugate" element={<Conjugate />} />
          <Route path="Newton" element={<Newton />} />
          <Route path="Lagrange" element={<Lagrange />} />
          <Route path="Spline" element={<Spline />} />
          <Route path="Multidmensional" element={<Multidmensional />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
