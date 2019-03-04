module.exports = function getZerosCount(number, base) {
    let count=[];
    let exp;
    let factorsAndExp = getFactorsAndExp(base);
    for (let i=0; i<factorsAndExp.length;i++){
        exp = 1;
        count[i]=0;
        while (Math.pow(factorsAndExp[i].digit,exp)<=number){
            count[i] += Math.floor(number/Math.pow(factorsAndExp[i].digit,exp));
            exp++;
        }
        count[i]=Math.floor(count[i]/factorsAndExp[i].exp);
    }
    return Math.min(...count);
}

function getFactorsAndExp(base){
    let factorsAndExp = [];
    let exp=1;
    let baseQuotient = base;

    for (let i=2; i<=base; i++){
        exp=0;
        while (baseQuotient % i === 0){
            exp++;
            baseQuotient = baseQuotient / i;
        }
        if (exp!=0) factorsAndExp.push({digit: i, exp: exp} );
    }
    return factorsAndExp;
}