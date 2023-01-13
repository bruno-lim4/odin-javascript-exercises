const removeFromArray = function() {
    let args = Array.from(arguments);

    let ar = arguments[0];

    for(let i = 1; i < args.length; i++) {
        let element = args[i];
        let index = ar.indexOf(element);
        if (index >= 0) {
            ar.splice(index, 1);
        }
    }

    return ar;
};

// Do not edit below this line
module.exports = removeFromArray;
