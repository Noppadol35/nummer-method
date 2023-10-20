export function Lagrange_func(x,y,xx){
    let summy = 0;
    for (let i = 0; i < x.length; i++) {
        let p = 1;
        for (let j = 0; j < x.length; j++) {
          if (i !== j) {
            p = p * (xx - x[j]) / (x[i] - x[j]);
          }
        }
        summy = summy + p * y[i];
        }
    return summy;
}
