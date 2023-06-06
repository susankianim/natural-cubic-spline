(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/esbuild-plugin-polyfill-node/polyfills/__dirname.js
  var init_dirname = __esm({
    "node_modules/esbuild-plugin-polyfill-node/polyfills/__dirname.js"() {
    }
  });

  // node_modules/@jspm/core/nodelibs/browser/process.js
  function Item(fun, array) {
    this.fun = fun;
    this.array = array;
  }
  function hrtime(previousTimestamp) {
    var baseNow = Math.floor((Date.now() - _performance.now()) * 1e-3);
    var clocktime = _performance.now() * 1e-3;
    var seconds = Math.floor(clocktime) + baseNow;
    var nanoseconds = Math.floor(clocktime % 1 * 1e9);
    if (previousTimestamp) {
      seconds = seconds - previousTimestamp[0];
      nanoseconds = nanoseconds - previousTimestamp[1];
      if (nanoseconds < 0) {
        seconds--;
        nanoseconds += nanoPerSec;
      }
    }
    return [seconds, nanoseconds];
  }
  var env, _performance, nowOffset, nanoPerSec;
  var init_process = __esm({
    "node_modules/@jspm/core/nodelibs/browser/process.js"() {
      init_dirname();
      init_buffer2();
      init_process2();
      Item.prototype.run = function() {
        this.fun.apply(null, this.array);
      };
      env = {
        PATH: "/usr/bin",
        LANG: navigator.language + ".UTF-8",
        PWD: "/",
        HOME: "/home",
        TMP: "/tmp"
      };
      _performance = {
        now: typeof performance !== "undefined" ? performance.now.bind(performance) : void 0,
        timing: typeof performance !== "undefined" ? performance.timing : void 0
      };
      if (_performance.now === void 0) {
        nowOffset = Date.now();
        if (_performance.timing && _performance.timing.navigationStart) {
          nowOffset = _performance.timing.navigationStart;
        }
        _performance.now = () => Date.now() - nowOffset;
      }
      nanoPerSec = 1e9;
      hrtime.bigint = function(time) {
        var diff = hrtime(time);
        if (typeof BigInt === "undefined") {
          return diff[0] * nanoPerSec + diff[1];
        }
        return BigInt(diff[0] * nanoPerSec) + BigInt(diff[1]);
      };
    }
  });

  // node_modules/esbuild-plugin-polyfill-node/polyfills/process.js
  var init_process2 = __esm({
    "node_modules/esbuild-plugin-polyfill-node/polyfills/process.js"() {
      init_process();
    }
  });

  // node_modules/@jspm/core/nodelibs/browser/buffer.js
  function dew$2() {
    if (_dewExec$2)
      return exports$3;
    _dewExec$2 = true;
    exports$3.byteLength = byteLength;
    exports$3.toByteArray = toByteArray;
    exports$3.fromByteArray = fromByteArray;
    var lookup = [];
    var revLookup = [];
    var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
    var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (var i = 0, len = code.length; i < len; ++i) {
      lookup[i] = code[i];
      revLookup[code.charCodeAt(i)] = i;
    }
    revLookup["-".charCodeAt(0)] = 62;
    revLookup["_".charCodeAt(0)] = 63;
    function getLens(b64) {
      var len2 = b64.length;
      if (len2 % 4 > 0) {
        throw new Error("Invalid string. Length must be a multiple of 4");
      }
      var validLen = b64.indexOf("=");
      if (validLen === -1)
        validLen = len2;
      var placeHoldersLen = validLen === len2 ? 0 : 4 - validLen % 4;
      return [validLen, placeHoldersLen];
    }
    function byteLength(b64) {
      var lens = getLens(b64);
      var validLen = lens[0];
      var placeHoldersLen = lens[1];
      return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
    }
    function _byteLength(b64, validLen, placeHoldersLen) {
      return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
    }
    function toByteArray(b64) {
      var tmp;
      var lens = getLens(b64);
      var validLen = lens[0];
      var placeHoldersLen = lens[1];
      var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
      var curByte = 0;
      var len2 = placeHoldersLen > 0 ? validLen - 4 : validLen;
      var i2;
      for (i2 = 0; i2 < len2; i2 += 4) {
        tmp = revLookup[b64.charCodeAt(i2)] << 18 | revLookup[b64.charCodeAt(i2 + 1)] << 12 | revLookup[b64.charCodeAt(i2 + 2)] << 6 | revLookup[b64.charCodeAt(i2 + 3)];
        arr[curByte++] = tmp >> 16 & 255;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
      }
      if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i2)] << 2 | revLookup[b64.charCodeAt(i2 + 1)] >> 4;
        arr[curByte++] = tmp & 255;
      }
      if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i2)] << 10 | revLookup[b64.charCodeAt(i2 + 1)] << 4 | revLookup[b64.charCodeAt(i2 + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
      }
      return arr;
    }
    function tripletToBase64(num) {
      return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
    }
    function encodeChunk(uint8, start, end) {
      var tmp;
      var output = [];
      for (var i2 = start; i2 < end; i2 += 3) {
        tmp = (uint8[i2] << 16 & 16711680) + (uint8[i2 + 1] << 8 & 65280) + (uint8[i2 + 2] & 255);
        output.push(tripletToBase64(tmp));
      }
      return output.join("");
    }
    function fromByteArray(uint8) {
      var tmp;
      var len2 = uint8.length;
      var extraBytes = len2 % 3;
      var parts = [];
      var maxChunkLength = 16383;
      for (var i2 = 0, len22 = len2 - extraBytes; i2 < len22; i2 += maxChunkLength) {
        parts.push(encodeChunk(uint8, i2, i2 + maxChunkLength > len22 ? len22 : i2 + maxChunkLength));
      }
      if (extraBytes === 1) {
        tmp = uint8[len2 - 1];
        parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "==");
      } else if (extraBytes === 2) {
        tmp = (uint8[len2 - 2] << 8) + uint8[len2 - 1];
        parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "=");
      }
      return parts.join("");
    }
    return exports$3;
  }
  function dew$1() {
    if (_dewExec$1)
      return exports$2;
    _dewExec$1 = true;
    exports$2.read = function(buffer, offset, isLE, mLen, nBytes) {
      var e, m;
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var nBits = -7;
      var i = isLE ? nBytes - 1 : 0;
      var d = isLE ? -1 : 1;
      var s = buffer[offset + i];
      i += d;
      e = s & (1 << -nBits) - 1;
      s >>= -nBits;
      nBits += eLen;
      for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {
      }
      m = e & (1 << -nBits) - 1;
      e >>= -nBits;
      nBits += mLen;
      for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {
      }
      if (e === 0) {
        e = 1 - eBias;
      } else if (e === eMax) {
        return m ? NaN : (s ? -1 : 1) * Infinity;
      } else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
      }
      return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
    };
    exports$2.write = function(buffer, value, offset, isLE, mLen, nBytes) {
      var e, m, c;
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
      var i = isLE ? 0 : nBytes - 1;
      var d = isLE ? 1 : -1;
      var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
      value = Math.abs(value);
      if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
      } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
          e--;
          c *= 2;
        }
        if (e + eBias >= 1) {
          value += rt / c;
        } else {
          value += rt * Math.pow(2, 1 - eBias);
        }
        if (value * c >= 2) {
          e++;
          c /= 2;
        }
        if (e + eBias >= eMax) {
          m = 0;
          e = eMax;
        } else if (e + eBias >= 1) {
          m = (value * c - 1) * Math.pow(2, mLen);
          e = e + eBias;
        } else {
          m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
          e = 0;
        }
      }
      for (; mLen >= 8; buffer[offset + i] = m & 255, i += d, m /= 256, mLen -= 8) {
      }
      e = e << mLen | m;
      eLen += mLen;
      for (; eLen > 0; buffer[offset + i] = e & 255, i += d, e /= 256, eLen -= 8) {
      }
      buffer[offset + i - d] |= s * 128;
    };
    return exports$2;
  }
  function dew() {
    if (_dewExec)
      return exports$1;
    _dewExec = true;
    const base64 = dew$2();
    const ieee754 = dew$1();
    const customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" ? Symbol["for"]("nodejs.util.inspect.custom") : null;
    exports$1.Buffer = Buffer3;
    exports$1.SlowBuffer = SlowBuffer;
    exports$1.INSPECT_MAX_BYTES = 50;
    const K_MAX_LENGTH = 2147483647;
    exports$1.kMaxLength = K_MAX_LENGTH;
    Buffer3.TYPED_ARRAY_SUPPORT = typedArraySupport();
    if (!Buffer3.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") {
      console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
    }
    function typedArraySupport() {
      try {
        const arr = new Uint8Array(1);
        const proto = {
          foo: function() {
            return 42;
          }
        };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
      } catch (e) {
        return false;
      }
    }
    Object.defineProperty(Buffer3.prototype, "parent", {
      enumerable: true,
      get: function() {
        if (!Buffer3.isBuffer(this))
          return void 0;
        return this.buffer;
      }
    });
    Object.defineProperty(Buffer3.prototype, "offset", {
      enumerable: true,
      get: function() {
        if (!Buffer3.isBuffer(this))
          return void 0;
        return this.byteOffset;
      }
    });
    function createBuffer(length) {
      if (length > K_MAX_LENGTH) {
        throw new RangeError('The value "' + length + '" is invalid for option "size"');
      }
      const buf = new Uint8Array(length);
      Object.setPrototypeOf(buf, Buffer3.prototype);
      return buf;
    }
    function Buffer3(arg, encodingOrOffset, length) {
      if (typeof arg === "number") {
        if (typeof encodingOrOffset === "string") {
          throw new TypeError('The "string" argument must be of type string. Received type number');
        }
        return allocUnsafe(arg);
      }
      return from(arg, encodingOrOffset, length);
    }
    Buffer3.poolSize = 8192;
    function from(value, encodingOrOffset, length) {
      if (typeof value === "string") {
        return fromString(value, encodingOrOffset);
      }
      if (ArrayBuffer.isView(value)) {
        return fromArrayView(value);
      }
      if (value == null) {
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
      }
      if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) {
        return fromArrayBuffer(value, encodingOrOffset, length);
      }
      if (typeof SharedArrayBuffer !== "undefined" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) {
        return fromArrayBuffer(value, encodingOrOffset, length);
      }
      if (typeof value === "number") {
        throw new TypeError('The "value" argument must not be of type number. Received type number');
      }
      const valueOf = value.valueOf && value.valueOf();
      if (valueOf != null && valueOf !== value) {
        return Buffer3.from(valueOf, encodingOrOffset, length);
      }
      const b = fromObject(value);
      if (b)
        return b;
      if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") {
        return Buffer3.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length);
      }
      throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
    }
    Buffer3.from = function(value, encodingOrOffset, length) {
      return from(value, encodingOrOffset, length);
    };
    Object.setPrototypeOf(Buffer3.prototype, Uint8Array.prototype);
    Object.setPrototypeOf(Buffer3, Uint8Array);
    function assertSize(size) {
      if (typeof size !== "number") {
        throw new TypeError('"size" argument must be of type number');
      } else if (size < 0) {
        throw new RangeError('The value "' + size + '" is invalid for option "size"');
      }
    }
    function alloc(size, fill, encoding) {
      assertSize(size);
      if (size <= 0) {
        return createBuffer(size);
      }
      if (fill !== void 0) {
        return typeof encoding === "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
      }
      return createBuffer(size);
    }
    Buffer3.alloc = function(size, fill, encoding) {
      return alloc(size, fill, encoding);
    };
    function allocUnsafe(size) {
      assertSize(size);
      return createBuffer(size < 0 ? 0 : checked(size) | 0);
    }
    Buffer3.allocUnsafe = function(size) {
      return allocUnsafe(size);
    };
    Buffer3.allocUnsafeSlow = function(size) {
      return allocUnsafe(size);
    };
    function fromString(string, encoding) {
      if (typeof encoding !== "string" || encoding === "") {
        encoding = "utf8";
      }
      if (!Buffer3.isEncoding(encoding)) {
        throw new TypeError("Unknown encoding: " + encoding);
      }
      const length = byteLength(string, encoding) | 0;
      let buf = createBuffer(length);
      const actual = buf.write(string, encoding);
      if (actual !== length) {
        buf = buf.slice(0, actual);
      }
      return buf;
    }
    function fromArrayLike(array) {
      const length = array.length < 0 ? 0 : checked(array.length) | 0;
      const buf = createBuffer(length);
      for (let i = 0; i < length; i += 1) {
        buf[i] = array[i] & 255;
      }
      return buf;
    }
    function fromArrayView(arrayView) {
      if (isInstance(arrayView, Uint8Array)) {
        const copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
      }
      return fromArrayLike(arrayView);
    }
    function fromArrayBuffer(array, byteOffset, length) {
      if (byteOffset < 0 || array.byteLength < byteOffset) {
        throw new RangeError('"offset" is outside of buffer bounds');
      }
      if (array.byteLength < byteOffset + (length || 0)) {
        throw new RangeError('"length" is outside of buffer bounds');
      }
      let buf;
      if (byteOffset === void 0 && length === void 0) {
        buf = new Uint8Array(array);
      } else if (length === void 0) {
        buf = new Uint8Array(array, byteOffset);
      } else {
        buf = new Uint8Array(array, byteOffset, length);
      }
      Object.setPrototypeOf(buf, Buffer3.prototype);
      return buf;
    }
    function fromObject(obj) {
      if (Buffer3.isBuffer(obj)) {
        const len = checked(obj.length) | 0;
        const buf = createBuffer(len);
        if (buf.length === 0) {
          return buf;
        }
        obj.copy(buf, 0, 0, len);
        return buf;
      }
      if (obj.length !== void 0) {
        if (typeof obj.length !== "number" || numberIsNaN(obj.length)) {
          return createBuffer(0);
        }
        return fromArrayLike(obj);
      }
      if (obj.type === "Buffer" && Array.isArray(obj.data)) {
        return fromArrayLike(obj.data);
      }
    }
    function checked(length) {
      if (length >= K_MAX_LENGTH) {
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
      }
      return length | 0;
    }
    function SlowBuffer(length) {
      if (+length != length) {
        length = 0;
      }
      return Buffer3.alloc(+length);
    }
    Buffer3.isBuffer = function isBuffer(b) {
      return b != null && b._isBuffer === true && b !== Buffer3.prototype;
    };
    Buffer3.compare = function compare(a, b) {
      if (isInstance(a, Uint8Array))
        a = Buffer3.from(a, a.offset, a.byteLength);
      if (isInstance(b, Uint8Array))
        b = Buffer3.from(b, b.offset, b.byteLength);
      if (!Buffer3.isBuffer(a) || !Buffer3.isBuffer(b)) {
        throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
      }
      if (a === b)
        return 0;
      let x = a.length;
      let y = b.length;
      for (let i = 0, len = Math.min(x, y); i < len; ++i) {
        if (a[i] !== b[i]) {
          x = a[i];
          y = b[i];
          break;
        }
      }
      if (x < y)
        return -1;
      if (y < x)
        return 1;
      return 0;
    };
    Buffer3.isEncoding = function isEncoding(encoding) {
      switch (String(encoding).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return true;
        default:
          return false;
      }
    };
    Buffer3.concat = function concat(list, length) {
      if (!Array.isArray(list)) {
        throw new TypeError('"list" argument must be an Array of Buffers');
      }
      if (list.length === 0) {
        return Buffer3.alloc(0);
      }
      let i;
      if (length === void 0) {
        length = 0;
        for (i = 0; i < list.length; ++i) {
          length += list[i].length;
        }
      }
      const buffer = Buffer3.allocUnsafe(length);
      let pos = 0;
      for (i = 0; i < list.length; ++i) {
        let buf = list[i];
        if (isInstance(buf, Uint8Array)) {
          if (pos + buf.length > buffer.length) {
            if (!Buffer3.isBuffer(buf))
              buf = Buffer3.from(buf);
            buf.copy(buffer, pos);
          } else {
            Uint8Array.prototype.set.call(buffer, buf, pos);
          }
        } else if (!Buffer3.isBuffer(buf)) {
          throw new TypeError('"list" argument must be an Array of Buffers');
        } else {
          buf.copy(buffer, pos);
        }
        pos += buf.length;
      }
      return buffer;
    };
    function byteLength(string, encoding) {
      if (Buffer3.isBuffer(string)) {
        return string.length;
      }
      if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
        return string.byteLength;
      }
      if (typeof string !== "string") {
        throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string);
      }
      const len = string.length;
      const mustMatch = arguments.length > 2 && arguments[2] === true;
      if (!mustMatch && len === 0)
        return 0;
      let loweredCase = false;
      for (; ; ) {
        switch (encoding) {
          case "ascii":
          case "latin1":
          case "binary":
            return len;
          case "utf8":
          case "utf-8":
            return utf8ToBytes(string).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return len * 2;
          case "hex":
            return len >>> 1;
          case "base64":
            return base64ToBytes(string).length;
          default:
            if (loweredCase) {
              return mustMatch ? -1 : utf8ToBytes(string).length;
            }
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    }
    Buffer3.byteLength = byteLength;
    function slowToString(encoding, start, end) {
      let loweredCase = false;
      if (start === void 0 || start < 0) {
        start = 0;
      }
      if (start > this.length) {
        return "";
      }
      if (end === void 0 || end > this.length) {
        end = this.length;
      }
      if (end <= 0) {
        return "";
      }
      end >>>= 0;
      start >>>= 0;
      if (end <= start) {
        return "";
      }
      if (!encoding)
        encoding = "utf8";
      while (true) {
        switch (encoding) {
          case "hex":
            return hexSlice(this, start, end);
          case "utf8":
          case "utf-8":
            return utf8Slice(this, start, end);
          case "ascii":
            return asciiSlice(this, start, end);
          case "latin1":
          case "binary":
            return latin1Slice(this, start, end);
          case "base64":
            return base64Slice(this, start, end);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return utf16leSlice(this, start, end);
          default:
            if (loweredCase)
              throw new TypeError("Unknown encoding: " + encoding);
            encoding = (encoding + "").toLowerCase();
            loweredCase = true;
        }
      }
    }
    Buffer3.prototype._isBuffer = true;
    function swap(b, n, m) {
      const i = b[n];
      b[n] = b[m];
      b[m] = i;
    }
    Buffer3.prototype.swap16 = function swap16() {
      const len = this.length;
      if (len % 2 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      }
      for (let i = 0; i < len; i += 2) {
        swap(this, i, i + 1);
      }
      return this;
    };
    Buffer3.prototype.swap32 = function swap32() {
      const len = this.length;
      if (len % 4 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      }
      for (let i = 0; i < len; i += 4) {
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
      }
      return this;
    };
    Buffer3.prototype.swap64 = function swap64() {
      const len = this.length;
      if (len % 8 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      }
      for (let i = 0; i < len; i += 8) {
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
      }
      return this;
    };
    Buffer3.prototype.toString = function toString() {
      const length = this.length;
      if (length === 0)
        return "";
      if (arguments.length === 0)
        return utf8Slice(this, 0, length);
      return slowToString.apply(this, arguments);
    };
    Buffer3.prototype.toLocaleString = Buffer3.prototype.toString;
    Buffer3.prototype.equals = function equals(b) {
      if (!Buffer3.isBuffer(b))
        throw new TypeError("Argument must be a Buffer");
      if (this === b)
        return true;
      return Buffer3.compare(this, b) === 0;
    };
    Buffer3.prototype.inspect = function inspect() {
      let str = "";
      const max = exports$1.INSPECT_MAX_BYTES;
      str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
      if (this.length > max)
        str += " ... ";
      return "<Buffer " + str + ">";
    };
    if (customInspectSymbol) {
      Buffer3.prototype[customInspectSymbol] = Buffer3.prototype.inspect;
    }
    Buffer3.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
      if (isInstance(target, Uint8Array)) {
        target = Buffer3.from(target, target.offset, target.byteLength);
      }
      if (!Buffer3.isBuffer(target)) {
        throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target);
      }
      if (start === void 0) {
        start = 0;
      }
      if (end === void 0) {
        end = target ? target.length : 0;
      }
      if (thisStart === void 0) {
        thisStart = 0;
      }
      if (thisEnd === void 0) {
        thisEnd = this.length;
      }
      if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
        throw new RangeError("out of range index");
      }
      if (thisStart >= thisEnd && start >= end) {
        return 0;
      }
      if (thisStart >= thisEnd) {
        return -1;
      }
      if (start >= end) {
        return 1;
      }
      start >>>= 0;
      end >>>= 0;
      thisStart >>>= 0;
      thisEnd >>>= 0;
      if (this === target)
        return 0;
      let x = thisEnd - thisStart;
      let y = end - start;
      const len = Math.min(x, y);
      const thisCopy = this.slice(thisStart, thisEnd);
      const targetCopy = target.slice(start, end);
      for (let i = 0; i < len; ++i) {
        if (thisCopy[i] !== targetCopy[i]) {
          x = thisCopy[i];
          y = targetCopy[i];
          break;
        }
      }
      if (x < y)
        return -1;
      if (y < x)
        return 1;
      return 0;
    };
    function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
      if (buffer.length === 0)
        return -1;
      if (typeof byteOffset === "string") {
        encoding = byteOffset;
        byteOffset = 0;
      } else if (byteOffset > 2147483647) {
        byteOffset = 2147483647;
      } else if (byteOffset < -2147483648) {
        byteOffset = -2147483648;
      }
      byteOffset = +byteOffset;
      if (numberIsNaN(byteOffset)) {
        byteOffset = dir ? 0 : buffer.length - 1;
      }
      if (byteOffset < 0)
        byteOffset = buffer.length + byteOffset;
      if (byteOffset >= buffer.length) {
        if (dir)
          return -1;
        else
          byteOffset = buffer.length - 1;
      } else if (byteOffset < 0) {
        if (dir)
          byteOffset = 0;
        else
          return -1;
      }
      if (typeof val === "string") {
        val = Buffer3.from(val, encoding);
      }
      if (Buffer3.isBuffer(val)) {
        if (val.length === 0) {
          return -1;
        }
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
      } else if (typeof val === "number") {
        val = val & 255;
        if (typeof Uint8Array.prototype.indexOf === "function") {
          if (dir) {
            return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
          } else {
            return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
          }
        }
        return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
      }
      throw new TypeError("val must be string, number or Buffer");
    }
    function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
      let indexSize = 1;
      let arrLength = arr.length;
      let valLength = val.length;
      if (encoding !== void 0) {
        encoding = String(encoding).toLowerCase();
        if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
          if (arr.length < 2 || val.length < 2) {
            return -1;
          }
          indexSize = 2;
          arrLength /= 2;
          valLength /= 2;
          byteOffset /= 2;
        }
      }
      function read(buf, i2) {
        if (indexSize === 1) {
          return buf[i2];
        } else {
          return buf.readUInt16BE(i2 * indexSize);
        }
      }
      let i;
      if (dir) {
        let foundIndex = -1;
        for (i = byteOffset; i < arrLength; i++) {
          if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1)
              foundIndex = i;
            if (i - foundIndex + 1 === valLength)
              return foundIndex * indexSize;
          } else {
            if (foundIndex !== -1)
              i -= i - foundIndex;
            foundIndex = -1;
          }
        }
      } else {
        if (byteOffset + valLength > arrLength)
          byteOffset = arrLength - valLength;
        for (i = byteOffset; i >= 0; i--) {
          let found = true;
          for (let j = 0; j < valLength; j++) {
            if (read(arr, i + j) !== read(val, j)) {
              found = false;
              break;
            }
          }
          if (found)
            return i;
        }
      }
      return -1;
    }
    Buffer3.prototype.includes = function includes(val, byteOffset, encoding) {
      return this.indexOf(val, byteOffset, encoding) !== -1;
    };
    Buffer3.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
    };
    Buffer3.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
    };
    function hexWrite(buf, string, offset, length) {
      offset = Number(offset) || 0;
      const remaining = buf.length - offset;
      if (!length) {
        length = remaining;
      } else {
        length = Number(length);
        if (length > remaining) {
          length = remaining;
        }
      }
      const strLen = string.length;
      if (length > strLen / 2) {
        length = strLen / 2;
      }
      let i;
      for (i = 0; i < length; ++i) {
        const parsed = parseInt(string.substr(i * 2, 2), 16);
        if (numberIsNaN(parsed))
          return i;
        buf[offset + i] = parsed;
      }
      return i;
    }
    function utf8Write(buf, string, offset, length) {
      return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
    }
    function asciiWrite(buf, string, offset, length) {
      return blitBuffer(asciiToBytes(string), buf, offset, length);
    }
    function base64Write(buf, string, offset, length) {
      return blitBuffer(base64ToBytes(string), buf, offset, length);
    }
    function ucs2Write(buf, string, offset, length) {
      return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
    }
    Buffer3.prototype.write = function write(string, offset, length, encoding) {
      if (offset === void 0) {
        encoding = "utf8";
        length = this.length;
        offset = 0;
      } else if (length === void 0 && typeof offset === "string") {
        encoding = offset;
        length = this.length;
        offset = 0;
      } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
          length = length >>> 0;
          if (encoding === void 0)
            encoding = "utf8";
        } else {
          encoding = length;
          length = void 0;
        }
      } else {
        throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
      }
      const remaining = this.length - offset;
      if (length === void 0 || length > remaining)
        length = remaining;
      if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
        throw new RangeError("Attempt to write outside buffer bounds");
      }
      if (!encoding)
        encoding = "utf8";
      let loweredCase = false;
      for (; ; ) {
        switch (encoding) {
          case "hex":
            return hexWrite(this, string, offset, length);
          case "utf8":
          case "utf-8":
            return utf8Write(this, string, offset, length);
          case "ascii":
          case "latin1":
          case "binary":
            return asciiWrite(this, string, offset, length);
          case "base64":
            return base64Write(this, string, offset, length);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return ucs2Write(this, string, offset, length);
          default:
            if (loweredCase)
              throw new TypeError("Unknown encoding: " + encoding);
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    };
    Buffer3.prototype.toJSON = function toJSON() {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };
    function base64Slice(buf, start, end) {
      if (start === 0 && end === buf.length) {
        return base64.fromByteArray(buf);
      } else {
        return base64.fromByteArray(buf.slice(start, end));
      }
    }
    function utf8Slice(buf, start, end) {
      end = Math.min(buf.length, end);
      const res = [];
      let i = start;
      while (i < end) {
        const firstByte = buf[i];
        let codePoint = null;
        let bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
        if (i + bytesPerSequence <= end) {
          let secondByte, thirdByte, fourthByte, tempCodePoint;
          switch (bytesPerSequence) {
            case 1:
              if (firstByte < 128) {
                codePoint = firstByte;
              }
              break;
            case 2:
              secondByte = buf[i + 1];
              if ((secondByte & 192) === 128) {
                tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                if (tempCodePoint > 127) {
                  codePoint = tempCodePoint;
                }
              }
              break;
            case 3:
              secondByte = buf[i + 1];
              thirdByte = buf[i + 2];
              if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
                  codePoint = tempCodePoint;
                }
              }
              break;
            case 4:
              secondByte = buf[i + 1];
              thirdByte = buf[i + 2];
              fourthByte = buf[i + 3];
              if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
                  codePoint = tempCodePoint;
                }
              }
          }
        }
        if (codePoint === null) {
          codePoint = 65533;
          bytesPerSequence = 1;
        } else if (codePoint > 65535) {
          codePoint -= 65536;
          res.push(codePoint >>> 10 & 1023 | 55296);
          codePoint = 56320 | codePoint & 1023;
        }
        res.push(codePoint);
        i += bytesPerSequence;
      }
      return decodeCodePointsArray(res);
    }
    const MAX_ARGUMENTS_LENGTH = 4096;
    function decodeCodePointsArray(codePoints) {
      const len = codePoints.length;
      if (len <= MAX_ARGUMENTS_LENGTH) {
        return String.fromCharCode.apply(String, codePoints);
      }
      let res = "";
      let i = 0;
      while (i < len) {
        res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
      }
      return res;
    }
    function asciiSlice(buf, start, end) {
      let ret = "";
      end = Math.min(buf.length, end);
      for (let i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i] & 127);
      }
      return ret;
    }
    function latin1Slice(buf, start, end) {
      let ret = "";
      end = Math.min(buf.length, end);
      for (let i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i]);
      }
      return ret;
    }
    function hexSlice(buf, start, end) {
      const len = buf.length;
      if (!start || start < 0)
        start = 0;
      if (!end || end < 0 || end > len)
        end = len;
      let out = "";
      for (let i = start; i < end; ++i) {
        out += hexSliceLookupTable[buf[i]];
      }
      return out;
    }
    function utf16leSlice(buf, start, end) {
      const bytes = buf.slice(start, end);
      let res = "";
      for (let i = 0; i < bytes.length - 1; i += 2) {
        res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
      }
      return res;
    }
    Buffer3.prototype.slice = function slice(start, end) {
      const len = this.length;
      start = ~~start;
      end = end === void 0 ? len : ~~end;
      if (start < 0) {
        start += len;
        if (start < 0)
          start = 0;
      } else if (start > len) {
        start = len;
      }
      if (end < 0) {
        end += len;
        if (end < 0)
          end = 0;
      } else if (end > len) {
        end = len;
      }
      if (end < start)
        end = start;
      const newBuf = this.subarray(start, end);
      Object.setPrototypeOf(newBuf, Buffer3.prototype);
      return newBuf;
    };
    function checkOffset(offset, ext, length) {
      if (offset % 1 !== 0 || offset < 0)
        throw new RangeError("offset is not uint");
      if (offset + ext > length)
        throw new RangeError("Trying to access beyond buffer length");
    }
    Buffer3.prototype.readUintLE = Buffer3.prototype.readUIntLE = function readUIntLE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert)
        checkOffset(offset, byteLength2, this.length);
      let val = this[offset];
      let mul = 1;
      let i = 0;
      while (++i < byteLength2 && (mul *= 256)) {
        val += this[offset + i] * mul;
      }
      return val;
    };
    Buffer3.prototype.readUintBE = Buffer3.prototype.readUIntBE = function readUIntBE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        checkOffset(offset, byteLength2, this.length);
      }
      let val = this[offset + --byteLength2];
      let mul = 1;
      while (byteLength2 > 0 && (mul *= 256)) {
        val += this[offset + --byteLength2] * mul;
      }
      return val;
    };
    Buffer3.prototype.readUint8 = Buffer3.prototype.readUInt8 = function readUInt8(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 1, this.length);
      return this[offset];
    };
    Buffer3.prototype.readUint16LE = Buffer3.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      return this[offset] | this[offset + 1] << 8;
    };
    Buffer3.prototype.readUint16BE = Buffer3.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      return this[offset] << 8 | this[offset + 1];
    };
    Buffer3.prototype.readUint32LE = Buffer3.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
    };
    Buffer3.prototype.readUint32BE = Buffer3.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
    };
    Buffer3.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
      }
      const lo = first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24;
      const hi = this[++offset] + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + last * 2 ** 24;
      return BigInt(lo) + (BigInt(hi) << BigInt(32));
    });
    Buffer3.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
      }
      const hi = first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
      const lo = this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last;
      return (BigInt(hi) << BigInt(32)) + BigInt(lo);
    });
    Buffer3.prototype.readIntLE = function readIntLE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert)
        checkOffset(offset, byteLength2, this.length);
      let val = this[offset];
      let mul = 1;
      let i = 0;
      while (++i < byteLength2 && (mul *= 256)) {
        val += this[offset + i] * mul;
      }
      mul *= 128;
      if (val >= mul)
        val -= Math.pow(2, 8 * byteLength2);
      return val;
    };
    Buffer3.prototype.readIntBE = function readIntBE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert)
        checkOffset(offset, byteLength2, this.length);
      let i = byteLength2;
      let mul = 1;
      let val = this[offset + --i];
      while (i > 0 && (mul *= 256)) {
        val += this[offset + --i] * mul;
      }
      mul *= 128;
      if (val >= mul)
        val -= Math.pow(2, 8 * byteLength2);
      return val;
    };
    Buffer3.prototype.readInt8 = function readInt8(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 1, this.length);
      if (!(this[offset] & 128))
        return this[offset];
      return (255 - this[offset] + 1) * -1;
    };
    Buffer3.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      const val = this[offset] | this[offset + 1] << 8;
      return val & 32768 ? val | 4294901760 : val;
    };
    Buffer3.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      const val = this[offset + 1] | this[offset] << 8;
      return val & 32768 ? val | 4294901760 : val;
    };
    Buffer3.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
    };
    Buffer3.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
    };
    Buffer3.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
      }
      const val = this[offset + 4] + this[offset + 5] * 2 ** 8 + this[offset + 6] * 2 ** 16 + (last << 24);
      return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24);
    });
    Buffer3.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
      }
      const val = (first << 24) + // Overflow
      this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
      return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last);
    });
    Buffer3.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return ieee754.read(this, offset, true, 23, 4);
    };
    Buffer3.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return ieee754.read(this, offset, false, 23, 4);
    };
    Buffer3.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 8, this.length);
      return ieee754.read(this, offset, true, 52, 8);
    };
    Buffer3.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 8, this.length);
      return ieee754.read(this, offset, false, 52, 8);
    };
    function checkInt(buf, value, offset, ext, max, min) {
      if (!Buffer3.isBuffer(buf))
        throw new TypeError('"buffer" argument must be a Buffer instance');
      if (value > max || value < min)
        throw new RangeError('"value" argument is out of bounds');
      if (offset + ext > buf.length)
        throw new RangeError("Index out of range");
    }
    Buffer3.prototype.writeUintLE = Buffer3.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength2) - 1;
        checkInt(this, value, offset, byteLength2, maxBytes, 0);
      }
      let mul = 1;
      let i = 0;
      this[offset] = value & 255;
      while (++i < byteLength2 && (mul *= 256)) {
        this[offset + i] = value / mul & 255;
      }
      return offset + byteLength2;
    };
    Buffer3.prototype.writeUintBE = Buffer3.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength2) - 1;
        checkInt(this, value, offset, byteLength2, maxBytes, 0);
      }
      let i = byteLength2 - 1;
      let mul = 1;
      this[offset + i] = value & 255;
      while (--i >= 0 && (mul *= 256)) {
        this[offset + i] = value / mul & 255;
      }
      return offset + byteLength2;
    };
    Buffer3.prototype.writeUint8 = Buffer3.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 1, 255, 0);
      this[offset] = value & 255;
      return offset + 1;
    };
    Buffer3.prototype.writeUint16LE = Buffer3.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 2, 65535, 0);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      return offset + 2;
    };
    Buffer3.prototype.writeUint16BE = Buffer3.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 2, 65535, 0);
      this[offset] = value >>> 8;
      this[offset + 1] = value & 255;
      return offset + 2;
    };
    Buffer3.prototype.writeUint32LE = Buffer3.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 4, 4294967295, 0);
      this[offset + 3] = value >>> 24;
      this[offset + 2] = value >>> 16;
      this[offset + 1] = value >>> 8;
      this[offset] = value & 255;
      return offset + 4;
    };
    Buffer3.prototype.writeUint32BE = Buffer3.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 4, 4294967295, 0);
      this[offset] = value >>> 24;
      this[offset + 1] = value >>> 16;
      this[offset + 2] = value >>> 8;
      this[offset + 3] = value & 255;
      return offset + 4;
    };
    function wrtBigUInt64LE(buf, value, offset, min, max) {
      checkIntBI(value, min, max, buf, offset, 7);
      let lo = Number(value & BigInt(4294967295));
      buf[offset++] = lo;
      lo = lo >> 8;
      buf[offset++] = lo;
      lo = lo >> 8;
      buf[offset++] = lo;
      lo = lo >> 8;
      buf[offset++] = lo;
      let hi = Number(value >> BigInt(32) & BigInt(4294967295));
      buf[offset++] = hi;
      hi = hi >> 8;
      buf[offset++] = hi;
      hi = hi >> 8;
      buf[offset++] = hi;
      hi = hi >> 8;
      buf[offset++] = hi;
      return offset;
    }
    function wrtBigUInt64BE(buf, value, offset, min, max) {
      checkIntBI(value, min, max, buf, offset, 7);
      let lo = Number(value & BigInt(4294967295));
      buf[offset + 7] = lo;
      lo = lo >> 8;
      buf[offset + 6] = lo;
      lo = lo >> 8;
      buf[offset + 5] = lo;
      lo = lo >> 8;
      buf[offset + 4] = lo;
      let hi = Number(value >> BigInt(32) & BigInt(4294967295));
      buf[offset + 3] = hi;
      hi = hi >> 8;
      buf[offset + 2] = hi;
      hi = hi >> 8;
      buf[offset + 1] = hi;
      hi = hi >> 8;
      buf[offset] = hi;
      return offset + 8;
    }
    Buffer3.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
      return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    Buffer3.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
      return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    Buffer3.prototype.writeIntLE = function writeIntLE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength2 - 1);
        checkInt(this, value, offset, byteLength2, limit - 1, -limit);
      }
      let i = 0;
      let mul = 1;
      let sub = 0;
      this[offset] = value & 255;
      while (++i < byteLength2 && (mul *= 256)) {
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
          sub = 1;
        }
        this[offset + i] = (value / mul >> 0) - sub & 255;
      }
      return offset + byteLength2;
    };
    Buffer3.prototype.writeIntBE = function writeIntBE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength2 - 1);
        checkInt(this, value, offset, byteLength2, limit - 1, -limit);
      }
      let i = byteLength2 - 1;
      let mul = 1;
      let sub = 0;
      this[offset + i] = value & 255;
      while (--i >= 0 && (mul *= 256)) {
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
          sub = 1;
        }
        this[offset + i] = (value / mul >> 0) - sub & 255;
      }
      return offset + byteLength2;
    };
    Buffer3.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 1, 127, -128);
      if (value < 0)
        value = 255 + value + 1;
      this[offset] = value & 255;
      return offset + 1;
    };
    Buffer3.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 2, 32767, -32768);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      return offset + 2;
    };
    Buffer3.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 2, 32767, -32768);
      this[offset] = value >>> 8;
      this[offset + 1] = value & 255;
      return offset + 2;
    };
    Buffer3.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 4, 2147483647, -2147483648);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      this[offset + 2] = value >>> 16;
      this[offset + 3] = value >>> 24;
      return offset + 4;
    };
    Buffer3.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 4, 2147483647, -2147483648);
      if (value < 0)
        value = 4294967295 + value + 1;
      this[offset] = value >>> 24;
      this[offset + 1] = value >>> 16;
      this[offset + 2] = value >>> 8;
      this[offset + 3] = value & 255;
      return offset + 4;
    };
    Buffer3.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
      return wrtBigUInt64LE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    Buffer3.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
      return wrtBigUInt64BE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    function checkIEEE754(buf, value, offset, ext, max, min) {
      if (offset + ext > buf.length)
        throw new RangeError("Index out of range");
      if (offset < 0)
        throw new RangeError("Index out of range");
    }
    function writeFloat(buf, value, offset, littleEndian, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 4);
      }
      ieee754.write(buf, value, offset, littleEndian, 23, 4);
      return offset + 4;
    }
    Buffer3.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
      return writeFloat(this, value, offset, true, noAssert);
    };
    Buffer3.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
      return writeFloat(this, value, offset, false, noAssert);
    };
    function writeDouble(buf, value, offset, littleEndian, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 8);
      }
      ieee754.write(buf, value, offset, littleEndian, 52, 8);
      return offset + 8;
    }
    Buffer3.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
      return writeDouble(this, value, offset, true, noAssert);
    };
    Buffer3.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
      return writeDouble(this, value, offset, false, noAssert);
    };
    Buffer3.prototype.copy = function copy(target, targetStart, start, end) {
      if (!Buffer3.isBuffer(target))
        throw new TypeError("argument should be a Buffer");
      if (!start)
        start = 0;
      if (!end && end !== 0)
        end = this.length;
      if (targetStart >= target.length)
        targetStart = target.length;
      if (!targetStart)
        targetStart = 0;
      if (end > 0 && end < start)
        end = start;
      if (end === start)
        return 0;
      if (target.length === 0 || this.length === 0)
        return 0;
      if (targetStart < 0) {
        throw new RangeError("targetStart out of bounds");
      }
      if (start < 0 || start >= this.length)
        throw new RangeError("Index out of range");
      if (end < 0)
        throw new RangeError("sourceEnd out of bounds");
      if (end > this.length)
        end = this.length;
      if (target.length - targetStart < end - start) {
        end = target.length - targetStart + start;
      }
      const len = end - start;
      if (this === target && typeof Uint8Array.prototype.copyWithin === "function") {
        this.copyWithin(targetStart, start, end);
      } else {
        Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
      }
      return len;
    };
    Buffer3.prototype.fill = function fill(val, start, end, encoding) {
      if (typeof val === "string") {
        if (typeof start === "string") {
          encoding = start;
          start = 0;
          end = this.length;
        } else if (typeof end === "string") {
          encoding = end;
          end = this.length;
        }
        if (encoding !== void 0 && typeof encoding !== "string") {
          throw new TypeError("encoding must be a string");
        }
        if (typeof encoding === "string" && !Buffer3.isEncoding(encoding)) {
          throw new TypeError("Unknown encoding: " + encoding);
        }
        if (val.length === 1) {
          const code = val.charCodeAt(0);
          if (encoding === "utf8" && code < 128 || encoding === "latin1") {
            val = code;
          }
        }
      } else if (typeof val === "number") {
        val = val & 255;
      } else if (typeof val === "boolean") {
        val = Number(val);
      }
      if (start < 0 || this.length < start || this.length < end) {
        throw new RangeError("Out of range index");
      }
      if (end <= start) {
        return this;
      }
      start = start >>> 0;
      end = end === void 0 ? this.length : end >>> 0;
      if (!val)
        val = 0;
      let i;
      if (typeof val === "number") {
        for (i = start; i < end; ++i) {
          this[i] = val;
        }
      } else {
        const bytes = Buffer3.isBuffer(val) ? val : Buffer3.from(val, encoding);
        const len = bytes.length;
        if (len === 0) {
          throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        }
        for (i = 0; i < end - start; ++i) {
          this[i + start] = bytes[i % len];
        }
      }
      return this;
    };
    const errors = {};
    function E(sym, getMessage, Base) {
      errors[sym] = class NodeError extends Base {
        constructor() {
          super();
          Object.defineProperty(this, "message", {
            value: getMessage.apply(this, arguments),
            writable: true,
            configurable: true
          });
          this.name = `${this.name} [${sym}]`;
          this.stack;
          delete this.name;
        }
        get code() {
          return sym;
        }
        set code(value) {
          Object.defineProperty(this, "code", {
            configurable: true,
            enumerable: true,
            value,
            writable: true
          });
        }
        toString() {
          return `${this.name} [${sym}]: ${this.message}`;
        }
      };
    }
    E("ERR_BUFFER_OUT_OF_BOUNDS", function(name) {
      if (name) {
        return `${name} is outside of buffer bounds`;
      }
      return "Attempt to access memory outside buffer bounds";
    }, RangeError);
    E("ERR_INVALID_ARG_TYPE", function(name, actual) {
      return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
    }, TypeError);
    E("ERR_OUT_OF_RANGE", function(str, range, input) {
      let msg = `The value of "${str}" is out of range.`;
      let received = input;
      if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) {
        received = addNumericalSeparator(String(input));
      } else if (typeof input === "bigint") {
        received = String(input);
        if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) {
          received = addNumericalSeparator(received);
        }
        received += "n";
      }
      msg += ` It must be ${range}. Received ${received}`;
      return msg;
    }, RangeError);
    function addNumericalSeparator(val) {
      let res = "";
      let i = val.length;
      const start = val[0] === "-" ? 1 : 0;
      for (; i >= start + 4; i -= 3) {
        res = `_${val.slice(i - 3, i)}${res}`;
      }
      return `${val.slice(0, i)}${res}`;
    }
    function checkBounds(buf, offset, byteLength2) {
      validateNumber(offset, "offset");
      if (buf[offset] === void 0 || buf[offset + byteLength2] === void 0) {
        boundsError(offset, buf.length - (byteLength2 + 1));
      }
    }
    function checkIntBI(value, min, max, buf, offset, byteLength2) {
      if (value > max || value < min) {
        const n = typeof min === "bigint" ? "n" : "";
        let range;
        if (byteLength2 > 3) {
          if (min === 0 || min === BigInt(0)) {
            range = `>= 0${n} and < 2${n} ** ${(byteLength2 + 1) * 8}${n}`;
          } else {
            range = `>= -(2${n} ** ${(byteLength2 + 1) * 8 - 1}${n}) and < 2 ** ${(byteLength2 + 1) * 8 - 1}${n}`;
          }
        } else {
          range = `>= ${min}${n} and <= ${max}${n}`;
        }
        throw new errors.ERR_OUT_OF_RANGE("value", range, value);
      }
      checkBounds(buf, offset, byteLength2);
    }
    function validateNumber(value, name) {
      if (typeof value !== "number") {
        throw new errors.ERR_INVALID_ARG_TYPE(name, "number", value);
      }
    }
    function boundsError(value, length, type) {
      if (Math.floor(value) !== value) {
        validateNumber(value, type);
        throw new errors.ERR_OUT_OF_RANGE(type || "offset", "an integer", value);
      }
      if (length < 0) {
        throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
      }
      throw new errors.ERR_OUT_OF_RANGE(type || "offset", `>= ${type ? 1 : 0} and <= ${length}`, value);
    }
    const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
    function base64clean(str) {
      str = str.split("=")[0];
      str = str.trim().replace(INVALID_BASE64_RE, "");
      if (str.length < 2)
        return "";
      while (str.length % 4 !== 0) {
        str = str + "=";
      }
      return str;
    }
    function utf8ToBytes(string, units) {
      units = units || Infinity;
      let codePoint;
      const length = string.length;
      let leadSurrogate = null;
      const bytes = [];
      for (let i = 0; i < length; ++i) {
        codePoint = string.charCodeAt(i);
        if (codePoint > 55295 && codePoint < 57344) {
          if (!leadSurrogate) {
            if (codePoint > 56319) {
              if ((units -= 3) > -1)
                bytes.push(239, 191, 189);
              continue;
            } else if (i + 1 === length) {
              if ((units -= 3) > -1)
                bytes.push(239, 191, 189);
              continue;
            }
            leadSurrogate = codePoint;
            continue;
          }
          if (codePoint < 56320) {
            if ((units -= 3) > -1)
              bytes.push(239, 191, 189);
            leadSurrogate = codePoint;
            continue;
          }
          codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
        } else if (leadSurrogate) {
          if ((units -= 3) > -1)
            bytes.push(239, 191, 189);
        }
        leadSurrogate = null;
        if (codePoint < 128) {
          if ((units -= 1) < 0)
            break;
          bytes.push(codePoint);
        } else if (codePoint < 2048) {
          if ((units -= 2) < 0)
            break;
          bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128);
        } else if (codePoint < 65536) {
          if ((units -= 3) < 0)
            break;
          bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
        } else if (codePoint < 1114112) {
          if ((units -= 4) < 0)
            break;
          bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
        } else {
          throw new Error("Invalid code point");
        }
      }
      return bytes;
    }
    function asciiToBytes(str) {
      const byteArray = [];
      for (let i = 0; i < str.length; ++i) {
        byteArray.push(str.charCodeAt(i) & 255);
      }
      return byteArray;
    }
    function utf16leToBytes(str, units) {
      let c, hi, lo;
      const byteArray = [];
      for (let i = 0; i < str.length; ++i) {
        if ((units -= 2) < 0)
          break;
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
      }
      return byteArray;
    }
    function base64ToBytes(str) {
      return base64.toByteArray(base64clean(str));
    }
    function blitBuffer(src, dst, offset, length) {
      let i;
      for (i = 0; i < length; ++i) {
        if (i + offset >= dst.length || i >= src.length)
          break;
        dst[i + offset] = src[i];
      }
      return i;
    }
    function isInstance(obj, type) {
      return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
    }
    function numberIsNaN(obj) {
      return obj !== obj;
    }
    const hexSliceLookupTable = function() {
      const alphabet = "0123456789abcdef";
      const table = new Array(256);
      for (let i = 0; i < 16; ++i) {
        const i16 = i * 16;
        for (let j = 0; j < 16; ++j) {
          table[i16 + j] = alphabet[i] + alphabet[j];
        }
      }
      return table;
    }();
    function defineBigIntMethod(fn) {
      return typeof BigInt === "undefined" ? BufferBigIntNotDefined : fn;
    }
    function BufferBigIntNotDefined() {
      throw new Error("BigInt not supported");
    }
    return exports$1;
  }
  var exports$3, _dewExec$2, exports$2, _dewExec$1, exports$1, _dewExec, exports, Buffer2, INSPECT_MAX_BYTES, kMaxLength;
  var init_buffer = __esm({
    "node_modules/@jspm/core/nodelibs/browser/buffer.js"() {
      init_dirname();
      init_buffer2();
      init_process2();
      exports$3 = {};
      _dewExec$2 = false;
      exports$2 = {};
      _dewExec$1 = false;
      exports$1 = {};
      _dewExec = false;
      exports = dew();
      exports["Buffer"];
      exports["SlowBuffer"];
      exports["INSPECT_MAX_BYTES"];
      exports["kMaxLength"];
      Buffer2 = exports.Buffer;
      INSPECT_MAX_BYTES = exports.INSPECT_MAX_BYTES;
      kMaxLength = exports.kMaxLength;
    }
  });

  // node_modules/esbuild-plugin-polyfill-node/polyfills/buffer.js
  var init_buffer2 = __esm({
    "node_modules/esbuild-plugin-polyfill-node/polyfills/buffer.js"() {
      init_buffer();
    }
  });

  // node_modules/matrix-js/lib/rational.js
  var require_rational = __commonJS({
    "node_modules/matrix-js/lib/rational.js"(exports2, module) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      function rational(num, den) {
        den = den || 1;
        if (Math.sign(den) === -1) {
          num = -num;
          den = -den;
        }
        return {
          num,
          den,
          add: (op) => rational(num * op.den + den * op.num, den * op.den),
          sub: (op) => rational(num * op.den - den * op.num, den * op.den),
          mul: (op) => multiply(op, num, den),
          div: (op) => {
            let _num = op.den;
            let _den = op.num;
            return multiply(rational(_num, _den), num, den);
          }
        };
      }
      module.exports = rational;
      function multiply(op, num, den) {
        let _num = Math.sign(num) * Math.sign(op.num);
        let _den = Math.sign(den) * Math.sign(op.den);
        if (Math.abs(num) === Math.abs(op.den) && Math.abs(den) === Math.abs(op.num)) {
          _num = _num;
          _den = _den;
        } else if (Math.abs(den) === Math.abs(op.num)) {
          _num = _num * Math.abs(num);
          _den = _den * Math.abs(op.den);
        } else if (Math.abs(num) === Math.abs(op.den)) {
          _num = _num * Math.abs(op.num);
          _den = _den * Math.abs(den);
        } else {
          _num = num * op.num;
          _den = den * op.den;
        }
        return rational(_num, _den);
      }
    }
  });

  // node_modules/matrix-js/lib/merge.js
  var require_merge = __commonJS({
    "node_modules/matrix-js/lib/merge.js"(exports2, module) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      function merge(base) {
        return {
          top: (mergeData) => top(base, mergeData),
          bottom: (mergeData) => bottom(base, mergeData),
          left: (mergeData) => left(base, mergeData),
          right: (mergeData) => right(base, mergeData)
        };
      }
      module.exports = merge;
      function top(base, mergeData) {
        let baseWidth = base[0].length || base.length;
        let mergeDataWidth = mergeData[mergeData.length - 1].length || mergeData.length;
        if (baseWidth !== mergeDataWidth) {
          return base;
        }
        if (!Array.isArray(base[0])) {
          base = [base];
        }
        if (!Array.isArray(mergeData[mergeData.length - 1])) {
          mergeData = [mergeData];
        }
        for (let row = mergeData.length - 1; row >= 0; row--) {
          base.unshift(mergeData[row].map((ele) => ele));
        }
        return base;
      }
      function bottom(base, mergeData) {
        let baseWidth = base[base.length - 1].length || base.length;
        let mergeDataWidth = mergeData[0].length || mergeData.length;
        if (baseWidth !== mergeDataWidth) {
          return base;
        }
        if (!Array.isArray(base[base.length - 1])) {
          base = [base];
        }
        if (!Array.isArray(mergeData[0])) {
          mergeData = [mergeData];
        }
        for (let row = 0; row < mergeData.length; row++) {
          base.push(mergeData[row].map((ele) => ele));
        }
        return base;
      }
      function left(base, mergeData) {
        let baseHeight = base.length;
        let mergeDataHeight = mergeData.length;
        if (!Array.isArray(base[0]) && !Array.isArray(mergeData[0])) {
          base.unshift.apply(base, mergeData);
          return base;
        }
        if (baseHeight !== mergeDataHeight) {
          return base;
        }
        for (let row = 0; row < baseHeight; row++) {
          base[row].unshift.apply(base[row], mergeData[row].map((ele) => ele));
        }
        return base;
      }
      function right(base, mergeData) {
        let baseHeight = base.length;
        let mergeDataHeight = mergeData.length;
        if (!Array.isArray(base[0]) && !Array.isArray(mergeData[0])) {
          base.push.apply(base, mergeData);
          return base;
        }
        if (baseHeight !== mergeDataHeight) {
          return base;
        }
        for (let row = 0; row < baseHeight; row++) {
          base[row].push.apply(base[row], mergeData[row].map((ele) => ele));
        }
        return base;
      }
    }
  });

  // node_modules/matrix-js/lib/index.js
  var require_lib = __commonJS({
    "node_modules/matrix-js/lib/index.js"(exports2, module) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      var rational = require_rational();
      var merge = require_merge();
      function matrix2(mat) {
        if (!Array.isArray(mat)) {
          throw new Error("Input should be of type array");
        }
        let _matrix = function() {
          let args = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
          return read(mat, args);
        };
        return Object.assign(_matrix, _mat(mat));
      }
      function _mat(mat) {
        return {
          size: () => size(mat),
          add: (operand) => operate(mat, operand, addition),
          sub: (operand) => operate(mat, operand, subtraction),
          mul: (operand) => operate(mat, operand, multiplication),
          div: (operand) => operate(mat, operand, division),
          prod: (operand) => prod(mat, operand),
          trans: () => trans(mat),
          set: function() {
            let args = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
            return {
              to: (val) => replace(mat, val, args)
            };
          },
          det: () => determinant(mat),
          inv: () => invert(mat),
          merge: merge(mat),
          map: (func) => map(mat, func),
          equals: (operand) => equals(mat, operand)
        };
      }
      module.exports = matrix2;
      function size(mat) {
        let s = [];
        while (Array.isArray(mat)) {
          s.push(mat.length);
          mat = mat[0];
        }
        return s;
      }
      function dimensions(mat) {
        return size(mat).length;
      }
      function read(mat, args) {
        if (args.length === 0) {
          return mat;
        } else {
          return extract(mat, args);
        }
      }
      function extract(mat, args) {
        let dim = dimensions(mat);
        for (let i = 0; i < dim; i++) {
          let d = args[i];
          if (d === void 0) {
            break;
          }
          if (Array.isArray(d)) {
            mat = extractRange(mat, d, i);
          } else if (Number.isInteger(d)) {
            if (dimensions(mat) > 1 && i > 0) {
              mat = mat.map(function(elem) {
                return [elem[d]];
              });
            } else {
              mat = mat[d];
            }
          }
        }
        return mat;
      }
      function extractRange(mat, arg, ind) {
        if (!arg.length) {
          return mat;
        } else if (arg.length === 2) {
          let reverse = arg[0] > arg[1];
          let first = !reverse ? arg[0] : arg[1];
          let last = !reverse ? arg[1] : arg[0];
          if (dimensions(mat) > 1 && ind > 0) {
            return mat.map(function(elem) {
              if (reverse) {
                return elem.slice(first, last + 1).reverse();
              }
              return elem.slice(first, last + 1);
            });
          } else {
            mat = mat.slice(first, last + 1);
            return reverse && mat.reverse() || mat;
          }
        }
      }
      function replace(mat, value, args) {
        let result = clone(mat);
        let prev = args[0];
        let start = prev[0] || 0;
        let end = prev[1] && prev[1] + 1 || mat.length;
        if (!Array.isArray(prev) && args.length === 1) {
          result[prev].fill(value);
        } else if (args.length === 1) {
          for (let ind = start; ind < end; ind++) {
            result[ind].fill(value);
          }
        }
        for (let i = 1; i < args.length; i++) {
          let first = Array.isArray(args[i]) ? args[i][0] || 0 : args[i];
          let last = Array.isArray(args[i]) ? args[i][1] && args[i][1] + 1 || mat[0].length : args[i] + 1;
          if (!Array.isArray(prev)) {
            result[prev].fill(value, first, last);
          } else {
            for (let ind = start; ind < end; ind++) {
              result[ind].fill(value, first, last);
            }
          }
        }
        return result;
      }
      function operate(mat, operand, operation) {
        let result = [];
        let op = operand();
        for (let i = 0; i < mat.length; i++) {
          let op1 = mat[i];
          let op2 = op[i];
          result.push(op1.map(function(elem, ind) {
            return operation(elem, op2[ind]);
          }));
        }
        return result;
      }
      function prod(mat, operand) {
        let op1 = mat;
        let op2 = operand();
        let size1 = size(op1);
        let size2 = size(op2);
        let result = [];
        if (size1[1] === size2[0]) {
          for (let i = 0; i < size1[0]; i++) {
            result[i] = [];
            for (let j = 0; j < size2[1]; j++) {
              for (let k = 0; k < size1[1]; k++) {
                if (result[i][j] === void 0) {
                  result[i][j] = 0;
                }
                result[i][j] += multiplication(op1[i][k], op2[k][j]);
              }
            }
          }
        }
        return result;
      }
      function trans(mat) {
        let input = mat;
        let s = size(mat);
        let output = [];
        for (let i = 0; i < s[0]; i++) {
          for (let j = 0; j < s[1]; j++) {
            if (Array.isArray(output[j])) {
              output[j].push(input[i][j]);
            } else {
              output[j] = [input[i][j]];
            }
          }
        }
        return output;
      }
      function clone(mat) {
        let result = [];
        for (let i = 0; i < mat.length; i++) {
          result.push(mat[i].slice(0));
        }
        return result;
      }
      function addition(op1, op2) {
        return op1 + op2;
      }
      function subtraction(op1, op2) {
        return op1 - op2;
      }
      function multiplication(op1, op2) {
        return op1 * op2;
      }
      function division(op1, op2) {
        return op1 / op2;
      }
      function determinant(mat) {
        let rationalized = rationalize(mat);
        let siz = size(mat);
        let det = rational(1);
        let sign = 1;
        for (let i = 0; i < siz[0] - 1; i++) {
          for (let j = i + 1; j < siz[0]; j++) {
            if (rationalized[j][i].num === 0) {
              continue;
            }
            if (rationalized[i][i].num === 0) {
              interchange(rationalized, i, j);
              sign = -sign;
              continue;
            }
            let temp = rationalized[j][i].div(rationalized[i][i]);
            temp = rational(Math.abs(temp.num), temp.den);
            if (Math.sign(rationalized[j][i].num) === Math.sign(rationalized[i][i].num)) {
              temp = rational(-temp.num, temp.den);
            }
            for (let k = 0; k < siz[1]; k++) {
              rationalized[j][k] = temp.mul(rationalized[i][k]).add(rationalized[j][k]);
            }
          }
        }
        det = rationalized.reduce((prev, curr, index) => prev.mul(curr[index]), rational(1));
        return sign * det.num / det.den;
      }
      function interchange(mat, ind1, ind2) {
        let temp = mat[ind1];
        mat[ind1] = mat[ind2];
        mat[ind2] = temp;
      }
      function invert(mat) {
        let rationalized = rationalize(mat);
        let siz = size(mat);
        let result = rationalize(identity(siz[0]));
        let i = 0;
        let j = 0;
        while (j < siz[0]) {
          if (rationalized[i][j].num === 0) {
            for (let k = i + 1; k < siz[0]; k++) {
              if (rationalized[k][j].num !== 0) {
                interchange(rationalized, i, k);
                interchange(result, i, k);
              }
            }
          }
          if (rationalized[i][j].num !== 0) {
            if (rationalized[i][j].num !== 1 || rationalized[i][j].den !== 1) {
              let factor = rational(rationalized[i][j].num, rationalized[i][j].den);
              for (let col = 0; col < siz[1]; col++) {
                rationalized[i][col] = rationalized[i][col].div(factor);
                result[i][col] = result[i][col].div(factor);
              }
            }
            for (let k = i + 1; k < siz[0]; k++) {
              let temp = rationalized[k][j];
              for (let col = 0; col < siz[1]; col++) {
                rationalized[k][col] = rationalized[k][col].sub(temp.mul(rationalized[i][col]));
                result[k][col] = result[k][col].sub(temp.mul(result[i][col]));
              }
            }
          }
          i += 1;
          j += 1;
        }
        let last = siz[0] - 1;
        if (rationalized[last][last].num !== 1 || rationalized[last][last].den !== 1) {
          let factor = rational(rationalized[last][last].num, rationalized[last][last].den);
          for (let col = 0; col < siz[1]; col++) {
            rationalized[last][col] = rationalized[last][col].div(factor);
            result[last][col] = result[last][col].div(factor);
          }
        }
        for (let i2 = siz[0] - 1; i2 > 0; i2--) {
          for (let j2 = i2 - 1; j2 >= 0; j2--) {
            let temp = rational(-rationalized[j2][i2].num, rationalized[j2][i2].den);
            for (let k = 0; k < siz[1]; k++) {
              rationalized[j2][k] = temp.mul(rationalized[i2][k]).add(rationalized[j2][k]);
              result[j2][k] = temp.mul(result[i2][k]).add(result[j2][k]);
            }
          }
        }
        return derationalize(result);
      }
      function map(mat, func) {
        const s = size(mat);
        const result = [];
        for (let i = 0; i < s[0]; i++) {
          if (Array.isArray(mat[i])) {
            result[i] = [];
            for (let j = 0; j < s[1]; j++) {
              result[i][j] = func(mat[i][j], [i, j], mat);
            }
          } else {
            result[i] = func(mat[i], [i, 0], mat);
          }
        }
        return result;
      }
      function rationalize(mat) {
        let rationalized = [];
        mat.forEach((row, ind) => {
          rationalized.push(row.map((ele) => rational(ele)));
        });
        return rationalized;
      }
      function derationalize(mat) {
        let derationalized = [];
        mat.forEach((row, ind) => {
          derationalized.push(row.map((ele) => ele.num / ele.den));
        });
        return derationalized;
      }
      function generate(size2, val) {
        let dim = 2;
        while (dim > 0) {
          var arr = [];
          for (var i = 0; i < size2; i++) {
            if (Array.isArray(val)) {
              arr.push(Object.assign([], val));
            } else {
              arr.push(val);
            }
          }
          val = arr;
          dim -= 1;
        }
        return val;
      }
      function identity(size2) {
        let result = generate(size2, 0);
        result.forEach((row, index) => {
          row[index] = 1;
        });
        return result;
      }
      function equals(mat, operand) {
        let op1 = mat;
        let op2 = operand();
        let size1 = size(op1);
        let size2 = size(op2);
        if (!size1.every((val, ind) => val === size2[ind])) {
          return false;
        }
        return op1.every((val, ind1) => val.every((ele, ind2) => Math.abs(ele - op2[ind1][ind2]) < 1e-10));
      }
    }
  });

  // node_modules/fraction.js/fraction.js
  var require_fraction = __commonJS({
    "node_modules/fraction.js/fraction.js"(exports2, module) {
      init_dirname();
      init_buffer2();
      init_process2();
      (function(root) {
        "use strict";
        var MAX_CYCLE_LEN = 2e3;
        var P = {
          "s": 1,
          "n": 0,
          "d": 1
        };
        function assign(n, s) {
          if (isNaN(n = parseInt(n, 10))) {
            throw Fraction["InvalidParameter"];
          }
          return n * s;
        }
        function newFraction(n, d) {
          if (d === 0) {
            throw Fraction["DivisionByZero"];
          }
          var f = Object.create(Fraction.prototype);
          f["s"] = n < 0 ? -1 : 1;
          n = n < 0 ? -n : n;
          var a = gcd(n, d);
          f["n"] = n / a;
          f["d"] = d / a;
          return f;
        }
        function factorize(num) {
          var factors = {};
          var n = num;
          var i = 2;
          var s = 4;
          while (s <= n) {
            while (n % i === 0) {
              n /= i;
              factors[i] = (factors[i] || 0) + 1;
            }
            s += 1 + 2 * i++;
          }
          if (n !== num) {
            if (n > 1)
              factors[n] = (factors[n] || 0) + 1;
          } else {
            factors[num] = (factors[num] || 0) + 1;
          }
          return factors;
        }
        var parse = function(p1, p2) {
          var n = 0, d = 1, s = 1;
          var v = 0, w = 0, x = 0, y = 1, z = 1;
          var A = 0, B = 1;
          var C = 1, D = 1;
          var N = 1e7;
          var M;
          if (p1 === void 0 || p1 === null) {
          } else if (p2 !== void 0) {
            n = p1;
            d = p2;
            s = n * d;
            if (n % 1 !== 0 || d % 1 !== 0) {
              throw Fraction["NonIntegerParameter"];
            }
          } else
            switch (typeof p1) {
              case "object": {
                if ("d" in p1 && "n" in p1) {
                  n = p1["n"];
                  d = p1["d"];
                  if ("s" in p1)
                    n *= p1["s"];
                } else if (0 in p1) {
                  n = p1[0];
                  if (1 in p1)
                    d = p1[1];
                } else {
                  throw Fraction["InvalidParameter"];
                }
                s = n * d;
                break;
              }
              case "number": {
                if (p1 < 0) {
                  s = p1;
                  p1 = -p1;
                }
                if (p1 % 1 === 0) {
                  n = p1;
                } else if (p1 > 0) {
                  if (p1 >= 1) {
                    z = Math.pow(10, Math.floor(1 + Math.log(p1) / Math.LN10));
                    p1 /= z;
                  }
                  while (B <= N && D <= N) {
                    M = (A + C) / (B + D);
                    if (p1 === M) {
                      if (B + D <= N) {
                        n = A + C;
                        d = B + D;
                      } else if (D > B) {
                        n = C;
                        d = D;
                      } else {
                        n = A;
                        d = B;
                      }
                      break;
                    } else {
                      if (p1 > M) {
                        A += C;
                        B += D;
                      } else {
                        C += A;
                        D += B;
                      }
                      if (B > N) {
                        n = C;
                        d = D;
                      } else {
                        n = A;
                        d = B;
                      }
                    }
                  }
                  n *= z;
                } else if (isNaN(p1) || isNaN(p2)) {
                  d = n = NaN;
                }
                break;
              }
              case "string": {
                B = p1.match(/\d+|./g);
                if (B === null)
                  throw Fraction["InvalidParameter"];
                if (B[A] === "-") {
                  s = -1;
                  A++;
                } else if (B[A] === "+") {
                  A++;
                }
                if (B.length === A + 1) {
                  w = assign(B[A++], s);
                } else if (B[A + 1] === "." || B[A] === ".") {
                  if (B[A] !== ".") {
                    v = assign(B[A++], s);
                  }
                  A++;
                  if (A + 1 === B.length || B[A + 1] === "(" && B[A + 3] === ")" || B[A + 1] === "'" && B[A + 3] === "'") {
                    w = assign(B[A], s);
                    y = Math.pow(10, B[A].length);
                    A++;
                  }
                  if (B[A] === "(" && B[A + 2] === ")" || B[A] === "'" && B[A + 2] === "'") {
                    x = assign(B[A + 1], s);
                    z = Math.pow(10, B[A + 1].length) - 1;
                    A += 3;
                  }
                } else if (B[A + 1] === "/" || B[A + 1] === ":") {
                  w = assign(B[A], s);
                  y = assign(B[A + 2], 1);
                  A += 3;
                } else if (B[A + 3] === "/" && B[A + 1] === " ") {
                  v = assign(B[A], s);
                  w = assign(B[A + 2], s);
                  y = assign(B[A + 4], 1);
                  A += 5;
                }
                if (B.length <= A) {
                  d = y * z;
                  s = /* void */
                  n = x + d * v + z * w;
                  break;
                }
              }
              default:
                throw Fraction["InvalidParameter"];
            }
          if (d === 0) {
            throw Fraction["DivisionByZero"];
          }
          P["s"] = s < 0 ? -1 : 1;
          P["n"] = Math.abs(n);
          P["d"] = Math.abs(d);
        };
        function modpow(b, e, m) {
          var r = 1;
          for (; e > 0; b = b * b % m, e >>= 1) {
            if (e & 1) {
              r = r * b % m;
            }
          }
          return r;
        }
        function cycleLen(n, d) {
          for (; d % 2 === 0; d /= 2) {
          }
          for (; d % 5 === 0; d /= 5) {
          }
          if (d === 1)
            return 0;
          var rem = 10 % d;
          var t = 1;
          for (; rem !== 1; t++) {
            rem = rem * 10 % d;
            if (t > MAX_CYCLE_LEN)
              return 0;
          }
          return t;
        }
        function cycleStart(n, d, len) {
          var rem1 = 1;
          var rem2 = modpow(10, len, d);
          for (var t = 0; t < 300; t++) {
            if (rem1 === rem2)
              return t;
            rem1 = rem1 * 10 % d;
            rem2 = rem2 * 10 % d;
          }
          return 0;
        }
        function gcd(a, b) {
          if (!a)
            return b;
          if (!b)
            return a;
          while (1) {
            a %= b;
            if (!a)
              return b;
            b %= a;
            if (!b)
              return a;
          }
        }
        ;
        function Fraction(a, b) {
          parse(a, b);
          if (this instanceof Fraction) {
            a = gcd(P["d"], P["n"]);
            this["s"] = P["s"];
            this["n"] = P["n"] / a;
            this["d"] = P["d"] / a;
          } else {
            return newFraction(P["s"] * P["n"], P["d"]);
          }
        }
        Fraction["DivisionByZero"] = new Error("Division by Zero");
        Fraction["InvalidParameter"] = new Error("Invalid argument");
        Fraction["NonIntegerParameter"] = new Error("Parameters must be integer");
        Fraction.prototype = {
          "s": 1,
          "n": 0,
          "d": 1,
          /**
           * Calculates the absolute value
           *
           * Ex: new Fraction(-4).abs() => 4
           **/
          "abs": function() {
            return newFraction(this["n"], this["d"]);
          },
          /**
           * Inverts the sign of the current fraction
           *
           * Ex: new Fraction(-4).neg() => 4
           **/
          "neg": function() {
            return newFraction(-this["s"] * this["n"], this["d"]);
          },
          /**
           * Adds two rational numbers
           *
           * Ex: new Fraction({n: 2, d: 3}).add("14.9") => 467 / 30
           **/
          "add": function(a, b) {
            parse(a, b);
            return newFraction(
              this["s"] * this["n"] * P["d"] + P["s"] * this["d"] * P["n"],
              this["d"] * P["d"]
            );
          },
          /**
           * Subtracts two rational numbers
           *
           * Ex: new Fraction({n: 2, d: 3}).add("14.9") => -427 / 30
           **/
          "sub": function(a, b) {
            parse(a, b);
            return newFraction(
              this["s"] * this["n"] * P["d"] - P["s"] * this["d"] * P["n"],
              this["d"] * P["d"]
            );
          },
          /**
           * Multiplies two rational numbers
           *
           * Ex: new Fraction("-17.(345)").mul(3) => 5776 / 111
           **/
          "mul": function(a, b) {
            parse(a, b);
            return newFraction(
              this["s"] * P["s"] * this["n"] * P["n"],
              this["d"] * P["d"]
            );
          },
          /**
           * Divides two rational numbers
           *
           * Ex: new Fraction("-17.(345)").inverse().div(3)
           **/
          "div": function(a, b) {
            parse(a, b);
            return newFraction(
              this["s"] * P["s"] * this["n"] * P["d"],
              this["d"] * P["n"]
            );
          },
          /**
           * Clones the actual object
           *
           * Ex: new Fraction("-17.(345)").clone()
           **/
          "clone": function() {
            return newFraction(this["s"] * this["n"], this["d"]);
          },
          /**
           * Calculates the modulo of two rational numbers - a more precise fmod
           *
           * Ex: new Fraction('4.(3)').mod([7, 8]) => (13/3) % (7/8) = (5/6)
           **/
          "mod": function(a, b) {
            if (isNaN(this["n"]) || isNaN(this["d"])) {
              return new Fraction(NaN);
            }
            if (a === void 0) {
              return newFraction(this["s"] * this["n"] % this["d"], 1);
            }
            parse(a, b);
            if (0 === P["n"] && 0 === this["d"]) {
              throw Fraction["DivisionByZero"];
            }
            return newFraction(
              this["s"] * (P["d"] * this["n"]) % (P["n"] * this["d"]),
              P["d"] * this["d"]
            );
          },
          /**
           * Calculates the fractional gcd of two rational numbers
           *
           * Ex: new Fraction(5,8).gcd(3,7) => 1/56
           */
          "gcd": function(a, b) {
            parse(a, b);
            return newFraction(gcd(P["n"], this["n"]) * gcd(P["d"], this["d"]), P["d"] * this["d"]);
          },
          /**
           * Calculates the fractional lcm of two rational numbers
           *
           * Ex: new Fraction(5,8).lcm(3,7) => 15
           */
          "lcm": function(a, b) {
            parse(a, b);
            if (P["n"] === 0 && this["n"] === 0) {
              return newFraction(0, 1);
            }
            return newFraction(P["n"] * this["n"], gcd(P["n"], this["n"]) * gcd(P["d"], this["d"]));
          },
          /**
           * Calculates the ceil of a rational number
           *
           * Ex: new Fraction('4.(3)').ceil() => (5 / 1)
           **/
          "ceil": function(places) {
            places = Math.pow(10, places || 0);
            if (isNaN(this["n"]) || isNaN(this["d"])) {
              return new Fraction(NaN);
            }
            return newFraction(Math.ceil(places * this["s"] * this["n"] / this["d"]), places);
          },
          /**
           * Calculates the floor of a rational number
           *
           * Ex: new Fraction('4.(3)').floor() => (4 / 1)
           **/
          "floor": function(places) {
            places = Math.pow(10, places || 0);
            if (isNaN(this["n"]) || isNaN(this["d"])) {
              return new Fraction(NaN);
            }
            return newFraction(Math.floor(places * this["s"] * this["n"] / this["d"]), places);
          },
          /**
           * Rounds a rational numbers
           *
           * Ex: new Fraction('4.(3)').round() => (4 / 1)
           **/
          "round": function(places) {
            places = Math.pow(10, places || 0);
            if (isNaN(this["n"]) || isNaN(this["d"])) {
              return new Fraction(NaN);
            }
            return newFraction(Math.round(places * this["s"] * this["n"] / this["d"]), places);
          },
          /**
           * Gets the inverse of the fraction, means numerator and denominator are exchanged
           *
           * Ex: new Fraction([-3, 4]).inverse() => -4 / 3
           **/
          "inverse": function() {
            return newFraction(this["s"] * this["d"], this["n"]);
          },
          /**
           * Calculates the fraction to some rational exponent, if possible
           *
           * Ex: new Fraction(-1,2).pow(-3) => -8
           */
          "pow": function(a, b) {
            parse(a, b);
            if (P["d"] === 1) {
              if (P["s"] < 0) {
                return newFraction(Math.pow(this["s"] * this["d"], P["n"]), Math.pow(this["n"], P["n"]));
              } else {
                return newFraction(Math.pow(this["s"] * this["n"], P["n"]), Math.pow(this["d"], P["n"]));
              }
            }
            if (this["s"] < 0)
              return null;
            var N = factorize(this["n"]);
            var D = factorize(this["d"]);
            var n = 1;
            var d = 1;
            for (var k in N) {
              if (k === "1")
                continue;
              if (k === "0") {
                n = 0;
                break;
              }
              N[k] *= P["n"];
              if (N[k] % P["d"] === 0) {
                N[k] /= P["d"];
              } else
                return null;
              n *= Math.pow(k, N[k]);
            }
            for (var k in D) {
              if (k === "1")
                continue;
              D[k] *= P["n"];
              if (D[k] % P["d"] === 0) {
                D[k] /= P["d"];
              } else
                return null;
              d *= Math.pow(k, D[k]);
            }
            if (P["s"] < 0) {
              return newFraction(d, n);
            }
            return newFraction(n, d);
          },
          /**
           * Check if two rational numbers are the same
           *
           * Ex: new Fraction(19.6).equals([98, 5]);
           **/
          "equals": function(a, b) {
            parse(a, b);
            return this["s"] * this["n"] * P["d"] === P["s"] * P["n"] * this["d"];
          },
          /**
           * Check if two rational numbers are the same
           *
           * Ex: new Fraction(19.6).equals([98, 5]);
           **/
          "compare": function(a, b) {
            parse(a, b);
            var t = this["s"] * this["n"] * P["d"] - P["s"] * P["n"] * this["d"];
            return (0 < t) - (t < 0);
          },
          "simplify": function(eps) {
            if (isNaN(this["n"]) || isNaN(this["d"])) {
              return this;
            }
            eps = eps || 1e-3;
            var thisABS = this["abs"]();
            var cont = thisABS["toContinued"]();
            for (var i = 1; i < cont.length; i++) {
              var s = newFraction(cont[i - 1], 1);
              for (var k = i - 2; k >= 0; k--) {
                s = s["inverse"]()["add"](cont[k]);
              }
              if (s["sub"](thisABS)["abs"]().valueOf() < eps) {
                return s["mul"](this["s"]);
              }
            }
            return this;
          },
          /**
           * Check if two rational numbers are divisible
           *
           * Ex: new Fraction(19.6).divisible(1.5);
           */
          "divisible": function(a, b) {
            parse(a, b);
            return !(!(P["n"] * this["d"]) || this["n"] * P["d"] % (P["n"] * this["d"]));
          },
          /**
           * Returns a decimal representation of the fraction
           *
           * Ex: new Fraction("100.'91823'").valueOf() => 100.91823918239183
           **/
          "valueOf": function() {
            return this["s"] * this["n"] / this["d"];
          },
          /**
           * Returns a string-fraction representation of a Fraction object
           *
           * Ex: new Fraction("1.'3'").toFraction(true) => "4 1/3"
           **/
          "toFraction": function(excludeWhole) {
            var whole, str = "";
            var n = this["n"];
            var d = this["d"];
            if (this["s"] < 0) {
              str += "-";
            }
            if (d === 1) {
              str += n;
            } else {
              if (excludeWhole && (whole = Math.floor(n / d)) > 0) {
                str += whole;
                str += " ";
                n %= d;
              }
              str += n;
              str += "/";
              str += d;
            }
            return str;
          },
          /**
           * Returns a latex representation of a Fraction object
           *
           * Ex: new Fraction("1.'3'").toLatex() => "\frac{4}{3}"
           **/
          "toLatex": function(excludeWhole) {
            var whole, str = "";
            var n = this["n"];
            var d = this["d"];
            if (this["s"] < 0) {
              str += "-";
            }
            if (d === 1) {
              str += n;
            } else {
              if (excludeWhole && (whole = Math.floor(n / d)) > 0) {
                str += whole;
                n %= d;
              }
              str += "\\frac{";
              str += n;
              str += "}{";
              str += d;
              str += "}";
            }
            return str;
          },
          /**
           * Returns an array of continued fraction elements
           *
           * Ex: new Fraction("7/8").toContinued() => [0,1,7]
           */
          "toContinued": function() {
            var t;
            var a = this["n"];
            var b = this["d"];
            var res = [];
            if (isNaN(a) || isNaN(b)) {
              return res;
            }
            do {
              res.push(Math.floor(a / b));
              t = a % b;
              a = b;
              b = t;
            } while (a !== 1);
            return res;
          },
          /**
           * Creates a string representation of a fraction with all digits
           *
           * Ex: new Fraction("100.'91823'").toString() => "100.(91823)"
           **/
          "toString": function(dec) {
            var N = this["n"];
            var D = this["d"];
            if (isNaN(N) || isNaN(D)) {
              return "NaN";
            }
            dec = dec || 15;
            var cycLen = cycleLen(N, D);
            var cycOff = cycleStart(N, D, cycLen);
            var str = this["s"] < 0 ? "-" : "";
            str += N / D | 0;
            N %= D;
            N *= 10;
            if (N)
              str += ".";
            if (cycLen) {
              for (var i = cycOff; i--; ) {
                str += N / D | 0;
                N %= D;
                N *= 10;
              }
              str += "(";
              for (var i = cycLen; i--; ) {
                str += N / D | 0;
                N %= D;
                N *= 10;
              }
              str += ")";
            } else {
              for (var i = dec; N && i--; ) {
                str += N / D | 0;
                N %= D;
                N *= 10;
              }
            }
            return str;
          }
        };
        if (typeof define === "function" && define["amd"]) {
          define([], function() {
            return Fraction;
          });
        } else if (typeof exports2 === "object") {
          Object.defineProperty(Fraction, "__esModule", { "value": true });
          Fraction["default"] = Fraction;
          Fraction["Fraction"] = Fraction;
          module["exports"] = Fraction;
        } else {
          root["Fraction"] = Fraction;
        }
      })(exports2);
    }
  });

  // node_modules/complex.js/complex.js
  var require_complex = __commonJS({
    "node_modules/complex.js/complex.js"(exports2, module) {
      init_dirname();
      init_buffer2();
      init_process2();
      (function(root) {
        "use strict";
        var cosh = Math.cosh || function(x) {
          return Math.abs(x) < 1e-9 ? 1 - x : (Math.exp(x) + Math.exp(-x)) * 0.5;
        };
        var sinh = Math.sinh || function(x) {
          return Math.abs(x) < 1e-9 ? x : (Math.exp(x) - Math.exp(-x)) * 0.5;
        };
        var cosm1 = function(x) {
          var b = Math.PI / 4;
          if (-b > x || x > b) {
            return Math.cos(x) - 1;
          }
          var xx = x * x;
          return xx * (xx * (xx * (xx * (xx * (xx * (xx * (xx / 20922789888e3 - 1 / 87178291200) + 1 / 479001600) - 1 / 3628800) + 1 / 40320) - 1 / 720) + 1 / 24) - 1 / 2);
        };
        var hypot = function(x, y) {
          var a = Math.abs(x);
          var b = Math.abs(y);
          if (a < 3e3 && b < 3e3) {
            return Math.sqrt(a * a + b * b);
          }
          if (a < b) {
            a = b;
            b = x / y;
          } else {
            b = y / x;
          }
          return a * Math.sqrt(1 + b * b);
        };
        var parser_exit = function() {
          throw SyntaxError("Invalid Param");
        };
        function logHypot(a, b) {
          var _a = Math.abs(a);
          var _b = Math.abs(b);
          if (a === 0) {
            return Math.log(_b);
          }
          if (b === 0) {
            return Math.log(_a);
          }
          if (_a < 3e3 && _b < 3e3) {
            return Math.log(a * a + b * b) * 0.5;
          }
          a = a / 2;
          b = b / 2;
          return 0.5 * Math.log(a * a + b * b) + Math.LN2;
        }
        var parse = function(a, b) {
          var z = { "re": 0, "im": 0 };
          if (a === void 0 || a === null) {
            z["re"] = z["im"] = 0;
          } else if (b !== void 0) {
            z["re"] = a;
            z["im"] = b;
          } else
            switch (typeof a) {
              case "object":
                if ("im" in a && "re" in a) {
                  z["re"] = a["re"];
                  z["im"] = a["im"];
                } else if ("abs" in a && "arg" in a) {
                  if (!Number.isFinite(a["abs"]) && Number.isFinite(a["arg"])) {
                    return Complex["INFINITY"];
                  }
                  z["re"] = a["abs"] * Math.cos(a["arg"]);
                  z["im"] = a["abs"] * Math.sin(a["arg"]);
                } else if ("r" in a && "phi" in a) {
                  if (!Number.isFinite(a["r"]) && Number.isFinite(a["phi"])) {
                    return Complex["INFINITY"];
                  }
                  z["re"] = a["r"] * Math.cos(a["phi"]);
                  z["im"] = a["r"] * Math.sin(a["phi"]);
                } else if (a.length === 2) {
                  z["re"] = a[0];
                  z["im"] = a[1];
                } else {
                  parser_exit();
                }
                break;
              case "string":
                z["im"] = /* void */
                z["re"] = 0;
                var tokens = a.match(/\d+\.?\d*e[+-]?\d+|\d+\.?\d*|\.\d+|./g);
                var plus = 1;
                var minus = 0;
                if (tokens === null) {
                  parser_exit();
                }
                for (var i = 0; i < tokens.length; i++) {
                  var c = tokens[i];
                  if (c === " " || c === "	" || c === "\n") {
                  } else if (c === "+") {
                    plus++;
                  } else if (c === "-") {
                    minus++;
                  } else if (c === "i" || c === "I") {
                    if (plus + minus === 0) {
                      parser_exit();
                    }
                    if (tokens[i + 1] !== " " && !isNaN(tokens[i + 1])) {
                      z["im"] += parseFloat((minus % 2 ? "-" : "") + tokens[i + 1]);
                      i++;
                    } else {
                      z["im"] += parseFloat((minus % 2 ? "-" : "") + "1");
                    }
                    plus = minus = 0;
                  } else {
                    if (plus + minus === 0 || isNaN(c)) {
                      parser_exit();
                    }
                    if (tokens[i + 1] === "i" || tokens[i + 1] === "I") {
                      z["im"] += parseFloat((minus % 2 ? "-" : "") + c);
                      i++;
                    } else {
                      z["re"] += parseFloat((minus % 2 ? "-" : "") + c);
                    }
                    plus = minus = 0;
                  }
                }
                if (plus + minus > 0) {
                  parser_exit();
                }
                break;
              case "number":
                z["im"] = 0;
                z["re"] = a;
                break;
              default:
                parser_exit();
            }
          if (isNaN(z["re"]) || isNaN(z["im"])) {
          }
          return z;
        };
        function Complex(a, b) {
          if (!(this instanceof Complex)) {
            return new Complex(a, b);
          }
          var z = parse(a, b);
          this["re"] = z["re"];
          this["im"] = z["im"];
        }
        Complex.prototype = {
          "re": 0,
          "im": 0,
          /**
           * Calculates the sign of a complex number, which is a normalized complex
           *
           * @returns {Complex}
           */
          "sign": function() {
            var abs = this["abs"]();
            return new Complex(
              this["re"] / abs,
              this["im"] / abs
            );
          },
          /**
           * Adds two complex numbers
           *
           * @returns {Complex}
           */
          "add": function(a, b) {
            var z = new Complex(a, b);
            if (this["isInfinite"]() && z["isInfinite"]()) {
              return Complex["NAN"];
            }
            if (this["isInfinite"]() || z["isInfinite"]()) {
              return Complex["INFINITY"];
            }
            return new Complex(
              this["re"] + z["re"],
              this["im"] + z["im"]
            );
          },
          /**
           * Subtracts two complex numbers
           *
           * @returns {Complex}
           */
          "sub": function(a, b) {
            var z = new Complex(a, b);
            if (this["isInfinite"]() && z["isInfinite"]()) {
              return Complex["NAN"];
            }
            if (this["isInfinite"]() || z["isInfinite"]()) {
              return Complex["INFINITY"];
            }
            return new Complex(
              this["re"] - z["re"],
              this["im"] - z["im"]
            );
          },
          /**
           * Multiplies two complex numbers
           *
           * @returns {Complex}
           */
          "mul": function(a, b) {
            var z = new Complex(a, b);
            if (this["isInfinite"]() && z["isZero"]() || this["isZero"]() && z["isInfinite"]()) {
              return Complex["NAN"];
            }
            if (this["isInfinite"]() || z["isInfinite"]()) {
              return Complex["INFINITY"];
            }
            if (z["im"] === 0 && this["im"] === 0) {
              return new Complex(this["re"] * z["re"], 0);
            }
            return new Complex(
              this["re"] * z["re"] - this["im"] * z["im"],
              this["re"] * z["im"] + this["im"] * z["re"]
            );
          },
          /**
           * Divides two complex numbers
           *
           * @returns {Complex}
           */
          "div": function(a, b) {
            var z = new Complex(a, b);
            if (this["isZero"]() && z["isZero"]() || this["isInfinite"]() && z["isInfinite"]()) {
              return Complex["NAN"];
            }
            if (this["isInfinite"]() || z["isZero"]()) {
              return Complex["INFINITY"];
            }
            if (this["isZero"]() || z["isInfinite"]()) {
              return Complex["ZERO"];
            }
            a = this["re"];
            b = this["im"];
            var c = z["re"];
            var d = z["im"];
            var t, x;
            if (0 === d) {
              return new Complex(a / c, b / c);
            }
            if (Math.abs(c) < Math.abs(d)) {
              x = c / d;
              t = c * x + d;
              return new Complex(
                (a * x + b) / t,
                (b * x - a) / t
              );
            } else {
              x = d / c;
              t = d * x + c;
              return new Complex(
                (a + b * x) / t,
                (b - a * x) / t
              );
            }
          },
          /**
           * Calculate the power of two complex numbers
           *
           * @returns {Complex}
           */
          "pow": function(a, b) {
            var z = new Complex(a, b);
            a = this["re"];
            b = this["im"];
            if (z["isZero"]()) {
              return Complex["ONE"];
            }
            if (z["im"] === 0) {
              if (b === 0 && a > 0) {
                return new Complex(Math.pow(a, z["re"]), 0);
              } else if (a === 0) {
                switch ((z["re"] % 4 + 4) % 4) {
                  case 0:
                    return new Complex(Math.pow(b, z["re"]), 0);
                  case 1:
                    return new Complex(0, Math.pow(b, z["re"]));
                  case 2:
                    return new Complex(-Math.pow(b, z["re"]), 0);
                  case 3:
                    return new Complex(0, -Math.pow(b, z["re"]));
                }
              }
            }
            if (a === 0 && b === 0 && z["re"] > 0 && z["im"] >= 0) {
              return Complex["ZERO"];
            }
            var arg = Math.atan2(b, a);
            var loh = logHypot(a, b);
            a = Math.exp(z["re"] * loh - z["im"] * arg);
            b = z["im"] * loh + z["re"] * arg;
            return new Complex(
              a * Math.cos(b),
              a * Math.sin(b)
            );
          },
          /**
           * Calculate the complex square root
           *
           * @returns {Complex}
           */
          "sqrt": function() {
            var a = this["re"];
            var b = this["im"];
            var r = this["abs"]();
            var re, im;
            if (a >= 0) {
              if (b === 0) {
                return new Complex(Math.sqrt(a), 0);
              }
              re = 0.5 * Math.sqrt(2 * (r + a));
            } else {
              re = Math.abs(b) / Math.sqrt(2 * (r - a));
            }
            if (a <= 0) {
              im = 0.5 * Math.sqrt(2 * (r - a));
            } else {
              im = Math.abs(b) / Math.sqrt(2 * (r + a));
            }
            return new Complex(re, b < 0 ? -im : im);
          },
          /**
           * Calculate the complex exponent
           *
           * @returns {Complex}
           */
          "exp": function() {
            var tmp = Math.exp(this["re"]);
            if (this["im"] === 0) {
            }
            return new Complex(
              tmp * Math.cos(this["im"]),
              tmp * Math.sin(this["im"])
            );
          },
          /**
           * Calculate the complex exponent and subtracts one.
           *
           * This may be more accurate than `Complex(x).exp().sub(1)` if
           * `x` is small.
           *
           * @returns {Complex}
           */
          "expm1": function() {
            var a = this["re"];
            var b = this["im"];
            return new Complex(
              Math.expm1(a) * Math.cos(b) + cosm1(b),
              Math.exp(a) * Math.sin(b)
            );
          },
          /**
           * Calculate the natural log
           *
           * @returns {Complex}
           */
          "log": function() {
            var a = this["re"];
            var b = this["im"];
            if (b === 0 && a > 0) {
            }
            return new Complex(
              logHypot(a, b),
              Math.atan2(b, a)
            );
          },
          /**
           * Calculate the magnitude of the complex number
           *
           * @returns {number}
           */
          "abs": function() {
            return hypot(this["re"], this["im"]);
          },
          /**
           * Calculate the angle of the complex number
           *
           * @returns {number}
           */
          "arg": function() {
            return Math.atan2(this["im"], this["re"]);
          },
          /**
           * Calculate the sine of the complex number
           *
           * @returns {Complex}
           */
          "sin": function() {
            var a = this["re"];
            var b = this["im"];
            return new Complex(
              Math.sin(a) * cosh(b),
              Math.cos(a) * sinh(b)
            );
          },
          /**
           * Calculate the cosine
           *
           * @returns {Complex}
           */
          "cos": function() {
            var a = this["re"];
            var b = this["im"];
            return new Complex(
              Math.cos(a) * cosh(b),
              -Math.sin(a) * sinh(b)
            );
          },
          /**
           * Calculate the tangent
           *
           * @returns {Complex}
           */
          "tan": function() {
            var a = 2 * this["re"];
            var b = 2 * this["im"];
            var d = Math.cos(a) + cosh(b);
            return new Complex(
              Math.sin(a) / d,
              sinh(b) / d
            );
          },
          /**
           * Calculate the cotangent
           *
           * @returns {Complex}
           */
          "cot": function() {
            var a = 2 * this["re"];
            var b = 2 * this["im"];
            var d = Math.cos(a) - cosh(b);
            return new Complex(
              -Math.sin(a) / d,
              sinh(b) / d
            );
          },
          /**
           * Calculate the secant
           *
           * @returns {Complex}
           */
          "sec": function() {
            var a = this["re"];
            var b = this["im"];
            var d = 0.5 * cosh(2 * b) + 0.5 * Math.cos(2 * a);
            return new Complex(
              Math.cos(a) * cosh(b) / d,
              Math.sin(a) * sinh(b) / d
            );
          },
          /**
           * Calculate the cosecans
           *
           * @returns {Complex}
           */
          "csc": function() {
            var a = this["re"];
            var b = this["im"];
            var d = 0.5 * cosh(2 * b) - 0.5 * Math.cos(2 * a);
            return new Complex(
              Math.sin(a) * cosh(b) / d,
              -Math.cos(a) * sinh(b) / d
            );
          },
          /**
           * Calculate the complex arcus sinus
           *
           * @returns {Complex}
           */
          "asin": function() {
            var a = this["re"];
            var b = this["im"];
            var t1 = new Complex(
              b * b - a * a + 1,
              -2 * a * b
            )["sqrt"]();
            var t2 = new Complex(
              t1["re"] - b,
              t1["im"] + a
            )["log"]();
            return new Complex(t2["im"], -t2["re"]);
          },
          /**
           * Calculate the complex arcus cosinus
           *
           * @returns {Complex}
           */
          "acos": function() {
            var a = this["re"];
            var b = this["im"];
            var t1 = new Complex(
              b * b - a * a + 1,
              -2 * a * b
            )["sqrt"]();
            var t2 = new Complex(
              t1["re"] - b,
              t1["im"] + a
            )["log"]();
            return new Complex(Math.PI / 2 - t2["im"], t2["re"]);
          },
          /**
           * Calculate the complex arcus tangent
           *
           * @returns {Complex}
           */
          "atan": function() {
            var a = this["re"];
            var b = this["im"];
            if (a === 0) {
              if (b === 1) {
                return new Complex(0, Infinity);
              }
              if (b === -1) {
                return new Complex(0, -Infinity);
              }
            }
            var d = a * a + (1 - b) * (1 - b);
            var t1 = new Complex(
              (1 - b * b - a * a) / d,
              -2 * a / d
            ).log();
            return new Complex(-0.5 * t1["im"], 0.5 * t1["re"]);
          },
          /**
           * Calculate the complex arcus cotangent
           *
           * @returns {Complex}
           */
          "acot": function() {
            var a = this["re"];
            var b = this["im"];
            if (b === 0) {
              return new Complex(Math.atan2(1, a), 0);
            }
            var d = a * a + b * b;
            return d !== 0 ? new Complex(
              a / d,
              -b / d
            ).atan() : new Complex(
              a !== 0 ? a / 0 : 0,
              b !== 0 ? -b / 0 : 0
            ).atan();
          },
          /**
           * Calculate the complex arcus secant
           *
           * @returns {Complex}
           */
          "asec": function() {
            var a = this["re"];
            var b = this["im"];
            if (a === 0 && b === 0) {
              return new Complex(0, Infinity);
            }
            var d = a * a + b * b;
            return d !== 0 ? new Complex(
              a / d,
              -b / d
            ).acos() : new Complex(
              a !== 0 ? a / 0 : 0,
              b !== 0 ? -b / 0 : 0
            ).acos();
          },
          /**
           * Calculate the complex arcus cosecans
           *
           * @returns {Complex}
           */
          "acsc": function() {
            var a = this["re"];
            var b = this["im"];
            if (a === 0 && b === 0) {
              return new Complex(Math.PI / 2, Infinity);
            }
            var d = a * a + b * b;
            return d !== 0 ? new Complex(
              a / d,
              -b / d
            ).asin() : new Complex(
              a !== 0 ? a / 0 : 0,
              b !== 0 ? -b / 0 : 0
            ).asin();
          },
          /**
           * Calculate the complex sinh
           *
           * @returns {Complex}
           */
          "sinh": function() {
            var a = this["re"];
            var b = this["im"];
            return new Complex(
              sinh(a) * Math.cos(b),
              cosh(a) * Math.sin(b)
            );
          },
          /**
           * Calculate the complex cosh
           *
           * @returns {Complex}
           */
          "cosh": function() {
            var a = this["re"];
            var b = this["im"];
            return new Complex(
              cosh(a) * Math.cos(b),
              sinh(a) * Math.sin(b)
            );
          },
          /**
           * Calculate the complex tanh
           *
           * @returns {Complex}
           */
          "tanh": function() {
            var a = 2 * this["re"];
            var b = 2 * this["im"];
            var d = cosh(a) + Math.cos(b);
            return new Complex(
              sinh(a) / d,
              Math.sin(b) / d
            );
          },
          /**
           * Calculate the complex coth
           *
           * @returns {Complex}
           */
          "coth": function() {
            var a = 2 * this["re"];
            var b = 2 * this["im"];
            var d = cosh(a) - Math.cos(b);
            return new Complex(
              sinh(a) / d,
              -Math.sin(b) / d
            );
          },
          /**
           * Calculate the complex coth
           *
           * @returns {Complex}
           */
          "csch": function() {
            var a = this["re"];
            var b = this["im"];
            var d = Math.cos(2 * b) - cosh(2 * a);
            return new Complex(
              -2 * sinh(a) * Math.cos(b) / d,
              2 * cosh(a) * Math.sin(b) / d
            );
          },
          /**
           * Calculate the complex sech
           *
           * @returns {Complex}
           */
          "sech": function() {
            var a = this["re"];
            var b = this["im"];
            var d = Math.cos(2 * b) + cosh(2 * a);
            return new Complex(
              2 * cosh(a) * Math.cos(b) / d,
              -2 * sinh(a) * Math.sin(b) / d
            );
          },
          /**
           * Calculate the complex asinh
           *
           * @returns {Complex}
           */
          "asinh": function() {
            var tmp = this["im"];
            this["im"] = -this["re"];
            this["re"] = tmp;
            var res = this["asin"]();
            this["re"] = -this["im"];
            this["im"] = tmp;
            tmp = res["re"];
            res["re"] = -res["im"];
            res["im"] = tmp;
            return res;
          },
          /**
           * Calculate the complex acosh
           *
           * @returns {Complex}
           */
          "acosh": function() {
            var res = this["acos"]();
            if (res["im"] <= 0) {
              var tmp = res["re"];
              res["re"] = -res["im"];
              res["im"] = tmp;
            } else {
              var tmp = res["im"];
              res["im"] = -res["re"];
              res["re"] = tmp;
            }
            return res;
          },
          /**
           * Calculate the complex atanh
           *
           * @returns {Complex}
           */
          "atanh": function() {
            var a = this["re"];
            var b = this["im"];
            var noIM = a > 1 && b === 0;
            var oneMinus = 1 - a;
            var onePlus = 1 + a;
            var d = oneMinus * oneMinus + b * b;
            var x = d !== 0 ? new Complex(
              (onePlus * oneMinus - b * b) / d,
              (b * oneMinus + onePlus * b) / d
            ) : new Complex(
              a !== -1 ? a / 0 : 0,
              b !== 0 ? b / 0 : 0
            );
            var temp = x["re"];
            x["re"] = logHypot(x["re"], x["im"]) / 2;
            x["im"] = Math.atan2(x["im"], temp) / 2;
            if (noIM) {
              x["im"] = -x["im"];
            }
            return x;
          },
          /**
           * Calculate the complex acoth
           *
           * @returns {Complex}
           */
          "acoth": function() {
            var a = this["re"];
            var b = this["im"];
            if (a === 0 && b === 0) {
              return new Complex(0, Math.PI / 2);
            }
            var d = a * a + b * b;
            return d !== 0 ? new Complex(
              a / d,
              -b / d
            ).atanh() : new Complex(
              a !== 0 ? a / 0 : 0,
              b !== 0 ? -b / 0 : 0
            ).atanh();
          },
          /**
           * Calculate the complex acsch
           *
           * @returns {Complex}
           */
          "acsch": function() {
            var a = this["re"];
            var b = this["im"];
            if (b === 0) {
              return new Complex(
                a !== 0 ? Math.log(a + Math.sqrt(a * a + 1)) : Infinity,
                0
              );
            }
            var d = a * a + b * b;
            return d !== 0 ? new Complex(
              a / d,
              -b / d
            ).asinh() : new Complex(
              a !== 0 ? a / 0 : 0,
              b !== 0 ? -b / 0 : 0
            ).asinh();
          },
          /**
           * Calculate the complex asech
           *
           * @returns {Complex}
           */
          "asech": function() {
            var a = this["re"];
            var b = this["im"];
            if (this["isZero"]()) {
              return Complex["INFINITY"];
            }
            var d = a * a + b * b;
            return d !== 0 ? new Complex(
              a / d,
              -b / d
            ).acosh() : new Complex(
              a !== 0 ? a / 0 : 0,
              b !== 0 ? -b / 0 : 0
            ).acosh();
          },
          /**
           * Calculate the complex inverse 1/z
           *
           * @returns {Complex}
           */
          "inverse": function() {
            if (this["isZero"]()) {
              return Complex["INFINITY"];
            }
            if (this["isInfinite"]()) {
              return Complex["ZERO"];
            }
            var a = this["re"];
            var b = this["im"];
            var d = a * a + b * b;
            return new Complex(a / d, -b / d);
          },
          /**
           * Returns the complex conjugate
           *
           * @returns {Complex}
           */
          "conjugate": function() {
            return new Complex(this["re"], -this["im"]);
          },
          /**
           * Gets the negated complex number
           *
           * @returns {Complex}
           */
          "neg": function() {
            return new Complex(-this["re"], -this["im"]);
          },
          /**
           * Ceils the actual complex number
           *
           * @returns {Complex}
           */
          "ceil": function(places) {
            places = Math.pow(10, places || 0);
            return new Complex(
              Math.ceil(this["re"] * places) / places,
              Math.ceil(this["im"] * places) / places
            );
          },
          /**
           * Floors the actual complex number
           *
           * @returns {Complex}
           */
          "floor": function(places) {
            places = Math.pow(10, places || 0);
            return new Complex(
              Math.floor(this["re"] * places) / places,
              Math.floor(this["im"] * places) / places
            );
          },
          /**
           * Ceils the actual complex number
           *
           * @returns {Complex}
           */
          "round": function(places) {
            places = Math.pow(10, places || 0);
            return new Complex(
              Math.round(this["re"] * places) / places,
              Math.round(this["im"] * places) / places
            );
          },
          /**
           * Compares two complex numbers
           *
           * **Note:** new Complex(Infinity).equals(Infinity) === false
           *
           * @returns {boolean}
           */
          "equals": function(a, b) {
            var z = new Complex(a, b);
            return Math.abs(z["re"] - this["re"]) <= Complex["EPSILON"] && Math.abs(z["im"] - this["im"]) <= Complex["EPSILON"];
          },
          /**
           * Clones the actual object
           *
           * @returns {Complex}
           */
          "clone": function() {
            return new Complex(this["re"], this["im"]);
          },
          /**
           * Gets a string of the actual complex number
           *
           * @returns {string}
           */
          "toString": function() {
            var a = this["re"];
            var b = this["im"];
            var ret = "";
            if (this["isNaN"]()) {
              return "NaN";
            }
            if (this["isInfinite"]()) {
              return "Infinity";
            }
            if (Math.abs(a) < Complex["EPSILON"]) {
              a = 0;
            }
            if (Math.abs(b) < Complex["EPSILON"]) {
              b = 0;
            }
            if (b === 0) {
              return ret + a;
            }
            if (a !== 0) {
              ret += a;
              ret += " ";
              if (b < 0) {
                b = -b;
                ret += "-";
              } else {
                ret += "+";
              }
              ret += " ";
            } else if (b < 0) {
              b = -b;
              ret += "-";
            }
            if (1 !== b) {
              ret += b;
            }
            return ret + "i";
          },
          /**
           * Returns the actual number as a vector
           *
           * @returns {Array}
           */
          "toVector": function() {
            return [this["re"], this["im"]];
          },
          /**
           * Returns the actual real value of the current object
           *
           * @returns {number|null}
           */
          "valueOf": function() {
            if (this["im"] === 0) {
              return this["re"];
            }
            return null;
          },
          /**
           * Determines whether a complex number is not on the Riemann sphere.
           *
           * @returns {boolean}
           */
          "isNaN": function() {
            return isNaN(this["re"]) || isNaN(this["im"]);
          },
          /**
           * Determines whether or not a complex number is at the zero pole of the
           * Riemann sphere.
           *
           * @returns {boolean}
           */
          "isZero": function() {
            return this["im"] === 0 && this["re"] === 0;
          },
          /**
           * Determines whether a complex number is not at the infinity pole of the
           * Riemann sphere.
           *
           * @returns {boolean}
           */
          "isFinite": function() {
            return isFinite(this["re"]) && isFinite(this["im"]);
          },
          /**
           * Determines whether or not a complex number is at the infinity pole of the
           * Riemann sphere.
           *
           * @returns {boolean}
           */
          "isInfinite": function() {
            return !(this["isNaN"]() || this["isFinite"]());
          }
        };
        Complex["ZERO"] = new Complex(0, 0);
        Complex["ONE"] = new Complex(1, 0);
        Complex["I"] = new Complex(0, 1);
        Complex["PI"] = new Complex(Math.PI, 0);
        Complex["E"] = new Complex(Math.E, 0);
        Complex["INFINITY"] = new Complex(Infinity, Infinity);
        Complex["NAN"] = new Complex(NaN, NaN);
        Complex["EPSILON"] = 1e-15;
        if (typeof define === "function" && define["amd"]) {
          define([], function() {
            return Complex;
          });
        } else if (typeof exports2 === "object") {
          Object.defineProperty(Complex, "__esModule", { "value": true });
          Complex["default"] = Complex;
          Complex["Complex"] = Complex;
          module["exports"] = Complex;
        } else {
          root["Complex"] = Complex;
        }
      })(exports2);
    }
  });

  // node_modules/quaternion/quaternion.js
  var require_quaternion = __commonJS({
    "node_modules/quaternion/quaternion.js"(exports2, module) {
      init_dirname();
      init_buffer2();
      init_process2();
      (function(root) {
        "use strict";
        function logHypot(a, b) {
          var _a = Math.abs(a);
          var _b = Math.abs(b);
          if (a === 0) {
            return Math.log(_b);
          }
          if (b === 0) {
            return Math.log(_a);
          }
          if (_a < 3e3 && _b < 3e3) {
            return 0.5 * Math.log(a * a + b * b);
          }
          a = a / 2;
          b = b / 2;
          return 0.5 * Math.log(a * a + b * b) + Math.LN2;
        }
        var P = {
          "w": 1,
          "x": 0,
          "y": 0,
          "z": 0
        };
        function parse(dest, w, x, y, z) {
          if (z !== void 0) {
            dest["w"] = w;
            dest["x"] = x;
            dest["y"] = y;
            dest["z"] = z;
            return;
          }
          if (typeof w === "object" && y === void 0) {
            if ("w" in w || "x" in w || "y" in w || "z" in w) {
              dest["w"] = w["w"] || 0;
              dest["x"] = w["x"] || 0;
              dest["y"] = w["y"] || 0;
              dest["z"] = w["z"] || 0;
              return;
            }
            if ("re" in w && "im" in w) {
              dest["w"] = w["re"];
              dest["x"] = w["im"];
              dest["y"] = 0;
              dest["z"] = 0;
              return;
            }
            if (w.length === 4) {
              dest["w"] = w[0];
              dest["x"] = w[1];
              dest["y"] = w[2];
              dest["z"] = w[3];
              return;
            }
            if (w.length === 3) {
              dest["w"] = 0;
              dest["x"] = w[0];
              dest["y"] = w[1];
              dest["z"] = w[2];
              return;
            }
            throw new Error("Invalid object");
          }
          if (typeof w === "string" && y === void 0) {
            var tokens = w.match(/\d+\.?\d*e[+-]?\d+|\d+\.?\d*|\.\d+|./g);
            var plus = 1;
            var minus = 0;
            var iMap = { "i": "x", "j": "y", "k": "z" };
            if (tokens === null) {
              throw new Error("Parse error");
            }
            dest["w"] = dest["x"] = dest["y"] = dest["z"] = 0;
            for (var i = 0; i < tokens.length; i++) {
              var c = tokens[i];
              var d = tokens[i + 1];
              if (c === " " || c === "	" || c === "\n") {
              } else if (c === "+") {
                plus++;
              } else if (c === "-") {
                minus++;
              } else {
                if (plus + minus === 0) {
                  throw new Error("Parse error" + c);
                }
                var g = iMap[c];
                if (g !== void 0) {
                  if (d !== " " && !isNaN(d)) {
                    c = d;
                    i++;
                  } else {
                    c = "1";
                  }
                } else {
                  if (isNaN(c)) {
                    throw new Error("Parser error");
                  }
                  g = iMap[d];
                  if (g !== void 0) {
                    i++;
                  }
                }
                dest[g || "w"] += parseFloat((minus % 2 ? "-" : "") + c);
                plus = minus = 0;
              }
            }
            if (plus + minus > 0) {
              throw new Error("Parser error");
            }
            return;
          }
          if (w === void 0 && dest !== P) {
            dest["w"] = 1;
            dest["x"] = dest["y"] = dest["z"] = 0;
          } else {
            dest["w"] = w || 0;
            if (x && x.length === 3) {
              dest["x"] = x[0];
              dest["y"] = x[1];
              dest["z"] = x[2];
            } else {
              dest["x"] = x || 0;
              dest["y"] = y || 0;
              dest["z"] = z || 0;
            }
          }
        }
        function numToStr(n, char, prev) {
          var ret = "";
          if (n !== 0) {
            if (prev !== "") {
              ret += n < 0 ? " - " : " + ";
            } else if (n < 0) {
              ret += "-";
            }
            n = Math.abs(n);
            if (1 !== n || char === "") {
              ret += n;
            }
            ret += char;
          }
          return ret;
        }
        function Quaternion(w, x, y, z) {
          if (!(this instanceof Quaternion)) {
            return new Quaternion(w, x, y, z);
          }
          parse(this, w, x, y, z);
        }
        Quaternion.prototype = {
          "w": 1,
          "x": 0,
          "y": 0,
          "z": 0,
          /**
           * Adds two quaternions Q1 and Q2
           *
           * @param {number|Object|string} w real
           * @param {number=} x imag
           * @param {number=} y imag
           * @param {number=} z imag
           * @returns {Quaternion}
           */
          "add": function(w, x, y, z) {
            parse(P, w, x, y, z);
            return new Quaternion(
              this["w"] + P["w"],
              this["x"] + P["x"],
              this["y"] + P["y"],
              this["z"] + P["z"]
            );
          },
          /**
           * Subtracts a quaternions Q2 from Q1
           *
           * @param {number|Object|string} w real
           * @param {number=} x imag
           * @param {number=} y imag
           * @param {number=} z imag
           * @returns {Quaternion}
           */
          "sub": function(w, x, y, z) {
            parse(P, w, x, y, z);
            return new Quaternion(
              this["w"] - P["w"],
              this["x"] - P["x"],
              this["y"] - P["y"],
              this["z"] - P["z"]
            );
          },
          /**
           * Calculates the additive inverse, or simply it negates the quaternion
           *
           * @returns {Quaternion}
           */
          "neg": function() {
            return new Quaternion(-this["w"], -this["x"], -this["y"], -this["z"]);
          },
          /**
           * Calculates the length/modulus/magnitude or the norm of a quaternion
           *
           * @returns {number}
           */
          "norm": function() {
            var w = this["w"];
            var x = this["x"];
            var y = this["y"];
            var z = this["z"];
            return Math.sqrt(w * w + x * x + y * y + z * z);
          },
          /**
           * Calculates the squared length/modulus/magnitude or the norm of a quaternion
           *
           * @returns {number}
           */
          "normSq": function() {
            var w = this["w"];
            var x = this["x"];
            var y = this["y"];
            var z = this["z"];
            return w * w + x * x + y * y + z * z;
          },
          /**
           * Normalizes the quaternion to have |Q| = 1 as long as the norm is not zero
           * Alternative names are the signum, unit or versor
           *
           * @returns {Quaternion}
           */
          "normalize": function() {
            var w = this["w"];
            var x = this["x"];
            var y = this["y"];
            var z = this["z"];
            var norm = Math.sqrt(w * w + x * x + y * y + z * z);
            if (norm < Quaternion["EPSILON"]) {
              return Quaternion["ZERO"];
            }
            norm = 1 / norm;
            return new Quaternion(w * norm, x * norm, y * norm, z * norm);
          },
          /**
           * Calculates the Hamilton product of two quaternions
           * Leaving out the imaginary part results in just scaling the quat
           *
           * @param {number|Object|string} w real
           * @param {number=} x imag
           * @param {number=} y imag
           * @param {number=} z imag
           * @returns {Quaternion}
           */
          "mul": function(w, x, y, z) {
            parse(P, w, x, y, z);
            var w1 = this["w"];
            var x1 = this["x"];
            var y1 = this["y"];
            var z1 = this["z"];
            var w2 = P["w"];
            var x2 = P["x"];
            var y2 = P["y"];
            var z2 = P["z"];
            return new Quaternion(
              w1 * w2 - x1 * x2 - y1 * y2 - z1 * z2,
              w1 * x2 + x1 * w2 + y1 * z2 - z1 * y2,
              w1 * y2 + y1 * w2 + z1 * x2 - x1 * z2,
              w1 * z2 + z1 * w2 + x1 * y2 - y1 * x2
            );
          },
          /**
           * Scales a quaternion by a scalar, faster than using multiplication
           *
           * @param {number} s scaling factor
           * @returns {Quaternion}
           */
          "scale": function(s) {
            return new Quaternion(
              this["w"] * s,
              this["x"] * s,
              this["y"] * s,
              this["z"] * s
            );
          },
          /**
           * Calculates the dot product of two quaternions
           *
           * @param {number|Object|string} w real
           * @param {number=} x imag
           * @param {number=} y imag
           * @param {number=} z imag
           * @returns {number}
           */
          "dot": function(w, x, y, z) {
            parse(P, w, x, y, z);
            return this["w"] * P["w"] + this["x"] * P["x"] + this["y"] * P["y"] + this["z"] * P["z"];
          },
          /**
           * Calculates the inverse of a quat for non-normalized quats such that
           * Q^-1 * Q = 1 and Q * Q^-1 = 1
           *
           * @returns {Quaternion}
           */
          "inverse": function() {
            var w = this["w"];
            var x = this["x"];
            var y = this["y"];
            var z = this["z"];
            var normSq = w * w + x * x + y * y + z * z;
            if (normSq === 0) {
              return Quaternion["ZERO"];
            }
            normSq = 1 / normSq;
            return new Quaternion(w * normSq, -x * normSq, -y * normSq, -z * normSq);
          },
          /**
           * Multiplies a quaternion with the inverse of a second quaternion
           *
           * @param {number|Object|string} w real
           * @param {number=} x imag
           * @param {number=} y imag
           * @param {number=} z imag
           * @returns {Quaternion}
           */
          "div": function(w, x, y, z) {
            parse(P, w, x, y, z);
            var w1 = this["w"];
            var x1 = this["x"];
            var y1 = this["y"];
            var z1 = this["z"];
            var w2 = P["w"];
            var x2 = P["x"];
            var y2 = P["y"];
            var z2 = P["z"];
            var normSq = w2 * w2 + x2 * x2 + y2 * y2 + z2 * z2;
            if (normSq === 0) {
              return Quaternion["ZERO"];
            }
            normSq = 1 / normSq;
            return new Quaternion(
              (w1 * w2 + x1 * x2 + y1 * y2 + z1 * z2) * normSq,
              (x1 * w2 - w1 * x2 - y1 * z2 + z1 * y2) * normSq,
              (y1 * w2 - w1 * y2 - z1 * x2 + x1 * z2) * normSq,
              (z1 * w2 - w1 * z2 - x1 * y2 + y1 * x2) * normSq
            );
          },
          /**
           * Calculates the conjugate of a quaternion
           *
           * @returns {Quaternion}
           */
          "conjugate": function() {
            return new Quaternion(this["w"], -this["x"], -this["y"], -this["z"]);
          },
          /**
           * Calculates the natural exponentiation of the quaternion
           *
           * @returns {Quaternion}
           */
          "exp": function() {
            var w = this["w"];
            var x = this["x"];
            var y = this["y"];
            var z = this["z"];
            var vNorm = Math.sqrt(x * x + y * y + z * z);
            var wExp = Math.exp(w);
            var scale = wExp / vNorm * Math.sin(vNorm);
            if (vNorm === 0) {
              return new Quaternion(wExp, 0, 0, 0);
            }
            return new Quaternion(
              wExp * Math.cos(vNorm),
              x * scale,
              y * scale,
              z * scale
            );
          },
          /**
           * Calculates the natural logarithm of the quaternion
           *
           * @returns {Quaternion}
           */
          "log": function() {
            var w = this["w"];
            var x = this["x"];
            var y = this["y"];
            var z = this["z"];
            if (y === 0 && z === 0) {
              return new Quaternion(
                logHypot(w, x),
                Math.atan2(x, w),
                0,
                0
              );
            }
            var qNorm2 = x * x + y * y + z * z + w * w;
            var vNorm = Math.sqrt(x * x + y * y + z * z);
            var scale = Math.atan2(vNorm, w) / vNorm;
            return new Quaternion(
              Math.log(qNorm2) * 0.5,
              x * scale,
              y * scale,
              z * scale
            );
          },
          /**
           * Calculates the power of a quaternion raised to a real number or another quaternion
           *
           * @param {number|Object|string} w real
           * @param {number=} x imag
           * @param {number=} y imag
           * @param {number=} z imag
           * @returns {Quaternion}
           */
          "pow": function(w, x, y, z) {
            parse(P, w, x, y, z);
            if (P["y"] === 0 && P["z"] === 0) {
              if (P["w"] === 1 && P["x"] === 0) {
                return this;
              }
              if (P["w"] === 0 && P["x"] === 0) {
                return Quaternion["ONE"];
              }
              if (this["y"] === 0 && this["z"] === 0) {
                var a = this["w"];
                var b = this["x"];
                if (a === 0 && b === 0) {
                  return Quaternion["ZERO"];
                }
                var arg = Math.atan2(b, a);
                var loh = logHypot(a, b);
                if (P["x"] === 0) {
                  if (b === 0 && a >= 0) {
                    return new Quaternion(Math.pow(a, P["w"]), 0, 0, 0);
                  } else if (a === 0) {
                    switch (P["w"] % 4) {
                      case 0:
                        return new Quaternion(Math.pow(b, P["w"]), 0, 0, 0);
                      case 1:
                        return new Quaternion(0, Math.pow(b, P["w"]), 0, 0);
                      case 2:
                        return new Quaternion(-Math.pow(b, P["w"]), 0, 0, 0);
                      case 3:
                        return new Quaternion(0, -Math.pow(b, P["w"]), 0, 0);
                    }
                  }
                }
                a = Math.exp(P["w"] * loh - P["x"] * arg);
                b = P["x"] * loh + P["w"] * arg;
                return new Quaternion(
                  a * Math.cos(b),
                  a * Math.sin(b),
                  0,
                  0
                );
              }
            }
            return this["log"]()["mul"](P)["exp"]();
          },
          /**
           * Checks if two quats are the same
           *
           * @param {number|Object|string} w real
           * @param {number=} x imag
           * @param {number=} y imag
           * @param {number=} z imag
           * @returns {boolean}
           */
          "equals": function(w, x, y, z) {
            parse(P, w, x, y, z);
            var eps = Quaternion["EPSILON"];
            return Math.abs(P["w"] - this["w"]) < eps && Math.abs(P["x"] - this["x"]) < eps && Math.abs(P["y"] - this["y"]) < eps && Math.abs(P["z"] - this["z"]) < eps;
          },
          /**
           * Checks if all parts of a quaternion are finite
           *
           * @returns {boolean}
           */
          "isFinite": function() {
            return isFinite(this["w"]) && isFinite(this["x"]) && isFinite(this["y"]) && isFinite(this["z"]);
          },
          /**
           * Checks if any of the parts of the quaternion is not a number
           *
           * @returns {boolean}
           */
          "isNaN": function() {
            return isNaN(this["w"]) || isNaN(this["x"]) || isNaN(this["y"]) || isNaN(this["z"]);
          },
          /**
           * Gets the Quaternion as a well formatted string
           *
           * @returns {string}
           */
          "toString": function() {
            var w = this["w"];
            var x = this["x"];
            var y = this["y"];
            var z = this["z"];
            var ret = "";
            if (isNaN(w) || isNaN(x) || isNaN(y) || isNaN(z)) {
              return "NaN";
            }
            ret = numToStr(w, "", ret);
            ret += numToStr(x, "i", ret);
            ret += numToStr(y, "j", ret);
            ret += numToStr(z, "k", ret);
            if ("" === ret)
              return "0";
            return ret;
          },
          /**
           * Returns the real part of the quaternion
           *
           * @returns {number}
           */
          "real": function() {
            return this["w"];
          },
          /**
           * Returns the imaginary part of the quaternion as a 3D vector / array
           *
           * @returns {Array}
           */
          "imag": function() {
            return [this["x"], this["y"], this["z"]];
          },
          /**
           * Gets the actual quaternion as a 4D vector / array
           *
           * @returns {Array}
           */
          "toVector": function() {
            return [this["w"], this["x"], this["y"], this["z"]];
          },
          /**
           * Calculates the 3x3 rotation matrix for the current quat
           *
           * @param {boolean=} twoD
           * @returns {Array}
           */
          "toMatrix": function(twoD) {
            var w = this["w"];
            var x = this["x"];
            var y = this["y"];
            var z = this["z"];
            var wx = w * x, wy = w * y, wz = w * z;
            var xx = x * x, xy = x * y, xz = x * z;
            var yy = y * y, yz = y * z, zz = z * z;
            if (twoD) {
              return [
                [1 - 2 * (yy + zz), 2 * (xy - wz), 2 * (xz + wy)],
                [2 * (xy + wz), 1 - 2 * (xx + zz), 2 * (yz - wx)],
                [2 * (xz - wy), 2 * (yz + wx), 1 - 2 * (xx + yy)]
              ];
            }
            return [
              1 - 2 * (yy + zz),
              2 * (xy - wz),
              2 * (xz + wy),
              2 * (xy + wz),
              1 - 2 * (xx + zz),
              2 * (yz - wx),
              2 * (xz - wy),
              2 * (yz + wx),
              1 - 2 * (xx + yy)
            ];
          },
          /**
           * Calculates the homogeneous 4x4 rotation matrix for the current quat
           *
           * @param {boolean=} twoD
           * @returns {Array}
           */
          "toMatrix4": function(twoD) {
            var w = this["w"];
            var x = this["x"];
            var y = this["y"];
            var z = this["z"];
            var wx = w * x, wy = w * y, wz = w * z;
            var xx = x * x, xy = x * y, xz = x * z;
            var yy = y * y, yz = y * z, zz = z * z;
            if (twoD) {
              return [
                [1 - 2 * (yy + zz), 2 * (xy - wz), 2 * (xz + wy), 0],
                [2 * (xy + wz), 1 - 2 * (xx + zz), 2 * (yz - wx), 0],
                [2 * (xz - wy), 2 * (yz + wx), 1 - 2 * (xx + yy), 0],
                [0, 0, 0, 1]
              ];
            }
            return [
              1 - 2 * (yy + zz),
              2 * (xy - wz),
              2 * (xz + wy),
              0,
              2 * (xy + wz),
              1 - 2 * (xx + zz),
              2 * (yz - wx),
              0,
              2 * (xz - wy),
              2 * (yz + wx),
              1 - 2 * (xx + yy),
              0,
              0,
              0,
              0,
              1
            ];
          },
          /**
           * Calculates the Euler angles represented by the current quat
           * 
           * @returns {Object}
           */
          "toEuler": function() {
            var w = this["w"];
            var x = this["x"];
            var y = this["y"];
            var z = this["z"];
            var t = 2 * (w * y - z * x);
            return {
              // X-axis rotation
              roll: Math.atan2(2 * (w * x + y * z), 1 - 2 * (x * x + y * y)),
              // Y-axis rotation
              pitch: t >= 1 ? Math.PI / 2 : t <= -1 ? -Math.PI / 2 : Math.asin(t),
              // Z-axis rotation
              yaw: Math.atan2(2 * (w * z + x * y), 1 - 2 * (y * y + z * z))
            };
          },
          /**
           * Clones the actual object
           *
           * @returns {Quaternion}
           */
          "clone": function() {
            return new Quaternion(this);
          },
          /**
           * Rotates a vector according to the current quaternion, assumes |q|=1
           * @link https://raw.org/proof/vector-rotation-using-quaternions/
           *
           * @param {Array} v The vector to be rotated
           * @returns {Array}
           */
          "rotateVector": function(v) {
            var qw = this["w"];
            var qx = this["x"];
            var qy = this["y"];
            var qz = this["z"];
            var vx = v[0];
            var vy = v[1];
            var vz = v[2];
            var tx = 2 * (qy * vz - qz * vy);
            var ty = 2 * (qz * vx - qx * vz);
            var tz = 2 * (qx * vy - qy * vx);
            return [
              vx + qw * tx + qy * tz - qz * ty,
              vy + qw * ty + qz * tx - qx * tz,
              vz + qw * tz + qx * ty - qy * tx
            ];
          },
          /**
           * Gets a function to spherically interpolate between two quaternions
           * 
           * @returns Function
           */
          "slerp": function(w, x, y, z) {
            parse(P, w, x, y, z);
            var w1 = this["w"];
            var x1 = this["x"];
            var y1 = this["y"];
            var z1 = this["z"];
            var w2 = P["w"];
            var x2 = P["x"];
            var y2 = P["y"];
            var z2 = P["z"];
            var cosTheta0 = w1 * w2 + x1 * x2 + y1 * y2 + z1 * z2;
            if (cosTheta0 < 0) {
              w1 = -w1;
              x1 = -x1;
              y1 = -y1;
              z1 = -z1;
              cosTheta0 = -cosTheta0;
            }
            if (cosTheta0 >= 1 - Quaternion["EPSILON"]) {
              return function(pct) {
                return new Quaternion(
                  w1 + pct * (w2 - w1),
                  x1 + pct * (x2 - x1),
                  y1 + pct * (y2 - y1),
                  z1 + pct * (z2 - z1)
                )["normalize"]();
              };
            }
            var Theta0 = Math.acos(cosTheta0);
            var sinTheta0 = Math.sin(Theta0);
            return function(pct) {
              var Theta = Theta0 * pct;
              var sinTheta = Math.sin(Theta);
              var cosTheta = Math.cos(Theta);
              var s0 = cosTheta - cosTheta0 * sinTheta / sinTheta0;
              var s1 = sinTheta / sinTheta0;
              return new Quaternion(
                s0 * w1 + s1 * w2,
                s0 * x1 + s1 * x2,
                s0 * y1 + s1 * y2,
                s0 * z1 + s1 * z2
              );
            };
          }
        };
        Quaternion["ZERO"] = new Quaternion(0, 0, 0, 0);
        Quaternion["ONE"] = new Quaternion(1, 0, 0, 0);
        Quaternion["I"] = new Quaternion(0, 1, 0, 0);
        Quaternion["J"] = new Quaternion(0, 0, 1, 0);
        Quaternion["K"] = new Quaternion(0, 0, 0, 1);
        Quaternion["EPSILON"] = 1e-16;
        Quaternion["fromAxisAngle"] = function(axis, angle) {
          var halfAngle = angle * 0.5;
          var a = axis[0];
          var b = axis[1];
          var c = axis[2];
          var sin_2 = Math.sin(halfAngle);
          var cos_2 = Math.cos(halfAngle);
          var sin_norm = sin_2 / Math.sqrt(a * a + b * b + c * c);
          return new Quaternion(cos_2, a * sin_norm, b * sin_norm, c * sin_norm);
        };
        Quaternion["fromBetweenVectors"] = function(u, v) {
          var ux = u[0];
          var uy = u[1];
          var uz = u[2];
          var vx = v[0];
          var vy = v[1];
          var vz = v[2];
          var uLen = Math.sqrt(ux * ux + uy * uy + uz * uz);
          var vLen = Math.sqrt(vx * vx + vy * vy + vz * vz);
          if (uLen > 0)
            ux /= uLen, uy /= uLen, uz /= uLen;
          if (vLen > 0)
            vx /= vLen, vy /= vLen, vz /= vLen;
          var dot = ux * vx + uy * vy + uz * vz;
          if (dot >= 1 - Quaternion["EPSILON"]) {
            return Quaternion["ONE"];
          }
          if (1 + dot <= Quaternion["EPSILON"]) {
            return Quaternion["fromAxisAngle"](Math.abs(ux) > Math.abs(uz) ? [-uy, ux, 0] : [0, -uz, uy], Math.PI);
          }
          var wx = uy * vz - uz * vy;
          var wy = uz * vx - ux * vz;
          var wz = ux * vy - uy * vx;
          return new Quaternion(1 + dot, wx, wy, wz).normalize();
        };
        Quaternion["random"] = function() {
          var u1 = Math.random();
          var u2 = Math.random();
          var u3 = Math.random();
          var s = Math.sqrt(1 - u1);
          var t = Math.sqrt(u1);
          return new Quaternion(
            t * Math.cos(2 * Math.PI * u3),
            s * Math.sin(2 * Math.PI * u2),
            s * Math.cos(2 * Math.PI * u2),
            t * Math.sin(2 * Math.PI * u3)
          );
        };
        Quaternion["fromEuler"] = function(phi, theta, psi, order) {
          var _x = phi * 0.5;
          var _y = theta * 0.5;
          var _z = psi * 0.5;
          var cX = Math.cos(_x);
          var cY = Math.cos(_y);
          var cZ = Math.cos(_z);
          var sX = Math.sin(_x);
          var sY = Math.sin(_y);
          var sZ = Math.sin(_z);
          if (order === void 0 || order === "ZXY") {
            return new Quaternion(
              cX * cY * cZ - sX * sY * sZ,
              cX * cZ * sY - cY * sX * sZ,
              cX * cY * sZ + cZ * sX * sY,
              cY * cZ * sX + cX * sY * sZ
            );
          }
          if (order === "XYZ" || order === "RPY") {
            return new Quaternion(
              cX * cY * cZ - sX * sY * sZ,
              cY * cZ * sX + cX * sY * sZ,
              cX * cZ * sY - cY * sX * sZ,
              cX * cY * sZ + cZ * sX * sY
            );
          }
          if (order === "YXZ") {
            return new Quaternion(
              cX * cY * cZ + sX * sY * sZ,
              cX * cZ * sY + cY * sX * sZ,
              cY * cZ * sX - cX * sY * sZ,
              cX * cY * sZ - cZ * sX * sY
            );
          }
          if (order === "ZYX" || order === "YPR") {
            return new Quaternion(
              cX * cY * cZ + sX * sY * sZ,
              cX * cY * sZ - cZ * sX * sY,
              cX * cZ * sY + cY * sX * sZ,
              cY * cZ * sX - cX * sY * sZ
            );
          }
          if (order === "YZX") {
            return new Quaternion(
              cX * cY * cZ - sX * sY * sZ,
              cX * cY * sZ + cZ * sX * sY,
              cY * cZ * sX + cX * sY * sZ,
              cX * cZ * sY - cY * sX * sZ
            );
          }
          if (order === "XZY") {
            return new Quaternion(
              cX * cY * cZ + sX * sY * sZ,
              cY * cZ * sX - cX * sY * sZ,
              cX * cY * sZ - cZ * sX * sY,
              cX * cZ * sY + cY * sX * sZ
            );
          }
          return null;
        };
        Quaternion["fromMatrix"] = function(matrix2) {
          if (matrix2.length === 9) {
            var m00 = matrix2[0];
            var m01 = matrix2[1];
            var m02 = matrix2[2];
            var m10 = matrix2[3];
            var m11 = matrix2[4];
            var m12 = matrix2[5];
            var m20 = matrix2[6];
            var m21 = matrix2[7];
            var m22 = matrix2[8];
          } else {
            var m00 = matrix2[0][0];
            var m01 = matrix2[0][1];
            var m02 = matrix2[0][2];
            var m10 = matrix2[1][0];
            var m11 = matrix2[1][1];
            var m12 = matrix2[1][2];
            var m20 = matrix2[2][0];
            var m21 = matrix2[2][1];
            var m22 = matrix2[2][2];
          }
          var tr = m00 + m11 + m22;
          if (tr > 0) {
            var S = Math.sqrt(tr + 1) * 2;
            return new Quaternion(
              0.25 * S,
              (m21 - m12) / S,
              (m02 - m20) / S,
              (m10 - m01) / S
            );
          } else if (m00 > m11 & m00 > m22) {
            var S = Math.sqrt(1 + m00 - m11 - m22) * 2;
            return new Quaternion(
              (m21 - m12) / S,
              0.25 * S,
              (m01 + m10) / S,
              (m02 + m20) / S
            );
          } else if (m11 > m22) {
            var S = Math.sqrt(1 + m11 - m00 - m22) * 2;
            return new Quaternion(
              (m02 - m20) / S,
              (m01 + m10) / S,
              0.25 * S,
              (m12 + m21) / S
            );
          } else {
            var S = Math.sqrt(1 + m22 - m00 - m11) * 2;
            return new Quaternion(
              (m10 - m01) / S,
              (m02 + m20) / S,
              (m12 + m21) / S,
              0.25 * S
            );
          }
        };
        if (typeof define === "function" && define["amd"]) {
          define([], function() {
            return Quaternion;
          });
        } else if (typeof exports2 === "object") {
          Object.defineProperty(Quaternion, "__esModule", { "value": true });
          Quaternion["default"] = Quaternion;
          Quaternion["Quaternion"] = Quaternion;
          module["exports"] = Quaternion;
        } else {
          root["Quaternion"] = Quaternion;
        }
      })(exports2);
    }
  });

  // node_modules/polynomial/polynomial.js
  var require_polynomial = __commonJS({
    "node_modules/polynomial/polynomial.js"(exports2, module) {
      init_dirname();
      init_buffer2();
      init_process2();
      (function(root) {
        "use strict";
        var FIELD = {
          // Run in R
          "add": function(a, b) {
            return a + b;
          },
          "sub": function(a, b) {
            return a - b;
          },
          "mul": function(a, b) {
            return a * b;
          },
          "div": function(a, b) {
            if (b === 0) {
              throw "DIV/0";
            }
            return a / b;
          },
          "parse": function(x) {
            return parseFloat(x);
          },
          "empty": function(x) {
            return !x;
          },
          "pow": function(a, b) {
            return Math.pow(a, b);
          },
          "equals": function(a, b) {
            return a === b;
          }
        };
        var ORIG_FIELD = FIELD;
        var Fraction;
        var Complex;
        var Quaternion;
        var STR_REGEXP = /([+-]?)(?:([^+x-]+)?(?:x(?:\^([\d\/]+))?)|([^+x-]+))/g;
        function Polynomial2(x) {
          if (!(this instanceof Polynomial2)) {
            return new Polynomial2(x);
          }
          this["coeff"] = parse(x);
        }
        Polynomial2["trace"] = null;
        var modinv = function(z, n) {
          var tmp = egcd(z, n);
          if (tmp[0] !== 1) {
            throw "DIV/-";
          }
          return tmp[1];
        };
        function gcd(a, b) {
          var t;
          while (b) {
            t = a;
            a = b;
            b = t % b;
          }
          return Math.abs(a);
        }
        function clone(x) {
          var res = {};
          for (var i in x) {
            res[i] = x[i];
          }
          return res;
        }
        var egcd = function(a, b) {
          var s = 0, t = 1, u = 1, v = 0;
          while (a !== 0) {
            var q = b / a | 0, r = b % a;
            var m = s - u * q, n = t - v * q;
            b = a;
            a = r;
            s = u;
            t = v;
            u = m;
            v = n;
          }
          return [b, s, t];
        };
        var mod = function(n, m) {
          return (n % m + m) % m;
        };
        var factorial = function(n, k) {
          var p = 1;
          for (k = n - k; k < n; n--) {
            p *= n;
          }
          return p;
        };
        Polynomial2.prototype["coeff"] = {};
        function keyUnion(a, b) {
          var k = {};
          for (var i in a) {
            k[i] = 1;
          }
          for (var i in b) {
            k[i] = 1;
          }
          return k;
        }
        function degree(x) {
          var i = -Infinity;
          for (var k in x) {
            if (!FIELD["empty"](x[k]))
              i = Math.max(k, i);
          }
          return i;
        }
        var div = function(x, y) {
          var r = {};
          var i = degree(x);
          var j = degree(y);
          var trace = [];
          while (i >= j) {
            var tmp = r[i - j] = FIELD["div"](x[i] || 0, y[j] || 0);
            for (var k in y) {
              x[+k + i - j] = FIELD["sub"](x[+k + i - j] || 0, FIELD["mul"](y[k] || 0, tmp));
            }
            if (Polynomial2["trace"] !== null) {
              var tr = {};
              for (var k in y) {
                tr[+k + i - j] = FIELD["mul"](y[k] || 0, tmp);
              }
              trace.push(new Polynomial2(tr));
            }
            i = degree(x);
          }
          if (Polynomial2["trace"] !== null) {
            trace.push(new Polynomial2(x));
            Polynomial2["trace"] = trace;
          }
          return r;
        };
        function parseExp(sgn, exp) {
          exp = String(exp).match(/[^*/]+|[*/]/g);
          var num = FIELD["parse"](sgn + exp[0]);
          for (var i = 1; i < exp.length; i += 2) {
            if (exp[i] === "*") {
              num = FIELD["mul"](num, FIELD["parse"](exp[i + 1] || 1));
            } else if (exp[i] === "/") {
              num = FIELD["div"](num, FIELD["parse"](exp[i + 1] || 1));
            }
          }
          return num;
        }
        var parse = function(x) {
          var ret = {};
          if (x === null || x === void 0) {
            x = 0;
          }
          switch (typeof x) {
            case "object":
              if (x["coeff"]) {
                x = x["coeff"];
              }
              if (Fraction && x instanceof Fraction || Complex && x instanceof Complex || Quaternion && x instanceof Quaternion) {
                ret[0] = x;
              } else
                for (var i in x) {
                  if (!FIELD["empty"](x[i])) {
                    ret[i] = FIELD["parse"](x[i]);
                  }
                }
              return ret;
            case "number":
              return { "0": FIELD["parse"](x) };
            case "string":
              var tmp;
              while (null !== (tmp = STR_REGEXP["exec"](x))) {
                var num = 1;
                var exp = 1;
                if (tmp[4] !== void 0) {
                  num = tmp[4];
                  exp = 0;
                } else if (tmp[2] !== void 0) {
                  num = tmp[2];
                }
                num = parseExp(tmp[1], num);
                if (tmp[3] !== void 0) {
                  exp = parseInt(tmp[3], 10);
                }
                if (ret[exp] === void 0) {
                  ret[exp] = num;
                } else {
                  ret[exp] = FIELD["add"](ret[exp], num);
                }
              }
              return ret;
          }
          throw "Invalid Param";
        };
        Polynomial2.prototype["gcd"] = function(x) {
          var a = clone(this["coeff"]);
          var b = parse(x);
          var max;
          while (!isNull(b)) {
            var r = clone(a);
            div(r, b);
            a = b;
            b = r;
          }
          max = lc(a);
          return new Polynomial2(monic(a, max));
        };
        Polynomial2.prototype["neg"] = function() {
          var ret = {};
          var poly = this["coeff"];
          for (var i in poly) {
            ret[i] = FIELD["mul"](poly[i], -1);
          }
          return new Polynomial2(ret);
        };
        Polynomial2.prototype["reciprocal"] = function() {
          var ret = {};
          var poly = this["coeff"];
          var n = degree(poly);
          for (var i in poly) {
            ret[n - i] = poly[i];
          }
          return new Polynomial2(ret);
        };
        Polynomial2.prototype["eval"] = function(x) {
          var poly = this["coeff"];
          var n = degree(poly);
          if (n < 0) {
            return 0;
          }
          var ret = poly[n];
          for (var i = n - 1; i >= 0; i--) {
            ret = FIELD["mul"](ret, x);
            if (!FIELD["empty"](poly[i])) {
              ret = FIELD["add"](ret, poly[i]);
            }
          }
          return ret;
        };
        function lc(poly) {
          var max = null;
          for (var i in poly) {
            if (!FIELD["empty"](poly[i])) {
              if (max === null || +max < +i) {
                max = i;
              }
            }
          }
          return max;
        }
        function monic(a, max) {
          if (max !== null) {
            for (var i in a) {
              a[i] = FIELD["div"](a[i], a[max]);
            }
          }
          return a;
        }
        Polynomial2.prototype["lc"] = function() {
          var max = lc(this["coeff"]);
          return this["coeff"][max];
        };
        Polynomial2.prototype["lm"] = function() {
          var max = lc(this["coeff"]);
          var res = {};
          res[max] = this["coeff"][max];
          return new Polynomial2(res);
        };
        Polynomial2.prototype["monic"] = function() {
          return new Polynomial2(monic(clone(this["coeff"]), lc(this["coeff"])));
        };
        Polynomial2.prototype["add"] = function(x) {
          var para = parse(x);
          var ret = {};
          var poly = this["coeff"];
          var keys = keyUnion(para, poly);
          for (var i in keys) {
            ret[i] = FIELD["add"](poly[i] || 0, para[i] || 0);
          }
          return new Polynomial2(ret);
        };
        Polynomial2.prototype["sub"] = function(x) {
          var para = parse(x);
          var ret = {};
          var poly = this["coeff"];
          var keys = keyUnion(para, poly);
          for (var i in keys) {
            ret[i] = FIELD["sub"](poly[i] || 0, para[i] || 0);
          }
          return new Polynomial2(ret);
        };
        Polynomial2.prototype["mul"] = function(x) {
          var para = parse(x);
          var ret = {};
          var poly = this["coeff"];
          for (var i in para) {
            i = +i;
            for (var j in poly) {
              j = +j;
              ret[i + j] = FIELD["add"](ret[i + j] || 0, FIELD["mul"](para[i] || 0, poly[j] || 0));
            }
          }
          return new Polynomial2(ret);
        };
        Polynomial2.prototype["addmul"] = function(x, y) {
          var _x = parse(x);
          var _y = parse(y);
          var res = {};
          for (var i in _x) {
            i = +i;
            for (var j in _y) {
              j = +j;
              res[i + j] = FIELD["add"](res[i + j] || 0, FIELD["mul"](_x[i] || 0, _y[j] || 0));
            }
          }
          return this["add"](res);
        };
        Polynomial2.prototype["div"] = function(x) {
          return new Polynomial2(div(clone(this["coeff"]), parse(x)));
        };
        Polynomial2.prototype["pow"] = function(e) {
          if (isNaN(e) || e < 0 || e % 1) {
            throw "Invalid";
          }
          var res = new Polynomial2(1);
          var tmp = this;
          while (e > 0) {
            if (e & 1) {
              res = res["mul"](tmp);
            }
            tmp = tmp["mul"](tmp);
            e >>= 1;
          }
          return res;
        };
        Polynomial2.prototype["mod"] = function(x) {
          var mod2 = clone(this["coeff"]);
          div(mod2, parse(x));
          return new Polynomial2(mod2);
        };
        Polynomial2.prototype["derive"] = function(n) {
          if (n === void 0) {
            n = 1;
          } else if (n < 0) {
            return null;
          }
          var poly = this["coeff"];
          var ret = {};
          for (var i in poly) {
            if (+i >= n)
              ret[i - n] = FIELD["mul"](poly[i] || 0, factorial(+i, n));
          }
          return new Polynomial2(ret);
        };
        Polynomial2.prototype["integrate"] = function(n) {
          if (n === void 0) {
            n = 1;
          } else if (n < 0) {
            return null;
          }
          var poly = this["coeff"];
          var ret = {};
          for (var i in poly) {
            ret[+i + n] = FIELD["div"](poly[i] || 0, factorial(+i + n, n));
          }
          return new Polynomial2(ret);
        };
        Polynomial2.prototype["result"] = Polynomial2.prototype["eval"];
        Polynomial2["fromRoots"] = function(roots) {
          var n = roots.length;
          var zero = FIELD["parse"](0);
          var nonZeroRoots = roots.filter((root2) => !FIELD["equals"](root2, zero));
          var numZeros = n - nonZeroRoots.length;
          var pOne = new Polynomial2(FIELD["parse"](1));
          function productHelper(r) {
            switch (r.length) {
              case 0:
                return pOne;
              case 1:
                return new Polynomial2([FIELD["mul"](r[0], -1), 1]);
              default:
                var nLeft = Math.floor(r.length / 2);
                var left = r.slice(0, nLeft);
                var right = r.slice(nLeft, r.length);
                return productHelper(left).mul(productHelper(right));
            }
          }
          var dep = productHelper(nonZeroRoots);
          var dcoeff = dep["coeff"];
          var coeff = {};
          for (var i in dcoeff) {
            coeff[numZeros + parseInt(i, 10)] = dcoeff[i];
          }
          return new Polynomial2(coeff);
        };
        function isNull(r) {
          return degree(r) < 0;
        }
        var toString = function(fn) {
          var Str = function() {
            var poly = this["coeff"];
            var keys = [];
            for (var i in poly) {
              keys.push(+i);
            }
            if (keys.length === 0)
              return "0";
            keys.sort(function(a, b) {
              return a - b;
            });
            var str = "";
            for (var k = keys.length; k--; ) {
              var i = keys[k];
              var cur = poly[i];
              var val = cur;
              if (val === null || val === void 0)
                continue;
              if (Complex && val instanceof Complex) {
                if (val["re"] !== 0) {
                  if (str !== "" && val["re"] > 0) {
                    str += "+";
                  }
                  if (val["re"] === -1 && i !== 0) {
                    str += "-";
                  } else if (val["re"] !== 1 || i === 0) {
                    str += val["re"];
                  }
                  if (i === 1)
                    str += "x";
                  else if (i !== 0)
                    str += "x^" + i;
                }
                if (val["im"] !== 0) {
                  if (str !== "" && val["im"] > 0) {
                    str += "+";
                  }
                  if (val["im"] === -1) {
                    str += "-";
                  } else if (val["im"] !== 1) {
                    str += val["im"];
                  }
                  str += "i";
                  if (i === 1)
                    str += "x";
                  else if (i !== 0)
                    str += "x^" + i;
                }
              } else {
                val = val.valueOf();
                if (val === 0)
                  continue;
                if (str !== "" && val > 0) {
                  str += "+";
                }
                if (val === -1 && i !== 0)
                  str += "-";
                else if (val !== 1 || i === 0)
                  str += cur[fn] ? cur[fn]() : cur["toString"]();
                if (i === 1)
                  str += "x";
                else if (i !== 0)
                  str += "x^" + i;
              }
            }
            if (str === "")
              return cur[fn] ? cur[fn]() : cur["toString"]();
            return str;
          };
          return Str;
        };
        Polynomial2.prototype["toString"] = toString("toString");
        Polynomial2.prototype["toLatex"] = toString("toLatex");
        Polynomial2.prototype["toHorner"] = function() {
          var poly = this["coeff"];
          var keys = [];
          for (var i in poly) {
            if (!FIELD.empty(poly[i]))
              keys.push(+i);
          }
          if (keys.length === 0)
            return "0";
          keys.sort(function(a, b) {
            return a - b;
          });
          function valToString(val, hasSign) {
            var str = "";
            if (Complex && val instanceof Complex) {
              if (val["im"] === 0) {
                if (val["re"] > 0 && hasSign) {
                  str += "+";
                }
                str += val["re"];
              } else if (val["re"] === 0) {
                if (val["im"] === -1) {
                  str += "-";
                } else if (val["im"] !== 1) {
                  if (val["im"] > 0 && hasSign) {
                    str += "+";
                  }
                  str += val["im"];
                } else {
                  if (val["im"] > 0 && hasSign) {
                    str += "+";
                  }
                }
                str += "i";
              } else {
                if (hasSign) {
                  str += "+";
                }
                str += "(";
                str += val.toString();
                str += ")";
              }
              return str;
            } else {
              if (val > 0 && hasSign) {
                str += "+";
              }
              str += val.toString();
            }
            return str;
          }
          function rec(keys2, pos) {
            var ndx = keys2.length - pos - 1;
            var exp = keys2[ndx] - (keys2[ndx - 1] || 0);
            var str1 = "";
            var str2 = "";
            if (exp > 0) {
              str1 = "x";
              if (exp > 1) {
                str1 += "^" + exp;
              }
            }
            if (ndx > 0)
              str1 += valToString(poly[keys2[ndx - 1]], true);
            if (pos === 0) {
              return valToString(poly[keys2[ndx]], false) + str1;
            }
            if (ndx >= 0 && keys2[ndx])
              str2 += "(";
            str2 += rec(keys2, pos - 1);
            if (ndx >= 0 && keys2[ndx])
              str2 += ")";
            str2 += str1;
            return str2;
          }
          return rec(keys, keys.length - 1);
        };
        Polynomial2.prototype["clone"] = function() {
          return new Polynomial2(this);
        };
        Polynomial2.prototype["degree"] = function() {
          return degree(this["coeff"]);
        };
        Polynomial2["setField"] = function(field) {
          var F = {
            "Q": Fraction,
            "C": Complex,
            "H": Quaternion
          }[field];
          if (F !== void 0) {
            FIELD = {
              "add": function(a, b) {
                return new F(a)["add"](b);
              },
              "sub": function(a, b) {
                return new F(a)["sub"](b);
              },
              "mul": function(a, b) {
                return new F(a)["mul"](b);
              },
              "div": function(a, b) {
                return new F(a)["div"](b);
              },
              "parse": function(x) {
                return new F(x);
              },
              "empty": function(x) {
                return new F(x)["equals"](0);
              },
              "pow": function(a, b) {
                return new F(a)["pow"](b);
              },
              "equals": function(a, b) {
                return new F(a)["equals"](b);
              }
            };
          } else if (!field || field === "R") {
            FIELD = ORIG_FIELD;
          } else if (typeof field === "object") {
            FIELD = field;
          } else if (field.charAt(0) === "Z") {
            var N = +field.slice(1);
            FIELD = {
              // Test in Z_n
              "add": function(a, b) {
                return mod(a + b, N);
              },
              "sub": function(a, b) {
                return mod(a - b, N);
              },
              "mul": function(a, b) {
                return mod(a * b, N);
              },
              "div": function(a, b) {
                return mod(a * modinv(b, N), N);
              },
              "parse": function(x) {
                return parseInt(x, 10);
              },
              "empty": function(x) {
                return void 0 === x || 0 === x;
              },
              "pow": function(a, b) {
                for (var r = 1; b > 0; a = mod(a * a, N), b >>= 1) {
                  if (b & 1) {
                    r = mod(r * a, N);
                  }
                }
                return r;
              },
              "equals": function(a, b) {
                return a == b;
              }
            };
          }
        };
        if (typeof define === "function" && define["amd"]) {
          define(["fraction.js", "complex.js", "quaternion"], function(frac, comp, quat) {
            Fraction = frac;
            Complex = comp;
            Quaternion = quat;
            return Polynomial2;
          });
        } else if (typeof exports2 === "object") {
          Fraction = require_fraction();
          Complex = require_complex();
          Quaternion = require_quaternion();
          Object.defineProperty(exports2, "__esModule", { "value": true });
          Polynomial2["default"] = Polynomial2;
          Polynomial2["Polynomial"] = Polynomial2;
          module["exports"] = Polynomial2;
        } else {
          Fraction = root["Fraction"];
          Complex = root["Complex"];
          Quaternion = root["Quaternion"];
          root["Polynomial"] = Polynomial2;
        }
      })(exports2);
    }
  });

  // app.js
  init_dirname();
  init_buffer2();
  init_process2();

  // spline.js
  init_dirname();
  init_buffer2();
  init_process2();
  var import_matrix_js = __toESM(require_lib(), 1);
  var import_polynomial = __toESM(require_polynomial(), 1);

  // toHTML.js
  init_dirname();
  init_buffer2();
  init_process2();
  function convertPolynomialToHTML(polynomial) {
    return polynomial.replaceAll(/(\^)(\d+)/g, "<sup><small>$2</small></sup>");
  }
  function convertLimitToHTML(limit) {
    let start = limit[0];
    let end = limit[1];
    return `${start} \u2264 x \u2264 ${end}`;
  }
  function convertRuleToHTML(rule) {
    let lHTML = convertLimitToHTML(rule[0]);
    let pHTML = convertPolynomialToHTML(rule[1]);
    return `${pHTML}&emsp;&emsp;${lHTML}`;
  }
  function convertSplineToHTML(splineArr) {
    let ruleArr = splineArr.map((rule) => convertRuleToHTML(rule));
    return ruleArr.join("<br>");
  }

  // spline.js
  function solve(A, b) {
    A = (0, import_matrix_js.default)(A);
    b = (0, import_matrix_js.default)((0, import_matrix_js.default)(b).map((x) => [x]));
    let A_inv = (0, import_matrix_js.default)(A.inv());
    return A_inv.prod(b);
  }
  var Issue = class {
    constructor(rule, x_, is_natural = true) {
      this.is_natural = is_natural;
      this.rule = rule;
      this.x_ = x_;
      this.n = x_.length - 1;
      this.h = x_.slice(1).map((num, i) => num - x_[i]);
      this.h.unshift(NaN);
    }
    f(x) {
      if (x.length > 1) {
        return (this.f(x.slice(1)) - this.f(x.slice(0, -1))) / (x[x.length - 1] - x[0]);
      } else {
        x = x[0];
        if (x == 1)
          return -1;
        else
          return x ** 2;
      }
    }
    make_matrix_A() {
      let mu = this.h.slice(1).map((num, i) => this.h[i] / (num + this.h[i]));
      let lambda = mu.map((x) => 1 - x);
      let A = Array.from(Array(this.n - 1), () => new Array(this.n + 1).fill(0));
      for (let i = 1; i < this.n; i++) {
        A[i - 1][i - 1] = mu[i];
        A[i - 1][i] = 2;
        A[i - 1][i + 1] = lambda[i];
      }
      if (this.is_natural) {
        A.map((row, i) => A[i] = row.slice(1, -1));
      }
      return A;
    }
    make_matrix_b() {
      let b = this.x_.slice(1, -1).map((num, i) => 6 * this.f([this.x_[i], num, this.x_[i + 2]]));
      return b;
    }
    make_matrix_m() {
      let m = [];
      if (this.is_natural) {
        m = [0].concat(...solve(this.make_matrix_A(), this.make_matrix_b())).concat([0]);
      }
      return m;
    }
    make_spline() {
      let spline = [];
      let m = this.make_matrix_m();
      for (let i = 0; i < this.n; i++) {
        let q = this.f([this.x_[i]]) - this.h[i + 1] * m[i] / 6;
        console.log(q);
        let p = this.f([this.x_[i], this.x_[i + 1]]) + this.h[i + 1] * (m[i] - m[i + 1]) / 6;
        let rule_i = new import_polynomial.default("x").sub(this.x_[i]).pow(3).mul(m[i + 1] / (6 * this.h[i + 1])).add(new import_polynomial.default(`${this.x_[i + 1]}-x`).pow(3).mul(m[i] / (6 * this.h[i + 1]))).add(new import_polynomial.default("x").sub(this.x_[i]).mul(p)).add(q);
        spline[i] = rule_i.toString().replace(/\d+\.\d+/g, (match) => parseFloat(match).toFixed(2));
      }
      let splineArr = Array.from(Array(this.n), () => new Array(2).fill(0));
      this.x_.slice(1).map((node, i) => {
        splineArr[i][0] = [this.x_[i], node];
        splineArr[i][1] = spline[i];
      });
      return splineArr;
    }
  };
  var myIssue = new Issue("", [-1, 0, 1, 2]);
  console.log(myIssue.make_spline());

  // app.js
  function solve2(form) {
    try {
      let rule = form.functionRule.value;
      let x_ = form.knownXs.value.split(" ");
      let myIssue2 = new Issue(rule, x_);
      let mySpline = myIssue2.make_spline();
      let mySplineStr = convertSplineToHTML(mySpline);
      const splineContainer = document.getElementById("spline-container");
      splineContainer.innerHTML = mySplineStr;
    } catch (e) {
      console.log(e);
    }
  }
  window.addEventListener("load", (event) => {
    document.querySelector("#btnSubmit").addEventListener("click", (event2) => {
      try {
        let form = document.querySelector("#frmMain");
        solve2(form);
      } catch (e) {
        console.log(e);
      }
    });
  });
})();
/*! Bundled license information:

@jspm/core/nodelibs/browser/buffer.js:
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)

fraction.js/fraction.js:
  (**
   * @license Fraction.js v4.2.0 05/03/2022
   * https://www.xarg.org/2014/03/rational-numbers-in-javascript/
   *
   * Copyright (c) 2021, Robert Eisele (robert@xarg.org)
   * Dual licensed under the MIT or GPL Version 2 licenses.
   **)

complex.js/complex.js:
  (**
   * @license Complex.js v2.1.1 12/05/2020
   *
   * Copyright (c) 2020, Robert Eisele (robert@xarg.org)
   * Dual licensed under the MIT or GPL Version 2 licenses.
   **)

quaternion/quaternion.js:
  (**
   * @license Quaternion.js v1.4.1 12/03/2023
   *
   * Copyright (c) 2023, Robert Eisele (raw.org)
   * Licensed under the MIT license.
   **)

polynomial/polynomial.js:
  (**
   * @license Polynomial.js v1.4.5 13/12/2017
   *
   * Copyright (c) 2017, Robert Eisele (robert@xarg.org)
   * Dual licensed under the MIT or GPL Version 2 licenses.
   **)
*/
