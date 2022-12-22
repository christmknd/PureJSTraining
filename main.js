function celsiusToFahrenheit (celsius) {
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

 function fahrenheitToCelsius (fahreinheit) {
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

console.log(celsiusToFahrenheit(0));
console.log(celsiusToFahrenheit(40));
console.log(celsiusToFahrenheit('zero'));
console.log(celsiusToFahrenheit(true));

console.log(fahrenheitToCelsius(0))
console.log(fahrenheitToCelsius(40))
console.log(fahrenheitToCelsius('zero'))
console.log(fahrenheitToCelsius(true))


