import React from 'react'

function Bisection() {
  return (
    <div className="container px-4 py-5 text-center flex-wrap justify-center relative top-2 left-40">
      <h1 className="text-2xl font-bold md-4">Bisection</h1>
      <div className="mt - 3 text-center">
        <label htmlFor="value1" className="block font-bold">Equation: </label>
        <input type="number" id="value1" name="value1" className="border rom px-4 py-2 mt-1"/>
      </div>

      <div className="mt-3 text-center">
        <label htmlFor="value1" className="block font-bold">ขอบเขต:</label>
        <input type="number" id="value1" name="value1" className="border rom px-4 py-2 mt-1" />
        <label htmlFor="value2" className="block font-bold">ขอบเขต:</label>
        <input type="number" id="value2" name="value2" className="border rom px-4 py-2 mt-1" />
      </div>
    </div>
  )
}

export default Bisection