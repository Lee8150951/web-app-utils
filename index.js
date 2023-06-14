const jwt = require('jsonwebtoken');

/** time-sensitive localstorage **/
const storage = {
  setStorage: (key ,value, aging=false) => {
    try {
      const stamp = Number(new Date());
      if (!aging) {
        const data = JSON.stringify({ value, stamp });
        localStorage.setItem(key, data);
      } else {
        const data = JSON.stringify({ value, stamp, aging });
        localStorage.setItem(key, data);
      }
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  },
  getStorage: (key) => {
    try {
      const data = localStorage.getItem(key);
      if (!data) return null;
      const { value, stamp, aging } = JSON.parse(data);
      if (!aging) return value;
      const diff = Number(new Date()) - stamp;
      const hours = diff / 1000 / 60 / 60;
      if (hours > aging) {
        storage.removeStorage(key);
        console.error('Error: Expired storage!');
        return null;
      } else {
        return value;
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  },
  removeStorage: (key) => {
    localStorage.removeItem(key);
  },
};

/** deep copy **/
const deepCopy = (obj) => {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }
  let copy;
  if (Array.isArray(obj)) {
    copy = [];
    for (let i = 0; i < obj.length; i++) {
      copy[i] = deepCopy(obj[i]);
    }
  } else {
    copy = {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        copy[key] = deepCopy(obj[key]);
      }
    }
  }
  return copy;
};

/** deep equal **/
const deepEqual = (obj1, obj2) => {
  if (obj1 === obj2) return true;
  if (typeof obj1 !== 'object' || obj1 === null ||
      typeof obj2 !== 'object' || obj2 === null) {
    return false;
  }
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) return false;
  for (let key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }
  return true;
}

/** data type **/
const getType = (value) => {
  if (value === null) {
    return "null";
  } else if (typeof value === "object") {
    if (Array.isArray(value)) {
      return "array";
    } else {
      return "object";
    }
  } else {
    return typeof value;
  }
};

/** debounce **/
const debounce = (func, delay) => {
  let timer = null;
  return function() {
    let context = this;
    let args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function() {
      func.apply(context, args);
    }, delay);
  }
};

/** throttle **/
const throttle = (func, interval) => {
  let timer = null;
  return function() {
    let context = this;
    let args = arguments;
    if (!timer) {
      timer = setTimeout(function() {
        func.apply(context, args);
        timer = null;
      }, interval);
    }
  }
};

/** plain object **/
const judgePlainObject = (obj) => {
  if (typeof obj !== "object" || obj === null || Object.prototype.toString.call(obj) !== "[object Object]") {
    return false;
  }
  const proto = Object.getPrototypeOf(obj);
  return proto === null || proto === Object.prototype;
};

/** token **/
const token = {
  setToken: (data, secret, age) => {
    if (!judgePlainObject(data)) return;
    return jwt.sign(data, secret, { expiresIn: age });
  },
  getToken: (token, secret) => {
    try {
      const data = jwt.verify(token, secret);
      return { status: true, data };
    } catch (error) {
      return { status: false, data: error };
    }
  },
};

const utils = {
  storage,
  deepCopy,
  deepEqual,
  getType,
  debounce,
  throttle,
  judgePlainObject,
  token,
};

module.exports = utils;
