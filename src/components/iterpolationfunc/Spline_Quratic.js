function quadraticSpline(x, y, xValue) {
    for (let i = 0; i < x.length - 1; i++) {
        if (xValue >= x[i] && xValue <= x[i + 1]) {
            let xi = x[i];
            let xi1 = x[i + 1];
            let xi2 = x[i + 2];
            let yi = y[i];
            let yi1 = y[i + 1];
            let yi2 = y[i + 2];

            let a = (xi1 * yi2 - xi2 * yi1 + xi2 * yi - xi * yi2 + xi * yi1 - xi1 * yi) /
                ((xi - xi1) * (xi - xi2) * (xi1 - xi2));
            let b = (xi1 * xi1 * yi2 - xi2 * xi2 * yi1 + xi2 * xi2 * yi - xi * xi * yi2 + xi * xi * yi1 - xi1 * xi1 * yi) /
                ((xi - xi1) * (xi - xi2) * (xi1 - xi2));
            let c = (xi1 * xi2 * (xi1 - xi2) * yi1 - xi * xi2 * (xi - xi2) * yi1 - xi1 * xi * (xi1 - xi) * yi2 +
                xi * xi1 * (xi - xi1) * yi2) /
                ((xi - xi1) * (xi - xi2) * (xi1 - xi2));

            return a * xValue * xValue + b * xValue + c;
        }
    }
    return NaN;
}
let x = [2, 4, 6, 8, 10];
let y = [9.5, 8.0, 10.5, 39.5, 72.5];
let xValue = 4.5;
let resultQuadratic = quadraticSpline(x, y, xValue);
console.log("Quadratic Spline Result:", resultQuadratic);
