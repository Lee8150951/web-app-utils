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
}

const utils = {
  storage
};

module.exports = utils;
