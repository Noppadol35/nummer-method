import { evaluate } from "mathjs";

export function Newton_func(x, u, d) {
    function F(x) {
        return evaluate(u, { x: x })
    }
    function Fd(x) {
        return evaluate(d, { x: x })
    }
    let xm = 0;
    let old_xm = 0;
    let summy = 0;
    let i = 0;
    while (i < 1) {
        xm = x - (F(x) / Fd(x));
        summy = summy + 1;

        if (Math.abs((xm - old_xm) / xm) * 100 < 0.0000001) {
            break;
        }
        old_xm = xm;

        console.log("xm = ", xm);
    }
    return xm;
}