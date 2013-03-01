var DiceUtil = {};

DiceUtil.rollD6 = function(num){
    return _rollsSum( _rollNumberOfXSizeDice(num, 20) );
}

DiceUtil.rollD8 = function(num){
    return _rollsSum( _rollNumberOfXSizeDice(num, 8) );
}

DiceUtil.rollD20 = function(num){

    return _rollsSum( _rollNumberOfXSizeDice(num, 20) );
}

DiceUtil._rollsSum = function(rolls){
    return rolls.reduce(function(a,b){return a+b});
}

DiceUtil._rollNumberOfXSizeDice = function(number, x){
    var rolls = [];

    while(number != 0){
        rolls.push ( Math.floor( Math.random() *  x ) + 1 );
        number -= 1;
    }

    return rolls;
}