const removeFromArray = function () {
    const args = Array.from(arguments);
    let arr = args[0];
    let itemsToRemove = args.slice(1);
    itemsToRemove.forEach(a => {
        while (arr.includes(a)) {
            arr.splice(arr.indexOf(a), 1);
        }
    }
    )
    return arr;
}


// Do not edit below this line
module.exports = removeFromArray;
