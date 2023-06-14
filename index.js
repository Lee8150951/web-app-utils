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

/** deep Equal **/
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

const utils = {
  storage,
  deepCopy,
  deepEqual,
};

module.exports = utils;
