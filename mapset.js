function cToF (celsius) {
    let tmp1 , tmp2 , result ;
    if (typeof(celsius) !== 'number' ) {
        return 'celsius is undifined';
    } else {
        if (celsius === 0 ) {
            return  32;
        } else {
            tmp1 = celsius * 9 ;
            tmp2 = tmp1 /5 ;
            result = tmp2 + 32;
    
            return result
        }
    }
    
}

function fToC (fahreinheit) {
    let tmp1 , tmp2 , result ;
    if (typeof(fahreinheit) !== 'number' ) {
        return 'fahreinheit is undifined';
    } else {
        tmp1 = fahreinheit - 32;
        tmp2 = tmp1 / 9;
        result = tmp2 * 5;
    }
    return result;
}

let celsiusMap = new Map([
    ['paris',20],
    ['london',0],
    ['berlin',40]
]);

let fahreinheitSet = new Set([20,0,40])

for (let temperature of celsiusMap.values()){
    console.log(cToF(temperature))
}

for (value of fahreinheitSet) {
    console.log(fToC(value))
}



