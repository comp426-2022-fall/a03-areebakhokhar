export function roll(sides, dice, rolls){

    var resultArray = new Array(rolls)
    for(let i = 0; i < rolls; i++){
        var sum = 0;
        for(var j = 0; j < dice; j++){
            current += Math.floor(Math.random() * sides) + 1;
        }
        resultArray.push(current);
    }

    const output = {
        "sides": sides,
        "dice": dice,
        "rolls": rolls,
        "results": resultArray};

    return output;
}