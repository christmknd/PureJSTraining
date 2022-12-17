function cToF (celsius) {
    this.celsius = celsius;
}


cToF.prototype.conversion = function (celsius) {
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
    this.fahreinheit = fahreinheit;
}


fToC.prototype.conversion = function (fahreinheit){
    let tmp1 , tmp2 , result ;
    if (typeof(fahreinheit) !== 'number' ) {
        return 'fahreinheit is undifined';
    } else {
        tmp1 = fahreinheit - 32;
        tmp2 = tmp1 / 9;
        result = tmp2 * 5;
    }
    return result;
    this.celsius = result;
}


const ex1 = new cToF();
const ex2 = new fToC()
console.log(ex1.conversion(0));
console.log(ex1.conversion(40));
console.log(ex1.conversion('0'));
console.log(ex1.conversion(true));
console.log(ex2.conversion(0));
console.log(ex2.conversion(40));
console.log(ex2.conversion('0'));
console.log(ex2.conversion(true));
