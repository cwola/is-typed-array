
const t = require('../src/isTypedArray');
const assert = require('assert');



assert.equal(false, t.isTypedArray(undefined));
assert.equal(false, t.isTypedArray(null));
assert.equal(false, t.isTypedArray(false));
assert.equal(false, t.isTypedArray(true));
assert.equal(false, t.isTypedArray([]));
assert.equal(false, t.isTypedArray({}));
assert.equal(false, t.isTypedArray(/a/g));
assert.equal(false, t.isTypedArray(new RegExp('a', 'g')));
assert.equal(false, t.isTypedArray(new Date()));
assert.equal(false, t.isTypedArray(42));
assert.equal(false, t.isTypedArray(NaN));
assert.equal(false, t.isTypedArray(Infinity));
assert.equal(false, t.isTypedArray(new Number(42)));
assert.equal(false, t.isTypedArray('foo'));
assert.equal(false, t.isTypedArray(Object('foo')));
assert.equal(false, t.isTypedArray(function () {}));
assert.equal(false, t.isTypedArray(function* () {}));
assert.equal(false, t.isTypedArray(x => x * x));
assert.equal(false, t.isTypedArray([]));

assert.ok(t.isInt8Array(new Int8Array()));
assert.ok(t.isUint8Array(new Uint8Array()));
assert.ok(t.isUint8ClampedArray(new Uint8ClampedArray()));
assert.ok(t.isInt16Array(new Int16Array()));
assert.ok(t.isUint16Array(new Uint16Array()));
assert.ok(t.isInt32Array(new Int32Array()));
assert.ok(t.isUint32Array(new Uint32Array()));
assert.ok(t.isFloat32Array(new Float32Array()));
assert.ok(t.isFloat64Array(new Float64Array()));
assert.ok(t.isBigInt64Array(new BigInt64Array()));
assert.ok(t.isBigUint64Array(new BigUint64Array()));

assert.ok(t.isTypedArray(new Int8Array()));
assert.ok(t.isTypedArray(new Uint8Array()));
assert.ok(t.isTypedArray(new Uint8ClampedArray()));
assert.ok(t.isTypedArray(new Int16Array()));
assert.ok(t.isTypedArray(new Uint16Array()));
assert.ok(t.isTypedArray(new Int32Array()));
assert.ok(t.isTypedArray(new Uint32Array()));
assert.ok(t.isTypedArray(new Float32Array()));
assert.ok(t.isTypedArray(new Float64Array()));
assert.ok(t.isTypedArray(new BigInt64Array()));
assert.ok(t.isTypedArray(new BigUint64Array()));

