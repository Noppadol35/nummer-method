import React, { useState } from "react";

function Lagrange() {
    let [data, setData] = useState([
        // แถวตัวอย่าง
        { point: "", x: "", y: "" },
    ]);
    let [xx, setxx] = useState(0);
    let [ans, setans] = useState(0);

    function calculate() {
        console.log(data);
        console.log(xx);

        let x = new Array();
        let y = new Array();

        for (let i = 0; i < data.length; i++) {
        x.push(parseFloat(data[i]["x"]));
        y.push(parseFloat(data[i]["y"]));
        }

        console.log(x);
        console.log(y);

        ans = Spline_func(x, y, xx);
        console.log(ans);
        setans(ans);
    }
    const addRow = () => {
        const newData = [...data, { point: "", x: "", y: "" }];
        setData(newData);
    };

    const deleteRow = (index) => {
        if (data.length > 1) {
        const newData = [...data];
        newData.splice(index, 1);
        setData(newData);
        }
    };

    return (
        <div className="container px-4 py-5 text-center flex-wrap justify-center relative top-2 left-40">
        <h1 className="text-2xl font-bold mb-4">Spline Table</h1>
        <button
            className="bg-green-500 text-white px-3 py-1 font-bold rounded mb-2 relative inset-x-100 top-24 left-96"
            onClick={addRow}
        >
            +
        </button>
        <div
            className="overflow-x-auto mx-auto"
            style={{ display: "flex", justifyContent: "center" }}
        >
            <table className="table-auto" id="data-table">
            <thead>
                <tr>
                <th className="px-4 py-2">Point</th>
                <th className="px-4 py-2">X</th>
                <th className="px-4 py-2">Y, f(x)</th>
                <th className="px-4 py-2">Delete</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                <tr key={index}>
                    <td className="border px-4 py-5">
                    <input
                        type="number"
                        className="w-full"
                        value={item.point}
                        onChange={(e) => {
                        const newData = [...data];
                        newData[index].point = e.target.value;
                        setData(newData);
                        }}
                    />
                    </td>
                    <td className="border px-4 py-2">
                    <input
                        type="number"
                        className="w-full"
                        value={item.x}
                        onChange={(e) => {
                        const newData = [...data];
                        newData[index].x = e.target.value;
                        setData(newData);
                        }}
                    />
                    </td>
                    <td className="border px-4 py-2">
                    <input
                        type="number"
                        className="w-full"
                        value={item.y}
                        onChange={(e) => {
                        const newData = [...data];
                        newData[index].y = e.target.value;
                        setData(newData);
                        }}
                    />
                    </td>
                    <td>
                    <button
                        className="bg-red-500 text-white px-4 py-2 font-bold rounded"
                        onClick={() => deleteRow(index)}
                    >
                        x
                    </button>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>

        <div className="mt-3 text-center">
            <label htmlFor="value1" className="block font-bold">
            F(x)
            </label>
            <input
            type="number"
            id="value1"
            name="value1"
            className="border rounded px-4 py-2 mt-1"
            value={xx}
            onChange={(e) => setxx(e.target.value)}
            />
        </div>
        <div className="mt-4 text-center">
            <button
            className="bg-blue-500 text-white px-3 py-1 font-bold rounded mt-2"
            onClick={calculate}
            >
            Calculate
            </button>
        </div>
        <div className="mt-4">
            <h2 className="text-xl font-semibold mb-2">Result: </h2>
            {ans}
        </div>
        </div>
    );
}

export default Lagrange;
