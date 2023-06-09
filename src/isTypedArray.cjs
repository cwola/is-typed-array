
/**
 * Find whether the type of a variable is Int8Array.
 * @param {any} val
 * @return {boolean}
 */
function isInt8Array(val) {
    return (val instanceof Int8Array);
}
/**
 * Find whether the type of a variable is Uint8Array.
 * @param {any} val
 * @return {boolean}
 */
function isUint8Array(val) {
    return (val instanceof Uint8Array);
}
/**
 * Find whether the type of a variable is Uint8ClampedArray.
 * @param {any} val
 * @return {boolean}
 */
function isUint8ClampedArray(val) {
    return (val instanceof Uint8ClampedArray);
}
/**
 * Find whether the type of a variable is Int16Array.
 * @param {any} val
 * @return {boolean}
 */
function isInt16Array(val) {
    return (val instanceof Int16Array);
}
/**
 * Find whether the type of a variable is Uint16Array.
 * @param {any} val
 * @return {boolean}
 */
function isUint16Array(val) {
    return (val instanceof Uint16Array);
}
/**
 * Find whether the type of a variable is Int32Array.
 * @param {any} val
 * @return {boolean}
 */
function isInt32Array(val) {
    return (val instanceof Int32Array);
}
/**
 * Find whether the type of a variable is Uint32Array.
 * @param {any} val
 * @return {boolean}
 */
function isUint32Array(val) {
    return (val instanceof Uint32Array);
}
/**
 * Find whether the type of a variable is Float32Array.
 * @param {any} val
 * @return {boolean}
 */
function isFloat32Array(val) {
    return (val instanceof Float32Array);
}
/**
 * Find whether the type of a variable is Float64Array.
 * @param {any} val
 * @return {boolean}
 */
function isFloat64Array(val) {
    return (val instanceof Float64Array);
}
/**
 * Find whether the type of a variable is BigInt64Array.
 * @param {any} val
 * @return {boolean}
 */
function isBigInt64Array(val) {
    return (val instanceof BigInt64Array);
}
/**
 * Find whether the type of a variable is BigUint64Array.
 * @param {any} val
 * @return {boolean}
 */
function isBigUint64Array(val) {
    return (val instanceof BigUint64Array);
}
/**
 * Find whether the type of a variable is typed array.
 * @param {any} val
 * @return {boolean}
 */
function isTypedArray(val) {
    return (
        isInt8Array(val) ||
        isUint8Array(val) ||
        isUint8ClampedArray(val) ||
        isInt16Array(val) ||
        isUint16Array(val) ||
        isInt32Array(val) ||
        isUint32Array(val) ||
        isFloat32Array(val) ||
        isFloat64Array(val) ||
        isBigInt64Array(val) ||
        isBigUint64Array(val)
    );
}

module.exports.isTypedArray = isTypedArray;
module.exports.isInt8Array = isInt8Array;
module.exports.isUint8Array = isUint8Array;
module.exports.isUint8ClampedArray = isUint8ClampedArray;
module.exports.isInt16Array = isInt16Array;
module.exports.isUint16Array = isUint16Array;
module.exports.isInt32Array = isInt32Array;
module.exports.isUint32Array = isUint32Array;
module.exports.isFloat32Array = isFloat32Array;
module.exports.isFloat64Array = isFloat64Array;
module.exports.isBigInt64Array = isBigInt64Array;
module.exports.isBigUint64Array = isBigUint64Array;
