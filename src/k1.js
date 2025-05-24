export const makeAllPositive = (arr) => arr ? arr.map(el => Math.abs(el)) : [];


export const isAscOrDesc = (arr) => {
    let isAsc = true;
    let isDesc = true;

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < arr[i + 1]) isDesc = false;
        if (arr[i] > arr[i + 1]) isAsc = false;
    }

    if (isAsc) return "yes, asc";
    else if (isDesc) return "yes, desc";
    else return "no";
}


