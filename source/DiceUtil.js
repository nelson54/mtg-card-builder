var DiceUtil = {};

function isUndefinedOrNotANumber(num){
    return num == undefined || typeof num != "number";
}

function _rollsSum(rolls){
    return rolls.reduce(function(a,b){return a+b});
}

function _rollNumberOfXSizeDice (number, x){
    var rolls = [];

    while(number != 0){
        rolls.push ( Math.floor( Math.random() *  x ) + 1 );
        number -= 1;
    }

    return rolls;
}

DiceUtil.rollD6 = function(num){
    if (isUndefinedOrNotANumber(num))
        num = 1;
    return _rollsSum( _rollNumberOfXSizeDice(num, 20) );
};

DiceUtil.rollD8 = function(num){
    if (isUndefinedOrNotANumber(num))
        num = 1;
    return _rollsSum( _rollNumberOfXSizeDice(num, 8) );
};

DiceUtil.rollD20 = function(num){
    if (isUndefinedOrNotANumber(num))
        num = 1;
    return _rollsSum( _rollNumberOfXSizeDice(num, 20) );
};

DiceUtil._rollNumberOfXSizeDice = _rollNumberOfXSizeDice;
DiceUtil._rollsSum = _rollsSum;