import { evaluate } from "mathjs";

export function OnePoint_func(x){
    function F(x){
        return evaluate(u, {x:x})
    }


    let xold = 0;
    let x = 1;
    let i = 0;

    while(i < 1){
        x = x + F(x);

        if(Math.abs((x - xold)/x) * 100 < 0.0000001){
            break;
        }
        xold = x;
    }
    return x;
}