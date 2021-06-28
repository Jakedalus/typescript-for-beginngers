function combine(input1, input2, resultType) {
    var result;
    if ((typeof input1 === 'number' &&
        typeof input2 === 'number') ||
        resultType === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    console.log("result", result);
    return result;
}
console.log(combine(6, 8, 'as-number'));
console.log(combine('Max', 'Erin', 'as-text'));
console.log(combine('61', '18', 'as-number'));
