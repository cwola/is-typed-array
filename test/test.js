
// esm
import {
    isTypedArray,
    isInt8Array,
    isUint8Array,
    isUint8ClampedArray,
    isInt16Array,
    isUint16Array,
    isInt32Array,
    isUint32Array,
    isFloat32Array,
    isFloat64Array,
    isBigInt64Array,
    isBigUint64Array
} from '../src/isTypedArray.mjs';
import assert from 'assert';
// commonjs
/**
const m = require('../src/isTypedArray.cjs');
const isTypedArray = m.isTypedArray;
const isInt8Array = m.isInt8Array;
const isUint8Array = m.isUint8Array;
const isUint8ClampedArray = m.isUint8ClampedArray;
const isInt16Array = m.isInt16Array;
const isUint16Array = m.isUint16Array;
const isInt32Array = m.isInt32Array;
const isUint32Array = m.isUint32Array;
const isFloat32Array = m.isFloat32Array;
const isFloat64Array = m.isFloat64Array;
const isBigInt64Array = m.isBigInt64Array;
const isBigUint64Array = m.isBigUint64Array;
const assert = require('assert');
 */

assert.equal(false, isTypedArray(undefined));
assert.equal(false, isTypedArray(null));
assert.equal(false, isTypedArray(false));
assert.equal(false, isTypedArray(true));
assert.equal(false, isTypedArray([]));
assert.equal(false, isTypedArray({}));
assert.equal(false, isTypedArray(/a/g));
assert.equal(false, isTypedArray(new RegExp('a', 'g')));
assert.equal(false, isTypedArray(new Date()));
assert.equal(false, isTypedArray(42));
assert.equal(false, isTypedArray(NaN));
assert.equal(false, isTypedArray(Infinity));
assert.equal(false, isTypedArray(new Number(42)));
assert.equal(false, isTypedArray('foo'));
assert.equal(false, isTypedArray(Object('foo')));
assert.equal(false, isTypedArray(function () {}));
assert.equal(false, isTypedArray(function* () {}));
assert.equal(false, isTypedArray(x => x * x));
assert.equal(false, isTypedArray([]));

assert.ok(isInt8Array(new Int8Array()));
assert.ok(isUint8Array(new Uint8Array()));
assert.ok(isUint8ClampedArray(new Uint8ClampedArray()));
assert.ok(isInt16Array(new Int16Array()));
assert.ok(isUint16Array(new Uint16Array()));
assert.ok(isInt32Array(new Int32Array()));
assert.ok(isUint32Array(new Uint32Array()));
assert.ok(isFloat32Array(new Float32Array()));
assert.ok(isFloat64Array(new Float64Array()));
assert.ok(isBigInt64Array(new BigInt64Array()));
assert.ok(isBigUint64Array(new BigUint64Array()));

assert.ok(isTypedArray(new Int8Array()));
assert.ok(isTypedArray(new Uint8Array()));
assert.ok(isTypedArray(new Uint8ClampedArray()));
assert.ok(isTypedArray(new Int16Array()));
assert.ok(isTypedArray(new Uint16Array()));
assert.ok(isTypedArray(new Int32Array()));
assert.ok(isTypedArray(new Uint32Array()));
assert.ok(isTypedArray(new Float32Array()));
assert.ok(isTypedArray(new Float64Array()));
assert.ok(isTypedArray(new BigInt64Array()));
assert.ok(isTypedArray(new BigUint64Array()));
