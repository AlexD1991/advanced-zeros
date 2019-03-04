module.exports = function getZerosCount(number, base) {
     // number=20;
     let i;
// base=10;
    let maxFactors = [];
    let exp;
    let zeroCount = 0;
    let factors = getFactors(base);
    for (i = 0; i<factors.length; i++) {
        if (factors[i].first >= factors[i].second && maxFactors.indexOf(factors[i].first) == -1) {
            maxFactors.push(factors[i].first)
        } else if (factors[i].first < factors[i].second && maxFactors.indexOf(factors[i].second) == -1) maxFactors.push(factors[i].second);
    }
    for (i = 0; i<maxFactors.length; i++){
        exp = 1;
        while (Math.pow(maxFactors[i],exp)<=number){
            zeroCount += Math.floor(number/Math.pow(maxFactors[i],exp));
            exp++;
        }
    }
    return zeroCount;
}

function getFactors(base) {
    let factors = [];
    var simpleDigits = getSimpleDigits(base);
    for (let i = 0; i < simpleDigits.length; i++) {
        if (base % simpleDigits[i] == 0) factors.push({first: simpleDigits[i], second: base / simpleDigits[i]});
    }
    return factors;
}

function getSimpleDigits(base){
    let simpleDigits = [];
    let isSimple = true;
    for (let i = 2; i <= base; i++) {
        isSimple = true;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                isSimple = false;
                break;
            }
        }
        if (isSimple)simpleDigits.push(i);
    }
    return simpleDigits;
}