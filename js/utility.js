"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getInputValue(elementID) {
    var inputElement = document.getElementById(elementID);
    return inputElement.value;
}
exports.getvalue = getInputValue;
function logger(msg) {
    console.log(msg);
}
exports.logger = logger;
//# sourceMappingURL=utility.js.map