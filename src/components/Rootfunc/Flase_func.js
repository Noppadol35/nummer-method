import {evaluate} from "mathjs";

export function False_func(xl,xr,u){
    function F(x){
        return evaluate(u, {x:x})
    }
    let xm = 0;
    let old_xm = 0;
    let summy = 0;
    let i = 0;
    while (i < 1) {
        xm = (xl*F(xr) - xr*F(xl))/(F(xr) - F(xl));
        if (F(xm) * F(xr) > 0) {
            xr = xm;
        }
        else {
            xl = xm;
        }
        summy = summy + 1;

        if(Math.abs((xm - old_xm)/xm) * 100 < 0.0000001){
            break;
        }
        old_xm = xm;

        console.log("xm = ", xm);
    }
    return xm;
}