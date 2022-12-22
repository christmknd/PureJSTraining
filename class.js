class Celsius {
    constructor(celsius) {
        this.celsius = celsius;
    }

    cToF (celsius) {
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
        
                return this.celsius = result
            }
        }
    }
}

class Fahreinheit {
    constructor(fahreinheit) {
        this.fahreinheit = fahreinheit;
    }

    fToC (fahreinheit) {
        let tmp1 , tmp2 , result ;
    if (typeof(fahreinheit) !== 'number' ) {
        return 'fahreinheit is undifined';
    } else {
        tmp1 = fahreinheit - 32;
        tmp2 = tmp1 / 9;
        result = tmp2 * 5;
    }
    return result;
    this.fahreinheit = result;
    }
}


let ex1 = new Celsius();
let ex2 = new Fahreinheit();
console.log(ex1.cToF(0));
console.log(ex1.cToF(40));
console.log(ex1.cToF('0'));
console.log(ex1.cToF(true));
console.log(ex2.fToC (0));
console.log(ex2.fToC (40));
console.log(ex2.fToC ('0'));
console.log(ex2.fToC (true));