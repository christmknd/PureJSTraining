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

function slowConversion(celsius){
    return new Promise(resolve => {
        setTimeout(() => resolve(celsiusToFahrenheit(celsius)), 2000)
    })
}


async function promisecToF(celsius) {
    const newResult = await slowConversion(celsius);
    console.log(`Farhenheit : ${newResult}`);
    return newResult
}

promisecToF(40)