const repeatString = function(word, n) {
    var res = "";

    for(let i = 0; i < n; i++) {
        res += word;
    }

    return n>=0?res:"ERROR";
};

// Do not edit below this line
module.exports = repeatString;
